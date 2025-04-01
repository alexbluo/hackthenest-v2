import Stat from "./Stat";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-br-none sm:rounded-tl-3xl sm:rounded-tr-3xl">
        <h2 className="gradient-text">about</h2>
      </div>
      <article className="-mx-8 flex flex-col rounded-r-3xl bg-black p-8 text-xl text-white sm:rounded-3xl sm:rounded-tl-none md:flex-row">
        {/* <div className="xl:w-1/2"> */}
        This April, join 200 hackers for the DMV area&apos;s largest high
        school hackathon. Hack the Nest is a collaborative coding event where
        participants (also called hackers) bring their innovative ideas to life
        in just one weekend. Whether it&apos;s 2am-debugging with cookies or
        karaoke, our ultimate goal is to host an unforgettable experience for an
        audience normally barred from hackathons.
      </article>
      <div className="my-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat stat="24" caption="hours">
          Hack the Nest is a 24-hour event starting the morning of Saturday,
          April 5 and ending around noon of Sunday, April 6.
        </Stat>
        <Stat stat="200" caption="hackers">
          Hack the Nest will be the DMV area&apos;s (and one of the
          country&apos;s) largest high school hackathon! We welcome hackers
          from all geographic areas and of all demographics and experience
          levels.
        </Stat>
        <Stat stat="$12,000+" caption="prizes">
          Winning teams will receive prizes from a $12,000+ prize pool!
          Below is a tentative preview:
          <div className="my-2">
            <p className="font-medium">Grand Prize</p>
            <p>$600, $200 X-Camp Credit (x4)</p>
            <p className="font-medium">Second Place</p>
            <p>$150 X-Camp Credit (x4), 1Password One Year (x10), Interview Cake License(x10)</p>
            <p className="font-medium">Third Place</p>
            <p>$100 X-Camp Credit (x4), 1Password One Year (x5), Interview Cake License(x5)</p>

            <br></br>

            <p className="font-medium">Craig Newmark Philanthropies Cybersecurity Track</p>
            <p>Sony WH-CH720N Noise Cancelling Headphones (x4)</p>
            <p className="font-medium"> SJA Social Justice Track </p>
            <p>$400 Seed Funding</p>
            <p className="font-medium">Environmental Track</p>
            <p>24-In HD Monitor (x4)</p>
            <p className="font-medium">Beginner Track</p>
            <p>No Starch Press Books (x4), $25 AoPS Gift Card (x4)</p>

            <br></br>

            <p className="font-medium">
              Runner-Ups
            </p>
            <p>Interview Cake License (1/student) as supplies last</p>
          </div>
          {/* Our full list of prizes is now available on{" "}
          <a href="https://hackthenest-2023.devpost.com" className="underline">Devpost</a>. */}
        </Stat>
        <Stat stat="10" caption="workshops & mini-events">
          Don&apos;t miss our workshops and mini-events! Workshops are
          educational 30-60 minute interactive sessions on technical and
          non-technical topics catered towards hackers of all experience levels,
          and mini-events are fun activities where you can take a break and meet
          other hackers.
        </Stat>
      </div>
      <div className="gradient-text mt-6 max-h-24 cursor-default select-none overflow-hidden bg-clip-text px-4 font-circular text-8xl leading-[0.5] text-transparent">
        if you can see this then why lol like what is the point seriously and if
        this somehow goes the full width then you must have a very wide monitor
        blah blah blah lorem ipsum dolor yah yah i dont remember the rest im
        just trying to fill this space up to make extra sure that it doesnt look
        funny for you youre welcome
      </div>
    </section>
  );
};

export default AboutSection;
