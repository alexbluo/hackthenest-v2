import { useState } from "react";
import { motion } from "framer-motion";

const Path = (props: any) => {
  return (
    <motion.path
      className="stroke-white"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  );
};

interface Props {
  question: string;
  children: string;
}

const FAQ = ({ question, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex cursor-pointer select-none items-center justify-between text-xl"
        onClick={() => setOpen(!open)}
      >
        <h3 className="cursor-pointer select-none text-xl">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          <Path d="M 4 12 L 20 12" />
          <Path
            animate={open ? "open" : "closed"}
            d="M 12 4 L 12 20"
            // variants={{
            //   closed: { rotate: 0 },
            //   open: { rotate: 90 },
            // }}
            variants={{
              closed: { d: "M 12 4 L 12 20" },
              open: { d: "M 12 12 L 12 12" },
            }}
            transition={{
              ease: "easeIn",
              duration: 0.2,
            }}
          />
        </svg>
      </button>
      <motion.div
        className="text-md overflow-y-hidden pt-2"
        initial={{
          height: 0,
        }}
        animate={open ? "open" : "closed"}
        variants={{ closed: { height: 0 }, open: { height: "auto" } }}
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FAQ;
