import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setmousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handlePosition(e: any) {
      setmousePosition({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener("mousemove", handlePosition);
    return () => window.addEventListener("mousemove", handlePosition);
  }, []);
  return mousePosition;
}
