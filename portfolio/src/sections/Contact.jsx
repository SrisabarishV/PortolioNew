import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    /* CHANGED: bg-gray-50 -> bg-gray-900 for dark background */
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* --- LEFT COLUMN: Get in Touch --- */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* CHANGED: text-gray-800 -> text-white */}
            <h3 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
              Get in Touch
            </h3>
            {/* CHANGED: text-gray-600 -> text-gray-300 */}
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently looking for new opportunities as a .NET Developer. 
              Feel free to reach out regarding projects or full-time roles!
            </p>
            
            <div className="space-y-4 mt-6">
              {/* Email */}
              {/* CHANGED: text-gray-700 -> text-gray-300. Switched icon to lighter blue-400 */}
              <div className="flex items-center space-x-4 text-gray-300">
                <FaEnvelope className="text-blue-400 text-xl" />
                <a href="mailto:sabarishvelu4@gmail.com" className="hover:text-blue-400 transition-colors text-lg">
                  sabarishvelu4@gmail.com
                </a>
              </div>
              
              {/* Phone */}
               {/* CHANGED: text-gray-700 -> text-gray-300. Icon to blue-400 */}
              <div className="flex items-center space-x-4 text-gray-300">
                <FaPhone className="text-blue-400 text-xl" />
                <span className="text-lg">+91 63699 66408</span>
              </div>
              
              {/* Location */}
               {/* CHANGED: text-gray-700 -> text-gray-300. Icon to blue-400 */}
              <div className="flex items-center space-x-4 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span className="text-lg">Nadarmedu, Erode</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Connect with Me --- */}
          <div className="w-full md:w-1/2 space-y-6">
             {/* CHANGED: text-gray-800 -> text-white */}
            <h3 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
              Connect with Me
            </h3>
             {/* CHANGED: text-gray-600 -> text-gray-300 */}
            <p className="text-gray-300 text-lg">
              Check out my repositories or connect with me on professional networks.
            </p>
            
            {/* Social Buttons (These look good on dark already) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                // Changed bg-gray-900 to bg-gray-800 so it stands out slightly from the background
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:-translate-y-1 transition-transform duration-200 shadow-md"
              >
                <FaGithub size={20} /> GitHub
              </a>

              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:-translate-y-1 transition-transform duration-200 shadow-md"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>

              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:-translate-y-1 transition-transform duration-200 shadow-md"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="mailto:sabarishvelu4@gmail.com" 
                // Switched to lighter blue-400 for better contrast against dark bg
                className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Send a Message
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;