import React from 'react';
import Image from 'next/image';

const Courses = () => {
    return (
        <>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold mt-20 md:mt-44 text-center" id='services'>
                Courses
            </h1>
            <p className="text-[16px] sm:text-[18px] text-center mt-3 sm:mt-5">
                Your Ultimate Guide to Learning
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[14px] sm:text-[16px] mt-10 md:mt-16">
                <h3 className="border-black border-b pb-1">Popular</h3>
                <h3>Recommended</h3>
                <h3>Best Price</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 md:mt-16">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="h-auto w-[90%] sm:w-[416px] bg-[#F7F7F7] p-4 rounded-lg shadow-md"
                    >
                        <Image
                            src={`/images/img${item}.jpg`}
                            alt={`image-${item}`}
                            height={300}
                            width={416}
                            className="rounded-lg"
                        />
                        <div className="flex items-center mt-6 justify-between">
                            <h3>Category {item}</h3>
                            <div className="flex items-center mr-2">
                                <Image
                                    src={"/images/rating.png"}
                                    alt="rating"
                                    width={20}
                                    height={20}
                                />
                                <p className="font-bold ml-2">5.0</p>
                            </div>
                        </div>
                        <h1 className="text-[18px] sm:text-[24px] font-bold mt-3">
                            Course Title {item}
                        </h1>
                        <p className="text-[14px] sm:text-[16px] mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                            <button className="border border-black rounded px-4 py-2">
                                Enroll Now
                            </button>
                            <span className="ml-4 font-bold">$400</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mt-16">
                <button className="border border-black px-6 py-3 rounded-lg">
                    View All Courses
                </button>
            </div>
        </>
    );
};

export default Courses;
