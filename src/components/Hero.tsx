
import { useState, useEffect } from "react";
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Aspiring AI Generalist",
    "Full-Stack Developer", 
    "Tech Explorer",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex % titles.length];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setDisplayText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Jaswanth <span className="text-cyan-400">Guruguntla</span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          B.Tech CSE (AI) Final Year Student | CGPA: 8.88 | ServiceNow CSA Certified | 
          Passionate about building scalable solutions and exploring AI frontiers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            <Mail className="mr-2" size={20} />
            Get in Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
          <a
            href="https://github.com/JaswanthG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/jaswanthguruguntla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:jaswanthg.aits@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Mail size={32} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="mx-auto text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
};
