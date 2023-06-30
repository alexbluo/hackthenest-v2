import { ReactNode, useLayoutEffect } from "react";
import { AnimatePresence, motion, TapInfo } from "framer-motion";
import lockScroll from "utils/lockScroll";

interface Props {
  visible: boolean;
  width: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  onTap: (event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void;
}

const Modal = ({ visible, width, title, subtitle, children, onTap }: Props) => {
  let height;

  if (width >= 1024) {
    width *= 0.5;
    height = width * 0.5;
  } else {
    width *= 0.8;
    height = width * 0.8;
  }
  const borderLength = width * 2 + height * 2;

  useLayoutEffect(() => {
    if (visible) lockScroll(true);
    else lockScroll(false);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* background */}
          <motion.div
            className="fixed left-0 top-0 z-50 flex h-screen w-screen cursor-pointer items-center justify-center bg-black/95 lg:text-ellipsis"
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
          {/* content window */}
          <motion.div
            className="shadow-logo fixed left-1/2 top-1/2 z-50 flex w-4/5 origin-bottom -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-3xl bg-blue-mid p-8 text-left text-lg text-white shadow-lg lg:w-1/2"
            style={{ height }}
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
            <div>
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <h4 className="font-medium">{subtitle}</h4>
            </div>
            <div className="overflow-y-auto">{children}</div>
          </motion.div>
          {/* animated border */}
          <svg
            className="pointer-events-none fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-visible"
            width={width}
            height={height}
          >
            <motion.rect
              className="fill-transparent stroke-gold"
              width={width}
              height={height}
              strokeWidth="4px"
              rx="24px"
              strokeDasharray={borderLength}
              strokeDashoffset={borderLength}
              animate={{
                strokeDashoffset: 0,
              }}
              exit={{
                strokeDashoffset: borderLength,
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
