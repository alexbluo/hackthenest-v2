import Image from "next/image";
import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="min-h-screen pt-32" id="front">
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
        <Image
          className="object-cover"
          src="/background.png"
          alt="placeholder"
          fill
        />
      </div>

      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-16">
        {/* TODO: https://www.youtube.com/watch?v=W5oawMJaXbU */}
        <h1 className="font-header text-7xl font-bold text-transparent">
          Hack the Nest
        </h1>
        <div className="flex w-fit flex-col gap-8">
          {/* find diff fonts bc weights arent good */}
          <div className="flex gap-2 text-xl">
            <h3 className="font-medium text-transparent">April 15-16, 2023</h3>
            <div className="font-black text-transparent">•</div>
            <h3 className="font-medium text-transparent">Venue TBD</h3>
          </div>
          {/* bg clip border solid bg icon right + hover */}
          <Link
            className="mx-auto w-full rounded-md px-6 py-4 text-center text-lg font-medium text-black"
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
          fill
        />
      </a>
    </section>
  );
};

export default FrontSection;
