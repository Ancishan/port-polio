"use client";

import Image from "next/image";
import image from "@/assets/my.png";
import Form from "../ui/Form";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white px-6 md:px-16 pt-[80px]"> {/* Added pt-[80px] */}
      {/* Left Side - Text with Animation */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Shanto</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A MERN Stack Developer | I build scalable web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Form />
        </motion.div>
      </div>

      {/* Right Side - Image with Animation */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <motion.div
          className="w-[400px] h-[400px] rounded-full border-4 border-cyan-600 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src={image}
            alt="Shanto's Profile Picture"
            width={450}
            height={450}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
