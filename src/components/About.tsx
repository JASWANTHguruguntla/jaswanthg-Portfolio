import { GraduationCap, Code, Brain, Trophy, School, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";

export const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const timeline = [
    {
      year: "2010-2020",
      title: "Secondary Education", 
      subtitle: "Sree Sarada English Medium School, Kadiri",
      description: "Completed 10th grade with strong foundation in mathematics and science",
      icon: <School className="w-5 h-5" />
    },
    {
      year: "2020-2022",
      title: "Intermediate Education",
      subtitle: "Space Junior College, Kadiri",
      description: "Completed 12th grade with MPC (Mathematics, Physics, Chemistry) stream",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      year: "2022-2026",
      title: "B.Tech CSE (AI)",
      subtitle: "Annamacharya Institute of Technology and Sciences",
      description: "CGPA: 8.81 • Specializing in Artificial Intelligence",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "CCBP 4.0",
      subtitle: "NxtWave - Full-Stack Development",
      description: "Mastered modern web technologies and full-stack development",
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "ServiceNow CSA & CAD Certified",
      subtitle: "Smart Interz Partnership",
      description: "Certified System Administrator and Application Developer with hands-on platform experience",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "AI Research Focus",
      subtitle: "Machine Learning & Deep Learning",
      description: "Exploring advanced AI applications and research opportunities",
      icon: <Brain className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        const startTrigger = windowHeight * 0.8;
        const endTrigger = windowHeight * 0.2;
        
        if (elementTop <= startTrigger && elementTop + elementHeight >= endTrigger) {
          const totalScrollableDistance = elementHeight + (startTrigger - endTrigger);
          const currentScrolled = startTrigger - elementTop;
          const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollableDistance));
          const easedProgress = progress * progress * (3 - 2 * progress);
          setScrollProgress(easedProgress);
        } else if (elementTop > startTrigger) {
          setScrollProgress(0);
        } else if (elementTop + elementHeight < endTrigger) {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[80px]"></div>
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
            <span className="text-sm text-gray-400">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A passionate technologist bridging traditional software development and cutting-edge AI applications.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-300 ${
            contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                From a young age, I've been fascinated by technology and its potential to solve real-world problems. 
                My academic journey at Annamacharya Institute has been complemented by intensive practical learning 
                through CCBP 4.0, where I mastered full-stack development.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My passion lies in the intersection of traditional software engineering and artificial intelligence. 
                I believe in continuous learning and staying updated with the latest technological advancements.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently, I'm focused on building scalable web applications while exploring AI/ML opportunities 
                to create intelligent solutions that can make a meaningful impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">8.81</div>
                <div className="text-gray-400 text-sm">CGPA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
            </div>
          </div>

          <div className="relative" ref={timelineRef}>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-cyan-400/50"></div>
            
            <div 
              className="absolute left-6 w-3 h-3 -translate-x-1/2 z-10 transition-all duration-500 ease-out"
              style={{
                top: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 ? 1 : 0,
                transform: `translateX(-50%) translateY(-50%) scale(${scrollProgress > 0 ? 1 : 0})`
              }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-50"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-4 w-4 h-4 bg-white/10 rounded-full border-2 border-cyan-400/50"></div>
                  <div className="ml-12 bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded-full">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
