import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 left-0 z-20 h-screen w-full border-b border-b-blue-dark bg-blue-dark sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex h-screen flex-col items-center justify-center gap-8 text-gold">
            <NavItem to="about">About</NavItem>
            <NavItem to="schedule">Schedule</NavItem>
            <NavItem to="faq">FAQ</NavItem>
            <NavItem to="sponsors">Sponsors</NavItem>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
