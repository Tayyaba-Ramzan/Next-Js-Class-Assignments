// components/Slide4.js
export default function Slide4() {
    return (
        <div id="how-to-install-shadcn" className="flex flex-col items-center justify-center bg-white text-gray-900 p-4 sm:p-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">How to Install ShadCN UI</h2>
            <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl text-left">
                <p className="text-gray-300 text-base sm:text-lg">1. Initialize with this command:</p>
                <pre className="bg-gray-700 text-white p-4 rounded mt-2 mb-4">
                    <code>npx shadcn@latest init</code>
                </pre>
                <p className="text-gray-300 text-base sm:text-lg">2. Choose your preferred options:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                    <li>Style: New York</li>
                    <li>Base Color: Zinc</li>
                    <li>CSS Variables: yes/no</li>
                </ul>
                <p className="mt-4 text-gray-300 text-base sm:text-lg">3. Add components to your project:</p>
                <pre className="bg-gray-700 text-white p-4 rounded mt-2">
                    <code>npx shadcn@latest add button</code>
                </pre>
            </div>
        </div>
    );
}
