"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useHackerText from "utils/useHackerText";
import { motion } from 'framer-motion';
import FadeInImage from "./FadeInImage";
import FadeInStat from "./FadeInStat";

import img1 from "public/recap-page/IMG_8437.jpg"
import img2 from "public/recap-page/IMG_8750.jpg"
import img3 from "public/recap-page/IMG_8772.jpg"
import img4 from "public/recap-page/IMG_8779.jpg"

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

            <div className="flex flex-col space-y-36 pt-36">
                <div className="flex justify-start">
                    <div className="lg:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src={img1} alt="Image1" />
                    </div>
                    <div className="relative -ml-10 -mt-10 z-10">
                        <FadeInStat stat="200" caption="hackers" alt="Stat1" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="relative -mr-10 mt-10 z-10">
                        <FadeInStat stat="16" caption="workshops & mini-events" alt="Stat2" />
                    </div>
                    <div className="lg:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src={img4} alt="Image4" />
                    </div>

                </div>
                <div className="flex justify-start">
                    <div className="lg:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src={img3} alt="Image3" />
                    </div>
                    <div className="relative -ml-10 -mt-10 z-10">
                        <FadeInStat stat="$10,000+" caption="in prizes" alt="Stat3" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="relative -mr-10 mt-10 z-10">
                        <FadeInStat stat="A lot..." caption="of fun! 😎" alt="Stat4" />
                    </div>
                    <div className="lg:w-3/4 rounded-xl overflow-hidden">
                        <FadeInImage src={img2} alt="Image2" />
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
