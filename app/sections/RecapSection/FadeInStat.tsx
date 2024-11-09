// components/FadeInImage.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface FadeInStatProps {
    stat: string;
    caption: string;
    alt: string;
}

const FadeInStat: React.FC<FadeInStatProps> = ({ stat, caption, alt }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(alt);
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight * 3 / 4) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [alt]);

    return (
        <motion.div
            id={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: 100 }}
            transition={{ duration: 2 }}
        >
            <div
                className="bg-blue-light h-56 w-full cursor-pointer rounded-xl  mx-32 px-4 py-10 text-center text-white shadow-md shadow-black duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-light"
            >
                <h1 className="pb-2 text-8xl font-semibold">{stat}</h1>
                <h4 className="text-4xl">{caption}</h4>
            </div>
        </motion.div>
    );
};

export default FadeInStat;