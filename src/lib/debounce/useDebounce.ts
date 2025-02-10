import { useEffect, useRef, useState } from "react";

export const useDebounce = <TValue>(value: TValue, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [delay, value]);
  return debouncedValue;
};
