
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  codeLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, codeLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-3">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="code-btn">
            <Code className="h-4 w-4" />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
