/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

interface Props {
  to: string;
  children: string;
  onClick?: () => void;
}

const NavItem = ({ to, children, onClick }: Props) => {

  const router = useRouter();
  const handleClick = async () => {
    if (router.pathname !== '/') {
      // Navigate to the root page first
      await router.push('/');
    }

    // Scroll to the target ID after navigation
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <li>
      <button onClick={handleClick} className="text-md cursor-pointer font-mono font-medium">
        {children}
      </button>
    </li >
  );
};

export default NavItem;
