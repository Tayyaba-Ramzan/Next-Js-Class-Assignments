import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/hero-img.jpg')"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-center">
                <h1 className="text-6xl font-bold text-pink-600 mb-4">Unleash Your Beauty</h1>
                <p className="text-lg text-pink-600 mb-8 font-semibold">Enhancing Your Look with Professional Makeup Services</p>
                <Link href="#services">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition duration-300">
                        Explore Services
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection