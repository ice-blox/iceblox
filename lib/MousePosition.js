"use client";

import { useEffect, useState } from "react";

const useMousePosition = (element) => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    element?.current.addEventListener("mousemove", updateMousePosition);

    return () => {
      element?.current.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
