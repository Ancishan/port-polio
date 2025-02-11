"use client"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <a href="my fb link">
          <FaFacebookF />
        </a>
        <a href="my github link">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Social;
