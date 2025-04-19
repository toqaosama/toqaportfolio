
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Store, Layout } from 'lucide-react';

const CurrentStudies = () => {
  const studies = [
    {
      id: 1,
      title: 'DevOps Engineering',
      description: 'Currently studying DevOps practices, including CI/CD pipelines, containerization, and cloud infrastructure.',
      icon: <Code className="h-10 w-10 text-accent" />,
      technologies: ['Docker', 'Jenkins', 'AWS', 'Kubernetes'],
    },
    {
      id: 2,
      title: 'Zomba Website',
      description: 'Developing a modern web application with focus on user experience and responsive design.',
      icon: <Layout className="h-10 w-10 text-accent" />,
      technologies: ['React', 'Node.js', 'Express', 'TypeScript'],
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Building a scalable e-commerce platform with features like product management, shopping cart, and payment integration.',
      icon: <Store className="h-10 w-10 text-accent" />,
      technologies: ['React', 'Node.js', 'Express', 'E-commerce'],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Current <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Exploring new technologies and building innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map(study => (
              <Card key={study.id} className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {study.icon}
                    <div>
                      <CardTitle>{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CurrentStudies;
