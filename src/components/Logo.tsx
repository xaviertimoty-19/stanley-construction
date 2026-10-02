import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'original' | 'auto';
  className?: string;
  emblemOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  className = 'h-12 sm:h-14 w-auto',
  emblemOnly = false,
}) => {
  // If emblem only (shield with industrial yellow S)
  if (emblemOnly) {
    return (
      <svg
        viewBox="0 0 76 86"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Emblème Stanley Construction"
      >
        <path d="M 0 14 L 38 0 L 76 14 L 76 72 L 38 86 L 0 72 Z" fill="#09090b" />
        <path d="M 0 14 L 38 0 L 76 14 L 68 17 L 38 6 L 8 17 Z" fill="#f59e0b" />
        <path
          d="M 18 22 L 58 22 L 58 35 L 34 35 L 34 42 L 58 46 L 58 64 L 18 64 L 18 51 L 42 51 L 42 46 L 18 42 Z"
          fill="#f59e0b"
        />
        <polygon points="34,35 42,35 34,42 26,42" fill="#d97706" />
        <polygon points="50,46 58,46 50,51 42,51" fill="#b45309" />
      </svg>
    );
  }

  // Text color class based on theme
  const stanleyTextClass = 
    variant === 'dark' 
      ? 'fill-[#f4f4f5]' 
      : variant === 'light' 
      ? 'fill-[#09090b]' 
      : 'fill-[#09090b] dark:fill-[#f4f4f5]';

  const shieldBorderClass =
    variant === 'dark'
      ? 'stroke-[#27272a]'
      : variant === 'light'
      ? 'stroke-zinc-300'
      : 'stroke-zinc-300 dark:stroke-[#27272a]';

  const bannerBorderClass =
    variant === 'dark'
      ? 'stroke-[#27272a]'
      : variant === 'light'
      ? 'stroke-transparent'
      : 'stroke-transparent dark:stroke-[#27272a]';

  return (
    <svg
      viewBox="0 0 375 110"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Stanley Construction"
    >
      {variant === 'original' && <rect width="100%" height="100%" fill="#ffffff" />}

      {/* ================= EMBLÈME BLASON NOIR ET JAUNE ================= */}
      <g transform="translate(15, 12)">
        {/* Conteneur Blason Géométrique Noir Lourd */}
        <path 
          d="M 0 14 L 38 0 L 76 14 L 76 72 L 38 86 L 0 72 Z" 
          fill="#09090b" 
          className={shieldBorderClass} 
          strokeWidth="1.5" 
        />
        
        {/* Bordure d'angle supérieure Jaune Sécurité */}
        <path d="M 0 14 L 38 0 L 76 14 L 68 17 L 38 6 L 8 17 Z" fill="#f59e0b" />

        {/* Le "S" Industriel Épais en Jaune Vif */}
        <path
          d="M 18 22 L 58 22 L 58 35 L 34 35 L 34 42 L 58 46 L 58 64 L 18 64 L 18 51 L 42 51 L 42 46 L 18 42 Z"
          fill="#f59e0b"
        />
        
        {/* Séparateur d'acier biseauté au centre du S */}
        <polygon points="34,35 42,35 34,42 26,42" fill="#d97706" />
        <polygon points="50,46 58,46 50,51 42,51" fill="#b45309" />
      </g>

      {/* ================= TYPOGRAPHIE STANLEY CONSTRUCTION ================= */}
      <g transform="translate(112, 18)">
        {/* STANLEY (Majuscules Massives) */}
        <text
          x="0"
          y="44"
          fontFamily="'Arial Black', 'Montserrat', Impact, sans-serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="2"
          className={stanleyTextClass}
        >
          STANLEY
        </text>

        {/* BANDEAU SOUS-TITRE ENCART NOIR & LETTRES JAUNES (aligné sur STANLEY) */}
        <rect 
          x="2" 
          y="56" 
          width="240" 
          height="22" 
          rx="3" 
          fill="#09090b" 
          className={bannerBorderClass} 
          strokeWidth="1" 
        />
        
        {/* POINT DE RAPPEL DE NIVEAU JAUNE */}
        <rect x="2" y="56" width="7" height="22" rx="2" fill="#f59e0b" />
        
        {/* CONSTRUCTION */}
        <text
          x="126"
          y="71"
          textAnchor="middle"
          fontFamily="'Arial Black', 'Montserrat', sans-serif"
          fontWeight="900"
          fontSize="12"
          letterSpacing="8"
          fill="#f59e0b"
        >
          CONSTRUCTION
        </text>
      </g>
    </svg>
  );
};
