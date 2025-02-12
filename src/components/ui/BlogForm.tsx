"use client";

import { createBlog } from "@/utils/actions/createBlog";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogForm = () => {
  const router = useRouter(); // Get router for navigation
  const [loading, setLoading] = useState(false); // To handle loading state

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true while the request is being processed

    const formData = new FormData(event.currentTarget);
    const blogInfo = await createBlog(formData); // Call createBlog to send data to the server

    setLoading(false); // Set loading to false after the request is completed

    if (blogInfo?.id) {
      // After the blog is created, redirect to the blogs page
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen my-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Create Blog
          </h2>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
          {/* Author Name */}
          <div className="mt-4">
            <label htmlFor="author_name" className="block text-sm font-medium text-gray-700">
              Author Name
            </label>
            <input
              type="text"
              id="author_name"
              name="author_name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter author name"
            />
          </div>
          {/* Publish Date */}
          <div className="mt-4">
            <label htmlFor="publish_date" className="block text-sm font-medium text-gray-700">
              Publish Date
            </label>
            <input
              type="date"
              id="publish_date"
              name="publish_date"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
            />
          </div>
          {/* Total Likes */}
          <div className="mt-4">
            <label htmlFor="total_likes" className="block text-sm font-medium text-gray-700">
              Total Likes
            </label>
            <input
              type="number"
              id="total_likes"
              name="total_likes"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter total likes"
            />
          </div>
          {/* Blog Image URL */}
          <div className="mt-4">
            <label htmlFor="blog_image" className="block text-sm font-medium text-gray-700">
              Blog Image URL
            </label>
            <input
              type="url"
              id="blog_image"
              name="blog_image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* Description */}
          <div className="mt-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
