import { Link } from "react-scroll";

interface Props {
  to: string;
  children: string;
}

const NavItem = ({ to, children }: Props) => {
  return (
    <li>
      <Link
        className="text-green-apple cursor-pointer text-lg font-medium"
        to={to}
        duration={600}
        smooth="easeInOutQuart"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
