import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

const Status = ({ status }: Props) => {
  let text;
  if (status === "COMPLETE") text = "complete";
  else if (status === "INCOMPLETE") text = "incomplete";
  else if (status === "UNAVAILABLE") text = "coming soon";

  return (
    <motion.div
      className={classNames(
        "flex h-full w-16 cursor-pointer items-center justify-center rounded-r-md overflow-visible bg-gold py-4 text-center text-lg text-black",
        { "bg-gold": status === "INCOMPLETE" },
        { "bg-green": status === "COMPLETE" },
        { "bg-grey": status === "UNAVAILABLE" }
      )}
      whileHover="hover"
    >
      <motion.div
        className="absolute w-fit select-none rounded-md bg-blue-light px-4 py-1 font-mono text-sm"
        initial={{ y: -16, opacity: 0 }}
        variants={{
          hover: {
            y: -46,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default Status;
