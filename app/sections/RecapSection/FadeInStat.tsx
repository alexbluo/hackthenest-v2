// components/FadeInImage.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
                if (elementTop < (windowHeight * 3) / 4) {
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
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
            transition={{ duration: 2 }}
        >
            <div className="gradient-bg bg-blue-light hover:shadow-blue-light w-full cursor-pointer rounded-xl px-6 py-6 md:px-10 md:py-10 text-white shadow-lg shadow-black duration-200 ease-in-out hover:shadow-lg">
                <h1 className="pb-2 text-5xl font-semibold md:text-8xl">{stat}</h1>
                <h4 className="text-2xl md:text-4xl">{caption}</h4>
            </div>
        </motion.div>
    );
};

export default FadeInStat;