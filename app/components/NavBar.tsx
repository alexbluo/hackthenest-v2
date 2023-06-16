import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth/[...nextauth]/route";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const NavBar = async ({ open, toggleOpen }: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
      <div className="relative z-50 aspect-square h-3/5">
        <Image
          src="/logo-colored.png"
          alt="Hack the Nest Logo"
          sizes="76.8px"
          fill
        />
      </div>

      <ul className="hidden gap-12 text-gold md:flex">
        <NavItem to="about">About</NavItem>
        <NavItem to="schedule">Schedule</NavItem>
        <NavItem to="faq">FAQ</NavItem>
        <NavItem to="sponsors">Sponsors</NavItem>
        {/* <Link
          className="cursor-pointer font-mono text-lg font-medium"
          href={session ? "/dashboard" : "/login"}
        >
          {session ? "Dashboard" : "Login"}
        </Link> */}
      </ul>

      <MobileMenuToggle open={open} onClick={() => toggleOpen()} />

      {/* <MobileMenu open={open} session={session} onClick={() => toggleOpen()} /> */}
    </nav>
  );
};

export default NavBar;
