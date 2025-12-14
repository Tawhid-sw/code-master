"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { NeueMachina } from "../fonts";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { CheckCircle } from "lucide-react";

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
        className="absolute inset-0 isolate hidden contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      </div>

      <section className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />

        <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-6">
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
                className="rounded-xl bg-blue-400 hover:bg-blue-500"
              >
                <Link href="#link">Get started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#link">View demo</Link>
              </Button>
            </AnimatedGroup>
          </div>

          {/* RIGHT CONTENT – MEANINGFUL LMS PREVIEW */}
          <div className="relative">
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
              {/* CODE EDITOR MOCK */}
              <div className="rounded-xl border bg-neutral-900 text-neutral-100 shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-400" />
                  <span className="size-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-neutral-400">
                    lesson.tsx
                  </span>
                </div>

                <pre className="p-4 text-sm text-left font-mono">
                  <code>
                    <span className="text-blue-400">function</span>
                    <span className="text-green-400">learn</span>() {"{"}
                    {"\n"} <span className="text-blue-400">return</span>
                    <span className="text-yellow-300">"Build real skills"</span>
                    ;{"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

              {/* LEARNING PATH */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["HTML & CSS", "JavaScript", "React"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border bg-background p-3"
                  >
                    <CheckCircle className="size-4 text-blue-400" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </>
  );
}
