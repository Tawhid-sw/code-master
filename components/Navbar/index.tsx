"use client";
import { Logo } from "../Logo";
import { NavNavigations } from "./nav-navigations";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./nav-theme-togller";

export const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <nav className="bloack max-md:realtive w-full backdrop-blur-[backdrop-filter]:bg-backgroound/30 py-4 md:px-8 px-4 mx-auto bg-background/30 top-0 z-20 sticky ">
      <div className="flex items-center justify-between w-full max-w-350 mx-auto">
        <Logo />
        <NavNavigations
          className={`${!isMenu ? "max-md:hidden" : "max-md:flex"}`}
        />
        <div className="flex items-center justify-end md:gap-4 gap-2">
          {/* <ModeToggle /> */}
          <Button size="sm">Signup</Button>
          <Button
            size="sm"
            variant="secondary"
            className="md:hidden"
            onClick={() => setMenu(!isMenu)}
          >
            {!isMenu ? <Menu size={18} /> : <X size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
