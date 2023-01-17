import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="h-screen pt-32" id="front">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="pb-4 font-header text-6xl font-extrabold">
          Hack the Nest
        </h1>
        <p className="">April 15-16, 2023</p>
        <p className="">River Hill High School</p>
        <Link href="/dashboard">
          <button className="rounded-lg border py-4 px-12">
            Apply Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FrontSection;
