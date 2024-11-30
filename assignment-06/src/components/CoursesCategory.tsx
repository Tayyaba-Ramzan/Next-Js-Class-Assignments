import React from 'react';
import Image from 'next/image';

const CoursesCategory = () => {
  const categories = [
    { icon: "/images/icon1.png", title: "Design & Development", description: "50+ Courses Available" },
    { icon: "/images/icon2.png", title: "Marketing", description: "50+ Courses Available" },
    { icon: "/images/icon3.png", title: "Development", description: "50+ Courses Available" },
    { icon: "/images/icon4.png", title: "Communication", description: "50+ Courses Available" },
    { icon: "/images/icon5.png", title: "Digital Marketing", description: "50+ Courses Available" },
    { icon: "/images/icon6.png", title: "Self Development", description: "50+ Courses Available" },
    { icon: "/images/business (1).png", title: "Business", description: "50+ Courses Available" },
    { icon: "/images/business (2).png", title: "Finance", description: "50+ Courses Available" },
    { icon: "/images/business (3).png", title: "Consulting", description: "50+ Courses Available" },
  ];

  return (
    <>
      <h1 className="text-center font-bold text-[32px] sm:text-[40px] md:text-[46px] mt-10 sm:mt-20" id="courses">
        Explore Courses By Category
      </h1>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] text-center mt-4 mx-auto max-w-[90%] md:max-w-[70%]">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 px-4 sm:px-0">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between h-[110px] sm:h-[132px] bg-[#F7F7F7] rounded-md shadow-sm p-4 sm:p-6"
          >
            <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] bg-[#FFFFFF] flex items-center justify-center rounded-md">
              <Image src={category.icon} width={32} height={32} alt={`${category.title}-icon`} />
            </div>
            <div className="ml-4">
              <h1 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">{category.title}</h1>
              <p className="text-[12px] sm:text-[14px]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="w-[90%] sm:w-auto border border-black px-4 py-2 sm:px-4 sm:py-3 rounded mt-10 hover:bg-black hover:text-white transition-all">
          View All Courses
        </button>
      </div>
    </>
  );
};

export default CoursesCategory;
