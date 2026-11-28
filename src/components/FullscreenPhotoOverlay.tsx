import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Minimize2, X } from 'lucide-react';

export function useLightboxFullscreen(isLightboxOpen: boolean) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = useCallback(() => {
    setIsFullscreen(true);
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        // Fallback: l'overlay plein écran couvre déjà 100% du viewport
      });
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    setIsFullscreen(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  // Synchronise la sortie si l'utilisateur quitte le plein écran natif avec Échap
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Nettoie le plein écran si la lightbox se ferme
  useEffect(() => {
    if (!isLightboxOpen && isFullscreen) {
      exitFullscreen();
    }
  }, [isLightboxOpen, isFullscreen, exitFullscreen]);

  return { isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen };
}

interface FullscreenPhotoOverlayProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle?: string;
  counterText?: string;
  hasMultiple: boolean;
  onPrev: () => void;
  onNext: () => void;
  onExitFullscreen: () => void;
  onCloseLightbox: () => void;
}

export const FullscreenPhotoOverlay: React.FC<FullscreenPhotoOverlayProps> = ({
  imageUrl,
  alt,
  title,
  subtitle,
  counterText,
  hasMultiple,
  onPrev,
  onNext,
  onExitFullscreen,
  onCloseLightbox,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  return (
    <div
      className="fixed inset-0 z-[120] bg-black flex flex-col justify-between select-none"
      onClick={onExitFullscreen}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX === null || !hasMultiple) return;
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (diff > 50) onPrev();
        else if (diff < -50) onNext();
        setTouchStartX(null);
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Plein écran : ${title}`}
    >
      {/* Top Floating Controls */}
      <div
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between gap-3 px-3 py-3 sm:px-5 sm:py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none"
      >
        <div
          className="flex items-center gap-2.5 min-w-0 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {counterText && (
            <span className="px-2.5 py-1 rounded-lg bg-black/70 border border-white/15 text-stanley-yellow font-mono text-xs font-bold shrink-0">
              {counterText}
            </span>
          )}
          <span className="text-white/95 font-display font-bold text-xs sm:text-sm truncate drop-shadow">
            {title}
          </span>
        </div>

        <div
          className="flex items-center gap-2 shrink-0 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onExitFullscreen}
            className="flex items-center gap-1.5 px-3 min-h-[44px] rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
            aria-label="Quitter le mode plein écran"
            title="Quitter le plein écran (Échap ou F)"
          >
            <Minimize2 className="w-4 h-4" />
            <span className="hidden sm:inline">Réduire</span>
          </button>

          <button
            type="button"
            onClick={onCloseLightbox}
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold transition-colors cursor-pointer shadow-lg"
            aria-label="Fermer la galerie photo"
            title="Fermer la galerie"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Main Full-Viewport Photo */}
      <div className="relative flex-1 min-h-0 w-full h-full flex items-center justify-center p-1 sm:p-3">
        <img
          src={imageUrl}
          alt={alt}
          onClick={(e) => {
            e.stopPropagation();
            onExitFullscreen();
          }}
          className="w-full h-full object-contain cursor-zoom-out"
          title="Cliquer pour quitter le plein écran"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-stanley-yellow text-white hover:text-stanley-black border border-white/20 backdrop-blur-md transition-colors cursor-pointer shadow-2xl"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-stanley-yellow text-white hover:text-stanley-black border border-white/20 backdrop-blur-md transition-colors cursor-pointer shadow-2xl"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </>
        )}
      </div>

      {/* Subtle Bottom Caption */}
      {subtitle && (
        <div
          className="absolute bottom-0 inset-x-0 z-20 px-4 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none flex justify-center"
        >
          <p className="text-center text-xs sm:text-sm text-white/90 max-w-4xl line-clamp-2 drop-shadow">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};
