import { useState } from "react";
import { HackerApp, VolunteerApp } from "@prisma/client";
import { motion } from "framer-motion";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  // display name
  fieldName: string;
  // internal name
  name: keyof HackerApp | keyof VolunteerApp;
  // placeholder display text
  placeholder: string;
  // max length of characters for phone number
  maxLength?: number;
  // register function from RHF
  register: UseFormRegister<any>;
  // error message
  error: FieldError | undefined;
}

const ApplicationInput = ({
  fieldName,
  name,
  placeholder,
  maxLength,
  register,
  error,
}: Props) => {
  const [focus, setFocus] = useState<string>("unfocused");

  return (
    <div className="w-full">
      <h3>
        {fieldName} {error && <span className="text-red">{error.message}</span>}
      </h3>
      <motion.input
        className="w-full border-b-2 border-grey bg-black bg-transparent py-1 placeholder-grey duration-200 ease-in-out"
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        {...register(name)}
        onFocus={() => setFocus("focused")}
        onBlur={() => setFocus("unfocused")}
      />
      <motion.svg
        className="z-50 -my-[2px] h-1 w-full stroke-blue-mid"
        animate={focus}
      >
        <motion.line
          x1="0"
          y1="0"
          x2="0%"
          y2="0"
          strokeWidth={5}
          variants={{
            focused: { x2: "100%" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

export default ApplicationInput;
