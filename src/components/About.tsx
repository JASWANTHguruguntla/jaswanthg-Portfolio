import { GraduationCap, Code, Brain, Trophy, School, BookOpen, ChevronDown } from "lucide-react";
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
      icon: <School className="w-6 h-6" />
    },
    {
      year: "2020-2022",
      title: "Intermediate Education",
      subtitle: "Space Junior College, Kadiri",
      description: "Completed 12th grade with MPC (Mathematics, Physics, Chemistry) stream",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "2022-2026",
      title: "B.Tech CSE (AI)",
      subtitle: "Annamacharya Institute of Technology and Sciences",
      description: "CGPA: 8.81 • Specializing in Artificial Intelligence",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "CCBP 4.0 Intensive",
      subtitle: "NxtWave - Full-Stack Development",
      description: "Mastered modern web technologies and full-stack development",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "ServiceNow CSA Certified",
      subtitle: "Smart Interz Partnership",
      description: "Certified System Administrator with hands-on platform experience",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: "2025",
      title: "AI Research Focus",
      subtitle: "Machine Learning & Deep Learning",
      description: "Exploring advanced AI applications and research opportunities",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Start when section is 80% visible from top, end when it's 20% from bottom
        const startTrigger = windowHeight * 0.8;
        const endTrigger = windowHeight * 0.2;
        
        if (elementTop <= startTrigger && elementTop + elementHeight >= endTrigger) {
          // Calculate progress more slowly and accurately
          const totalScrollableDistance = elementHeight + (startTrigger - endTrigger);
          const currentScrolled = startTrigger - elementTop;
          const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollableDistance));
          
          // Apply easing for smoother movement
          const easedProgress = progress * progress * (3 - 2 * progress); // smooth step function
          setScrollProgress(easedProgress);
        } else if (elementTop > startTrigger) {
          setScrollProgress(0);
        } else if (elementTop + elementHeight < endTrigger) {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate technologist on a journey to bridge the gap between traditional software development 
            and cutting-edge AI applications.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
            contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                From a young age, I've been fascinated by technology and its potential to solve real-world problems. 
                My academic journey at Annamacharya Institute has been complemented by intensive practical learning 
                through CCBP 4.0, where I mastered full-stack development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My passion lies in the intersection of traditional software engineering and artificial intelligence. 
                I believe in continuous learning and staying updated with the latest technological advancements.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm focused on building scalable web applications while exploring AI/ML opportunities 
                to create intelligent solutions that can make a meaningful impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8.81</div>
                <div className="text-gray-300">CGPA</div>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Projects</div>
              </div>
            </div>
          </div>

          <div className="relative" ref={timelineRef}>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            
            {/* Animated pointer that flows with scroll */}
            <div 
              className="absolute left-8 w-4 h-4 -translate-x-1/2 z-10 transition-all duration-500 ease-out"
              style={{
                top: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 ? 1 : 0,
                transform: `translateX(-50%) translateY(-50%) scale(${scrollProgress > 0 ? 1 : 0})`
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg animate-pulse border-2 border-slate-900"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-50"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-16 bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      <div className="text-cyan-400 mr-3">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-cyan-400">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
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
