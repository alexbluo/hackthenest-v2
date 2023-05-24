/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";

interface Props {
  to: string;
  children: string;
  onClick?: () => void;
}

const NavItem = ({ to, children, onClick }: Props) => {
  return (
    <li>
      <Link
        className="cursor-pointer font-mono text-lg font-medium"
        to={to}
        duration={600}
        smooth="easeInOutQuart"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
