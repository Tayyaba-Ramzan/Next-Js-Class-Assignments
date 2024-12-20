import React from "react";
import Image from "next/image";

interface Books {
    heading: string;
    title: string;
    button: string;
    image: string;
}

const ServerSideDataFetchingPage = () => {
    const booksData: Books[] = [
        {
            heading: "Artificial Intelligence",
            title:
                "Discover the transformative power of AI, from its historical evolution to cutting-edge technologies like neural networks, natural language processing, and computer vision.",
            button: "Learn More",
            image: "ai.jpg",
        },
        {
            heading: "Web 3.0 & Metaverse",
            title:
                "Step into the future of the internet with Web 3.0’s decentralized platforms, blockchain integration, and the immersive world of the metaverse, reshaping how we interact online.",
            button: "Learn More",
            image: "metaverse.jpg",
        },
        {
            heading: "Cloud Native Computing",
            title:
                "Learn how cloud-native technologies enable scalability, resilience, and agility, with in-depth insights into Kubernetes, microservices, and serverless architectures.",
            button: "Learn More",
            image: "cloud.jpg",
        },
        {
            heading: "JavaScript: The Good Parts",
            title:
                "Delve into the essence of JavaScript by mastering its most powerful features, avoiding common pitfalls, and writing clean, efficient, and maintainable code.",
            button: "Learn More",
            image: "java.png",
        },
        {
            heading: "Next.js: The Complete Guide",
            title:
                "Master Next.js, the powerful React framework for building modern, server-rendered web applications. Learn SSR, SSG, and API integration.",
            button: "Learn More",
            image: "next-js.jpg",
        },
        {
            heading: "Advanced React",
            title:
                "Gain expertise in React by exploring hooks, context API, advanced state management, and performance optimization techniques to build scalable modern applications.",
            button: "Learn More",
            image: "react.jpg",
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-4xl font-extrabold text-center italic underline mb-6 text-blue-600">
                Server Side Data Fetching
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.map((book, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 shadow-lg bg-white text-center hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="w-full h-48 relative mb-4">
                            <Image
                                src={`/${book.image}`}
                                alt={book.heading}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <p className="font-bold text-2xl mb-2 text-gray-800">
                            {book.heading}
                        </p>
                        <p className="font-medium text-gray-600 mb-6 text-sm">
                            {book.title}
                        </p>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            {book.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServerSideDataFetchingPage;
