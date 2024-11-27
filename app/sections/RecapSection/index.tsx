"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useHackerText from "utils/useHackerText";
import { motion } from 'framer-motion';
import FadeInImage from "./FadeInImage";
import FadeInStat from "./FadeInStat";

const RecapSection = () => {
    const [title, animateTitle] = useHackerText("Last year we had...");
    // const [register, animateRegister] = useHackerText("Register Now!");

    useEffect(() => {
        animateTitle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="min-h-screen px-0 pt-32 sm:px-8" id="recap">
            <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-12 sm:pt-24">
                {/* https://stackoverflow.com/questions/66457359/how-to-keep-a-paragraph-height-even-when-there-is-no-text-in-it */}
                <h1 className="gradient-text h-fit bg-clip-text text-center font-mono text-7xl font-black tracking-tighter text-transparent before:inline-block before:content-['']">
                    {title}
                </h1>
            </div>

            <div className="flex flex-col space-y-36 pt-36 mx-6 md:mx-0">
                <div className="flex justify-start">
                    <div className="w-full md:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src='/recap_1.png' alt="Image1" />
                    </div>
                    <div className="relative -ml-32 -mt-10 z-10">
                        <FadeInStat stat="150" caption="hackers" alt="Stat1" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="relative -mr-10 mt-10 z-10">
                        <FadeInStat stat="16" caption="workshops & mini-events" alt="Stat2" />
                    </div>
                    <div className="w-full md:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src='/recap_2.png' alt="Image4" />
                    </div>

                </div>
                <div className="flex justify-start">
                    <div className="w-full md:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src='/recap_3.png' alt="Image3" />
                    </div>
                    <div className="relative -ml-10 -mt-10 z-10">
                        <FadeInStat stat="$10,000+" caption="in prizes" alt="Stat3" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="relative -mr-10 mt-10 z-10">
                        <FadeInStat stat="A lot..." caption="of fun! 😎" alt="Stat4" />
                    </div>
                    <div className="w-full md:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src='/recap_4.png' alt="Image2" />
                    </div>

                </div>
            </div>

            <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-12 sm:pt-24">
                {/* https://stackoverflow.com/questions/66457359/how-to-keep-a-paragraph-height-even-when-there-is-no-text-in-it */}
                <h1 className="h-fit bg-clip-text text-center font-mono text-5xl gradient-text font-semibold tracking-tighter text-transparent before:inline-block before:content-['']">
                    Hack the Nest will return in 2025!
                </h1>
            </div>
        </section >
    );
};

export default RecapSection;
