import { useEffect, useRef, useState } from "react";

export default function Loader({ active }) {
  const [mounted, setMounted] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (active) {
      setMounted(true);
      setOpacity(1);
      setProgress(0);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setProgress((p) => Math.min(99, p + Math.max(1, Math.floor((100 - p) * 0.08))));
      }, 30);
    } else {
      clearInterval(timerRef.current);
      setProgress(100);
      const t1 = setTimeout(() => setOpacity(0), 100);
      const t2 = setTimeout(() => setMounted(false), 400);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
    return () => clearInterval(timerRef.current);
  }, [active]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center select-none"
      style={{ opacity, transition: "opacity 300ms ease" }}
      aria-hidden
    >
      <span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
        {progress}%
      </span>
    </div>
  );
}
