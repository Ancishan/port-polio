"use client";

import { motion } from "framer-motion";

const services = [
  { name: "HTML", description: "Building structured web pages with HTML." },
  { name: "CSS", description: "Styling and creating responsive layouts with CSS." },
  { name: "JavaScript", description: "Creating interactive elements with JavaScript." },
  { name: "TypeScript", description: "Building scalable apps with TypeScript." },
  { name: "Express", description: "Server-side web development with Express.js." },
  { name: "MongoDB", description: "Database management with MongoDB." },
  { name: "React", description: "Building interactive UIs with React." },
  { name: "Next.js", description: "Server-side rendering and routing with Next.js." },
  { name: "GitHub", description: "Version control and collaboration using GitHub." },
  { name: "Design", description: "Creating beautiful UI/UX designs." },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-teal-500 mb-4">{service.name}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
