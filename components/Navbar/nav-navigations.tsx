"use client";
import { NavNavigation } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NeueMachina } from "../fonts";
import { cn } from "@/lib/utils";

export const NavDesktop = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        `flex items-center md:justify-center gap-4 text-sm flex-row
        max-md:items-baseline max-md:gap-2 max-md:absolute max-md:w-full max-md:min-h-screen max-md:top-16 max-md:left-0 max-md:flex-col max-md:p-4 [&_li]:max-md:w-full [&_li]:max-md:p-4 [&_li]:max-md:rounded-md max-md:bg-background max-md:backdrop-blur-[backdrop-filter]:bg-backgroound/60 max-md:z-40`,
        className
      )}
    >
      {NavNavigation.map((nav, i) => (
        <li
          key={i}
          className={`${
            pathname === nav.href
              ? "text-blue-400 max-md:bg-zinc-900"
              : "text-primary"
          } transition-all ease-in hover:text-blue-400 ${
            NeueMachina.className
          }`}
        >
          <Link href={nav.href}>{nav.title}</Link>
        </li>
      ))}
    </ul>
  );
};
