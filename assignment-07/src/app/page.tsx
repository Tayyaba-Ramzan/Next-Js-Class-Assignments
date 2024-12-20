import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <header className="relative bg-gradient-to-r from-black to-indigo-600 text-white py-20 h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-indigo-800 opacity-70"></div>

        <div className="container mx-auto text-center w-[90%] relative z-10">
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide italic">
            Data Fetching Demystified
          </h1>

          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-semibold">
            Explore the world of server-side and client-side data fetching in web development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <Link href={"/serverside-data-fetching"}>
              <button
                className="px-8 py-5 sm:px-10 sm:py-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-full shadow-xl font-semibold transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-[80%] md:w-[300px] lg:w-[400px]"
              >
                Explore Server-Side Data Fetching
              </button>
            </Link>

            <Link href={"clientside-data-fetching"}>
              <button
                className="px-8 py-5 sm:px-10 sm:py-6 bg-gradient-to-r from-slate-500 to-slate-800 text-white rounded-full shadow-xl font-semibold transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-[80%] md:w-[300px] lg:w-[400px]"
              >
                Explore Client-Side Data Fetching
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
