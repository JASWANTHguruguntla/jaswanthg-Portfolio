
import { useState } from "react";
import { Github, ExternalLink, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile();

  const projects = [
    {
      title: "YouTube Video Summarizer Pro",
      description: "AI tool that summarizes YouTube videos into key insights using proxy rotation and YouTube Data API fallback, achieving 98% success rate across 1,000+ test videos.",
      tech: ["Python", "Gemini AI", "Streamlit", "YouTube API"],
      category: "ai",
      github: "https://github.com/JASWANTHguruguntla/Youtube-Summarizer-Pro",
      demo: "https://jaswanth-youtube-summarizer-pro.streamlit.app/",
      features: ["Proxy rotation system", "Custom prompt engineering", "Intuitive Streamlit interface", "Intelligent caching"]
    },
    {
      title: "Pencil Sketch Generator",
      description: "Transforming photos into artistic pencil sketches with AI. Developed OpenCV tool with adjustable artistic effects and efficient image processing.",
      tech: ["Python", "OpenCV", "NumPy"],
      category: "ai",
      github: "https://github.com/JASWANTHguruguntla/Pencil-Art-Image-Generator",
      demo: "https://github.com/JASWANTHguruguntla/Pencil-Art-Image-Generator",
      features: ["Blur inversion", "Edge detection", "URL image fetching", "Error handling"]
    },
    {
      title: "Todo List - JavaScript CRUD",
      description: "Interactive task management web application with persistent storage. Features include task counter, clear all functionality, and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/JASWANTHguruguntla/Todo-App",
      demo: "https://jaswanthtodoo.ccbp.tech",
      features: ["CRUD operations", "Local storage", "Responsive design", "Modern CSS techniques"]
    },
    {
      title: "Responsive Portfolio Website",
      description: "Modern, responsive personal portfolio showcasing projects and skills. Built with clean design principles and optimal performance.",
      tech: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
      category: "frontend",
      github: "https://github.com/JASWANTHguruguntla/jaswanthg-Portfolio",
      demo: "https://jaswanthg.lovable.app",
      features: ["Responsive design", "Modern UI/UX", "Cross-browser compatibility", "Performance optimized"]
    },
    {
      title: "Restaurant Website",
      description: "Full-featured restaurant website with menu display, reservation system, and modern responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      github: "https://github.com/JASWANTHguruguntla/Restaurant-Page",
      demo: "https://jaswanthgfood.ccbp.tech/",
      features: ["Interactive menu", "Contact forms", "Mobile responsive", "Modern animations"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "ai", name: "AI & ML", count: projects.filter(p => p.category === "ai").length },
    { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving capabilities through real-world applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-cyan-500 text-white shadow-lg transform scale-105"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className="bg-slate-800/50 px-2 py-1 rounded-full text-xs">{category.count}</span>
            </button>
          ))}
        </div>

        <div 
          ref={projectsRef}
          className={`transition-all duration-1000 delay-300 ${
            projectsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <Carousel className="w-full max-w-full overflow-visible">
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredProjects.map((project, index) => (
                  <CarouselItem key={index} className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'md:basis-1/2 lg:basis-1/3'}`}>
                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden group h-full">
                      <div className="p-4 md:p-6 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex space-x-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            >
                              <Github size={18} />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            >
                              <ExternalLink size={18} />
                            </a>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm md:text-base">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-xs md:text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                          <ul className="text-xs md:text-sm text-gray-300 space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 md:px-3 py-1 bg-slate-600/50 text-cyan-400 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12 bg-slate-700/80 hover:bg-slate-600/80 border-cyan-400/20 text-cyan-400 hover:text-white h-12 w-12 rounded-full shadow-lg z-10" />
              <CarouselNext className="hidden sm:flex -right-12 bg-slate-700/80 hover:bg-slate-600/80 border-cyan-400/20 text-cyan-400 hover:text-white h-12 w-12 rounded-full shadow-lg z-10" />
            </Carousel>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            onClick={() => window.open("https://github.com/JASWANTHguruguntla", "_blank")}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
