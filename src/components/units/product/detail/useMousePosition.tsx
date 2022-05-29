import { useState, useEffect } from "react";

export default function useMousePosition() {
  let [mousePosition, setmousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handlePosition(e) {
      setmousePosition({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener("mousemove", handlePosition);
    return () => window.addEventListener("mousemove", handlePosition);
  }, []);
  return mousePosition;
}
