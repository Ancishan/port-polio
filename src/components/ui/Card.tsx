import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
  image: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, technologies, liveLink, repoLink, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      {typeof image === "string" ? (
        <Image src={image}  alt={title} className="w-full h-40 object-cover" />
      ) : (
        <Image src={image} alt={title} width={500} height={300} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 bg-gray-500">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm my-2">{description}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 text-xs text-black font-medium px-2 py-2 rounded">{tech}</span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a href={liveLink} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
          <a href={repoLink} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
