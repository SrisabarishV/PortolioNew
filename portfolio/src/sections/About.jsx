import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the section is currently intersecting
        // Removing 'unobserve' allows this to trigger every time we scroll past
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, // Trigger as soon as 10% comes into view for snappier re-triggering
        rootMargin: "-50px 0px" // Slightly shrink the viewport box to ensure it triggers well on leaving
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to remove observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Common base classes for card styling to keep JSX clean
  const cardBaseClass = "p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-all duration-700 ease-out text-left group transform";

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gray-950 text-white relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* === Main Text Content Block (Slides up from below) === */}
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Hello! I'm <strong className="text-white">Srisabarish V</strong>, a passionate 
            Software Developer specializing in <span className="text-purple-400">ASP.NET Core</span> and <span className="text-blue-400">React.js</span>. 
            I have hands-on experience building scalable REST APIs and modern web interfaces. 
            Currently employed at <strong className="text-white"> Park Intelli Solutions</strong> after completing an internship at <strong className="text-white">MD Info Tech</strong>. 
            I am focused on continuous learning and developing efficient data workflows.

            {/* Currently transitioning from an internship at <strong className="text-white">MD Info Tech</strong> to a full-time role at 
            <strong className="text-white"> Park Intelli Solutions</strong>. I am focused on continuous learning, 
            aiming to master cloud architecture and efficient data workflows. */}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <a 
              href="https://drive.google.com/file/d/1ZGda8COTvTgn99fmKKeQYNznUCkgXKpn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-900/20 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              📄 Download CV
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 rounded-lg border border-purple-500/50 hover:bg-purple-500/10 text-purple-400 font-semibold transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              &lt;/&gt; View Projects
            </a>
          </div>
        </div>

        {/* === Stats Cards Block (Choreographed entrance from 3 sides) === */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          
          {/* Card 1: From LEFT (delay-300) */}
          <div 
            className={`${cardBaseClass} delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300">
                {/* Code Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-white">4+</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Total Projects</h3>
            <p className="text-xs text-gray-500">Innovative web solutions crafted</p>
          </div>

          {/* Card 2: From BOTTOM (delay-500) */}
          <div 
            className={`${cardBaseClass} delay-500 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300">
                {/* Certificate Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Degree</h3>
            <p className="text-xs text-gray-500">B.Tech Information Technology</p>
          </div>

          {/* Card 3: From RIGHT (delay-700) */}
          <div 
            className={`${cardBaseClass} delay-700 ${
               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300">
                {/* Globe/Work Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-white">0.6+</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Years Exp.</h3>
            <p className="text-xs text-gray-500">Continuous learning journey</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;