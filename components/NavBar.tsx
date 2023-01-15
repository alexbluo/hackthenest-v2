import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

// TODO: move social media icon to mobile nav

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const NavBar = ({ open, toggleOpen }: Props) => {
  return (
    <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between">
      <div className="flex h-full items-center gap-12">
        <div className="relative z-50 aspect-square h-3/5">
          <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
        </div>
      </div>

      <ul className="hidden gap-12 sm:flex">
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
