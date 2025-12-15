import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { NeueMachina } from "../fonts";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

import CodeEditorStaticDemo from "../ui/code-editor";

const transitionVariants = {
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

export function HeroSection() {
  return (
    <>
      {/* BACKGROUND */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden contain-strict lg:block max-h-screen min-h-screen"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.12)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />

        <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
          {/* LEFT CONTENT */}
          <div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="inline-flex rounded-full border bg-neutral-100 dark:bg-neutral-900 px-4 py-1">
                <AnimatedShinyText className="text-sm">
                  ✨ Where Potential Meets Professionalism
                </AnimatedShinyText>
              </div>
            </AnimatedGroup>

            <div
              className={`mt-8 text-5xl md:text-6xl font-medium flex flex-wrap gap-2 ${NeueMachina.className}`}
            >
              <TextEffect preset="fade-in-blur" as="h1">
                From Raw
              </TextEffect>
              <TextEffect
                preset="fade-in-blur"
                as="h1"
                className="text-blue-400"
              >
                Potential
              </TextEffect>
              <TextEffect preset="fade-in-blur" as="h1">
                to
              </TextEffect>
              <TextEffect
                preset="fade-in-blur"
                as="h1"
                className="text-blue-400"
              >
                Professional
              </TextEffect>
              <TextEffect preset="fade-in-blur" as="h1">
                Powerhouse
              </TextEffect>
            </div>

            <TextEffect
              preset="fade-in-blur"
              delay={0.4}
              as="p"
              className="mt-8 max-w-xl text-lg text-muted-foreground"
            >
              Learn by building real projects. Follow a structured curriculum
              designed to turn beginners into job-ready developers.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.75, delayChildren: 0.95 },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="text-primary bg-blue-400 hover:bg-blue-500"
              >
                <Link href="#link">Get started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-primary"
              >
                <Link href="#link">View demo</Link>
              </Button>
            </AnimatedGroup>
          </div>

          <div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 1,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <CodeEditorStaticDemo />
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </>
  );
}
