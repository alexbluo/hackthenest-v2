"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import useHackerText from "utils/useHackerText";

interface Props {
  name: string;
  href?: string;
  status: "COMPLETE" | "INCOMPLETE" | "UNAVAILABLE";
}

const DashboardButton = ({ name, href, status }: Props) => {
  const [animatedName, animate] = useHackerText(name);

  const router = useRouter();

  const handleHover = () => {
    if (status === "INCOMPLETE") animate({ duration: 500 });
  };

  const handleClick = () => {
    if (!href) return;
    if (status === "INCOMPLETE") router.push(href);
  };

  return (
    <div className="flex h-16 w-full items-center gap-1 bg-black font-mono">
      <button
        className={classNames(
          "flex h-full w-full items-center rounded-l-md px-6 text-lg text-black",
          {
            "gradient-bg duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light":
              status === "INCOMPLETE",
          },
          { "cursor-default bg-green": status === "COMPLETE" },
          { "cursor-default bg-grey": status === "UNAVAILABLE" }
        )}
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        {animatedName}
      </button>
      <div
        className={classNames(
          "flex h-full w-16 items-center justify-center overflow-visible rounded-r-md bg-gold py-4 text-center text-lg text-black",
          { "bg-gold": status === "INCOMPLETE" },
          { "bg-green": status === "COMPLETE" },
          { "bg-grey": status === "UNAVAILABLE" }
        )}
      />
    </div>
  );
};

export default DashboardButton;
