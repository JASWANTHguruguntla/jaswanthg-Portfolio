import { useState, useEffect } from "react";
import { Download, Mail, Github, Linkedin, ChevronDown, Instagram, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jaswanth_Guruguntla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div 
        ref={heroRef}
        className={`relative z-10 w-full max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          heroVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm text-gray-400">Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Jaswanth
                </span>
              </h1>
              
              <div className="h-8 flex items-center">
                <span className="text-lg sm:text-xl text-gray-400 font-light">
                  {displayText}
                  <span className="text-cyan-400 animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              B.Tech CSE (AI) Final Year Student with <span className="text-white font-medium">CGPA: 8.81</span>. 
              ServiceNow CSA & CAD Certified. Passionate about building scalable solutions and exploring AI frontiers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:jaswanthg.aits@gmail.com'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">Find me on</span>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/JASWANTHguruguntla", icon: Github },
                  { href: "https://www.linkedin.com/in/jaswanthguruguntla/", icon: Linkedin },
                  { href: "https://www.instagram.com/jaswanth_guruguntla/", icon: Instagram },
                  { href: "https://leetcode.com/u/jaswanth_guruguntla/", icon: Code2 },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Profile */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>
              
              {/* Profile card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
                <img
                  src="/profilepicture.jpg"
                  alt="Jaswanth Guruguntla"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover"
                  loading="lazy"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
                  CGPA: 8.81
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border border-cyan-400/30 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-8 left-8 w-8 h-8 bg-purple-500/20 rounded-lg rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="text-gray-500" size={20} />
        </div>
      </div>
    </section>
  );
};
