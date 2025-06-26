import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

export function AnimatedCounter({ end, suffix = "", duration = 2 }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration,
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        },
      });

      return () => controls.stop();
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-3xl font-bold text-blue-600">
      {displayValue}
      {suffix}
    </span>
  );
}
