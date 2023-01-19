import Image from "next/image";
import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="h-screen pt-32" id="front">
      <div className="absolute top-0 left-0 h-screen w-screen">
        <Image
          className="object-cover"
          src="/background.png"
          alt="placeholder"
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-16">
        <h1 className="z-10 pb-4 font-header text-6xl font-extrabold">
          Hack the Nest
        </h1>
        <p className="z-10">April 15-16, 2023</p>
        <p className="z-10">River Hill High School</p>
        <Link
          className="z-10 mx-auto rounded-lg border py-2 px-12"
          href="/dashboard"
        >
          Apply Now
        </Link>
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
          fill
        />
      </a>
    </section>
  );
};

export default FrontSection;
