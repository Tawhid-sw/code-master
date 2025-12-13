"use client";
import { Logo } from "../Logo";
import { NavDesktop } from "./nav-navigations";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./nav-theme-togller";

export const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <header className="bloack realtive max-w-350 w-full backdrop-blur-[backdrop-filter]:bg-backgroound/60 py-4 md:px-8 px-4 mx-auto sticky bg-background/60 top-0 z-10 ">
      <nav className="flex items-center justify-between">
        <Logo />
        <NavDesktop className={`${isMenu ? "max-md:hidden" : "max-md:flex"}`} />
        <div className="flex items-center justify-end md:gap-4 gap-2">
          <ModeToggle />
          <button className="max-md:hidden">
            <Search size={18} />
          </button>
          <Button size="sm">Signup</Button>
          <Button
            size="sm"
            variant="secondary"
            className="md:hidden"
            onClick={() => setMenu(!isMenu)}
          >
            {isMenu ? <Menu size={18} /> : <X size={18} />}
          </Button>
        </div>
      </nav>
    </header>
  );
};
