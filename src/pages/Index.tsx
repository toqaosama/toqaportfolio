
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import AIProjects from "@/components/AIProjects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import Project from "../components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Project />
        <AIProjects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
