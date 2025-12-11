import { useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
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
    {
      title: "Inventory Management System",
      description: "Desktop application for efficient product inventory tracking and management with secure user authentication and real-time operations.",
      tech: ["Java", "JavaFX", "MySQL", "Maven"],
      category: "fullstack",
      github: "https://github.com/JASWANTHguruguntla/InventoryManagementSystem",
      demo: "https://github.com/JASWANTHguruguntla/InventoryManagementSystem",
      features: ["Secure login system", "Real-time inventory dashboard", "Product CRUD operations", "Input validation and error handling"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "ai", name: "AI & ML", count: projects.filter(p => p.category === "ai").length },
    { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);
  const [isFilterChanging, setIsFilterChanging] = useState(false);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/8 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-400">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving capabilities through real-world applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => {
                setIsFilterChanging(true);
                setFilter(category.id);
                setTimeout(() => setIsFilterChanging(false), 50);
              }}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 animate-fade-in text-sm ${
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span className="font-medium">{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                filter === category.id ? "bg-white/20" : "bg-white/5"
              }`}>{category.count}</span>
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
                <CarouselItem 
                  key={`${filter}-${index}`} 
                  className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'md:basis-1/2 lg:basis-1/3'} transition-all duration-500 ${
                    isFilterChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-fade-in'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden group h-full hover:-translate-y-2">
                      <div className="p-6 h-full flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/5 group-hover:to-purple-400/5 transition-all duration-500"></div>
                        <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="flex space-x-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                            >
                              <Github size={16} />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-cyan-400 mb-2">Key Features:</h4>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-white/5 text-cyan-400 rounded-full text-xs border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-14 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 h-10 w-10 rounded-full backdrop-blur-sm transition-all duration-300" />
              <CarouselNext className="hidden lg:flex -right-14 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 h-10 w-10 rounded-full backdrop-blur-sm transition-all duration-300" />
            </Carousel>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            onClick={() => window.open("https://github.com/JASWANTHguruguntla", "_blank")}
          >
            <Github className="mr-2" size={18} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
