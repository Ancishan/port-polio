import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ServicesPage from "./services/page";
import SupportPage from "./support/page";

export default function Home() {
  return (
    <div>
      <section id="about" className="min-h-screen bg-gray-800 text-white">
        <AboutPage></AboutPage>
      </section>

      <section
        id="services"
        className="min-h-screen pt-5 bg-gray-700 text-white"
      >
        <ServicesPage></ServicesPage>
      </section>
      <section
        id="projects"
        className="min-h-screen pt-5 bg-gray-700 text-white"
      >
        <ProjectsPage></ProjectsPage>
      </section>
      <section
        id="support"
        className="min-h-screen pt-5 bg-gray-700 text-white"
      >
        <SupportPage></SupportPage>
      </section>

    </div>
  );
}
