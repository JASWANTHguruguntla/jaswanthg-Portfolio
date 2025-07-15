
import { useState } from "react";
import { Code, Database, Wrench, Cloud, Brain } from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Flexbox", level: 90 },
        { name: "Responsive Design", level: 88 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Streamlit", level: 85 },
        { name: "API Development", level: 75 },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Command Line", level: 85 },
        { name: "LaTeX", level: 80 },
        { name: "Figma", level: 70 },
      ],
    },
    platforms: {
      title: "Platforms & Certifications",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "ServiceNow", level: 85 },
        { name: "Salesforce", level: 60 },
        { name: "LeetCode", level: 75 },
        { name: "AWS Basics", level: 65 },
      ],
    },
    ai: {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "OpenCV", level: 80 },
        { name: "NumPy", level: 75 },
        { name: "Pandas", level: 70 },
        { name: "Machine Learning", level: 70 },
        { name: "Computer Vision", level: 75 },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on project experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? "bg-cyan-500 text-white shadow-lg transform scale-105"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-cyan-400"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {skillCategories[activeCategory].title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Frontend</div>
            <div className="text-gray-300">HTML, CSS, JavaScript</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Backend</div>
            <div className="text-gray-300">Python, SQL, Flask</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">AI/ML</div>
            <div className="text-gray-300">OpenCV, NumPy, Computer Vision</div>
          </div>
        </div>
      </div>
    </section>
  );
};
