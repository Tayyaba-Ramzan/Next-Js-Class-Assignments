// components/Slide3.js
export default function KeyFeatures() {
    return (
        <div id="key-features" className="flex flex-col items-center justify-center bg-white text-gray-800 p-8 pt-20">
            <h2 className="text-5xl font-bold mb-12 text-blue-800">Key Features of ShadCN UI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {[
                    "Quick Setup",
                    "Seamless Tailwind Integration",
                    "Highly Responsive Design",
                    "Pre-Built Components",
                ].map((feature, index) => (
                    <div key={index} className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-700">{feature}</h3>
                        <p className="mt-2 text-gray-600">
                            ShadCN UI enables fast and efficient design with pre-built, customizable components that integrate smoothly with React and Next.js.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
