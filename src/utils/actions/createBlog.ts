"use server";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();
  return blogInfo; // Return the created blog information
};
