"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  confirm: string | undefined;
}

// TODO: change to close button instead of automatic fade? onclick setstate to fade display none variant
const Confirmation = ({ confirm }: Props) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!confirm) return null;

  let text;
  if (confirm === "hackerapp") {
    text =
      "Thank you for submitting a hacker app - be on the lookout for emails from us in the future!";
  } else if (confirm === "volunteerapp") {
    text =
      "Thank you for submitting a volunteer app - be on the lookout for emails from us in the future!";
  }

  return (
    <motion.div
      className="mb-8 flex h-16 w-full items-center justify-between rounded-md bg-green px-6"
      animate={visible || "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          transitionEnd: { display: "none" },
        },
      }}
      transition={{ duration: 0.4 }}
    >
      {text}
      <svg
        className="cursor-pointer stroke-black"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth={3}
        strokeLinecap="round"
        onClick={() => setVisible(false)}
      >
        <path d="M 6 18 L 18 6" />
        <path d="M 6 6 L 18 18" />
      </svg>
    </motion.div>
  );
};

export default Confirmation;
