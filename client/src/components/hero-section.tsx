import { useState, useEffect } from "react";
import profileImage from "@assets/IMG_1185_1754662832504.jpeg";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Senior Software Engineer",
    "Tech Lead",
    "Android Expert", 
    "Flutter Developer",
    "Solution Architect"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Abdul_Quadir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-accent to-primary text-white pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Abdul Quadir
              </h1>
              <div className="text-2xl md:text-3xl mb-2 text-blue-100 h-12 flex items-center justify-center lg:justify-start">
                <span className="transition-all duration-500 transform">
                  {roles[currentRole]}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-blue-200">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>
            
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Innovative Lead Developer with <span className="font-bold text-white">11+ years</span> of expertise, 
              delivering scalable solutions that achieved <span className="font-bold text-yellow-300">10M QAR savings</span> 
              and <span className="font-bold text-yellow-300">1M+ app downloads</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm">
                <i className="fas fa-map-marker-alt text-yellow-300"></i>
                <span>Doha, Qatar</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm">
                <i className="fas fa-envelope text-yellow-300"></i>
                <span>quadir.1199@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={scrollToContact}
                className="group bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Let's Connect
                </span>
              </button>
              <button 
                onClick={handleDownloadResume}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-download mr-2 group-hover:translate-y-1 transition-transform"></i>
                  Download Resume
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-white opacity-20 animate-ping"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-white to-blue-200 opacity-30 animate-pulse"></div>
              
              {/* Profile image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={profileImage} 
                  alt="Abdul Quadir - Senior Software Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-20"></div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fab fa-android text-2xl text-green-500"></i>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                <i className="fab fa-flutter text-2xl text-blue-500"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-2000">
                <i className="fas fa-code text-2xl text-purple-500"></i>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-3000">
                <i className="fas fa-mobile-alt text-2xl text-indigo-500"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-white opacity-70"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
