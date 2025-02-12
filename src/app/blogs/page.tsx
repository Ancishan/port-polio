/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Blog } from "@/types"; // Assuming you have a Blog type
import BlogCard from "@/components/ui/BlogCard";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.
          NEXT_PUBLIC_BASE_URL}/blogs`);
        console.log(process.env.baseUrl)
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error: any) {
        setError("Error fetching blogs: " + error.message);
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl font-bold text-center text-teal-600 mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
