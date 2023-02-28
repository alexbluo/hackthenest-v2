import Link from "next/link";
import useGradient from "../utils/useGradient";

const DashboardButton = () => {
  return (
    <div className="flex w-full">
      <Link
        className={`${useGradient()} w-full rounded-l-md py-4 text-center text-lg text-black`}
        href="/application"
      >
        Hacker Application
      </Link>
      <Link
        className="w-full rounded-r-md bg-gold py-4 text-center text-lg text-black"
        href="/application"
      >
        COMPLETE
      </Link>
    </div>
  );
};

export default DashboardButton;
