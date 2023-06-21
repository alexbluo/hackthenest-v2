"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

// nav bar for dashboard and app
const AuthNav = () => {
  return (
    <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
      <Link className="relative z-50 aspect-square h-3/5" href="/">
        <Image
          src="/logo-colored.png"
          alt="Hack the Nest Logo"
          sizes="76.8px"
          fill
        />
      </Link>

      <button
        className="font-mono text-lg font-medium text-gold"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        logout
      </button>
    </nav>
  );
};

export default AuthNav;
