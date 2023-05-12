import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Session } from "next-auth";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
  session: Session | null;
  onClick: () => void;
}

const MobileMenu = ({ open, session, onClick }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed left-0 top-0 z-20 h-screen w-full border-b border-b-blue-dark bg-blue-dark md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex h-screen flex-col items-center justify-center gap-8 text-gold">
            <NavItem to="about" onClick={onClick}>
              about
            </NavItem>
            <NavItem to="schedule" onClick={onClick}>
              schedule
            </NavItem>
            <NavItem to="faq" onClick={onClick}>
              faq
            </NavItem>
            <NavItem to="sponsors" onClick={onClick}>
              sponsors
            </NavItem>
            <Link
              className="cursor-pointer font-header text-lg font-medium"
              href={session ? "/dashboard" : "/login"}
            >
              {session ? "dashboard" : "login"}
            </Link>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
