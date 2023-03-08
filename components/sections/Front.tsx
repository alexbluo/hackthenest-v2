import Image from "next/image";
import Link from "next/link";
import useGradient from "../../utils/useGradient";

const FrontSection = () => {
  return (
    <section className="min-h-screen pt-32" id="front">
      <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-16">
        {/* TODO: https://www.youtube.com/watch?v=W5oawMJaXbU */}
        <h1 className="text-center text-7xl font-extrabold text-ice">
          Hack the Nest
        </h1>
        <div className="flex w-fit flex-col gap-8">
          <div className="mx-auto flex gap-4 font-header text-xl">
            <h3 className="font-medium">4.15.23 - 4.16.23</h3>
            <div className="">•</div>
            <h3 className="font-medium">River Hill High School</h3>
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
          fill
        />
      </a>
    </section>
  );
};

export default FrontSection;
