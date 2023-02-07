import Image from "next/image";
import Link from "next/link";

// TODO: make separate gradient for text brighter and more opaque?
const FrontSection = () => {
  return (
    <section className="min-h-screen pt-32" id="front">
      {/* <div className="absolute top-0 left-0 h-screen w-screen">
        <Image
          className="object-cover"
          src="/background.png"
          alt="placeholder"
          fill
        />
      </div> */}

      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-4 pt-16">
        <h1 className="gradient z-10 bg-white bg-clip-text pb-4 font-header text-7xl font-extrabold text-transparent">
          Hack the Nest
        </h1>
        <div className="z-10 w-full rounded-md bg-black py-4 px-6 text-justify">
          <p className="gradient z-10 bg-clip-text text-lg font-medium text-black text-transparent">
            April 15-16, 2023
          </p>
        </div>
        <Link
          className="gradient z-10 mx-auto w-full rounded-md border border-black bg-white px-6 py-4 text-lg font-medium text-black"
          href="/login"
        >
          Apply Now!
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
