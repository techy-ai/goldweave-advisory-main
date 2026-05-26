"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: "easeOut", onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref}>
      {Math.round(val).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
