"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
}

export default function RequestDot({
  x,
  y,
}: Props) {

  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      animate={{
        x,
        y,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      className="
      absolute
      w-4
      h-4
      rounded-full
      bg-blue-500"
    />
  );
}