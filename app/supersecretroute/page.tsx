import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FrontSection from '../sections/FrontSection/index'
import RecapSection from "../sections/RecapSection/index";
import useHackerText from "utils/useHackerText";
import { useEffect } from "react";
import Link from "next/link";

const Page = async () => {

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="flex flex-col gap-2 w-80">
                <Link
                    className="gradient-bg mx-auto w-full rounded-md bg-white px-6 py-4 text-center font-mono text-lg font-medium text-black shadow-grey duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light"
                    href="/login"
                >
                    Register Now!
                </Link>
            </div>

        </div>

    );
};

export default Page;
