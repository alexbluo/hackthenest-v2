import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="min-h-screen pt-32" id="front">
      <h1 className="font-header text-6xl font-extrabold">Hack the Nest</h1>
      <p className="">April 14-16, 2023</p>
      <p className="">River Hill High School</p>

      <Link href="/login">
        <button className="rounded-lg border py-4 px-12 hover:bg-orange">
          Apply Now!
        </button>
      </Link>
    </section>
  );
};

export default FrontSection;
