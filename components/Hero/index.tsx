import { NeueMachina } from "../fonts";
import { HeroTransitionView } from "./hero-transition-view";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextEffect } from "@/components/ui/text-effect";
import { HeroCodeEditorDemo } from "./hero-code-editor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      {/* BACKGROUND */}
      <div
        aria-hidden
        className="absolute inset-0 isolate contain-strict lg:block max-h-screen min-h-screen"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.12)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section className="relative min-h-fit lg:px-8 sm:px-4 px-2 mb-8">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />

        <div className="lg:pt-24 pt-10 flex items-center lg:justify-between justify-center lg:gap-4 gap-16 max-lg:flex-col max-w-7xl">
          {/* LEFT CONTENT */}
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:text-center">
            {/* Tagline */}
            <HeroTransitionView staggered={0.05} delay={0.75}>
              <div className="inline-flex rounded-full border bg-neutral-100 dark:bg-neutral-900 px-4 py-1">
                <AnimatedShinyText className="sm:text-sm text-xs">
                  ✨ Where Potential Meets Professionalism
                </AnimatedShinyText>
              </div>
            </HeroTransitionView>

            {/* Hero Text */}
            <div
              className={`sm:mt-8 mt-4 max-lg:justify-center text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-medium flex flex-wrap sm:gap-2 ${NeueMachina.className}`}
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
              className="sm:mt-8 mt-4 max-w-xl sm:text-lg text-muted-foreground text-sm"
            >
              Learn by building real projects. Follow a structured curriculum
              designed to turn beginners into job-ready developers.
            </TextEffect>

            {/* Buttons */}
            <HeroTransitionView
              staggered={0.05}
              delay={0.75}
              className="mt-12 flex items-center gap-3 max-sm:text-sm"
            >
              <Button
                asChild
                size="sm"
                className="text-primary bg-blue-400 hover:bg-blue-500"
              >
                <Link href="/courses">Get started</Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="text-primary"
              >
                <Link href="/free-tutorials">View demo</Link>
              </Button>
            </HeroTransitionView>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <HeroTransitionView staggered={0.08} delay={1}>
              <HeroCodeEditorDemo />
            </HeroTransitionView>
          </div>
        </div>
      </section>
    </>
  );
}
