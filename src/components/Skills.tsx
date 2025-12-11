import { Code, Database, Wrench, Cloud, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [mobileRef, mobileVisible] = useScrollAnimation();
  const [competenciesRef, competenciesVisible] = useScrollAnimation();

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["HTML", "CSS", "JavaScript", "Flexbox", "Media Queries"]
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
      skills: ["Python", "SQL", "Flask", "Streamlit"]
    },
    tools: {
      title: "Development Tools",
      icon: <Wrench className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      skills: ["VS Code", "Git & GitHub", "Command Line", "LaTeX", "Lovable", "Bolt"]
    },
    platforms: {
      title: "Platforms & Certifications",
      icon: <Cloud className="w-5 h-5" />,
      gradient: "from-orange-500 to-amber-500",
      skills: ["ServiceNow (CSA Certified)", "Salesforce (Learning)", "LeetCode (Problem Solving)"]
    },
    additional: {
      title: "Core Competencies",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-cyan-500 to-blue-500",
      skills: ["Web Development", "Database Management", "Problem Solving", "Version Control", "Responsive Design", "API Development"]
    }
  };

  const coreCompetencies = [
    "Web Development", "Backend Development", "Database Management", 
    "Problem Solving", "Version Control", "Responsive Design",
    "ServiceNow Platform", "Continuous Learning"
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/8 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/8 rounded-full blur-[100px]"></div>
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
            <span className="text-sm text-gray-400">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Full-stack development skills with expertise in Python, web technologies, and enterprise platforms
          </p>
        </div>

        {/* Mobile Accordion View */}
        <div 
          ref={mobileRef}
          className={`md:hidden space-y-4 mb-8 transition-all duration-1000 delay-300 ${
            mobileVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <Accordion type="single" collapsible defaultValue="frontend" className="space-y-3">
            {Object.entries(skillCategories).map(([key, category]) => (
              <AccordionItem 
                key={key} 
                value={key}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{category.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-white/5 text-cyan-400 rounded-full border border-cyan-400/20 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Grid View */}
        <div 
          ref={cardsRef}
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div
              key={key}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 group ${
                cardsVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-400 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Competencies - Hidden on Mobile */}
        <div 
          ref={competenciesRef}
          className={`hidden md:block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-1000 delay-700 ${
            competenciesVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 text-cyan-400 rounded-full border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 text-sm"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
