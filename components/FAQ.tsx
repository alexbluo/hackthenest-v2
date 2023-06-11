import { ReactNode } from "react";
import { motion } from "framer-motion";

const Path = (props: any) => {
  return <motion.path strokeWidth="3" strokeLinecap="round" {...props} />;
};

interface Props {
  question: string;
  open: boolean;
  children: ReactNode;
  onClick: () => void;
}

const FAQ = ({ question, open, children, onClick }: Props) => {
  return (
    <div className="flex flex-col">
      <button
        className="flex cursor-pointer select-none items-center justify-between text-xl"
        onClick={onClick}
      >
        <motion.h3
          className="cursor-pointer select-none whitespace-pre-line text-left text-xl text-white"
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
        >
          {question}
        </motion.h3>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          animate={open ? "open" : "closed"}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          variants={{
            closed: {
              stroke: "#ffffff",
            },
            open: { stroke: "#ffbd59" },
          }}
        >
          <Path d="M 4 12 L 20 12" />
          <Path
            d="M 12 4 L 12 20"
            variants={{
              closed: { d: "M 12 4 L 12 20" },
              open: { d: "M 12 12 L 12 12" },
            }}
          />
        </motion.svg>
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
