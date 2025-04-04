"use client";

import { useLayoutEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import Link from "next/link";
import { Session } from "next-auth";
import lockScroll from "utils/lockScroll";
import useWindowWidth from "utils/useWindowWidth";
import MobileNavToggle from "./MobileNavToggle";
import NavItem from "./NavItem";

interface Props {
  session: Session | null;
}

const MobileNav = ({ session }: Props) => {
  const [open, toggleOpen] = useCycle(false, true);
  const width = useWindowWidth();

  useLayoutEffect(() => {
    if (open && width < 768) lockScroll(true);
    else if (open && width >= 768) lockScroll(false);
    else if (!open) lockScroll(false);
  }, [open, width]);

  const handleClick = () => {
    toggleOpen(); // Toggle the state without passing any event
  };

  return (
    <>
      <MobileNavToggle open={open} toggleOpen={toggleOpen} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed left-0 top-0 z-20 h-screen w-full border-b border-b-blue-dark bg-blue-dark md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex h-screen flex-col items-center justify-center gap-8 text-gold">
              {/* <NavItem to="about" onClick={toggleOpen}>
                about
              </NavItem>
              <NavItem to="schedule" onClick={toggleOpen}>
                schedule
              </NavItem>
              <NavItem to="faq" onClick={toggleOpen}>
                faq
              </NavItem>
              <NavItem to="sponsors" onClick={toggleOpen}>
                sponsors
              </NavItem> */}
              <Link onClick={handleClick} href="/recap">
                recap
              </Link>
              <Link onClick={handleClick} href="#about">
                about
              </Link>
              <Link onClick={handleClick} href="#schedule">
                schedule
              </Link>
              <Link onClick={handleClick} href="#faq">
                faq
              </Link>
              <Link onClick={handleClick} href="#sponsors">
                sponsors
              </Link>
              <Link
                href={session ? "/dashboard" : "/login"}
              >
                {session ? "dashboard" : "login"}
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
