"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import { useCycle } from "framer-motion";
import Image from "next/image";
import useGradient from "utils/useGradient";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

interface Props {
  children: ReactNode;
}

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
const HomeWrapper = ({ children }: Props) => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <div
      className={classNames(useGradient(), "relative text-white", {
        relative: !open,
        "fixed left-0 right-0 top-0": open,
      })}
    >
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          className="object-cover object-top"
          src="/background.png"
          alt="Website background"
          fill
          priority
          unoptimized
        />
      </div>
      <NavBar open={open} toggleOpen={toggleOpen} />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeWrapper;
