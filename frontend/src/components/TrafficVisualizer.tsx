"use client";

import { useEffect, useState } from "react";

import RequestDot
from "../animations/RequestDot";

export default function TrafficVisualizer() {

  const [dots, setDots] =
    useState<number[]>([]);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setDots(prev => [
          ...prev,
          Date.now(),
        ]);

      }, 2000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div
      className="
      relative
      h-40
      border
      rounded-xl
      mb-8"
    >

      <div
        className="
        absolute
        left-1/2
        top-4
        -translate-x-1/2
        font-bold"
      >
        Load Balancer
      </div>

      {dots.map(id => (

        <RequestDot
          key={id}
          x={0}
          y={120}
        />

      ))}

    </div>
  );
}