import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <div
                className="h-auto lg:h-[800px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16"
                id="home"
            >
                <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
                    <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight mt-20">
                        Learn new skills <br />
                        online with ease
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-4 lg:mt-6">
                        Discover a wide range of courses covering a variety of <br className="hidden lg:block" />
                        subjects, taught by expert instructors.
                    </p>
                    <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-4">
                        <button className="bg-black w-[150px] h-[48px] text-[#F7F7F7] rounded">
                            Start learning now
                        </button>
                        <button className="w-[150px] h-[48px] border-black border rounded">
                            Explore Courses
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 order-2 lg:order-2 mt-6 lg:mt-[90px]">
                    <Image
                        src={"/images/hero-sec.jpg"}
                        alt="Hero-Image"
                        height={535}
                        width={600}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="h-auto lg:h-[228px] bg-[#F7F7F7] mt-12 lg:mt-24 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 gap-8 lg:gap-0">
                <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center lg:text-left">
                    Trusted by 2000+ companies <br className="hidden lg:block" /> worldwide.
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center gap-4">
                    <Image src={"/images/one.png"} width={123.8} height={38.52} alt="one-logo" />
                    <Image src={"/images/two.png"} width={123.8} height={38.52} alt="two-logo" />
                    <Image src={"/images/three.png"} width={123.8} height={38.52} alt="three-logo" />
                    <Image src={"/images/four.png"} width={123.8} height={38.52} alt="four-logo" />
                    <Image src={"/images/five.png"} width={123.8} height={38.52} alt="five-logo" />
                    <Image src={"/images/six.png"} width={123.8} height={38.52} alt="six-logo" />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
