import React from "react";
import { useCycle } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

const NavBar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <nav className="bg-transparent absolute top-0 z-50 flex h-24 w-full items-center justify-between">
      <div className="flex aspect-square h-full items-center justify-center">
        <div className="relative aspect-square h-3/4">
          <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
        </div>
      </div>

      <ul className="hidden gap-12 pr-12 lg:flex">
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
