import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visible: boolean;
}

const ScrollIndicator = ({ visible }: Props) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="flex h-8 w-4 justify-center rounded-full border-2 border-white opacity-50"
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="my-1 w-1 rounded-full border-2 border-white"
            initial={{ height: ".25rem", opacity: 1 }}
            animate={{
              height: "1.25rem",
              opacity: 0,
            }}
            transition={{ repeat: Infinity, repeatDelay: 0.4, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
