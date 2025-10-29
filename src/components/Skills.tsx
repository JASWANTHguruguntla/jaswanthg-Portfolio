
import { useState } from "react";
import { Code, Database, Wrench, Cloud, Brain, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [mobileCardsRef, mobileCardsVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [competenciesRef, competenciesVisible] = useScrollAnimation();

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Flexbox",
        "Media Queries"
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        "Python",
        "SQL",
        "Flask",
        "Streamlit"
      ]
    },
    tools: {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        "VS Code",
        "Git & GitHub",
        "Command Line",
        "LaTeX",
        "Lovable",
        "Bolt"
      ]
    },
    platforms: {
      title: "Platforms & Certifications",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        "ServiceNow (CSA Certified)",
        "Salesforce (Learning)",
        "LeetCode (Problem Solving)"
      ]
    },
    additional: {
      title: "Core Competencies",
      icon: <Brain className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      skills: [
        "Web Development",
        "Database Management",
        "Problem Solving",
        "Version Control",
        "Responsive Design",
        "API Development"
      ]
    }
  };

  const coreCompetencies = [
    "Web Development",
    "Backend Development",
    "Database Management", 
    "Problem Solving",
    "Version Control",
    "Responsive Design",
    "ServiceNow Platform",
    "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Full-stack development skills with expertise in Python, web technologies, and enterprise platforms
          </p>
        </div>

        {/* Mobile: Vertical stack with smooth scroll */}
        <div 
          ref={mobileCardsRef}
          className="md:hidden space-y-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div
              key={key}
              className={`bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 shadow-lg shadow-slate-900/50 active:scale-[0.98] transition-all duration-300 ${
                mobileCardsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-700/60 text-cyan-300 text-sm rounded-lg border border-cyan-400/20 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet: Original grid layout */}
        <div 
          ref={cardsRef}
          className={`hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div
              key={key}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 ${
                cardsVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          ref={competenciesRef}
          className={`bg-gradient-to-br from-slate-800/80 to-slate-800/40 md:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cyan-400/20 shadow-lg md:shadow-sm shadow-slate-900/50 transition-all duration-1000 delay-700 ${
            competenciesVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-2 bg-slate-700/60 md:bg-slate-700/50 text-cyan-400 text-sm md:text-base rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 active:scale-95 md:active:scale-100 transition-all duration-200"
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
