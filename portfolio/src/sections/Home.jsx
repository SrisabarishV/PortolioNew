import React, { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Specializing in ASP.NET Core & Modern Web Tech";

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

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden bg-gray-950">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 max-w-4xl">
       
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-white">Software</span> <br />
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Developer
            </span>
        </h1>

        {/* --- TYPEWRITER SUBHEADING --- */}
        <div className="min-h-[32px] mb-8">
            <p className="text-xl text-gray-400 border-r-2 border-purple-500 inline-block pr-2 animate-pulse">
            {text}
            </p>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
          Hi, I'm <strong className="text-white">Srisabarish V</strong>. I build scalable REST APIs and efficient data workflows using .NET and React.
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['React.js', 'ASP.NET Core', 'C#', 'MS SQL', 'Rest API'].map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-sm hover:border-purple-500 hover:text-purple-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons - UPDATED HERE */}
        <div className="flex gap-4">
          <a 
            href="#projects"
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all shadow-lg shadow-purple-900/20"
          >
            View Projects 
          </a>
          
          <a 
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 font-medium transition-all"
          >
            Contact Me 
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;