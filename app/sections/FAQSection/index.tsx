"use client";

import { ReactNode, useState } from "react";
import FAQ from "./FAQ";

interface Question {
  question: string;
  answer: ReactNode;
}

// shallow index is column ltr
const questions: Question[][] = [
  [
    {
      question: "What is a hackathon?",
      answer:
        "Hackathons are collaborative multi-day events where participants (also called hackers) bring their ideas to life by building innovative projects from scratch using software development principals. Aside from just being coding events/competitions, hackathons offer several fun mini-events, educational workshops, sponsor fairs, and an overall great atmosphere to hang out in!",
    },
    {
      question: "How much does it cost?",
      answer:
        "Absolutely nothing! We'll take care of food, prizes, swag, and more :)",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "That's completely fine - in fact, many participants are first time hackers and beginners!",
    },
    {
      question: "What if I don't have a project idea?",
      answer:
        "You definitely don't need to have an idea beforehand! Remember that your project can come in any form you want - creative, funny, innovative, and more - and you'll have teammates to help ideate during the weekend! You're not required to make a project to attend, but we recommend that you do in order to get the full hackathon experience.",
    },
    {
      question: "How do teams work?",
      answer:
        "There are up to four people per team and you get to choose who you work with, so bring your friends along! Don't worry if you don't have a team; we have a dedicated team formation Discord channel as well as a team formation session at the beginning of the event.",
    },
    {
      question: "Who organized this event?",
      answer:
        "Hack the Nest was built by high schoolers from River Hill and Glenelg High School in Howard County, Maryland. We are supported by MLH, Hack Club, and our generous teachers and sponsors.",
    },
  ],
  [
    {
      question: "Can I attend?",
      answer:
        "Hack the Nest is open to all high school students of all experience levels from anywhere. If you're not in high school, we'd love to have you as a mentor, volunteer, or sponsor!",
    },
    {
      question: "How do I get to the venue?",
      answer: (
        <>
          Hack the Nest is being held in-person at{" "}
          <a
            className="cursor-pointer text-blue-light underline"
            href="https://www.google.com/maps/dir/?api=1&destination=1934+Old+Gallows+Rd+STE+350,+Vienna,+VA+22182&travelmode=driving"
          >
            1934 Old Gallows Rd Suite 350, Vienna, VA 22182
          </a>
          . We&apos;re on the 3rd floor of the Bank of America building, just across the street from Tysons Corner Center!
        </>
      ),
    },
    {
      question: "Are there travel reimbursements?",
      answer: (
        <>
          We will be able to provide travel reimbursements thanks to{" "}
          <a
            className="cursor-pointer text-blue-light underline"
            href="https://gas.hackclub.com/"
          >
            Hack Club&apos;s new Gas Fund initiative
          </a>
          !
        </>
      ),
    },
    {
      question: "Can I leave early/arrive late?",
      answer: "Feel free to arrive, leave, and come back at any time!",
    },
    {
      question: "What are the overnight arrangements?",
      answer:
        "We'll have a dedicated sleeping room and a very limited supply of air mattresses and sleeping bags on a first come first serve basis. Feel free to bring your own blanket, bed, or... bouncy castle?",
    },
    {
      question: "I have more questions!",
      answer:
        "Please direct any other questions to hello@hackthenest.org and we'll get back to you as soon as possible!",
    },
  ],
];

const FAQSection = () => {
  const [open, setOpen] = useState<string | undefined>(undefined);

  return (
    <section id="faq">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-br-none sm:rounded-tl-3xl sm:rounded-tr-3xl">
        <h2 className="gradient-text">faq</h2>
      </div>
      <div className="-mx-8 flex flex-col gap-4 bg-black p-8 sm:rounded-3xl sm:rounded-tl-none md:flex-row md:gap-16">
        {questions.map((column, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="flex w-full flex-col gap-4" key={i}>
            {column.map(({ question, answer }) => (
              <FAQ
                question={question}
                open={open === question}
                onClick={() =>
                  setOpen(open === question ? undefined : question)
                }
                key={question}
              >
                {answer}
              </FAQ>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
