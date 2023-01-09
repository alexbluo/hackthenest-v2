import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";
import Image from "next/image";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute top-32 left-0 z-50 w-full border-b border-b-blue-dark bg-blue-dark lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            <NavItem to="about">About</NavItem>
            <NavItem to="schedule">Schedule</NavItem>
            <NavItem to="faq">FAQ</NavItem>
            <NavItem to="sponsors">Sponsors</NavItem>

            <div className="flex h-8 w-full justify-center gap-8">
              <div className="relative aspect-square h-full">
                <a href="https://www.instagram.com/hackthenest_">
                  <Image src="/instagram.svg" alt="instagram" fill />
                </a>
              </div>

              {/* TODO: check */}
              <div className="relative aspect-square h-full">
                <a href="https://www.facebook.com/hackthenest">
                  <Image src="/facebook.svg" alt="facebook" fill />
                </a>
              </div>

              <div className="relative aspect-square h-full">
                <a href="https://www.twitter.com/hackthenest">
                  <Image src="/twitter.svg" alt="twitter" fill />
                </a>
              </div>

              <div className="relative aspect-square h-full">
                <a href="https://www.linkedin.com/company/hackthenest/">
                  <Image src="/linkedin.svg" alt="linkedin" fill />
                </a>
              </div>

              <div className="relative aspect-square h-full">
                <a href="https://www.linkedin.com/company/hackthenest/">
                  <Image src="/github.svg" alt="github" fill />
                </a>
              </div>
            </div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
