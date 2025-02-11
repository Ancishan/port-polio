"use client";

import Image from "next/image";
import image from "@/assets/my.png";
import Form from "../ui/Form";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white px-6 md:px-16">
      {/* Left Side */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Shanto</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A MERN Stack Developer | I build scalable web applications.
        </p>

        <div>
          <Form></Form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="w-[400px] h-[400px] rounded-full border-4 border-cyan-600 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt="Shanto's Profile Picture"
            width={450}
            height={450}
            className="w-full h-full object-cover scale-125 "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
