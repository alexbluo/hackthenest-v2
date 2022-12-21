import React from "react";
import { useCycle } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

const NavBar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <nav className="z-50 flex h-24 w-full items-center justify-between bg-transparent">
      <div className="flex aspect-square h-full items-center justify-center">
        <div className="relative aspect-square h-3/4">
          {/* <Link href="/favicon.png">
            <a>
              <Image
                src="/favicon.png"
                alt="Shenderov Lab Logo"
                layout="fill"
              />
            </a>
          </Link> */}
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