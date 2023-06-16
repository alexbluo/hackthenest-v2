"use client";

import { ReactNode, useState } from "react";
import FAQ from "./FAQ";

interface Question {
  question: string;
  answer: ReactNode;
}

// shallow index is column
// TODO: transportation (buses but not reimbursements), prizes (tracks, preview)
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
      question: "Why is there an application?",
      answer:
        "The application isn't rigorous at all; we use the term more like registration in the unlikely case that we shoot way over our logistical limit. It only takes a few minutes to fill out and you can always change your mind about attending as the event approaches.",
    },
    {
      question: "Do I have to make a project?",
      answer:
        "You're not required to make a project to attend, but we recommend that you do in order to get the full hackathon experience.",
    },
  ],
  [
    {
      question: "Can I attend?",
      answer:
        "Hack the Nest is open to all high school students of all experience levels from anywhere. If you're not in high school, we'd love to have you as a mentor, volunteer, or sponsor!",
    },
    {
      question: "How do teams work?",
      answer:
        "There are up to four people per team and you get to choose who you work with, so bring your friends along! Don't worry if you don't have a team; we have a dedicated team formation Discord channel as well as a team formation session at the beginning of the event.",
    },
    {
      question: "Where is the hackathon being held?",
      answer: (
        <>
          Hack the Nest is being held in-person at{" "}
          <a
            className="cursor-pointer text-blue-light underline"
            href="https://www.google.com/maps/dir/?api=1&destination=21680+Ridgetop+Circle+150+Sterling+Va+20166&travelmode=driving"
          >
            21680 Ridgetop Circle, #150 Sterling, Va 20166
          </a>{" "}
          thanks to our generous sponsor theCoderSchool!
        </>
      ),
    },
    {
      question: "What are the overnight arrangements?",
      answer:
        "We will have a dedicated sleeping room and a limited supply of airbeds and sleeping bags on a first come first serve basis. Feel free to bring your own blanket, bed, or... bouncy castle?",
    },
    {
      question: "I have more questions!",
      answer:
        "Please direct any additional questions to hello@hackthenest.org and we'll get back to you as soon as possible!",
    },
  ],
];

const FAQSection = () => {
  const [open, setOpen] = useState<string | undefined>(undefined);

  return (
    <section id="faq" className="">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full sm:rounded-bl-none">
        <h2 className="text-gradient">FAQ</h2>
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
