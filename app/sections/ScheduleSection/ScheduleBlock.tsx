import { ReactNode } from "react";
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
// TODO: add hidden state to all panels
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
  const blockWidth = () => {
    if (width < 640) return width - 64 - 81;
    return 384;
  };

  return (
    <li className="relative sm:odd:ml-12" style={{ width: blockWidth() }}>
      {/* front panel */}
      <motion.button
        className="relative bottom-[46px] left-20 h-16 w-full origin-bottom-left text-ellipsis bg-blue-mid text-left text-lg"
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
            opacity: 0,
          },
        }}
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
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap px-6 sm:px-8">
          {name}
        </h3>
      </motion.button>
      {/* left panel */}
      <motion.div
        className="absolute bottom-0 flex h-16 w-40 origin-bottom-left -skew-y-[30deg] items-center overflow-hidden whitespace-nowrap bg-blue-dark"
        animate={status}
        initial="flush"
        variants={{
          neutral: { width: "80px", opacity: 1 },
          hover: { width: "60px", opacity: 1 },
          pressed: { width: "20px", opacity: 1 },
          flush: { width: 0, opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <span className="pl-4">{time.substring(0, time.indexOf(" "))}</span>
      </motion.div>
      {/* bottom panel */}
      <motion.div
        className="absolute bottom-0 w-full origin-bottom-left -skew-x-[60deg] bg-blue-dark brightness-75"
        animate={status}
        initial="flush"
        variants={{
          neutral: { height: "46px", opacity: 1 },
          hover: { height: "34.5px", opacity: 1 },
          pressed: { height: "11.5px", opacity: 1 },
          flush: { height: 0, opacity: 1 },
          hidden: { opacity: 0 },
        }}
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
