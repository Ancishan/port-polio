import React from "react";
import Card from "../ui/Card";
import micro from "@/assets/micro.jpg"
import ecom from "@/assets/e-commerce.jpg"

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A micro-tasking platform where users can create and complete tasks for earnings.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://yourproject.com",
    repoLink: "https://github.com/yourusername/project-repo",
    image: micro,
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "An online shopping platform with user authentication and admin product management.",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    liveLink: "https://yourproject.com",
    repoLink: "https://github.com/yourusername/project-repo",
    image: ecom,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
