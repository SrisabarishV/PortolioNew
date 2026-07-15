import React, { useState, useEffect } from 'react';
import myimage from '../assets/MJ1.png'; // <-- INSERT YOUR IMAGE PATH HERE
const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Specializing in ASP.NET Core & Modern Web Tech";

  // === STATE FOR BACKGROUND IMAGE SLIDER ===
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const bgImages = [
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1080&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1080&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080&auto=format&fit=crop"  
  ];

  // === TYPEWRITER EFFECT LOGIC ===
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);

  // === BACKGROUND IMAGE SLIDER LOGIC ===
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); 

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden bg-gray-950 py-24">
      
      {/* RIGHT-SIDE BACKGROUND IMAGE LAYER */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent z-10" />
        
        {bgImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Tech Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === bgImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* === MAIN CONTENT (2-Column Grid) === */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
       
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full md:w-3/5 flex flex-col text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-white">Software</span> <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              Developer
            </span>
          </h1>

          <div className="min-h-8 mb-8">
              <p className="text-xl text-gray-400 border-r-2 border-purple-500 inline-block pr-2 animate-pulse">
              {text}
              </p>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            Hi, I'm <strong className="text-white">Srisabarish V</strong>. I build scalable REST APIs and efficient data workflows using .NET and React.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
            {['React.js', 'ASP.NET Core', 'C#', 'MS SQL', 'Rest API'].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-300 text-sm hover:border-purple-500 hover:text-purple-400 transition-colors cursor-default backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all shadow-lg shadow-purple-900/20"
            >
              View Projects 
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 font-medium transition-all backdrop-blur-sm"
            >
              Contact Me 
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Personal Image with Animations */}
        <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
          
          {/* Wrapper with Custom Floating Animation */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            
            {/* Glowing Pulse Effect Behind Image */}
            <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            
            {/* Your Image */}
            <img 
              // src={myimage} 
              src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=800&auto=format&fit=crop"
              alt="Srisabarish V"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl hover:border-purple-500/50 transition-colors duration-500"
            />
            
            {/* Floating Tech Badges (Optional Decoration) */}
            {/* <div className="absolute top-4 -left-4 bg-gray-900 border border-gray-700 p-2 rounded-lg shadow-lg backdrop-blur-md z-20 hover:scale-110 transition-transform">
                ⚛️
            </div>
            <div className="absolute bottom-10 -right-4 bg-gray-900 border border-gray-700 p-2 rounded-lg shadow-lg backdrop-blur-md z-20 hover:scale-110 transition-transform">
                🧩
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;