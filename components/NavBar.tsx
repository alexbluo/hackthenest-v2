import React from "react";
import { useCycle } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

// TODO: add padding and make sure massive screens look normal
const NavBar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <nav className="bg-transparent px-8 xl:px-32 top-0 container mx-auto z-50 w-full flex h-24 items-center justify-between">
      <div className="relative aspect-square h-3/4">
        <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
      </div>

      <ul className="hidden gap-12 xl:flex">
        <NavItem to="about">About</NavItem>
        <NavItem to="schedule">Schedule</NavItem>
        <NavItem to="faq">FAQ</NavItem>
        <NavItem to="sponsors">Sponsors</NavItem>
      </ul>

      <MobileMenuToggle open={open} handleClick={() => toggleOpen()} />

      <MobileMenu open={open} />
    </nav>
  );
};

export default NavBar;
