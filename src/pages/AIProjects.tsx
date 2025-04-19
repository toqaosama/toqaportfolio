import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code, Book, Cpu, FileText } from 'lucide-react';

const AiMl = () => {
  const projects = [
    {
      id: 1,
      title: 'Computer Vision Internship - Parking System',
      description: 'Developed a computer vision system for automated car gate entry/exit management at Neuro Tech company. The system uses deep learning for vehicle detection and tracking.',
      icon: <Brain className="h-10 w-10 text-accent" />,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
      category: 'Computer Vision',
    },
    {
      id: 2,
      title: 'Road Crack Analysis - Graduation Project',
      description: 'Developed a system for analyzing road cracks using Computer Vision and Machine Learning techniques, integrated with ArcGIS for spatial analysis and mapping.',
      icon: <FileText className="h-10 w-10 text-accent" />,
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'ArcGIS'],
      category: 'Computer Vision',
    },
    {
      id: 3,
      title: 'Image Classification CNN',
      description: 'Convolutional Neural Network for classifying images using TensorFlow and Keras. Trained on a dataset of everyday objects with 90% accuracy.',
      icon: <Brain className="h-10 w-10 text-accent" />,
      technologies: ['TensorFlow', 'Keras', 'Python', 'Matplotlib'],
      category: 'Computer Vision',
    }
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI & <span className="gradient-text">Machine Learning</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Exploring intelligent systems and data-driven solutions
            </p>
          </div>

          {/* Projects Section */}
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-px bg-muted flex-grow"></div>
                <h2 className="text-2xl font-bold px-6">{category}</h2>
                <div className="h-px bg-muted flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryProjects.map(project => (
                  <Card key={project.id} className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        {project.icon}
                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiMl;
