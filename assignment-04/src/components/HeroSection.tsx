import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-start h-screen px-4 lg:px-16'>
            <div className='w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-32'>
                <h1 className='text-[24px] sm:text-[28px] lg:text-[40px] text-[#000000] font-bodoni font-bold xl:text[40px] xl:w-[496px] xl:h-[189px]'>
                    IMPECCABLE CRAFTSMAN AND FINESSE
                </h1>

                <p className='text-[#787054] text-[16px] sm:text-[18px] lg:text-[24px] mt-4 lg:mt-6 leading-relaxed xl:text-[30px] font-bodoni'>
                    An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>

                <button className='font-bodoni bg-[#787054] px-8 sm:px-10 py-2 text-[#FFFFFF] rounded mt-6 lg:mt-8 transition duration-300 ease-in-out hover:bg-[#000000] xl:text-[30px] xl:w-[288px] xl:h-[58px] xl:rounded-md xl:mt-16'>
                    Explore Now
                </button>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end items-end mt-10 lg:mt-14 xl:mt-3 '>
                <Image
                    src={"/image/hero-img.svg"}
                    alt='hero-img'
                    width={400}
                    height={700}
                    className='object-contain max-w-full sm:max-w-[350px] lg:max-w-[400px] h-auto transition duration-300 ease-in-out xl:mt-14'
                />
            </div>
        </div>
    );
}

export default HeroSection;
