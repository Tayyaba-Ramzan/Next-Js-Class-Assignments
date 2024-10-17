import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center text-gray-300 mb-12">
                    About Us
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="relative group">
                        <Image
                            src="/makeup.jpg"
                            alt="About Image"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 transition duration-500 ease-in-out rounded-lg"></div>
                    </div>


                    <div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We are a team of professional makeup artists dedicated to enhancing your natural beauty. With years of experience, we specialize in bridal, event, and everyday makeup looks. Our goal is to make every client feel confident and beautiful in their own skin.
                        </p>
                        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                            Using the best products and the latest techniques, we ensure that you leave our studio looking stunning and feeling radiant. Let us be a part of your journey to looking your absolute best!
                        </p>
                        <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection