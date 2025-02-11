// "use client"

// import { useEffect, useState } from "react";
// import { Blog } from "@/types"; // Assuming you have a Blog type
// import BlogCard from "@/components/ui/BlogCard";


// const BlogsPage = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   useEffect(() => {
//     fetch(`${process.env.baseUrl}/blogs`)
//         .then((response) => response.json())
//         .then((data) => setBlogs(data))
//         .catch((error) => console.error("Error fetching blogs:", error));
// }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {blogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;
