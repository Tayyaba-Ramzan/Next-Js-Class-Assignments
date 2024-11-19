"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="hidden lg:flex h-[54px] bg-[#F7F7F7] pl-[64px] pr-[62px] items-center border-b border-[#000000]">
                <div className="h-[30px] w-full text-[14px] text-[#000000] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span>Phone Number: 956742455678</span>
                        <span className="border border-[#676767] h-4"></span>
                        <span>Email: info@ddsgnr.com</span>
                    </div>
                    <span>
                        <Image
                            src={"/images/social-links.svg"}
                            alt="Social Links"
                            width={132}
                            height={24}
                        />
                    </span>
                </div>
            </header>

            <nav className="h-[72px] bg-[#F7F7F7] px-[20px] lg:px-[64px] border-b border-[#000000] flex items-center justify-between">
                <Image
                    src={"/images/logo.svg"}
                    alt="Logo"
                    width={130.6}
                    height={30.38}
                />

                <button
                    className="lg:hidden block"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    <Image
                        src={"/images/bar.png"} 
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>

                <div className="hidden lg:flex items-center justify-between w-full">
                    <ul className="flex items-center justify-around text-[16px] w-[910px]">
                    <li><Link href={"#home"}>Home</Link></li>
                    <li><Link href={"#courses"}>Courses</Link></li>
                    <li><Link href={"#services"}>Services</Link></li>
                    <li><Link href={"#achievement"}>Achievement</Link></li>
                    <li><Link href={"#team"}>About Us</Link></li>
                    <li><Link href={"#testimonial"}>Testimonial</Link></li>

                        <li>
                            <button className="px-[20px] py-[10px] border border-black rounded">
                                Login
                            </button>
                        </li>
                        <li>
                            <button className="px-[26px] py-[10px] bg-black text-[#FFFFFF] rounded">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 h-full w-[250px] bg-[#F7F7F7] shadow-lg transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform lg:hidden`}
            >
                <div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#000000]">
                    <Image
                        src={"/images/logo.svg"}
                        alt="Logo"
                        width={130.6}
                        height={30.38}
                    />

                    <button onClick={() => setSidebarOpen(false)}>
                        <Image
                            src={"/images/close.png"} 
                            alt="Close"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>

                <ul className="mt-[20px] text-[16px] space-y-4 px-[20px]">
                <li><Link href={"#home"}>Home</Link></li>
                    <li><Link href={"#courses"}>Courses</Link></li>
                    <li><Link href={"#services"}>Services</Link></li>
                    <li><Link href={"#achievement"}>Achievement</Link></li>
                    <li><Link href={"#team"}>About Us</Link></li>
                    <li><Link href={"#testimonial"}>Testimonial</Link></li>

                    <li>
                        <button className="w-full px-[20px] py-[10px] border border-black rounded">
                            Login
                        </button>
                    </li>
                    <li>
                        <button className="w-full px-[26px] py-[10px] bg-black text-[#FFFFFF] rounded">
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>

            {isSidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;