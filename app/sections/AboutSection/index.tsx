import Stat from "./Stat";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full sm:rounded-bl-none">
        <h2 className="gradient-text">About</h2>
      </div>
      <article className="-mx-8 mb-8 rounded-r-3xl bg-black p-8 text-xl text-white sm:rounded-3xl sm:rounded-tl-none">
        This September, join 300 hackers for the DMV area&apos;s largest high
        school hackathon. Hack the Nest is a 36-hour collaborative coding
        event/competition where participants (also called hackers) create cool
        new tech projects from scratch. Whether it&apos;s 2am-debugging
        with cookies or ping-pong without paddles, our ultimate goal is to host
        an unforgettable experience for an audience normally barred from
        hackathons.
      </article>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat stat="36" caption="hours" />
        <Stat stat="300" caption="hackers" />
        <Stat stat="$10000+" caption="prizes" />
        <Stat stat="16" caption="workshops & mini-events" />
      </div>
    </section>
  );
};

export default AboutSection;
