"use client";

import { ReactNode } from "react";
import Image from "next/image";
import useGradient from "utils/useGradient";

interface Props {
  children: ReactNode;
}

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
const HomeWrapper = ({ children }: Props) => {
  return (
    <div className={`${useGradient()} relative text-white`}>
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
      {children}
    </div>
  );
};

export default HomeWrapper;
