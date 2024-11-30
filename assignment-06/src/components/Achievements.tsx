import React from 'react';

const Achievements = () => {
  return (
    <section className="mt-16 sm:mt-20 md:mt-32 px-4" id="achievement">
      <header className="text-center">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold">
          Our Achievements
        </h1>
        <p className="text-center mx-auto max-w-[90%] lg:w-[1152px] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8">
        <div className="w-[40%] sm:w-[30%] md:w-[20%] flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center">
            +200
          </h1>
          <h3 className="text-center text-[12px] sm:text-[14px] md:text-[15px]">
            Courses
          </h3>
        </div>
        <div className="w-[40%] sm:w-[30%] md:w-[20%] flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center">
            50K
          </h1>
          <h3 className="text-center text-[12px] sm:text-[14px] md:text-[15px]">
            Mentors
          </h3>
        </div>
        <div className="w-[40%] sm:w-[30%] md:w-[20%] flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center">
            370K
          </h1>
          <h3 className="text-center text-[12px] sm:text-[14px] md:text-[15px]">
            Students
          </h3>
        </div>
        <div className="w-[40%] sm:w-[30%] md:w-[20%] flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center">
            100+
          </h1>
          <h3 className="text-center text-[12px] sm:text-[14px] md:text-[15px]">
            Recognition
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
