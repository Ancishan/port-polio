import AboutPage from "./about/page";
import ServicesPage from "./services/page";

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

    </div>
  );
}
