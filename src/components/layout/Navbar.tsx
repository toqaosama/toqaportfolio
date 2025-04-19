
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'AI/ML Projects', path: '/ai-projects' },
    { name: 'Full Stack Projects', path: '/full-stack-projects' },
    { name: 'Current Studies', path: '/current-studies' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <span className="gradient-text">Toqa</span> Osama
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://drive.google.com/file/d/1VRkF2mLkx5o9fjutbsXvGPSVH1WI1djL/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium"
            >
              <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background shadow-md py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="font-medium py-2 text-foreground/80 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://drive.google.com/file/d/1VRkF2mLkx5o9fjutbsXvGPSVH1WI1djL/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium"
              >
                <Button size="sm" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
