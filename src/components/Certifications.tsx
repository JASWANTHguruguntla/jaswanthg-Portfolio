import { Award, Calendar, ExternalLink, X, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
export const Certifications = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const isMobile = useIsMobile();
  const certifications = [{
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "April 4, 2025",
    description: "Foundation course in AI concepts, machine learning algorithms, and practical AI implementation.",
    skills: ["Machine Learning", "AI Concepts", "Data Science", "Python for AI"],
    color: "from-cyan-500 to-cyan-600",
    imageUrl: "/certificates/ai-fundamentals.jpg",
    pdfUrl: "/certificates/ai-fundamentals.pdf"
  }, {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "June 12, 2025",
    description: "Certification demonstrating proficiency in basic SQL operations, queries, and database management.",
    skills: ["SQL Queries", "Database Management", "Data Filtering", "Table Operations"],
    color: "from-green-500 to-green-600",
    imageUrl: "/certificates/sql-basic-hackerrank.jpg",
    pdfUrl: "/certificates/sql-basic-hackerrank.pdf"
  }, {
    title: "Full Stack Java Internship",
    issuer: "SkillDzire",
    date: "May 5 - June 20, 2025",
    description: "Successfully completed a comprehensive internship program in Full Stack Java development, covering both frontend and backend technologies.",
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Full Stack Development"],
    color: "from-purple-500 to-purple-600",
    imageUrl: "/certificates/skilldzire-fullstack-java.jpg",
    pdfUrl: "/certificates/skilldzire-fullstack-java.pdf"
  }, {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "July 14, 2025",
    description: "Comprehensive certification covering ServiceNow platform administration, user management, and system configuration.",
    skills: ["Platform Administration", "User Management", "System Configuration", "Workflow Management"],
    color: "from-blue-500 to-blue-600",
    imageUrl: "/certificates/servicenow-csa.jpg",
    pdfUrl: "/certificates/servicenow-csa.pdf"
  }, {
    title: "Certified Application Developer",
    issuer: "Technical Institute",
    date: "2024 - In Progress",
    description: "Advanced application development certification focusing on modern programming practices and software architecture.",
    skills: ["Application Development", "Software Architecture", "Programming", "System Design"],
    color: "from-orange-500 to-orange-600",
    imageUrl: "/certificates/certified-app-developer.jpg",
    pdfUrl: "/certificates/certified-app-developer.pdf"
  }, {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA with Forage",
    date: "July 28th, 2025",
    description: "Completed practical tasks in exploratory data analysis, risk profiling, predicting delinquency with AI, business reporting, and implementing AI-driven collections strategy.",
    skills: ["Generative AI", "Data Analytics", "Machine Learning", "Risk Profiling", "Business Intelligence", "Python", "AI Strategy"],
    color: "from-indigo-500 to-indigo-600",
    imageUrl: "/certificates/genai-data-analytics.jpg",
    pdfUrl: "/certificates/genai-data-analytics.pdf"
  }, {
    title: "Full Stack Developer Bootcamp - Master Frontend to Backend",
    issuer: "GeeksforGeeks",
    date: "2025",
    description: "Successfully completed a comprehensive 6-week course on Full Stack Developer Bootcamp covering modern frontend and backend technologies.",
    skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "Full Stack Development", "RESTful APIs", "Database Management"],
    color: "from-emerald-500 to-emerald-600",
    imageUrl: "/certificates/fullstack-bootcamp.jpg",
    pdfUrl: "/certificates/fullstack-bootcamp.pdf"
  }];
  return <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <Carousel className="w-full max-w-full overflow-visible">
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert, index) => (
                    <CarouselItem key={index} className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'md:basis-1/2 lg:basis-1/3'}`}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden group hover:transform hover:scale-105 cursor-pointer h-full">
                          <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                          
                          <div className="p-4 md:p-6 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-full bg-gradient-to-r ${cert.color}`}>
                                  <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                                    {cert.title}
                                  </h3>
                                  <p className="text-cyan-400 text-xs md:text-sm font-medium">{cert.issuer}</p>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                {cert.pdfUrl && (
                                  <a
                                    href={cert.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                    title="View Certificate PDF"
                                  >
                                    <ExternalLink size={16} />
                                  </a>
                                )}
                              </div>
                            </div>

                            {cert.imageUrl && (
                              <div className="mb-4 rounded-lg overflow-hidden bg-slate-600/30">
                                <img 
                                  src={cert.imageUrl} 
                                  alt={`${cert.title} certificate`}
                                  className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}

                            <div className="mb-3">
                              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                {cert.description}
                              </p>
                            </div>

                            <div className="mb-4">
                              <p className="text-xs text-gray-400 mb-2">
                                <Calendar size={12} className="inline mr-1" />
                                {cert.date}
                              </p>
                              {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {cert.skills.map((skill, i) => (
                                    <span 
                                      key={i}
                                      className="px-2 py-1 bg-slate-600/50 text-cyan-400 rounded-full text-xs font-medium"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                          </div>
                        </div>
                      </DialogTrigger>
                      
                      <DialogContent className="bg-slate-800 border-cyan-400/20 max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-white text-xl flex items-center gap-3">
                            <div className={`p-2 rounded-full bg-gradient-to-r ${cert.color}`}>
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            {cert.title}
                          </DialogTitle>
                          <DialogDescription className="text-cyan-400 font-medium">
                            Issued by {cert.issuer} • {cert.date}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                          <div>
                            {cert.imageUrl && (
                              <div className="rounded-lg overflow-hidden bg-slate-700/50 mb-4">
                                <img 
                                  src={cert.imageUrl}
                                  alt={`${cert.title} certificate`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            )}
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                                <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                              </div>
                              
                              {cert.skills && cert.skills.length > 0 && (
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-2">Skills Acquired</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, i) => (
                                      <span 
                                        key={i}
                                        className="px-3 py-1 bg-slate-600/50 text-cyan-400 rounded-full text-sm font-medium"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-white mb-2">Certificate Details</h4>
                              <div className="space-y-2 text-gray-300">
                                <p><strong>Issuer:</strong> {cert.issuer}</p>
                                <p><strong>Issue Date:</strong> {cert.date}</p>
                                <p><strong>Type:</strong> Professional Certification</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-center mt-6">
                          {cert.pdfUrl && (
                            <a 
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                              onClick={() => {
                                console.log(`Attempting to open PDF: ${cert.pdfUrl}`);
                              }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Open PDF Certificate
                            </a>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-slate-700/80 hover:bg-slate-600/80 border-cyan-400/20 text-cyan-400 hover:text-white h-12 w-12 rounded-full shadow-lg z-10" />
            <CarouselNext className="hidden sm:flex -right-12 bg-slate-700/80 hover:bg-slate-600/80 border-cyan-400/20 text-cyan-400 hover:text-white h-12 w-12 rounded-full shadow-lg z-10" />
            </Carousel>
          </div>
        </div>

        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Current Learning Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7+</div>
              <div className="text-gray-300">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Hours of Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2026</div>
              <div className="text-gray-300">Target Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};