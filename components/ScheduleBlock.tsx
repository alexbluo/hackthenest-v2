import { useState } from "react";
import classNames from "classnames";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import Modal from "./Modal";

interface Props {
  name: string;
  time: string;
  width: number;
  order: "even" | "odd";
  children: string;
}

const ScheduleBlock = ({ name, time, width, order, children }: Props) => {
  const [status, setStatus] = useState<
    boolean | TargetAndTransition | VariantLabels | undefined
  >("neutral");

  const handleHoverStart = () => {
    if (status !== "pressed") setStatus("hover");
  };

  const handleHoverEnd = () => {
    if (status !== "pressed") setStatus("neutral");
  };

  const handleTap = () => {
    setStatus("pressed");
  };

  const handleClose = () => {
    setStatus("neutral");
  };

  return (
    <div className={classNames("relative", { "ml-12": order === "even" })}>
      <motion.button
        className="relative left-40 bottom-[92px] flex h-16 w-96 origin-bottom-left items-center bg-blue-light px-8 text-lg"
        animate={status}
        initial="pressed"
        variants={{
          neutral: {
            x: 0,
            y: 0,
            filter: "brightness(1)",
          },
          hover: {
            x: "-40px",
            y: "23px",
            filter: "brightness(0.75)",
          },
          pressed: {
            x: "-160px",
            y: "92px",
            filter: "brightness(0.5)",
          },
        }}
        exit="pressed"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onFocus={handleHoverStart}
        onBlur={handleHoverEnd}
        onTap={handleTap}
      >
        {name}
      </motion.button>
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center overflow-hidden whitespace-nowrap bg-blue-mid"
        animate={status}
        initial="pressed"
        variants={{
          neutral: { width: "160px" },
          hover: { width: "120px" },
          pressed: { width: 0 },
        }}
        exit="pressed"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <span className="pl-4">{time}</span>
      </motion.div>
      <motion.div
        className="absolute bottom-0 h-[92px] w-96 origin-bottom-left -skew-x-[60deg] bg-blue-dark "
        animate={status}
        initial="pressed"
        variants={{
          neutral: { height: "92px" },
          hover: { height: "69px" },
          pressed: { height: 0 },
        }}
        exit="pressed"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      ></motion.div>
      <Modal visible={status === "pressed"} width={width} onTap={handleClose}>
        {children}
      </Modal>
    </div>
  );
};

export default ScheduleBlock;
