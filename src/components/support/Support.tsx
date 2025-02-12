"use client"
import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (This is just a placeholder)");
    // TODO: Integrate with an email service (like EmailJS, Nodemailer, or Formspree)
  };

  return (
    <section id="support" className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-500">Get in Touch</h2>
        <p className="text-teal-700 text-xl  mt-3">
          If you have any questions, job opportunities, or collaboration ideas, feel free to reach out.
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="mailto:shantonath6767@example.com" className="text-teal-200 hover:text-blue-500">
          📧 Email
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-teal-200 hover:text-blue-500">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" className="text-teal-200 hover:text-blue-500">
          🐙 GitHub
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-gray-400 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border text-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border text-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border text-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:text--300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Support;
