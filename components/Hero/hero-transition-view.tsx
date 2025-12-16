import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import type { Variants } from "motion/react";

interface HeroTransitionViewProps {
  children: React.ReactNode;
  staggered: number;
  delay: number;
  className?: string;
}

export const HeroTransitionView = ({
  children,
  staggered,
  delay,
  className,
}: HeroTransitionViewProps) => {
  const transitionVariants: { item: Variants } = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: staggered,
              delayChildren: delay,
            },
          },
        },
        ...transitionVariants,
      }}
      className={cn(className)}
    >
      {children}
    </AnimatedGroup>
  );
};
