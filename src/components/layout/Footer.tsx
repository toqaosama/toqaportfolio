
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold">
            <span className="gradient-text">Toqa</span> Osama
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-foreground/80 hover:text-accent transition-colors">
              Projects
            </Link>
            <Link to="/ai-projects" className="text-foreground/80 hover:text-accent transition-colors">
              AI/ML Projects
            </Link>
            <Link to="/full-stack-projects" className="text-foreground/80 hover:text-accent transition-colors">
              Full Stack Projects
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/toqaosama" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/toqa-osama-7b19b9225/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:toqaosama86@gmail.com" 
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Toqa Osama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
