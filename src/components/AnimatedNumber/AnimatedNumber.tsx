import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

interface AnimatedNumberProps {
  end: number;
  duration?: number; 
  format?: (n: number) => string;
  className?: string; 
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 1,
  format = (n) => Math.round(n).toString(),
  className = "",
}) => {
  const tweenObj = useRef({ value: end });

  const [display, setDisplay] = useState(() => format(end));

  const prevEnd = useRef(end);

  useEffect(() => {
    if (prevEnd.current === end) {
      prevEnd.current = end;
      return;
    }

    tweenObj.current.value = prevEnd.current;

    gsap.to(tweenObj.current, {
      value: end,
      duration,
      ease: "power1.out",
      onUpdate: () => {
        setDisplay(format(tweenObj.current.value));
      },
    });

    prevEnd.current = end;
  }, [end, duration, format]);

  return <span className={className}>{display}</span>;
};
