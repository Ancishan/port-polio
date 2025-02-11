"use client"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <a className=" text-blue-300" href="my fb link">
          <FaFacebookF />
        </a>
        <a className=" text-blue-300" href="my github link">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Social;
