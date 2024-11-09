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
    const [title, animateTitle] = useHackerText("Last year, we had...");
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
                    <div className="w-1/2 rounded-xl overflow-hidden">
                        <FadeInImage src={img1} alt="Image1" />

                    </div>

                    <div>
                        <FadeInStat stat="Hello" caption="Bro" alt="Stat1" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="w-1/2 rounded-xl overflow-hidden">
                        <FadeInImage src={img2} alt="Image2" />
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="w-1/2 rounded-xl overflow-hidden">
                        <FadeInImage src={img3} alt="Image3" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="w-1/2 rounded-xl overflow-hidden">
                        <FadeInImage src={img4} alt="Image4" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default RecapSection;
