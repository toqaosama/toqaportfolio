
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
    description: 'A full-featured e-commerce platform built with React and integrated with Stripe for seamless payment processing. Features include product filtering, shopping cart functionality, user authentication, and responsive design.',
    tags: ['React', 'Stripe', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://angelo-paris.com/',
    githubLink: 'https://github.com/toqaosama',
  },
  {
    id: 2,
    title: "Golden Pharaoh's Tour Explorer",
    description: 'Interactive booking platform with dynamic admin tools for managing tours and customer data. Includes features like interactive tour itineraries, availability calendar, and a custom admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://goldenpharaoh-tours.com/',
    githubLink: 'https://github.com/toqaosama',
  },
  {
    id: 3,
    title: 'NeuroTech Education Platform',
    description: 'Learning management system with custom role-based features and interactive course materials. Built with WordPress and custom plugins to create a comprehensive educational platform.',
    tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    liveLink: 'https://neurotecheg.com/',
    githubLink: 'https://github.com/toqaosama',
  }
];

const FullStack = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Full Stack <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A showcase of my full-stack development projects, demonstrating end-to-end implementation skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map(project => (
              <div key={project.id} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4" style={{ marginBottom: '20px' }}>
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

export default FullStack;
