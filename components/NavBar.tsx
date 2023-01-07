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
    <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 mx-auto flex h-32 w-full items-center justify-between px-8 xl:px-32">
      <div className="relative aspect-square h-3/5">
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
