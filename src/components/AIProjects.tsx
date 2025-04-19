
import { Brain, FileText, Code, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AiMlSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Sentiment Analysis NLP',
      description: 'Natural Language Processing model to analyze sentiment in customer reviews',
      icon: <FileText className="h-10 w-10 text-accent" />,
      link: '/ai-ml/sentiment-analysis',
    },
    {
      id: 2,
      title: 'Image Classification',
      description: 'Convolutional Neural Network for classifying images using TensorFlow',
      icon: <Brain className="h-10 w-10 text-accent" />,
      link: '/ai-ml/image-classification',
    },
    {
      id: 3,
      title: 'Data Visualization',
      description: 'Interactive visualizations of complex datasets using Python and D3.js',
      icon: <Code className="h-10 w-10 text-accent" />,
      link: '/ai-ml/data-visualization',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart <span className="gradient-text">Solutions</span> with AI & ML
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              Exploring the intersection of web development and artificial intelligence 
              to create intelligent systems that solve real-world problems.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Machine Learning Models</h3>
                  <p className="text-foreground/70">
                    Building and deploying predictive models that leverage data insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Natural Language Processing</h3>
                  <p className="text-foreground/70">
                    Creating intelligent systems that understand and generate human language.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Data Visualization</h3>
                  <p className="text-foreground/70">
                    Transforming complex datasets into intuitive visual representations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/ai-ml">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Explore AI Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader className="flex flex-row items-center gap-4">
                  {project.icon}
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Link to={project.link} className="ml-auto">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                      View Project
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMlSection;
