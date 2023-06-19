import Stat from "./Stat";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full sm:rounded-bl-none">
        <h2 className="gradient-text">About</h2>
      </div>
      <article className="-mx-8 mb-8 rounded-r-3xl bg-black p-8 text-xl text-white sm:rounded-3xl sm:rounded-tl-none">
        {/* TODO: change text */}
        This September, Hack the Nest invites 300 high school students to a
        36-hour hackathon in the heart of the DMV area. Our team has been
        working tirelessly to pack our schedule to the brim with educational
        workshops, exciting mini-events, and enticing prizes. Whether it’s
        ping-pong without paddles or late-night debugging with cookies, our
        ultimate goal is to host an unforgettable experience for an audience
        normally barred from hackathons.
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