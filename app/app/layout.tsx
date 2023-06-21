import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-black text-white">
      <section className="min-h-screen pt-32">
        <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image
              src="/logo-colored.png"
              alt="Hack the Nest Logo"
              sizes="76.8px"
              fill
            />
          </Link>

          <Link
            className="font-mono text-lg font-medium text-gold"
            href="/dashboard"
          >
            dashboard
          </Link>
        </nav>

        {children}
      </section>
    </div>
  );
};
