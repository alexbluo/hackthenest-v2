import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../components/Modal";

interface Props {
  name: ReactNode;
  time: string;
  location: string;
  width: number;
  status: "neutral" | "hover" | "pressed" | "flush" | "hidden";
  children?: string;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  handleTap: () => void;
  handleClose: () => void;
}

// TODO: add gcal link
const ScheduleBlock = ({
  name,
  time,
  location,
  width,
  status,
  children,
  handleHoverStart,
  handleHoverEnd,
  handleTap,
  handleClose,
}: Props) => {
  // 384 default 96rem
  const [blockWidth, setBlockWidth] = useState(384);

  useEffect(() => {
    if (width < 640) setBlockWidth(width - 64 - 81);
    else setBlockWidth(384);
  }, [width]);

  return (
    <li className="relative sm:odd:ml-12">
      {/* front panel */}
      <motion.button
        className="relative bottom-[46px] left-20 h-16 origin-bottom-left text-ellipsis bg-blue-mid text-left text-lg"
        style={{ width: blockWidth }}
        animate={status}
        initial="flush"
        variants={{
          neutral: {
            x: 0,
            y: 0,
            filter: "brightness(1)",
            opacity: 1,
          },
          hover: {
            x: "-20px",
            y: "11.5px",
            filter: "brightness(0.75)",
            opacity: 1,
          },
          pressed: {
            x: "-60px",
            y: "34.5px",
            filter: "brightness(0.5)",
            opacity: 1,
          },
          flush: {
            x: "-80px",
            y: "46px",
            filter: "brightness(0.25)",
            opacity: 1,
          },
          hidden: {
            x: "-80px",
            y: "46px",
            transitionEnd: { opacity: 0 },
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
        <h3 className="text-ellipsis px-6 sm:px-8 whitespace-nowrap overflow-hidden">{name}</h3>
      </motion.button>
      {/* left panel */}
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center overflow-hidden whitespace-nowrap bg-blue-dark"
        animate={status}
        initial="flush"
        variants={{
          neutral: { width: "80px" },
          hover: { width: "60px" },
          pressed: { width: "20px" },
          flush: { width: 0 },
        }}
        exit="flush"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <span className="pl-4">{time.substring(0, time.indexOf(" "))}</span>
      </motion.div>
      {/* bottom panel */}
      <motion.div
        className="absolute bottom-0 origin-bottom-left -skew-x-[60deg] bg-blue-dark brightness-75"
        style={{ width: blockWidth }}
        animate={status}
        initial="flush"
        variants={{
          neutral: { height: "46px" },
          hover: { height: "34.5px" },
          pressed: { height: "11.5px" },
          flush: { height: 0 },
        }}
        exit="flush"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      />
      {/* only for non-cycle blocks for stricter type safety on modal title */}
      {typeof name === "string" && (
        <Modal
          visible={status === "pressed"}
          width={width}
          title={`${name} @ ${location}`}
          subtitle={time}
          onTap={handleClose}
        >
          {children}
        </Modal>
      )}
    </li>
  );
};

export default ScheduleBlock;
