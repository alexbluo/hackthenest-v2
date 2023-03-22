import { useState } from "react";
import classNames from "classnames";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import Modal from "./Modal";

interface Props {
  name: string;
  time: string;
  order: "even" | "odd";
  children: string;
}

const ScheduleBlock = ({ name, time, order, children }: Props) => {
  const [status, setStatus] = useState<
    boolean | TargetAndTransition | VariantLabels | undefined
  >(undefined);

  const handleHoverStart = () => {
    if (status !== "pressed") setStatus("hover");
  };

  const handleHoverEnd = () => {
    if (status !== "pressed") setStatus(undefined);
  };

  const handleTap = () => {
    setStatus("pressed");
  };

  const handleClose = () => {
    setStatus(undefined);
  };

  return (
    <div className={classNames("relative", { "ml-12": order === "even" })}>
      <motion.div
        className="relative left-40 bottom-[92px] flex h-16 w-96 origin-bottom-left items-center justify-center bg-blue-light px-4 text-center text-lg"
        animate={status}
        variants={{
          hover: {
            x: "-40px",
            y: "23px",
          },
          pressed: {
            x: "-160px",
            y: "92px",
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onTap={handleTap}
      >
        {name}
      </motion.div>
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center justify-center overflow-hidden whitespace-nowrap bg-blue-mid text-center"
        animate={status}
        variants={{
          hover: { width: "120px" },
          pressed: { width: 0 },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      >
        {time}
      </motion.div>
      <motion.div
        className="absolute bottom-0 h-[92px] w-96 origin-bottom-left -skew-x-[60deg] bg-blue-dark "
        animate={status}
        variants={{
          hover: { height: "69px" },
          pressed: { height: 0 },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div>
      <Modal visible={status === "pressed"} onTap={handleClose}>
        {children}
      </Modal>
    </div>
    // <button className="button-thing">{name}</button>
  );
};

export default ScheduleBlock;
