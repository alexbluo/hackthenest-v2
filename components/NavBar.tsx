import React from "react";
import { useCycle } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

// TODO: move social media icon to mobile nav
const NavBar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 mx-auto flex h-32 w-full items-center justify-between px-8 xl:px-32">
      <div className="flex h-full items-center gap-12">
        <div className="relative aspect-square h-3/5">
          <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
        </div>

        <ul className="hidden gap-12 xl:flex">
          <NavItem to="about">About</NavItem>
          <NavItem to="schedule">Schedule</NavItem>
          <NavItem to="faq">FAQ</NavItem>
          <NavItem to="sponsors">Sponsors</NavItem>
        </ul>
      </div>

      <div className="flex h-8 flex-row gap-8">
        <div className="relative aspect-square h-full">
          <a href="https://www.instagram.com/hackthenest_">
            <Image src="/instagram.svg" alt="instagram" fill />
          </a>
        </div>

        {/* TODO: check */}
        <div className="relative aspect-square h-full">
          <a href="https://www.facebook.com/hackthenest">
            <Image src="/facebook.svg" alt="facebook" fill />
          </a>
        </div>

        <div className="relative aspect-square h-full">
          <a href="https://www.twitter.com/hackthenest">
            <Image src="/twitter.svg" alt="twitter" fill />
          </a>
        </div>

        <div className="relative aspect-square h-full">
          <a href="https://www.linkedin.com/company/hackthenest/">
            <Image src="/linkedin.svg" alt="linkedin" fill />
          </a>
        </div>

        <div className="relative aspect-square h-full">
          <a href="https://www.linkedin.com/company/hackthenest/">
            <Image src="/github.svg" alt="github" fill />
          </a>
        </div>
      </div>

      <MobileMenuToggle open={open} handleClick={() => toggleOpen()} />

      <MobileMenu open={open} />
    </nav>
  );
};

export default NavBar;
