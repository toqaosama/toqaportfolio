import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';


type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Angelo Paris E-Commerce',
    description: 'A modern e-commerce platform built with React and integrated with Stripe for seamless payment processing. Features include product filtering, shopping cart functionality, user authentication, and a responsive design for all device sizes.',
    tags: ['React', 'Stripe', 'Responsive UI'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: "Golden Pharaoh's Tour Explorer",
    description: 'Interactive booking platform with dynamic admin tools for managing tours and customer data. Includes features like interactive tour itineraries, availability calendar, payment processing, and a custom admin dashboard for managing bookings and customer information.',
    tags: ['React', 'Node.js', 'Express'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'NeuroTech Education Platform',
    description: 'Learning management system with custom role-based features and interactive course materials. Built with WordPress and custom plugins to create a comprehensive educational platform with user management, progress tracking, and interactive learning modules.',
    tags: ['WordPress', 'JavaScript'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A collection of my work showcasing frontend development and AI solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
              variant={filter === null ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setFilter(null)}
            >
              All
            </Button>
            {uniqueTags.map(tag => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-card rounded-lg overflow-hidden shadow-md">
  
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white">
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="flex items-center gap-2 border-accent text-accent hover:bg-accent/10">
                          <Github size={16} />
                          View Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
