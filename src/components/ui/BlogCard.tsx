// BlogCard.tsx

import { Blog } from "@/types";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogCard;
