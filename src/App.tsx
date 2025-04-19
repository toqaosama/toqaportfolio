
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import FullStackProjects from "./pages/FullStackProjects";
import AIProjects from "./pages/AIProjects";
import CurrentStudies from "./pages/CurrentStudies";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import Project from "./components/ProjectsSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/full-stack-projects" element={<FullStackProjects />} />
          <Route path="/ai-projects" element={<AIProjects />} />
          <Route path="/current-studies" element={<CurrentStudies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
