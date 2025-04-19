
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;

  tags: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Angelo Paris E-Commerce',
    description: 'A modern e-commerce platform built with React and integrated with Stripe for seamless payment processing.',
    tags: ['React', 'Stripe', 'Responsive UI'],
    liveLink: 'https://angelo-paris.com/',
    githubLink: 'https://github.com/toqaosama',
    featured: true,
  },
  {
    id: 2,
    title: "Golden Pharaoh's Tour Explorer",
    description: 'Interactive booking platform with dynamic admin tools for managing tours and customer data.',
    tags: ['React', 'Node.js', 'Express'],
    liveLink: 'https://goldenpharaoh-tours.com/',
    githubLink: 'https://github.com/toqaosama',
    featured: true,
  },
  {
    id: 3,
    title: 'NeuroTech Education Platform',
    description: 'Learning management system with custom role-based features and interactive course materials.',
    tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    liveLink: 'https://neurotecheg.com/',
    githubLink: 'https://github.com/toqaosama',
    featured: true,
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section id="projects" className="py-20 bg-dark" >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A collection of my recent projects showcasing my skills in frontend development and UI/UX design.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card bg-card rounded-lg overflow-hidden shadow-md animate-scale-in"
            >
              <div 
                className="h-64 bg-cover bg-center blur-load"
                style={{ backgroundColor: 'black',
                    
                 }}
              >
                
              </div>
              <div className="project-card-content">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80 my-2 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-3" style={{marginBottom:'20px'}}>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent"
                    >
                      <Button size="sm" className="flex items-center gap-1">
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
                      className="text-white hover:text-accent"
                    >
                      <Button size="sm" variant="outline" className="flex items-center gap-1 border-white text-white hover:bg-white/10">
                        <Github size={16} />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
