import FAQ from "../components/FAQ";
import useGradient from "../utils/useGradient";

const FAQSection = () => {
  return (
    <section id="faq">
      <h2 className={useGradient()}>FAQ</h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-16">
        <div className="flex w-full flex-col gap-4">
          <FAQ question="What is a hackathon?">
            Hackathons are collaborative multi-day events where participants
            (also called hackers) bring their ideas to life by building
            innovative projects from scratch using software development
            principals. Aside from just being coding marathons/competitions,
            hackathons offer several fun side events, educational workshops,
            sponsor fairs, and an overall great atmosphere to hang out in.
          </FAQ>
          <FAQ question="How much does it cost?">
            Absolutely nothing! We&apos;ll take care of food, prizes, swag, and
            more :&#41;
          </FAQ>
          <FAQ question="What if I don't know how to code?">
            That&apos;s completely fine! In fact, many participants are first
            time hackers and beginners. Hack the Nest is a great chance to
            explore your interests while meeting new friends and interacting
            with familiar companies.
          </FAQ>
          <FAQ question="Why is there an application?">
            Although we&apos;d love to admit everyone, we only have enough
            resources to support a limited number of hackers. The good news is
            that we&apos;ll likely not go too far over this limit (if at all),
            so we strongly encourage everyone to apply - it only takes a few
            minutes and you can always decide whether you are able to attend as
            the event approaches.
          </FAQ>
          <FAQ question="Do I have to make a project?">
            You&apos;re not required to make a project to attend, but we
            recommend that you do in order to get the full hackathon experience.
          </FAQ>
        </div>
        <div className="flex w-full flex-col gap-4">
          <FAQ question="Who is eligible to attend?">
            Hack the Nest is open to all high school students of all experience
            levels from everywhere. If you&apos;re not in high school but would
            still like to participate, we&apos;d love to have you as a mentor or
            volunteer!
          </FAQ>
          {/* TODO: replace this */}
          <FAQ question="How can I volunteer or mentor?">
            Details on volunteer and mentor registration will be released soon.
          </FAQ>
          <FAQ question="How do teams work?">
            There are up to four people per team and you get to choose who you
            work with, so bring your friends along! Don&apos;t worry if you
            don&apos;t have a team; we&apos;ll have a team formation session at
            the beginning of the event, and you can always find a team
            beforehand through our Discord.
          </FAQ>
          <FAQ question="What are the overnight arrangements?">
            Due to limitations with our venue, hackers will return home around
            9:00 - 10:00pm. We suggest carpooling with your group and even
            staying over at a member&apos;s place. The hacking and fun
            doesn&apos;t stop in the wee hours - we&apos;ll even be hosting
            online video game tournaments!
          </FAQ>
          <FAQ question="I have more questions!">
            Please direct any questions to hello@hackthenest.org and we&apos;ll
            get back to you as soon as possible!
          </FAQ>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
