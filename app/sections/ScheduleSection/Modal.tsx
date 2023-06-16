import { ReactNode } from "react";
import { AnimatePresence, motion, TapInfo } from "framer-motion";

interface Props {
  visible: boolean;
  width: number;
  children: ReactNode;
  onTap: (event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void;
}

const Modal = ({ visible, width, children, onTap }: Props) => {
  if (width > 768) {
    width *= 0.5;
  } else {
    width *= 0.8;
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed top-0 left-0 z-50 flex h-screen w-screen cursor-pointer items-center justify-center bg-black/95"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
            onTap={onTap}
          ></motion.div>
          <motion.div
            className="shadow-logo fixed top-1/2 left-1/2 z-50 aspect-[2] w-4/5 origin-bottom -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-blue-light p-8 text-lg text-white shadow-lg md:w-1/2"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
          >
            {children}
          </motion.div>
          <svg
            className="fixed top-1/2 left-1/2 z-50 -translate-y-1/2 -translate-x-1/2 overflow-visible"
            width={width}
            height={width / 2}
          >
            <motion.rect
              className=" fill-transparent stroke-gold"
              width={width}
              height={width / 2}
              strokeWidth="4px"
              rx="24px"
              strokeDasharray={width * 3}
              strokeDashoffset={width * 3}
              animate={{
                strokeDashoffset: 0,
              }}
              exit={{
                strokeDashoffset: width * 3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            ></motion.rect>
          </svg>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
