import { ReactNode } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Modal from "./Modal";

interface Props {
  name: ReactNode;
  time: string;
  width: number;
  order: number;
  status: "neutral" | "hover" | "pressed" | "flush";
  children?: string;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  handleTap: () => void;
  handleClose: () => void;
}

const ScheduleBlock = ({
  name,
  time,
  width,
  order,
  status,
  children,
  handleHoverStart,
  handleHoverEnd,
  handleTap,
  handleClose,
}: Props) => {
  return (
    <li className={classNames("relative", { "sm:ml-12": order % 2 === 0 })}>
      <motion.button
        className="relative bottom-[92px] left-40 flex h-16 w-96 origin-bottom-left items-center justify-between bg-blue-light px-8 text-lg"
        animate={status}
        initial="flush"
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
            x: "-120px",
            y: "69px",
            filter: "brightness(0.5)",
          },
          flush: {
            x: "-160px",
            y: "92px",
            filter: "brightness(0.25)",
          },
        }}
        exit="flush"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        onFocus={handleHoverStart}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onBlur={handleHoverEnd}
        onTap={handleTap}
      >
        {name}
      </motion.button>
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center overflow-hidden whitespace-nowrap bg-blue-mid"
        animate={status}
        initial="flush"
        variants={{
          neutral: { width: "160px" },
          hover: { width: "120px" },
          pressed: { width: "40px" },
          flush: { width: 0 },
        }}
        exit="flush"
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
        initial="flush"
        variants={{
          neutral: { height: "92px" },
          hover: { height: "69px" },
          pressed: { height: "23px" },
          flush: { height: 0 },
        }}
        exit="flush"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      ></motion.div>
      <Modal
        visible={status === "pressed" && order !== 0}
        width={width}
        onTap={handleClose}
      >
        {children}
      </Modal>
    </li>
  );
};

export default ScheduleBlock;
