import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useCycle, useAnimate } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";
import WaitClientLoad from "../../utils/WaitClientLoad";
import ScheduleBlock from "../ScheduleBlock";

interface Block {
  name: string;
  time: string;
  description?: string;
  status: "neutral" | "hover" | "pressed";
}

const saturday: Block[] = [
  {
    name: "Saturday",
    time: "9.23.23",
    status: "neutral",
  },
  {
    name: "Check-in",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Team Formation",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Opening Ceremony",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Lunch",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Dinner",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Ping Pong",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
];

const sunday: Block[] = [
  {
    name: "Sunday",
    time: "9.24.23",
    status: "neutral",
  },
  {
    name: "Hacking Ends",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Judging",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Closing Ceremony",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Breakfast",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Workshop",
    time: "9:00am - 10:00am",
    description: "description here",
    status: "neutral",
  },
];

const ScheduleSection = () => {
  const [day, cycleDay] = useCycle("Saturday", "Sunday");
  const [blocks, setBlocks] = useState(saturday);
  const width = useWindowWidth();

  useEffect(() => {
    if (day === "Saturday") setBlocks(saturday);
    if (day === "Sunday") setBlocks(sunday);
  }, [day]);

  const handleHoverStart = (i: number) => {
    setBlocks((prev) => {
      return prev.map((block, pos) => {
        if (pos === i && block.status !== "pressed") {
          return { ...block, status: "hover" };
        }

        return block;
      });
    });
  };

  // have to use callbacks in setState
  // https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component
  const handleHoverEnd = (i: number) => {
    setBlocks((prev) => {
      return prev.map((block, pos) => {
        if (pos === i && block.status !== "pressed") {
          return { ...block, status: "neutral" };
        }

        return block;
      });
    });
  };

  const handleTap = (i: number) => {
    if (i === 0) cycleDay();

    setBlocks((prev) => {
      return prev.map((block, pos) => {
        if (pos === i) return { ...block, status: "pressed" };
        return block;
      });
    });
  };

  const handleClose = (i: number) => {
    setBlocks((prev) => {
      return prev.map((block, pos) => {
        if (pos === i) return { ...block, status: "neutral" };
        return block;
      });
    });
  };

  return (
    <section id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className="text-gradient">schedule</h2>
      </div>
      <WaitClientLoad>
        {width > 768 ? (
          <AnimatePresence mode="wait">
            <motion.div className="flex flex-col pt-40">
              <motion.div
                variants={{ pressed: { transition: { staggerChildren: 0.5 } } }}
              >
                {blocks.map(({ name, time, description, status }, i) => {
                  return (
                    <ScheduleBlock
                      name={name}
                      time={time}
                      width={width}
                      order={i}
                      status={status}
                      cycle={i === 0}
                      handleHoverStart={() => handleHoverStart(i)}
                      handleHoverEnd={() => handleHoverEnd(i)}
                      handleTap={() => handleTap(i)}
                      handleClose={() => handleClose(i)}
                      key={name + time + description}
                    >
                      {description}
                    </ScheduleBlock>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div></div>
        )}
      </WaitClientLoad>
    </section>
  );
};

export default ScheduleSection;
