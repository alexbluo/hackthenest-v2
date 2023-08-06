"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useHackerText from "utils/useHackerText";

const FrontSection = () => {
  const [name, animateName] = useHackerText("Hack the Nest");
  const [date, animateDate] = useHackerText("9.23.23 - 9.24.23");
  const [location, animateLocation] = useHackerText("Sterling, VA");
  const [register, animateRegister] = useHackerText("Register Now!");

  useEffect(() => {
    animateName();
    animateDate();
    animateLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="min-h-screen px-0 pt-32 sm:px-8" id="front">
      <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-12 sm:pt-24">
        {/* https://stackoverflow.com/questions/66457359/how-to-keep-a-paragraph-height-even-when-there-is-no-text-in-it */}
        <h1 className="gradient-text h-fit bg-clip-text tracking-tighter text-center font-mono text-7xl font-black text-transparent before:inline-block before:content-['']">
          {name}
        </h1>
        <div className="flex w-fit flex-col justify-center gap-8">
          <div className="text-md mx-auto flex gap-2 tracking-tight text-center font-mono text-ice sm:text-lg">
            <span className="whitespace-nowrap">{date}</span>
            <div>•</div>
            <span className="whitespace-nowrap">{location}</span>
          </div>
          <Link
            className="gradient-bg mx-auto w-full rounded-md bg-white px-6 py-4 text-center font-mono text-lg font-medium text-black text-opacity-90 shadow-md shadow-grey duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light"
            href="/login"
            onMouseOver={() => animateRegister({ duration: 500 })}
          >
            {register}
          </Link>
        </div>
      </div>

      <a
        id="mlh-trust-badge"
        className="absolute right-4 top-0 z-50 hidden aspect-[571/1000] w-[10%] min-w-[60px] max-w-[100px] lg:block "
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow"
        target="_blank"
        aria-label="MLH"
        rel="noreferrer"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          sizes="100px"
          priority
          fill
        />
      </a>
    </section>
  );
};

export default FrontSection;
