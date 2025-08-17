
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}\n\nMy Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/918639944845?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "You'll be redirected to WhatsApp to send your message.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in AI and software development
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
            contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, collaborating on innovative projects, 
                or just having a chat about technology and AI. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">jaswanthg.aits@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+91 8639944845</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Rajampet, A.P-516126, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Social Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/JASWANTHguruguntla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                >
                  <Github className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jaswanthguruguntla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/jaswanth_guruguntla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Instagram</span>
                </a>
                <a
                  href="https://leetcode.com/u/jaswanth_guruguntla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                >
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                <Send className="mr-2" size={20} />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
