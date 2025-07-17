
import { useState } from "react";
import { Code, Database, Wrench, Cloud, Brain, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [competenciesRef, competenciesVisible] = useScrollAnimation();

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        "Java",
        "Python", 
        "JavaScript",
        "C"
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "React.js",
        "Node.js"
      ]
    },
    database: {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "JPA/Hibernate"
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        "Git & GitHub",
        "Postman",
        "Maven",
        "Docker",
        "VS Code",
        "IntelliJ IDEA"
      ]
    },
    additional: {
      title: "Core Competencies",
      icon: <Brain className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      skills: [
        "RESTful API Development",
        "Authentication & Authorization",
        "Database Design",
        "Problem Solving",
        "Software Development",
        "Team Collaboration"
      ]
    }
  };

  const coreCompetencies = [
    "Backend Development",
    "API Design",
    "Database Management",
    "Authentication Systems",
    "Code Quality",
    "Problem Solving",
    "Team Collaboration",
    "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive backend development skills with a focus on Java ecosystem and modern development practices
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 transition-all duration-1000 delay-300 ${
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
          className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 transition-all duration-1000 delay-700 ${
            competenciesVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-200"
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
