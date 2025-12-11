import { Github, Linkedin, Mail, Heart, Instagram, Code2 } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/JASWANTHguruguntla", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/jaswanthguruguntla/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/jaswanth_guruguntla/", icon: Instagram, label: "Instagram" },
    { href: "https://leetcode.com/u/jaswanth_guruguntla/", icon: Code2, label: "LeetCode" },
    { href: "mailto:jaswanthg.aits@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Jaswanth Guruguntla
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Aspiring AI Generalist and Full-Stack Developer passionate about creating innovative solutions 
                that bridge traditional software development with cutting-edge AI technologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Technologies</h4>
              <ul className="space-y-2">
                {["Frontend Development", "Backend Development", "AI & Machine Learning", "ServiceNow Platform", "Database Management"].map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Jaswanth Guruguntla. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center">
                Built with <Heart className="text-red-500 mx-1.5" size={14} /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
