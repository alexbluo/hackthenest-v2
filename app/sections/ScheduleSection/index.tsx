"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { flushSync } from "react-dom";
import useWindowWidth from "utils/useWindowWidth";
import ScrollIndicator from "./ScrollIndicator";

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
  description?: ReactNode;
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
    time: "8:00 - 10:00",
    location: "Lobby",
    description:
      "Late check-in will last throughout the entire day, but please try to arrive before opening ceremony!",
    status: "neutral",
  },
  {
    name: "Breakfast",
    time: "8:00 - 10:00",
    location: "Kitchen",
    description: "Start your hacking with some baked goods!",
    status: "neutral",
  },
  {
    name: "Opening Ceremony",
    time: "9:30 - 10:00",
    location: "P&G",
    description: "An exciting kickoff to the weekend!",
    status: "neutral",
  },
  {
    name: "Team Formation",
    time: "10:00 - 11:00",
    location: "P&G",
    description:
      "Find your perfect team in this pitch-based team formation session.",
    status: "neutral",
  },
  {
    name: "iHARP Talk",
    time: "10:30 - 11:00",
    location: "P&G",
    description:
      "More Details Soon...", // todo
    status: "neutral",
  },
  {
    name: "Lunch",
    time: "11:00 - 12:00",
    location: "Kitchen",
    description: "Wouldn't be a hackathon without pizza :)",
    status: "neutral",
  },
  {
    name: "Student Justice Alliance",
    time: "12:00 - 1:00",
    location: "363",
    description: "Solving social injustices is a problem-solving exercise. In this interactive workshop, we’ll break down systemic injustices, explore creative solutions, and challenge you to design bold, impact-driven strategies to disrupt inequality.",
    status: "neutral",
  },
  {
    name: "Intro to Git",
    time: "1:00 - 2:00",
    location: "363",
    description:
      "Every project needs some sort of version management, and the most prevalent tool for it is Git. Learn how to share and sync your code with your team, from Git installation to your first commit (with Pokemon)! ",
    status: "neutral",
  },
  {
    name: "Intro to Python",
    time: "2:00 - 3:00",
    location: "363",
    description:
      "More Details Soon...", // todo
    status: "neutral",
  },
  {
    name: "Intro to Machine Learning",
    time: "3:00 - 4:00",
    location: "363",
    description:
      "Join us for a gentle introduction into the world of Machine Learning where we'll familiarize ourselves with the likes of linear regression, logistic regression, and K-means clustering, all while discovering how you can apply these algorithms to your own project!",
    status: "neutral",
  },
  {
    name: "Intro to Competitive Programming",
    time: "4:00 - 5:00",
    location: "363",
    description: "More Details Soon...", // todo
    status: "neutral",
  },
  {
    name: "Chess Tournament",
    time: "5:00 - 6:00",
    location: "363",
    description:
      "More Details Soon...", // todo
    status: "neutral",
  },
  {
    name: "Dinner",
    time: "6:00 - 8:00",
    location: "Kitchen",
    description: "Keep expressing your creativity with Panda Express!",
    status: "neutral",
  },
  {
    name: "Monkeytype Contest",
    time: "8:00 - 9:00",
    location: "363",
    description: "Tournament-style battle for honor and glory... and a new keyboard? 👀",
    status: "neutral",
  },
  {
    name: "Karaoke!",
    time: "9:00 - 11:00",
    location: "363",
    description: "Sing your heart out to your favorite songs!",
    status: "neutral",
  },
];

const sunday: Block[] = [
  {
    name: (
      <div className="flex w-full items-center justify-between">
        <p>Sunday</p>
        <svg
          className="stroke-gold"
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
    name: "Movie Night",
    time: "12:00 - 2:00",
    location: "363",
    description:
      "More details soon...",
    status: "neutral",
  },
  {
    name: "Cookie Debugging",
    time: "2:00 - 3:00",
    location: "Coworking",
    description: "Bring us a bug and we'll give you cookies in return!",
    status: "neutral",
  },
  {
    name: "Breakfast",
    time: "8:00 - 9:00",
    location: "Kitchen",
    description: "Final stretch! Energize with bagels & cream cheese.",
    status: "neutral",
  },
  {
    name: "Judging & Expo",
    time: "10:00 - 12:00",
    location: "P&G + Coworking",
    description: "Showcase your creations! See full details on Devpost",
    status: "neutral",
  },
  {
    name: "Closing Ceremony",
    time: "12:00 - 12:30",
    location: "P&G",
    description: "",
    status: "neutral",
  },
];

// TODO: add gcal link
const ScheduleSection = () => {
  const [day, cycleDay] = useCycle("Saturday", "Sunday");
  const [blocks, setBlocks] = useState(saturday);
  const width = useWindowWidth();

  // for scroll shadow and bird animation
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [shadow, setShadow] = useState<boolean>(true);
  const [indicator, setIndicator] = useState<boolean>(true);
  const [bird, setBird] = useState<"up" | "down">("up");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // initial value of latest is 1 so shadow doesnt render without this
    if (shadow && latest === 1) return;

    if (latest >= 0.8) setShadow(false);
    else setShadow(true);

    if (latest < 0.5) setBird("up");
    else setBird("down");

    // hide indicator on scroll
    setIndicator(false);
  });

  useEffect(() => {
    const incoming = day === "Saturday" ? saturday : sunday;

    // idk why setState comes after increment
    let iteration = -1;
    const maxIterations = Math.max(saturday.length, sunday.length);

    const interval = setInterval(() => {
      // INCREMENT HAS TO BE HERE, BOTTOM CAUSES WEIRD FUNKY BUG IDK WHY PLEASE DONT DO IT
      iteration += 1;

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

      if (iteration === maxIterations + 3) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [day]);

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
    if (target === 0 && blocks[target].status !== "flush") cycleDay();

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
      <div className="flex flex-col gap-12 xl:flex-row">
        {/* overflow hidden for extra shadow edges */}
        <div className="w-full overflow-hidden xl:w-1/2">
          <motion.ul
            className="relative mt-12 flex max-h-[36rem] flex-col no-scrollbar overflow-y-scroll pt-12"
            ref={containerRef}
          >
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
            <div className="absolute bottom-4 right-8">
              <ScrollIndicator visible={indicator} />
            </div>
          </motion.ul>
          <div
            className={`h-4 rotate-180 shadow-lg duration-200 ease-in-out ${shadow ? "shadow-transparent" : "shadow-transparent"
              }`}
          ></div>
        </div>
        <div className="w-full p-12 xl:w-1/2">
          <div className="relative flex aspect-square items-center justify-center">
            <Image
              className={bird === "up" ? "visible" : "hidden"}
              src="/bird-up.png"
              alt="schedule bird up"
              priority
              fill
            />
            <Image
              className={bird === "down" ? "visible" : "hidden"}
              src="/bird-down.png"
              alt="schedule bird down"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
