export default function Features() {
    return (
        <div id="features" className="flex flex-col items-center justify-center bg-white text-gray-600 p-8 pt-20">
            <h2 className="text-5xl font-bold mb-5 text-black">Introducing ShadCN UI</h2>
            <div className="max-w-4xl grid gap-8 grid-cols-1 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                    <img src="/images/tailwind.png" alt="Tailwind" className="w-10 h-10" />
                    <p className="text-lg">Seamless integration with <span className="text-blue-400 font-semibold">Tailwind CSS</span> for easy styling.</p>
                </div>
                <div className="flex items-start space-x-4">
                    <img src="/images/react.png" alt="React" className="w-10 h-10" />
                    <p className="text-lg">Optimized for <span className="text-blue-400 font-semibold">React and Next.js</span> applications.</p>
                </div>
                <div className="flex items-start space-x-4">
                    <img src="/images/components.png" alt="Components" className="w-10 h-10" />
                    <p className="text-lg">Includes pre-designed, reusable <span className="text-blue-400 font-semibold">UI components</span> like buttons, cards, and dropdowns.</p>
                </div>
                <div className="flex items-start space-x-4">
                    <img src="/images/accessibility.png" alt="Accessibility" className="w-10 h-10" />
                    <p className="text-lg">Components optimized for <span className="text-blue-400 font-semibold">accessibility</span> and performance.</p>
                </div>
            </div>
        </div>
    );
}
