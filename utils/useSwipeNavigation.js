"use client";

import { useCallback, useRef } from "react";

export function useSwipeNavigation({
  canNext = true,
  canPrev = true,
  onNext,
  onPrev,
  restraint = 80,
  threshold = 44,
} = {}) {
  const touchStart = useRef(null);

  const onTouchStart = useCallback((event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }, []);

  const onTouchEnd = useCallback(
    (event) => {
      const start = touchStart.current;
      touchStart.current = null;

      const touch = event.changedTouches?.[0];
      if (!start || !touch) return;

      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const horizontal = Math.abs(deltaX);
      const vertical = Math.abs(deltaY);

      if (horizontal < threshold || vertical > restraint || horizontal <= vertical) return;

      if (deltaX < 0 && canNext) {
        onNext?.();
      }

      if (deltaX > 0 && canPrev) {
        onPrev?.();
      }
    },
    [canNext, canPrev, onNext, onPrev, restraint, threshold]
  );

  return { onTouchStart, onTouchEnd };
}
