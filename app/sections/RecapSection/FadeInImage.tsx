// components/FadeInImage.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface FadeInImageProps {
    src: string;
    alt: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt }) => {
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
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
        >
            <Image src={src} alt={alt} style={{ objectFit: "contain" }} width={1000} height={1000} />
        </motion.div>
    );
};

export default FadeInImage;