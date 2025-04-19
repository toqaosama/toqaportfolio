
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="gradient-text">Software Engineer</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
          Enthusiastic and detail-oriented developer with 1 year of hands-on experience in
          frontend development, especially with React.js. I've built responsive, user-friendly
          interfaces in freelance projects and collaborated closely with clients to bring web
          solutions to life. Alongside my frontend skills, I have a strong academic foundation in
          Computer Science and Artificial Intelligence and a growing passion for AI, machine
          learning, and problem-solving using data.
        </p>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          My technical background includes solid programming fundamentals (Python,
          JavaScript, C++, Java), experience with backend basics (Node.js, Express), and practical
          knowledge in areas like machine learning, deep learning, and UI/UX design. I'm eager to
          contribute to innovative tech teams and open to diverse programming roles—from
          frontend development to AI-powered solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            asChild
          >
            <a href="/Contact">Get in Touch</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground/50 hover:text-accent"
          onClick={scrollToProjects}
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
