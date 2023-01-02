import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="min-h-screen py-24" id="front">
      <h1>Hack the Nest</h1>
      <p>April 14-16, 2023</p>
      <p>River Hill High School</p>

      <Link href="/login">
        <button className="border rounded-lg p-4 hover:bg-orange">Login</button>
      </Link>
    </section>
  );
};

export default FrontSection;
