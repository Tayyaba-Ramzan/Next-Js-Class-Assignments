import Image from "next/image";

export default function Intro() {
    return (
        <div id="intro" className="relative flex flex-col items-center justify-center h-screen bg-white text-black px-4">
            <div className="relative flex flex-col items-center z-10">
                <Image
                    src={"/images/img.png"}
                    alt="ShadCN and Radix illustration"
                    height={400}
                    width={400}
                    className="shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:rotate-2"
                />
                <h1 className="text-6xl md:text-8xl font-extrabold mb-4 mt-6 bg-gradient-to-r from-purple-900 via-green-900 to-yellow-600 bg-clip-text text-transparent animate-pulse">
                    ShadCN & Radix UI
                </h1>
                <p className="text-xl md:text-2xl font-medium text-center max-w-lg opacity-90 mt-4 transition-transform duration-700 ease-in-out hover:scale-105">
                    Effortlessly create accessible, stylish UIs with ShadCN and Radix.
                </p>
            </div>
        </div>
    );
}
