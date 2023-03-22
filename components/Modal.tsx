import { ReactNode } from "react";
import { AnimatePresence, motion, TapInfo } from "framer-motion";

interface Props {
  visible: boolean;
  children: ReactNode;
  onTap: (event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void;
}

const Modal = ({ visible, children, onTap }: Props) => {
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
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
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
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {children}
          </motion.div>
          <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full">
            <svg className="overflow-visible" width={200} height={100}>
              <motion.rect
                className="origin-center fill-transparent stroke-gold"
                width={200}
                height={100}
                strokeWidth="4px"
                rx="1.5rem"
                strokeDasharray={600}
                strokeDashoffset={600}
                animate={{
                    strokeDashoffset: 0,
                    transition: {
                      duration: 4,
                  },
                }}
              ></motion.rect>
            </svg>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
