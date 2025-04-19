
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const ProjectFilter = ({ active }: { active: string }) => {
  const filters = ["All", "React", "Vue", "Responsive UI", "Tailwind", "Express", "WordPress", "PHP", "MySQL", "JavaScript"];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {filters.map(filter => (
        <span 
          key={filter} 
          className={`tech-pill ${active === filter ? 'bg-purple' : ''}`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-20 bg-dark">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Full Stack <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-300">
          A collection of my recent projects showcasing my skills in frontend development and full-stack solutions.
        </p>
      </div>

      <ProjectFilter active="All" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ProjectCard 
          title="Angelo Paris E-Commerce" 
          description="A full-featured e-commerce platform built with React and integrated with Stripe for seamless payment processing. Features include product filtering, shopping cart functionality, and responsive design."
          demoLink="https://angelo-paris.com" 
          codeLink="https://github.com" 
        />
        <ProjectCard 
          title="Golden Pharaoh's Tour Explorer" 
          description="Interactive booking platform with dynamic admin tools for managing tours and customer data. Includes features like interactive tour itineraries and availability calendar."
          demoLink="https://goldenpharaoh-tours.com" 
          codeLink="https://github.com" 
        />
        <ProjectCard 
          title="NeuroTech Education Platform" 
          description="Learning management system with custom role-based features and interactive course materials. Built with WordPress and custom plugins."
          demoLink="https://neurotecheg.com" 
          codeLink="https://github.com" 
        />
      </div>

      <div className="text-center">
        <Button className="bg-purple hover:bg-purple-dark text-white px-6 py-2 rounded-full">
          See All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
