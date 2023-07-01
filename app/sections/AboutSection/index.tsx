import Stat from "./Stat";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-br-none sm:rounded-tl-3xl sm:rounded-tr-3xl">
        <h2 className="gradient-text">about</h2>
      </div>
      <article className="-mx-8 rounded-r-3xl bg-black p-8 text-xl text-white sm:rounded-3xl sm:rounded-tl-none">
        This September, join 300 hackers for the DMV area&apos;s largest high
        school hackathon. Hack the Nest is a 36-hour collaborative coding
        event/competition where participants (also called hackers) create cool
        new tech projects from scratch. Whether it&apos;s 2am-debugging with
        cookies or ping-pong without paddles, our ultimate goal is to host an
        unforgettable experience for an audience normally barred from
        hackathons.
      </article>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat stat="36" caption="hours">
          Hackathons typically take place over a weekend and last 12-48 hours.
          Hack the Nest is a 36-hour event starting the morning of Saturday,
          September 23 and ending the evening of Sunday, September 24.
        </Stat>
        <Stat stat="300" caption="hackers">
          With 300 hackers from primarily the east coast, Hack the Nest will be
          the DMV&apos;s (and one of the country&apos;s) largest high school
          hackathons! We welcome hackers from all geographic areas and of all
          demographics and experience levels.
        </Stat>
        <Stat stat="$10000+" caption="prizes">
          Winning teams will receive prizes from a $10,000+ prize pool! Below is
          a tentative preview:
          <div className="my-2">
            <p className="font-medium">Grand Prize</p>
            <p>Nintendo Switch Lite (x4)</p>
            <p className="font-medium">
              Cybersecurity Track sponsored by C-HIT
            </p>
            <p>$1,000</p>
            <p className="font-medium">Collins Aerospace Prize</p>
            <p>$500</p>
            <p className="font-medium">Patient Safety Technology Challenge</p>
            <p>$500</p>
            <p className="font-medium">Beginner Track</p>
            <p>
              Arduino UNO (x4), No Starch Press Books (x4), $25 AoPS Gift Card
              (x4)
            </p>
          </div>
          Our full list of prizes with details will soon be available on
          Devpost.
        </Stat>
        <Stat stat="16" caption="workshops & mini-events">
          Don&apos;t miss our workshops and mini-events! Workshops are
          educational 30-60 minute interactive sessions on technical and
          non-technical topics catered towards hackers of all experience levels.
          Mini-events are fun activities where you can take a break and meet
          other hackers. We will also have a sponsor fair where you can chat
          with our sponsor representatives, collect swag, and learn about
          recruiting. Our full schedule will be released as the event
          approaches.
        </Stat>
      </div>
      <div className="gradient-text mt-6 max-h-24 cursor-default bg-clip-text px-4 font-circular text-8xl leading-[0.5] text-transparent">
        if you can see this then why lol like what is the point seriously
        and if this somehow goes the full width then you must have a very wide
        monitor blah blah blah lorem ipsum dolor yah yah i dont remember the
        rest im just trying to fill this space up to make extra sure that it
        doesnt look funny for you youre welcome
      </div>
    </section>
  );
};

export default AboutSection;
