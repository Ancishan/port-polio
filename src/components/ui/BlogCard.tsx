import Image from "next/image";
import { Blog } from "@/types";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="max-w-sm w-full  border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={blog.blog_image || "/default-image.jpg"}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-teal-600">{blog.title}</h2>
        <p className="text-white mt-2">{blog.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg text-teal-700">By {blog.author_name}</p>
          <p className="text-sm font-semibold text-teal-600">{blog.total_likes} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
