import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
      {/* z index on logo to stay visible in mobile nav */}
      <div className="relative aspect-square h-3/5 z-50">
        <Link href="/">
          <Image
            src="/logo-colored.png"
            alt="Hack the Nest Logo"
            sizes="76.8px"
            fill
          />
        </Link>

      </div>

      <ul className="hidden gap-12 text-gold md:flex">
        <Link href="/recap">
          recap
        </Link>
        <Link href="/#about">
          about
        </Link>
        <Link href="/#schedule">
          schedule
        </Link>
        <Link href="/#faq">
          faq
        </Link>
        <Link href="/#sponsors">
          sponsors
        </Link>
        {/* <NavItem to="about">about</NavItem> */}
        {/* <NavItem href="/" to="schedule">schedule</NavItem> */}
        {/* <NavItem to="faq">faq</NavItem>
        <NavItem to="sponsors">sponsors</NavItem> */}
        <Link
          href={session ? "/dashboard" : "/login"}
        >
          {session ? "dashboard" : "login"}
        </Link>
      </ul>

      <MobileNav session={session} />
    </nav>
  );
};

export default NavBar;
