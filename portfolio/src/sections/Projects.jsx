import React, { useState, useEffect, useRef } from "react";
import SqlCertImage from "../assets/SqlCertificate.png";
import book from "../assets/Bookworms.png";
import youtube from "../assets/youtubereact.png";
import qrcode from "../assets/qrgen.png";
import MJ1 from "../assets/MJ1.png";
import MJ2 from "../assets/MJ2.png";
import MJ3 from "../assets/MJ3.png";
import park1 from "../assets/Parktravel1.png";
import park2 from "../assets/Parktravel2.png";
import revalix1 from "../assets/revalix1.png";
import revalix2 from "../assets/revalix2.png";
import revalix3 from "../assets/revalix3.png";
import revalix4 from "../assets/revalix4.png";
import smartbin1 from "../assets/samrtbin1.png";
import smartbin2 from "../assets/samrtbin2.png";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // === STATE FOR MODALS ===
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // Controls the project modal
  const [activeImageIndex, setActiveImageIndex] = useState(0);  // Controls which gallery image is showing

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
  // Note: I added a 'gallery' array and changed 'details' to 'github' for the source code links
  const projects = [
    {
      title: "Revalix ",
      category: "Asp.NET Core & React",
      image: revalix1,
      gallery: [ revalix1, revalix2, revalix3, revalix4 ],
      desc: "Revalix is a Real Estate Analytics and Property Intelligence platform that aggregates property data from multiple sources and provides advanced search, valuation, and analytics capabilities for real estate professionals such as appraisers, lenders, investors, and property analysts. objective of the platform is to convert large volumes of raw property data into meaningful insights that help users make better real estate decisions.",
      tech: ["React", "Dot net Core", "C#", "Postgres SQL"],
      // github: "#"
    }, 
    {
      title: "MJ Transport - Logistics Management",
      category: "Asp.NET Core & React",
      image: MJ1,
      gallery: [  MJ1, MJ2, MJ3  ],
      desc: "Developed a scalable backend for the MJ Transport Logistics Management System using ASP.NET Core and PostgreSQL. Implemented modules for trip management, intent approval workflows, fleet tracking, driver and truck management, payment processing, financial reporting, and role-based access control. Built automated Profit & Loss reports, supplier and client ledgers, office expense management, and dashboard analytics with real-time KPIs. Designed optimized database queries, secure JWT authentication, validation logic to prevent financial inconsistencies, Excel export functionality, and RESTful APIs following N- tier Architecture principles. The system provides accurate operational tracking, financial transparency, and efficient business reporting through a secure and high-performance backend.",
      tech: ["React", "Dot net Core", "C#", "Postgres SQL"],
      // github: "#"
    },
    {  
      title: "Smartbin Management System",
      category: "Asp.NET Core",
      image: smartbin1,
      gallery: [smartbin1 , smartbin2],
      desc: "SmartBin is an IoT-based waste management system that helps monitor the fill level of garbage bins in real time. The main objective of the project is to optimize waste collection by notifying authorities when bins are full and providing analytics for efficient route planning and waste management. ",
      tech: ["React", "Dot net Core", "C#", "MSsql"],
      // github: "#"
    },
    { 
      title: "Park Travel - Smart Travel Management",
      category: "Asp.NET Core",
      image: park1,
      gallery: [park1 , park2],
      desc: "Park Travel is a Smart Travel Management System designed to digitize and automate employee transportation management for organizations. The system manages everything from employee registration and trip scheduling to vehicle allocation, driver management, QR-based attendance tracking, and real-time location monitoring.The main objective of the project is to reduce manual transportation management efforts, improve employee safety, and provide complete visibility of daily transportation operations.",
      tech: ["React", "Dot net Core", "C#", "MySQL"],
      // github: "#"
    },
    {
      title: "QuickAI",
      category: "AI & Web App",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"],
      desc: "Real-time mock interviews with AI. No forms or clicks, just natural, personalized conversations. Includes an Image Generator and Resume Analyzer to help candidates prepare fully.",
      tech: ["React", "OpenAI API"],
      github: "#"
    },
     {
      title: "Bookworm",
      category: "Web Application",
      image: book,
      gallery: [book],
      desc: "A book discovery app that helps users find books based on their interests. Built with a responsive React frontend and connected to external book APIs for real-time search and filtering.",
      tech: ["React js", "API"],
      live: "https://srisabarishv.github.io/Bookworm/",
      github: "https://github.com/SrisabarishV/Bookworm"
    },
    {
      title: "YouTube Clone",
      category: "Web Application",
      image: youtube,
      gallery: [youtube],
      desc: "A video streaming app interface modeled after YouTube. Made for easy, personal entertainment featuring curated lists, video playback UI, and search functionality using RapidAPI.",
      tech: ["React js", "API"],
      live: "https://srisabarishv.github.io/YouTube-React/",
      github: "https://github.com/SrisabarishV/YouTube-React"
    },
    {
      title: "QrCode Generator",
      category: "Web APP",
      image: qrcode,
      gallery: [qrcode],
      desc: "A fast and responsive web application that allows users to generate customized QR codes for URLs, text, and contact information instantly.",
      tech: ["React.js"],
      live: "https://srisabarishv.github.io/qr-code-gen",
      github: "https://github.com/SrisabarishV/qr-code-gen"
    }
  ];

  // === DATA: CERTIFICATES ===
  const certificates = [
    {
      title: "Internship Completion",
      issuer: "MD InfoTech",
      date: "2024",
      image: "" // Add your image imports here
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy / Bootcamps",
      date: "2024",
      image: "" 
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
      desc: [
        "Developed scalable REST APIs using ASP.NET Core for smart-bin operations, ticket management, and travel-related workflows. Built optimized LINQ and SQL Server queries with multi-table joins.",
        "Implemented validation-first API workflows and designed clean service–repository (CLEAN) architecture. Integrated backend APIs with Angular frontend (Park Travel) and implemented QR code–based workflows."
      ],
      skills: ["ASP.NET Core", "C#", "React.js", "MS SQL", "Postgres SQL" , "Elastic Search"]
    },
    {
      role: "Software Developer Intern",
      company: "MD Info Tech",
      period: "Jun 2024 - Nov 2024",
      desc: [
        "Developed and tested RESTful Web APIs using ASP.NET Core to perform full CRUD operations.",
        "Improved backend data management by automating the SQL deployment process and scheduled jobs. Gained hands-on experience with version control using Git and Swagger."
      ],
      skills: ["C#", ".NET", "Git", "Problem Solving"]
    }
  ];

  // === DATA: TECH STACK ===
  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },          
    { name: "ASP.NET Core", icon: "🧩", color: "text-purple-400" }, 
    { name: "C#", icon: "♯", color: "text-green-400" },            
    { name: "MS SQL Server", icon: "🗄️", color: "text-red-400" },      
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },       
    { name: "Elasticsearch", icon: "🔍", color: "text-teal-400" },  
    { name: "Web API", icon: "🌐", color: "text-blue-300" },        
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },   
    { name: "Tailwind CSS", icon: "🌬️", color: "text-cyan-400" },  
    { name: "Git", icon: "🔀", color: "text-orange-400" },         
    { name: "REST API", icon: "🔗", color: "text-gray-400" }, 
    { name: "Python", icon: "🐍", color: "text-blue-400" },        
    { name: "MVC", icon: "💠", color: "text-indigo-400" }, 
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
                  className={`flex flex-col h-full group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="text-xl font-bold text-white line-clamp-2">{project.title}</h3>
                        <span className="shrink-0 text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">{project.category}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0,4).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-black/30 text-gray-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-purple-400 text-sm font-semibold hover:text-purple-300 flex items-center gap-1"> Live Demo ↗</a>
                    )}          
                      {/* DETAILS BUTTON - Opens the Modal */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(project);
                          setActiveImageIndex(0); // Reset gallery to first image
                        }} 
                        className="text-gray-400 text-sm font-semibold hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        Details →
                      </button>
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

                        <div className="text-gray-300 text-sm leading-relaxed mb-6">
                            {Array.isArray(exp.desc) ? (
                                <ul className="list-none space-y-2">
                                    {exp.desc.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-purple-500 mr-2 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{exp.desc}</p>
                            )}
                        </div>

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
                  onClick={() => setSelectedCert(cert)}
                >
                    <div className="h-64 relative p-6 flex flex-col items-center justify-center text-center group-hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4 border border-white/10">
                            📜
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                        <p className="text-sm text-purple-400 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-gray-500">Issued: {cert.date}</p>
                    </div>
                    
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

     {/* ========================================= */}
      {/* === 1. PROJECT DETAILS POPUP MODAL ==== */}
      {/* ========================================= */}
      {selectedProject && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedProject(null)} 
        >
            <div 
                className="relative w-full max-w-7xl max-h-[95vh] bg-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors backdrop-blur-md border border-white/10 shadow-lg"
                >
                    ✕
                </button>

                {/* LEFT SIDE: Image Gallery (Expanded to 60% for better image clarity) */}
                <div className="w-full md:w-[60%] bg-gray-900/30 p-4 md:p-8 border-r border-white/10 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                    
                    {/* Main Active Image - Removed strict aspect ratio, allowing it to scale naturally */}
                    <div className="w-full flex-1 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center p-2">
                        <img 
                            src={selectedProject.gallery ? selectedProject.gallery[activeImageIndex] : selectedProject.image} 
                            alt={`${selectedProject.title} screenshot`} 
                            className="w-full h-auto max-h-[65vh] object-contain rounded-lg drop-shadow-xl"
                        />
                    </div>
                    
                    {/* Thumbnail Selector */}
                    {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                       <div className="flex gap-3 overflow-x-auto pb-2 snap-x mt-auto">
                           {selectedProject.gallery.slice(0, 5).map((img, i) => (
                               <button 
                                   key={i} 
                                   onClick={() => setActiveImageIndex(i)}
                                   className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                                       activeImageIndex === i 
                                       ? 'border-purple-500 opacity-100 scale-100' 
                                       : 'border-white/10 opacity-50 hover:opacity-100 hover:border-purple-500/50 scale-95'
                                   }`}
                               >
                                   <img src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                               </button>
                           ))}
                       </div>
                    )}
                </div>

                {/* RIGHT SIDE: Text, Tech, and Links (40% width) */}
                <div className="w-full md:w-[40%] p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-2 pr-10">{selectedProject.title}</h3>
                    <div className="mb-6">
                        <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                            {selectedProject.category}
                        </span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">About the Project</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                        {selectedProject.desc || "No description provided."}
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {selectedProject.tech.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 shadow-sm">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons (Pushed to bottom) */}
                    <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-white/10">
                        {selectedProject.live && (
                            <a 
                                href={selectedProject.live} 
                                target="_blank" 
                                rel="noreferrer"
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg shadow-purple-900/20 transition-all flex items-center gap-2"
                            >
                                Live Preview ↗
                            </a>
                        )}
                        {selectedProject.github && (
                            <a 
                                href={selectedProject.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 transition-all flex items-center gap-2"
                            >
                                Source Code &lt;/&gt;
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* ========================================= */}
      {/* === 2. CERTIFICATE POPUP MODAL ======== */}
      {/* ========================================= */}
      {selectedCert && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedCert(null)}
        >
            <div 
                className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors backdrop-blur-md border border-white/10"
                >
                    ✕
                </button>

                <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
                     <img 
                        src={selectedCert.image} 
                        alt={selectedCert.title} 
                        className="w-full h-full object-contain"
                    />
                </div>

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