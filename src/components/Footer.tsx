
import { Github, Linkedin, Mail, Heart, Instagram, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Jaswanth Guruguntla</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Aspiring AI Generalist and Full-Stack Developer passionate about creating innovative solutions 
              that bridge traditional software development with cutting-edge AI technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/JASWANTHguruguntla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaswanthguruguntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/jaswanth_guruguntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://leetcode.com/u/jaswanth_guruguntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Code2 size={24} />
              </a>
              <a
                href="mailto:jaswanthg.aits@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#certifications" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Certifications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Frontend Development</span></li>
              <li><span className="text-gray-400">Backend Development</span></li>
              <li><span className="text-gray-400">AI & Machine Learning</span></li>
              <li><span className="text-gray-400">ServiceNow Platform</span></li>
              <li><span className="text-gray-400">Database Management</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jaswanth Guruguntla. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart className="text-red-500 mx-1" size={16} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
