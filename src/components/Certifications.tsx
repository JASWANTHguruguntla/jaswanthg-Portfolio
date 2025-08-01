import { Award, Calendar, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";

export const Certifications = () => {
  
  const certifications = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "April 4, 2025",
      description: "Foundation course in AI concepts, machine learning algorithms, and practical AI implementation.",
      skills: ["Machine Learning", "AI Concepts", "Data Science", "Python for AI"],
      color: "from-cyan-500 to-cyan-600",
      imageUrl: "/certificates/ai-fundamentals.jpg",
      pdfUrl: "/certificates/ai-fundamentals.pdf"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "June 12, 2025",
      description: "Certification demonstrating proficiency in basic SQL operations, queries, and database management.",
      skills: ["SQL Queries", "Database Management", "Data Filtering", "Table Operations"],
      color: "from-green-500 to-green-600",
      imageUrl: "/certificates/sql-basic-hackerrank.jpg",
      pdfUrl: "/certificates/sql-basic-hackerrank.pdf"
    },
    {
      title: "Full Stack Java Internship",
      issuer: "SkillDzire",
      date: "May 5 - June 20, 2025",
      description: "Successfully completed a comprehensive internship program in Full Stack Java development, covering both frontend and backend technologies.",
      skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Full Stack Development"],
      color: "from-purple-500 to-purple-600",
      imageUrl: "/certificates/skilldzire-fullstack-java.jpg",
      pdfUrl: "/certificates/skilldzire-fullstack-java.pdf"
    },
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow", 
      date: "July 14, 2025",
      description: "Comprehensive certification covering ServiceNow platform administration, user management, and system configuration.",
      skills: ["Platform Administration", "User Management", "System Configuration", "Workflow Management"],
      color: "from-blue-500 to-blue-600",
      imageUrl: "/certificates/servicenow-csa.jpg",
      pdfUrl: "/certificates/servicenow-csa.pdf"
    },
    {
      title: "Certified Application Developer",
      issuer: "Technical Institute", 
      date: "2024 - In Progress",
      description: "Advanced application development certification focusing on modern programming practices and software architecture.",
      skills: ["Application Development", "Software Architecture", "Programming", "System Design"],
      color: "from-orange-500 to-orange-600",
      imageUrl: "/certificates/certified-app-developer.jpg",
      pdfUrl: "/certificates/certified-app-developer.pdf"
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "TATA with Forage",
      date: "July 28th, 2025",
      description: "Completed practical tasks in exploratory data analysis, risk profiling, predicting delinquency with AI, business reporting, and implementing AI-driven collections strategy.",
      skills: ["Generative AI", "Data Analytics", "Machine Learning", "Risk Profiling", "Business Intelligence", "Python", "AI Strategy"],
      color: "from-indigo-500 to-indigo-600",
      imageUrl: "/certificates/genai-data-analytics.jpg",
      pdfUrl: "/certificates/genai-data-analytics.pdf"
    },
    {
      title: "Full Stack Developer Bootcamp - Master Frontend to Backend",
      issuer: "GeeksforGeeks",
      date: "2025",
      description: "Successfully completed a comprehensive 6-week course on Full Stack Developer Bootcamp covering modern frontend and backend technologies.",
      skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "Full Stack Development", "RESTful APIs", "Database Management"],
      color: "from-emerald-500 to-emerald-600",
      imageUrl: "/certificates/fullstack-bootcamp.jpg",
      pdfUrl: "/certificates/fullstack-bootcamp.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden group hover:transform hover:scale-105 cursor-pointer">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${cert.color}`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {cert.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors duration-200" />
                    </div>

                    <div className="flex items-center text-gray-300 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{cert.date}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {cert.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">Skills Acquired:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full h-[90vh] bg-slate-900 border-cyan-400/20 flex flex-col">
                <DialogHeader className="relative flex-shrink-0">
                  <DialogTitle className="text-white text-xl pr-8">
                    {cert.title} - {cert.issuer}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300">
                    View the certificate image
                  </DialogDescription>
                  <DialogClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-6 w-6 text-white hover:text-cyan-400" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogHeader>
                
                <div className="flex-1 flex flex-col min-h-0 mt-4">
                  <div className="flex-1 bg-slate-800/50 rounded-lg border border-cyan-400/20 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={cert.imageUrl} 
                      alt={`${cert.title} Certificate`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onLoad={(e) => {
                        console.log(`Certificate image loaded: ${cert.imageUrl}`);
                      }}
                      onError={(e) => {
                        console.error(`Failed to load certificate image: ${cert.imageUrl}`);
                      }}
                    />
                  </div>
                  
                  <div className="flex-shrink-0 mt-4 p-4 bg-slate-900/80 rounded-lg border border-cyan-400/20">
                    <a 
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 w-full justify-center"
                      onClick={(e) => {
                        console.log(`Attempting to open PDF: ${cert.pdfUrl}`);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open PDF Certificate
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">2025</div>
              <div className="text-gray-300">Target Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
