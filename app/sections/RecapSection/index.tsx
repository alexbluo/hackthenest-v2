"use client";
import Carousel from './carousel';
import Stat from "./Stat";

const RecapSection = () => {
    return (
        <section id="recap">
            <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-br-none sm:rounded-tl-3xl sm:rounded-tr-3xl">
                <h2 className="gradient-text">recap</h2>
            </div>
            <article className="-mx-8 flex flex-col rounded-r-3xl bg-black p-8 text-xl text-white sm:rounded-3xl sm:rounded-tl-none md:flex-row">
                {/* <div className="xl:w-1/2"> */}
                This past December, 200 high school hackers from the DMV area teamed up for Hack the Nest,
                the DMV area's largest high school hackathon. It was a weekend packed with creativity,
                code, and fun! Between late-night debugging fueled by cookies and spontaneous karaoke sessions,
                check out some of our favorite moments in the recap below!
            </article>
            <div className="my-8d">
                <Carousel />
            </div>
            {/* <div className="gradient-text mt-6 max-h-24 cursor-default select-none overflow-hidden bg-clip-text px-4 font-circular text-8xl leading-[0.5] text-transparent">
                if you can see this then why lol like what is the point seriously and if
                this somehow goes the full width then you must have a very wide monitor
                blah blah blah lorem ipsum dolor yah yah i dont remember the rest im
                just trying to fill this space up to make extra sure that it doesnt look
                funny for you youre welcome
            </div> */}
        </section>
    );
};

export default RecapSection;
