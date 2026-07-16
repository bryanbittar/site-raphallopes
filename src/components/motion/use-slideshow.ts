"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cycles through `length` slides on a timer. Pauses while the section is
 * hovered (spread the returned mouse handlers on the section) and while
 * it's scrolled out of view, so nothing advances off-screen or under the cursor.
 */
export function useSlideshow(length: number, intervalMs = 2000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, visible, length, intervalMs]);

  return {
    ref,
    index,
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };
}
