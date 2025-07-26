"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, type MotionProps } from "framer-motion"; // ✅ correct

import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-4 origin-left bg-[#f11b1b]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
