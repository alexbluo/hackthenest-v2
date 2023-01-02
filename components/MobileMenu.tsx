import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  return (
    <AnimatePresence>
      {/* look in lab for better solution */}
      {open && (
        <motion.div
          className="border-b-peach bg-raisin absolute top-20 left-0 z-50 w-full border-b border-b-blue-dark sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex flex-col gap-4 p-4 text-center">
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
