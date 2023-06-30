"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  href?: string;
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

// TODO: add status hover with description
const DashboardButton = ({ name, href, status }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (!href) return;
    if (status === "INCOMPLETE") router.push(href);
  };

  return (
    <div className="flex h-16 w-full items-center gap-1 overflow-hidden rounded-md bg-black">
      <button
        className={classNames(
          "flex h-full w-full items-center px-6 text-lg text-black",
          { "gradient-bg": status === "INCOMPLETE" },
          { "cursor-default bg-grey": status === "COMPLETE" },
          { "cursor-default bg-grey": status === "UNAVAILABLE" }
        )}
        onClick={handleClick}
      >
        {name}
      </button>
      <div
        className={classNames(
          "h-full w-16 cursor-default bg-gold py-4 text-center text-lg text-black",
          { "bg-gold": status === "INCOMPLETE" },
          { "bg-green": status === "COMPLETE" },
          { "bg-grey": status === "UNAVAILABLE" }
        )}
      ></div>
    </div>
  );
};

export default DashboardButton;
