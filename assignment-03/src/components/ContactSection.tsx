import React from 'react'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">Book an Appointment</h2>
        <div className="text-center">
          <p className="text-lg mb-8 text-gray-300">Want to book an appointment or have any queries? Contact us now!</p>
          <Link href="mailto:contact@glamify.com">
            <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection