"use client";

import React, { ReactNode, useState } from "react";
import { motion, useCycle } from "framer-motion";
import dynamic from "next/dynamic";
import useWindowWidth from "utils/useWindowWidth";

// must be lazy loaded in order to prevent framer motion client server mismatch on width
const ScheduleBlock = dynamic(() => import("./ScheduleBlock"), {
  ssr: false,
  // empty space placeholder to prevent background dimension seizure on initial load
  loading: () => <div className="h-16"></div>,
});

interface Block {
  name: ReactNode;
  time: string;
  location: string;
  description?: string;
  status: "neutral" | "hover" | "pressed" | "flush" | "hidden";
}

// make sure to maintain key uniqueness (name + time + location + description)
const saturday: Block[] = [
  {
    name: (
      <div className="flex w-full items-center justify-between">
        <p>Saturday</p>
        <svg
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z" />
        </svg>
      </div>
    ),
    time: "",
    location: "",
    status: "neutral",
  },
  {
    name: "Check-in",
    time: "7:00 - 11:00",
    location: "Lobby",
    description:
      "Please have your QR codes ready! This helps us identify your name, shirt size, and whether you are a hacker or volunteer so that we can direct you accordingly. Late check-in will last throughout the entire day!",
    status: "neutral",
  },
  {
    name: "Breakfast",
    time: "9:00 - 10:00",
    location: "",
    description: "Start your hacking with bagels and cream cheese!",
    status: "neutral",
  },
  {
    name: "Opening Ceremony",
    time: "21:30 - 22:00",
    location: "Room 1",
    description: "Join us for an exciting kick-off to the weekend!",
    status: "neutral",
  },
  {
    name: "Team Formation",
    time: "9:30 - 10:00",
    location: "",
    description:
      "Find your perfect team in this pitch-style team formation session!",
    status: "neutral",
  },
  {
    name: "Sponsor Fair",
    time: "10:00 - 12:00",
    location: "",
    description:
      "Come chat with our sponsors, collect swag, and learn about recruiting!",
    status: "neutral",
  },
  {
    name: "Lunch",
    time: "12:00 - 1:00",
    location: "",
    description: "Recharge with Subway!",
    status: "neutral",
  },
  {
    name: "Intro to Git",
    time: "1:00 - 2:00",
    location: "",
    description:
      "Every project needs some sort of version management, and the most prevalent tool for it is Git. Learn how to share and sync your code with your team, from Git installation to your first commit! ",
    status: "neutral",
  },
  {
    name: "Intro to React",
    time: "2:00 - 3:00",
    location: "",
    description:
      "Web development has come a long way since the early days of plain HTML tables; today, we have powerful JavaScript frameworks such as React, created by Facebook, which open up far more possibilities in your next website! Explore the fundamentals of the world's most popular and important frontend framework by creating a game of Whac-A-Mole!",
    status: "neutral",
  },
  {
    name: "Intro to Machine Learning",
    time: "3:00 - 4:00",
    location: "",
    description: "",
    status: "neutral",
  },
  {
    name: "Typeracer",
    time: "4:00 - 5:00",
    location: "",
    description: "Put your typing skills to the test!",
    status: "neutral",
  },
  {
    name: "Intro to Competitive Programming",
    time: "5:00 - 6:00",
    location: "",
    description: "",
    status: "neutral",
  },
  {
    name: "Dinner",
    time: "6:00 - 8:00",
    location: "",
    description: "Keep yourself going with some Chick-fil-A!",
    status: "neutral",
  },
  {
    name: "What's That Font?",
    time: "7:00 - 8:00",
    location: "",
    description:
      'Dive into the typography region with this informative "What&apos;s that Pokemon?" style Kahoot!',
    status: "neutral",
  },
  {
    name: "S'mores",
    time: "9:00 - 10:00",
    location: "",
    description: "", 
    status: "neutral",
  },
];

const sunday: Block[] = [
  {
    name: (
      <div className="flex w-full items-center justify-between">
        <p>Sunday</p>
        <svg
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z" />
        </svg>
      </div>
    ),
    time: "",
    location: "",
    status: "neutral",
  },
  {
    name: "Check-in",
    time: "7:00 - 11:00",
    location: "Lobby",
    description:
      "Please have your QR codes ready! This helps us identify your name, shirt size, and whether you are a hacker or volunteer so that we can direct you accordingly. Late check-in will last throughout the entire day!",
    status: "neutral",
  },
  {
    name: "Breakfast1",
    time: "9:00 - 10:00",
    location: "",
    description: "Start your hacking with bagels and cream cheese!",
    status: "neutral",
  },
  {
    name: "Opening Ceremony1",
    time: "21:30 - 22:00",
    location: "Room 1",
    description: "Join us for an exciting kick-off to the weekend!",
    status: "neutral",
  },
  {
    name: "Team Formation1",
    time: "9:30 - 10:00",
    location: "",
    description:
      "Find your perfect team in this pitch-style team formation session!",
    status: "neutral",
  },
  {
    name: "Sponsor Fair1",
    time: "10:00 - 12:00",
    location: "",
    description:
      "Come chat with our sponsors, collect swag, and learn about recruiting!",
    status: "neutral",
  },
  {
    name: "Intro to React1",
    time: "2:00 - 3:00",
    location: "",
    description:
      "Web development has come a long way since the early days of plain HTML tables; today, we have powerful JavaScript frameworks such as React, created by Facebook, which open up far more possibilities in your next website! Explore the fundamentals of the world's most popular and important frontend framework by creating a game of Whac-A-Mole!",
    status: "neutral",
  },
];

// TODO: 
const ScheduleSection = () => {
  const [day, cycleDay] = useCycle("Saturday", "Sunday");
  const [blocks, setBlocks] = useState(saturday);
  const width = useWindowWidth();

  // flush randomly consistently persists if cycled right after page load for some reason...
  const glissando = () => {
    const incoming = day === "Saturday" ? sunday : saturday;
    cycleDay();

    // idk why setState comes after increment
    let iteration = -1;
    const maxIterations = Math.max(saturday.length, sunday.length);

    const interval = setInterval(() => {
      setBlocks((prev): Block[] => {
        const newBlocks: Block[] = [];

        // im so sorry
        for (let i = 0; i < maxIterations; i++) {
          const block = prev[i];

          if (
            i >= incoming.length &&
            iteration >= incoming.length &&
            i === iteration
          ) {
            // hide excess from previous set
            newBlocks.push({ ...block, status: "hidden" });
          } else if (i === iteration - 4 && incoming[iteration - 4]) {
            // set incoming block when old one finishes animating
            newBlocks.push(incoming[iteration - 4]);
          } else if (block) {
            if (i === iteration) {
              // flush next block down each iteration
              newBlocks.push({ ...block, status: "flush" });
            } else {
              // default keep everything else the same
              newBlocks.push(block);
            }
          }
        }

        return newBlocks;
      });

      iteration += 1;

      if (iteration === maxIterations + 3) clearInterval(interval);
    }, 100);
  };

  // have to use callbacks in setState
  // https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component
  const handleHoverStart = (target: number) => {
    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (
          i === target &&
          block.status !== "pressed" &&
          block.status !== "flush" &&
          block.status !== "hidden"
        ) {
          return { ...block, status: "hover" };
        }

        return block;
      });
    });
  };

  const handleHoverEnd = (target: number) => {
    setTimeout(() => {
      setBlocks((prev) => {
        return prev.map((block, i) => {
          if (
            i === target &&
            block.status !== "pressed" &&
            block.status !== "flush" &&
            block.status !== "hidden"
          ) {
            return { ...block, status: "neutral" };
          }

          return block;
        });
      });
    }, 150);
  };

  const handleTap = (target: number) => {
    if (target === 0 && blocks[target].status !== "flush") glissando();

    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (
          i === target &&
          block.status !== "flush" &&
          block.status !== "hidden"
        ) {
          return { ...block, status: i === 0 ? "flush" : "pressed" };
        }

        return block;
      });
    });
  };

  const handleClose = (target: number) => {
    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (i === target) return { ...block, status: "neutral" };
        return block;
      });
    });
  };

  return (
    <section id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className="gradient-text">schedule</h2>
      </div>
      <motion.ul className="flex flex-col pt-24">
        {blocks.map(({ name, time, location, description, status }, i) => {
          return (
            <ScheduleBlock
              name={name}
              time={time}
              location={location}
              width={width}
              status={status}
              handleHoverStart={() => handleHoverStart(i)}
              handleHoverEnd={() => handleHoverEnd(i)}
              handleTap={() => handleTap(i)}
              handleClose={() => handleClose(i)}
              key={name + time + location + description}
            >
              {description}
            </ScheduleBlock>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default ScheduleSection;
