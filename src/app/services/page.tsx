export const metadata: Metadata = {
    title: "My Portfolio | Services",
    description: "Explore the services I offer as a Full Stack Developer, including web development, API integrations, and more.",
  };
  
  import Services from "@/components/services/Services";
import { Metadata } from "next";
  
  const ServicesPage = () => {
    return (
      <div>
        <Services />
      </div>
    );
  };
  
  export default ServicesPage;
  