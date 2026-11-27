import React, { useEffect, useRef, useState } from 'react';

interface ScrollDropListProps<T> {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  staggerMs?: number;
}

export function ScrollDropList<T>({
  items,
  getKey,
  renderItem,
  className = '',
  staggerMs = 70,
}: ScrollDropListProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({});
  const visibleKeysRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardElements = Array.from(
      container.querySelectorAll<HTMLElement>('[data-drop-key]')
    );
    if (cardElements.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      const allVisible: Record<string, boolean> = { ...visibleKeysRef.current };
      cardElements.forEach((el) => {
        const k = el.dataset.dropKey;
        if (k) allVisible[k] = true;
      });
      visibleKeysRef.current = allVisible;
      setVisibleKeys(allVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) return;

        const newlyVisible: Record<string, boolean> = {};

        intersecting.forEach((entry, batchIndex) => {
          const target = entry.target as HTMLElement;
          const key = target.dataset.dropKey;
          if (!key) return;

          // Décalage progressif calculé par lot visible simultanément
          const delay = Math.min(batchIndex * staggerMs, 280);
          target.style.transitionDelay = `${delay}ms`;

          newlyVisible[key] = true;
          observer.unobserve(target);
        });

        if (Object.keys(newlyVisible).length > 0) {
          const next = { ...visibleKeysRef.current, ...newlyVisible };
          visibleKeysRef.current = next;
          setVisibleKeys(next);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -4% 0px',
        threshold: 0.05,
      }
    );

    cardElements.forEach((el) => {
      const key = el.dataset.dropKey;
      if (key && !visibleKeysRef.current[key]) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items, staggerMs]);

  return (
    <div ref={containerRef} className={className}>
      {items.map((item, index) => {
        const key = getKey(item, index);
        const isVisible = Boolean(visibleKeys[key]);

        return (
          <div
            key={key}
            data-drop-key={key}
            className={`transition-[transform,opacity] duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'transform-gpu opacity-0 -translate-y-4'
            }`}
          >
            {renderItem(item, index)}
          </div>
        );
      })}
    </div>
  );
}
