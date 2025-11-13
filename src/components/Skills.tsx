
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
    <section id="skills" className="py-12 md:py-20 bg-slate-900/50">
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
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Full-stack development skills with expertise in Python, web technologies, and enterprise platforms
          </p>
        </div>

        {/* Mobile Accordion View */}
        <div 
          ref={cardsRef}
          className={`md:hidden space-y-4 mb-8 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <Accordion type="single" collapsible defaultValue="frontend" className="space-y-4">
            {Object.entries(skillCategories).map(([key, category]) => (
              <AccordionItem 
                key={key} 
                value={key}
                className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-slate-800/80 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-slate-900/50 text-cyan-400 rounded-full border border-cyan-400/30 text-sm"
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
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div
              key={key}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/10 ${
                cardsVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 shadow-md`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Competencies - Hidden on Mobile */}
        <div 
          ref={competenciesRef}
          className={`hidden md:block bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 transition-all duration-1000 delay-700 shadow-lg ${
            competenciesVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-200 text-base shadow-md"
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
