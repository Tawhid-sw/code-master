import { HeroSection } from "@/components/Hero";
import { InfinitBrands } from "@/components/InfinitBrands";

export default function Home() {
  return (
    <main className="block max-w-350 w-full mx-auto overflow-hidden">
      <HeroSection />
      <InfinitBrands />
    </main>
  );
}
