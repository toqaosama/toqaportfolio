
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1VRkF2mLkx5o9fjutbsXvGPSVH1WI1djL/view?usp=sharing";

  const handleResumeDownload = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          onClick={handleResumeDownload} 
          className="bg-purple hover:bg-purple-dark text-white rounded-full"
        >
          Resume
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full md:w-[600px] bg-dark-light overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-white">Toqa Osama Hassan</SheetTitle>
          <SheetDescription className="text-gray-300">Cairo, Egypt</SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:toqaosama86@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-purple transition-colors">
                <Mail className="w-4 h-4" />
                <span>toqaosama86@gmail.com</span>
              </a>
              <a href="tel:01155388410" className="flex items-center space-x-2 text-gray-300 hover:text-purple transition-colors">
                <Phone className="w-4 h-4" />
                <span>01155388410</span>
              </a>
              <a href="https://github.com/toqaosama" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-purple transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/toqa-osama-7b19b9225/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-purple transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Professional Summary</h3>
            <p className="text-gray-300">
              Enthusiastic and detail-oriented developer with 1 year of hands-on experience in frontend development, especially with React.js. I've built responsive, user-friendly interfaces in freelance projects and collaborated closely with clients to bring web solutions to life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Programming Languages & Core CS:</strong> Python, JavaScript, C++, Java, Data Structures & Algorithms, OOP</p>
              <p><strong>Frontend Development:</strong> React.js, HTML, CSS, Bootstrap, WordPress, Responsive Design</p>
              <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, Firebase, MySQL</p>
              <p><strong>AI & Machine Learning:</strong> Python Libraries (NumPy, Pandas, Matplotlib, Scikit-learn), Deep Learning, NLP</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Education</h3>
            <div className="text-gray-300">
              <p className="font-medium">Bachelor's Degree in Computer Science and Artificial Intelligence</p>
              <p>Helwan University | 2020 – May 2024</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Resume;

