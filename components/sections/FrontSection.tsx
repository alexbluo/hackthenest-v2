import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useGradient from "../../utils/useGradient";
import jumboAnimation from "../../utils/useJumboAnimation";

const targetName = "Hack the Nest";
const targetDate = "9.23.23 - 9.24.23";
const targetLocation = "Glenelg High School";

const FrontSection = () => {
  const [name, setName] = useState<string>(targetName);
  const [date, setDate] = useState<string>(targetDate);
  const [location, setLocation] = useState<string>(targetLocation);

  useEffect(() => {
    jumboAnimation(name, setName, targetName);
    jumboAnimation(date, setDate, targetDate);
    jumboAnimation(location, setLocation, targetLocation);
  }, []);

  return (
    <section className="min-h-screen pt-32" id="front">
      <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-24">
        {/* https://stackoverflow.com/questions/66457359/how-to-keep-a-paragraph-height-even-when-there-is-no-text-in-it */}
        <h1 className="h-fit text-center text-7xl font-extrabold text-ice before:inline-block before:content-['']">
          {name}
        </h1>
        <div className="flex w-fit flex-col gap-8">
          <div className="mx-auto flex gap-4 font-header text-xl before:content-['']">
            <h3 className="font-medium">{date}</h3>
            {/* <div className="">•</div>
            <h3 className="font-medium">{location}</h3> */}
          </div>
          <Link
            className={`${useGradient()} mx-auto w-80 rounded-md bg-white px-6 py-4 text-center font-header text-lg font-medium text-black`}
            href="/login"
          >
            Apply Now!
          </Link>
        </div>
      </div>

      <a
        id="mlh-trust-badge"
        className="absolute right-4 top-0 z-50 hidden aspect-[571/1000] w-[10%] min-w-[60px] max-w-[100px] lg:block "
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-yellow.svg"
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
