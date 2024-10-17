import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">GlamourGrove</h4>
                        <p className="mb-4">
                            GlamourGrove is your go-to destination for beauty and makeup tips. Our mission is to empower you with the knowledge and tools to express your unique beauty.
                        </p>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300 bg-pink-500 rounded-3xl p-2">Learn More</a>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
                        <p>Email: <a href="mailto:contact@glamify.com" className="text-pink-500 hover:text-gray-300 transition duration-300">sales@glamourgrove.com</a></p>
                        <p>Phone: <span className="text-pink-500">+123-456-7890</span></p>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" className="text-pink-500 hover:text-gray-300 transition duration-300">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-gray-300 transition duration-300">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-gray-300 transition duration-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-gray-300 transition duration-300">
                        <FaPinterest className="text-2xl" />
                    </a>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm">&copy; 2024 GlamourGrove. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
