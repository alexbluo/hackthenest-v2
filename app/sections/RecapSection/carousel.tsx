import React, { useState, useEffect } from 'react';

// Manually import your images
const img0 = "recap/IMG_8461.JPG";
const img1 = "recap/IMG_8502.JPG";
const img2 = "recap/IMG_8466.JPG";
const img3 = "recap/IMG_8935.JPG";
const img4 = "recap/IMG_8855.JPG";
const img5 = "recap/IMG_8417.JPG";
const img6 = "recap/IMG_8562.JPG";
const img7 = "recap/IMG_8411.JPG";
const img8 = "recap/IMG_8559.JPG";
const img9 = "recap/IMG_8772.JPG";
const img10 = "recap/IMG_8612.JPG";
const img11 = "recap/IMG_8413.JPG";
const img12 = "recap/IMG_8437.JPG";
const img13 = "recap/IMG_8435.JPG";
const img14 = "recap/IMG_8815.JPG";
const img15 = "recap/IMG_8747.JPG";
const img16 = "recap/IMG_8425.JPG";
const img17 = "recap/IMG_8427.JPG";
const img18 = "recap/IMG_8779.JPG";
const img19 = "recap/IMG_8750.JPG";
const img20 = "recap/IMG_8426.JPG";
const img21 = "recap/IMG_8508.JPG";
const img22 = "recap/IMG_8442.JPG";
const img23 = "recap/IMG_8668.JPG";
const img24 = "recap/IMG_8493.JPG";
const img25 = "recap/IMG_8733.JPG";

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Automatically change the slide every 3 seconds
    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 3000);
    //     return () => clearInterval(interval); // Cleanup on component unmount
    // }, []);

    return (
        <>
            <div className="relative w-full max-w-3xl mx-auto">
                <div className="relative overflow-hidden rounded-xl">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover  transition-opacity duration-500"
                    />
                </div>

                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                    &#10094;
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                    &#10095;
                </button>

            </div>
            <div className="absolute my-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
