import { Award, Calendar, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

const certifications = [{
    title: "AlgoUniversity Technology Fellowship (ATF 2025)",
    issuer: "AlgoUniversity",
    date: "November 2025",
    description: "Successfully qualified for Stage 1 of the AlgoUniversity Tech Fellowship (ATF) 2025, ranking in the top 8% nationwide out of 250,000 participants and advanced to Stage 2.",
    skills: ["Competitive Programming", "Data Structures", "Algorithms", "Problem Solving", "Technical Excellence"],
    gradient: "from-red-500 to-orange-500",
    imageUrl: "/certificates/algouniversity-tech-fellowship.jpg",
    pdfUrl: "/certificates/algouniversity-tech-fellowship.jpg"
  }, {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "April 4, 2025",
    description: "Foundation course in AI concepts, machine learning algorithms, and practical AI implementation.",
    skills: ["Machine Learning", "AI Concepts", "Data Science", "Python for AI"],
    gradient: "from-cyan-500 to-blue-500",
    imageUrl: "/certificates/ai-fundamentals.jpeg",
    pdfUrl: "/certificates/ai-fundamentals.pdf"
  }, {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "June 12, 2025",
    description: "Certification demonstrating proficiency in basic SQL operations, queries, and database management.",
    skills: ["SQL Queries", "Database Management", "Data Filtering", "Table Operations"],
    gradient: "from-green-500 to-emerald-500",
    imageUrl: "/certificates/sql-basic-hackerrank.jpeg",
    pdfUrl: "/certificates/sql-basic-hackerrank.pdf"
  }, {
    title: "Full Stack Java Internship",
    issuer: "SkillDzire",
    date: "May 5 - June 20, 2025",
    description: "Successfully completed a comprehensive internship program in Full Stack Java development, covering both frontend and backend technologies.",
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Full Stack Development"],
    gradient: "from-purple-500 to-pink-500",
    imageUrl: "/certificates/skilldzire-fullstack-java.jpg",
    pdfUrl: "/certificates/skilldzire-fullstack-java.pdf"
  }, {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "July 14, 2025",
    description: "Comprehensive certification covering ServiceNow platform administration, user management, and system configuration.",
    skills: ["Platform Administration", "User Management", "System Configuration", "Workflow Management"],
    gradient: "from-blue-500 to-indigo-500",
    imageUrl: "/certificates/servicenow-csa.jpeg",
    pdfUrl: "/certificates/servicenow-csa.pdf"
  }, {
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    date: "October 19, 2025",
    description: "Successfully completed certification requirements for Certified Application Developer, demonstrating expertise in ServiceNow application development and custom solutions.",
    skills: ["Application Development", "ServiceNow Platform", "Scripting", "Custom Applications", "Software Architecture"],
    gradient: "from-orange-500 to-amber-500",
    imageUrl: "/certificates/servicenow-cad-image.jpeg",
    pdfUrl: "/certificates/servicenow-cad.pdf"
  }, {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA with Forage",
    date: "July 28th, 2025",
    description: "Completed practical tasks in exploratory data analysis, risk profiling, predicting delinquency with AI, business reporting, and implementing AI-driven collections strategy.",
    skills: ["Generative AI", "Data Analytics", "Machine Learning", "Risk Profiling", "Business Intelligence", "Python", "AI Strategy"],
    gradient: "from-indigo-500 to-violet-500",
    imageUrl: "/certificates/genai-data-analytics.jpg",
    pdfUrl: "/certificates/genai-data-analytics.pdf"
  }, {
    title: "Full Stack Developer Bootcamp - Master Frontend to Backend",
    issuer: "GeeksforGeeks",
    date: "2025",
    description: "Successfully completed a comprehensive 6-week course on Full Stack Developer Bootcamp covering modern frontend and backend technologies.",
    skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "Full Stack Development", "RESTful APIs", "Database Management"],
    gradient: "from-emerald-500 to-teal-500",
    imageUrl: "/certificates/fullstack-bootcamp.jpg",
    pdfUrl: "/certificates/fullstack-bootcamp.pdf"
  }];

export const Certifications = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const isMobile = useIsMobile();
  
  const autoplayPlugin = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-0 left-1/3 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-purple-500/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/8 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-400">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <Carousel 
              className="w-full max-w-full overflow-visible"
              plugins={[autoplayPlugin] as any}
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'md:basis-1/2 lg:basis-1/3'}`}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden group cursor-pointer h-full hover:-translate-y-2">
                          <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`}></div>
                          
                          <div className="p-5 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${cert.gradient} shadow-lg`}>
                                  <Award className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-sm leading-tight">
                                    {cert.title}
                                  </h3>
                                  <p className="text-cyan-400 text-xs font-medium mt-1">{cert.issuer}</p>
                                </div>
                              </div>
                            </div>

                            {cert.imageUrl && (
                              <div className="mb-4 rounded-xl overflow-hidden bg-white/5">
                                <img 
                                  src={cert.imageUrl} 
                                  alt={`${cert.title} certificate`}
                                  className="w-full h-36 object-cover block loaded"
                                />
                              </div>
                            )}

                            <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                              {cert.description}
                            </p>

                            <div className="mt-auto">
                              <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                <Calendar size={12} />
                                {cert.date}
                              </p>
                              {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {cert.skills.slice(0, 3).map((skill, i) => (
                                    <span 
                                      key={i}
                                      className="px-2 py-0.5 bg-white/5 text-cyan-400 rounded-full text-[10px] border border-cyan-400/20"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                  {cert.skills.length > 3 && (
                                    <span className="px-2 py-0.5 bg-white/5 text-gray-400 rounded-full text-[10px]">
                                      +{cert.skills.length - 3}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      
                      <DialogContent className="bg-[#0a0a0f] border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-xl">
                        <DialogHeader>
                          <DialogTitle className="text-white text-xl flex items-center gap-3">
                            <div className={`p-2 rounded-xl bg-gradient-to-r ${cert.gradient}`}>
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
                              <div className="rounded-xl overflow-hidden bg-white/5 mb-4 p-4">
                                <img 
                                  src={cert.imageUrl}
                                  alt={`${cert.title} certificate`}
                                  className="w-full h-auto max-h-[500px] object-contain mx-auto block loaded"
                                />
                              </div>
                            )}
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                              <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                              <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                            </div>
                            
                            {cert.skills && cert.skills.length > 0 && (
                              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">Skills Acquired</h4>
                                <div className="flex flex-wrap gap-2">
                                  {cert.skills.map((skill, i) => (
                                    <span 
                                      key={i}
                                      className="px-3 py-1 bg-white/5 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                              <h4 className="text-lg font-semibold text-white mb-2">Certificate Details</h4>
                              <div className="space-y-2 text-gray-400 text-sm">
                                <p><strong className="text-white">Issuer:</strong> {cert.issuer}</p>
                                <p><strong className="text-white">Issue Date:</strong> {cert.date}</p>
                                <p><strong className="text-white">Type:</strong> Professional Certification</p>
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
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Open PDF Certificate</span>
                            </a>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-14 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 h-10 w-10 rounded-full backdrop-blur-sm transition-all duration-300" />
              <CarouselNext className="hidden lg:flex -right-14 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 h-10 w-10 rounded-full backdrop-blur-sm transition-all duration-300" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
