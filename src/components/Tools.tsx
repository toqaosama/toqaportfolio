
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TechCategory = 'frontend' | 'backend' | 'ai' | 'tools';

type Technology = {
  name: string;
  icon: string;
  category: TechCategory;
};

const technologies: Technology[] = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
  
  
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
  
  
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'ai' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'ai' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'ai' },
  
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },

];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('frontend');

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Technologies and tools I use to bring projects to life
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger 
                value="frontend"
                onClick={() => setSelectedCategory('frontend')}
                className={cn(
                  selectedCategory === 'frontend' && 'bg-accent text-white'
                )}
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend"
                onClick={() => setSelectedCategory('backend')}
                className={cn(
                  selectedCategory === 'backend' && 'bg-accent text-white'
                )}
              >
                Backend
              </TabsTrigger>
              <TabsTrigger 
                value="ai"
                onClick={() => setSelectedCategory('ai')}
                className={cn(
                  selectedCategory === 'ai' && 'bg-accent text-white'
                )}
              >
                AI & ML
              </TabsTrigger>
              <TabsTrigger 
                value="tools"
                onClick={() => setSelectedCategory('tools')}
                className={cn(
                  selectedCategory === 'tools' && 'bg-accent text-white'
                )}
              >
                Tools
              </TabsTrigger>
            </TabsList>
          </div>

          {(['frontend', 'backend', 'ai', 'tools'] as TechCategory[]).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="flex flex-wrap justify-center gap-8">
                {technologies
                  .filter(tech => tech.category === category)
                  .map(tech => (
                    <div key={tech.name} className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 p-4 rounded-lg bg-card flex items-center justify-center shadow-sm">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-12 h-12"
                        />
                      </div>
                      <p className="text-sm font-medium mt-2">{tech.name}</p>
                    </div>
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStack;
