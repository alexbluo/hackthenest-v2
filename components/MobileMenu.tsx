import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Session } from "next-auth";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
  session: Session | null;
}

const MobileMenu = ({ open, session }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 left-0 z-20 h-screen w-full border-b border-b-blue-dark bg-blue-dark md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex h-screen flex-col items-center justify-center gap-8 text-gold">
            <NavItem to="about">about</NavItem>
            <NavItem to="schedule">schedule</NavItem>
            <NavItem to="faq">faq</NavItem>
            <NavItem to="sponsors">sponsors</NavItem>
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
