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
      {/* Background matching website theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-500/15 rounded-full blur-[80px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px]"></div>
      </div>

      <div 
        ref={heroRef}
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:py-0 transition-all duration-1000 ${
          heroVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-purple-400/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs sm:text-sm text-gray-300">Available for opportunities</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-cyan-400">
                  Jaswanth
                </span>
              </h1>
              
              <div className="h-7 sm:h-8 flex items-center justify-center lg:justify-start">
                <span className="text-base sm:text-lg lg:text-xl text-gray-300 font-light">
                  {displayText}
                  <span className="text-cyan-400 animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              B.Tech CSE (AI) Final Year Student with <span className="text-cyan-400 font-medium">CGPA: 8.81</span>. 
              ServiceNow CSA & CAD Certified. Passionate about building scalable solutions and exploring AI frontiers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="group bg-cyan-500 hover:bg-cyan-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                onClick={() => window.location.href = 'mailto:jaswanthg.aits@gmail.com'}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-2 lg:pt-4 justify-center lg:justify-start">
              <span className="text-xs sm:text-sm text-gray-400">Find me on</span>
              <div className="flex gap-2 sm:gap-4">
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
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <social.icon size={24} className="sm:w-8 sm:h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Profile */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-30 scale-110 animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              {/* Profile image */}
              <div className="relative">
                <img
                  src="/profilepicture.jpg"
                  alt="Jaswanth Guruguntla"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 border-white/10 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  CGPA: 8.81
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-2 border-cyan-400/30 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
              <div className="absolute -bottom-6 left-6 sm:-bottom-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/30 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]"></div>
              <div className="hidden sm:block absolute top-1/2 -right-8 lg:-right-10 w-4 h-4 lg:w-6 lg:h-6 border-2 border-purple-400/30 rounded-full animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
              <div className="hidden md:block absolute -top-2 right-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-[float_5s_ease-in-out_infinite_1s]"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={28} />
        </div>
      </div>

      {/* Custom floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
};
