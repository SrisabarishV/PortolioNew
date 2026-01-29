import React, { useState, useEffect, useRef } from "react";
import SqlCertImage from "../assets/SqlCertificate.png";
import book from "../assets/Bookworms.png";
import youtube from "../assets/youtubereact.png";
import qrcode from "../assets/qrgen.png";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // === NEW: STATE FOR MODAL ===
  const [selectedCert, setSelectedCert] = useState(null);

  // === ANIMATION LOGIC ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  // === DATA: PROJECTS ===
  const projects = [
    {
      title: "QuickAI",
      category: "AI & Web App",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      desc: "Real-time with AI. just natural, personalized conversations, Image Generator, Resume Analyzer.",
      tech: ["React", "OpenAI API"],
      details: "#"
    },
     {
      title: "Bookworm",
      category: "Web Application",
      image: book,
      desc: "A book discovery app that helps users find books based on their interests.",
      tech: ["React js", "API"],
      live: "https://srisabarishv.github.io/Bookworm/",
      details: "https://github.com/SrisabarishV/Bookworm"
    },
    {
      title: "YouTube Clone",
      category: "Web Application",
      image: youtube,
      desc: "A video streaming app made for easy, personal entertainment. Features curated lists. ",
      tech: ["React js", "API"],
      live: "https://srisabarishv.github.io/YouTube-React/",
      details: "https://github.com/SrisabarishV/YouTube-React"
    },
    {
      title: "QrCode Generator",
      category: "Web APP",
      image: qrcode,
      desc: "A Web application that allows users to generate customized QR codes for URLs, text, and more.",
      tech: ["React.js"],
      live: "https://srisabarishv.github.io/qr-code-gen",
      details: "https://github.com/SrisabarishV/qr-code-gen"
    },
    {
      title: "Asp.Net Appointment Booking System",
      category: "Application",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8efe30?q=80&w=800&auto=format&fit=crop",
      desc: "A Web application that allows users to generate customized QR codes for URLs, text, and more.",
      tech: ["React.js"],
      details: "#"
    },
    {
      title: "Asp.net ",
      category: "",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8efe30?q=80&w=800&auto=format&fit=crop",
      desc: "A Web application that allows users to generate customized QR codes for URLs, text, and more.",
      tech: ["React.js"],
      details: "#"
    }

  ];

  // === DATA: CERTIFICATES ===
  const certificates = [
    {
      title: "B.Tech Information Technology",
      issuer: "Velalar College of Engg.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1589330694653-4a8b243e36aa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy / Bootcamps",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sql Basic",
      issuer: "Hackerrank",
      date: "2024",
      image: SqlCertImage
    }
  ];

  // === DATA: EXPERIENCE ===
  const experiences = [
    {
      role: "Software Developer",
      company: "Park Intelli Solutions",
      period: "Aug 2025 - Present",
      desc: "Specializing in ASP.NET Core and React.js. Building scalable REST APIs, optimizing SQL queries, and implementing Clean Architecture for enterprise-grade applications.",
      skills: ["ASP.NET Core", "C#", "React.js", "MS SQL"]
    },
    {
      role: "Software Developer Intern",
      company: "MD Info Tech",
      period: "Jun 2024 - Nov 2024",
      desc: "Assisted in backend development and database management. Collaborated with the team to troubleshoot bugs and improve application performance.",
      skills: ["C#", ".NET", "Git", "Problem Solving"]
    }
  ];

  // === DATA: TECH STACK ===
const techStack = [
  { name: "React", icon: "⚛️", color: "text-cyan-400" },          // Official atomic symbol
  { name: "ASP.NET Core", icon: "🧩", color: "text-purple-400" }, // Modular framework feel
  { name: "C#", icon: "♯", color: "text-green-400" },            // Musical sharp = C#
  { name: "MS SQL Server", icon: "🗄️", color: "text-red-400" },      // Database cabinet
  { name: "MongoDB", icon: "🍃", color: "text-green-500" },       // Official leaf
  { name: "Elasticsearch", icon: "🔍", color: "text-teal-400" },  // Search precision
  { name: "Web API", icon: "🌐", color: "text-blue-300" },        // Internet-facing service
  { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },   // JS brand color
  { name: "Tailwind CSS", icon: "🌬️", color: "text-cyan-400" },  // Lightweight / utility-first
  { name: "Git", icon: "🔀", color: "text-orange-400" },         // Branching metaphor
  { name: "REST API", icon: "🔗", color: "text-gray-400" },      // Connected endpoints
];


  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-24 bg-gray-950 min-h-screen relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* === HEADER === */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio <span className="text-purple-500">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </div>

        {/* === TAB NAVIGATION === */}
        <div 
          className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-white/5 p-1 rounded-xl flex flex-wrap gap-2 border border-white/10 backdrop-blur-md">
            {[
                { id: "projects", label: "Projects", icon: "< >" },
                { id: "experience", label: "Experience", icon: "💼" }, 
                { id: "certificates", label: "Certificates", icon: "🎓" },
                { id: "tech", label: "Tech Stack", icon: "🛠" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={activeTab === tab.id ? "text-white" : "text-purple-400"}>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* === CONTENT AREA === */}
        <div className="min-h-125">
            
          {/* PROJECTS GRID */}
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <span className="text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">{project.category}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-black/30 text-gray-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                    {project.live && (
                      <a href={project.live} className="text-purple-400 text-sm font-semibold hover:text-purple-300 flex items-center gap-1"> Live Demo ↗</a>
                    )}          
                      <a href={project.details} className="text-gray-400 text-sm font-semibold hover:text-white flex items-center gap-1">Details →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE CARD */}
          {activeTab === "experience" && (
             <div className="grid md:grid-cols-2 gap-8">
                {experiences.map((exp, idx) => (
                    <div 
                        key={idx}
                        className={`p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:border-purple-500/50 transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-purple-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-xs font-mono text-gray-500 border border-gray-700 px-3 py-1 rounded-full">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {exp.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <span key={skill} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
             </div>
          )}

          {/* CERTIFICATES GRID */}
          {activeTab === "certificates" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  /* ADDED: OnClick Event */
                  onClick={() => setSelectedCert(cert)}
                >
                    {/* Visual Part */}
                    <div className="h-64 relative p-6 flex flex-col items-center justify-center text-center group-hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4 border border-white/10">
                            📜
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                        <p className="text-sm text-purple-400 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-gray-500">Issued: {cert.date}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-6 py-2 bg-white text-purple-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            View Certificate
                        </button>
                    </div>
                </div>
              ))}
            </div>
          )}

          {/* TECH STACK GRID */}
          {activeTab === "tech" && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 group cursor-default ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                  <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* === CERTIFICATE POPUP MODAL === */}
      {/* This renders only when a certificate is selected */}
      {selectedCert && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedCert(null)} // Close when clicking outside
        >
            <div 
                className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors backdrop-blur-md"
                >
                    ✕
                </button>

                {/* Image */}
                <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
                     <img 
                        src={selectedCert.image} 
                        alt={selectedCert.title} 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Footer details */}
                <div className="p-6 bg-gray-900 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
                    <p className="text-purple-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;