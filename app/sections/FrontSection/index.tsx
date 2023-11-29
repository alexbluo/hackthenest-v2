"use client";

import { useEffect } from "react";
import Link from "next/link";
import useHackerText from "utils/useHackerText";

const FrontSection = () => {
  const [name, animateName] = useHackerText("Hack the Nest");
  const [date, animateDate] = useHackerText("12.09.23 - 12.10.23");
  const [location, animateLocation] = useHackerText("Tysons, VA");
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
        <h1 className="gradient-text h-fit bg-clip-text text-center font-mono text-7xl font-black tracking-tighter text-transparent before:inline-block before:content-['']">
          {name}
        </h1>
        <div className="flex w-fit flex-col justify-center gap-8">
          <div className="text-md mx-auto flex gap-2 text-center font-mono tracking-tight text-ice sm:text-lg">
            <span className="whitespace-nowrap">{date}</span>
            <div>&nbsp;•&nbsp;</div>
            <span className="whitespace-nowrap">{location}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              className="gradient-bg mx-auto w-full rounded-md bg-white px-6 py-4 text-center font-mono text-lg font-medium text-black shadow-md shadow-grey duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light"
              href="/login"
              onMouseOver={() => animateRegister({ duration: 500 })}
            >
              {register}
            </Link>
            <p className="text-md mx-auto text-center font-mono tracking-tight text-ice">
              Registration closes 12.02.23
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
