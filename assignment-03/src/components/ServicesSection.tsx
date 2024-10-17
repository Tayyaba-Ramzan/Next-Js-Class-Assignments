import React from 'react'
import { FaAirbnb, FaRegSmileBeam, FaPaintBrush } from 'react-icons/fa'; // Importing React Icons

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-5xl font-extrabold text-center text-gray-300 mb-12">
          Our Services
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-105 flex flex-col items-center border-4 border-pink-500">
            <div className="text-pink-500 text-6xl mb-4">
              <FaAirbnb />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Bridal Makeup</h3>
            <p className="text-lg text-gray-300 text-center">
              We provide stunning bridal makeup services to make your special day unforgettable.
            </p>
          </div>


          <div className="p-8 rounded-3xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-105 flex flex-col items-center border-4 border-pink-500">
            <div className="text-pink-500 text-6xl mb-4">
              <FaRegSmileBeam />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Event Makeup</h3>
            <p className="text-lg text-gray-300 text-center">
              Get the perfect look for any event or party with our professional event makeup services.
            </p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-105 flex flex-col items-center border-4 border-pink-500">
            <div className="text-pink-500 text-6xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Everyday Glam</h3>
            <p className="text-lg text-gray-300 text-center">
              Enhance your everyday look with a natural and flawless makeup application.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection