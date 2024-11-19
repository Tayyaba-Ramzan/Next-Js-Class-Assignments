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
      <h1 className="text-center font-bold text-[46px] mt-20" id='courses'>Explore Courses By Category</h1>
      <p className="text-[18px] text-center mt-4">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-around h-[132px] w-full bg-[#F7F7F7]">
            <div className="h-[100px] w-[100px] bg-[#FFFFFF] flex items-center justify-center">
              <Image src={category.icon} width={32} height={32} alt={`${category.title}-icon`} />
            </div>
            <div>
              <h1 className="text-[18px] font-bold">{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="border border-black px-4 py-3 rounded mt-16 hover:bg-black hover:text-white transition-all">
          View All Courses
        </button>
      </div>
    </>
  );
};

export default CoursesCategory;
