import { useState, useEffect, useRef } from "react";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      name: "CB Corporate Banking",
      description: "Next-generation Corporate Internet Banking portal with seamless multi-platform access and advanced banking features.",
      category: "Enterprise Banking Solution",
      icon: "fas fa-university",
      link: "https://play.google.com/store/apps/details?id=com.cbq.corporatemobile&hl=en",
      gradient: "from-blue-600 to-indigo-600",
      tags: ["Banking", "Enterprise", "Multi-platform"],
      impact: "10M QAR Savings",
      tech: ["Android", "Kotlin", "MVVM"]
    },
    {
      name: "Adani One",
      description: "Comprehensive travel app providing fast, reliable, and user-friendly travel experience with booking capabilities.",
      category: "Travel & Beyond",
      icon: "fas fa-plane",
      link: "https://play.google.com/store/apps/details?id=com.adanione.android&hl=en",
      gradient: "from-green-500 to-teal-600",
      tags: ["Travel", "Booking", "Mobile"],
      impact: "1M+ Downloads",
      tech: ["Flutter", "Dart", "Firebase"]
    },
    {
      name: "AkbarTravels",
      description: "Seamless flight and hotel bookings with improved stability, performance optimization, and enhanced user experience.",
      category: "Flights & Hotels",
      icon: "fas fa-hotel",
      link: "https://play.google.com/store/apps/details?id=com.akbartravel.Akbar%20Travels&hl=en",
      gradient: "from-purple-600 to-pink-600",
      tags: ["Travel", "Hotels", "Booking"],
      impact: "1M+ Downloads",
      tech: ["Android", "Java", "REST APIs"]
    },
    {
      name: "10times",
      description: "Event discovery and networking platform connecting professionals worldwide with advanced search and networking features.",
      category: "Find Events & Network",
      icon: "fas fa-calendar-alt",
      link: "https://play.google.com/store/apps/details?id=com.tentimes&hl=en",
      gradient: "from-orange-500 to-red-600",
      tags: ["Events", "Networking", "Discovery"],
      impact: "100K+ Downloads",
      tech: ["Android", "Kotlin", "Material Design"]
    },
    {
      name: "Rythmos CM",
      description: "Healthcare management application for caregivers and medical professionals with comprehensive patient tracking.",
      category: "Healthcare Management",
      icon: "fas fa-heartbeat",
      link: "https://play.google.com/store/apps/details?id=com.intrex.caregiver",
      gradient: "from-red-500 to-pink-500",
      tags: ["Healthcare", "Management", "Caregiving"],
      impact: "Clinical Impact",
      tech: ["Flutter", "Firebase", "Healthcare APIs"]
    },
    {
      name: "Postfit",
      description: "Comprehensive fitness and health tracking application with workout planning, nutrition tracking, and progress monitoring.",
      category: "Fitness & Health Platform",
      icon: "fas fa-dumbbell",
      link: "https://play.google.com/store/apps/details?id=com.postfit.app&hl=en&gl=US",
      gradient: "from-indigo-600 to-purple-600",
      tags: ["Fitness", "Health", "Tracking"],
      impact: "Health & Wellness",
      tech: ["Android", "Health APIs", "Firebase"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Portfolio of innovative mobile applications with <span className="font-bold text-yellow-300">millions of downloads</span> and 
            <span className="font-bold text-yellow-300"> enterprise-level impact</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project header with icon and gradient */}
              <div className={`relative p-6 bg-gradient-to-r ${project.gradient} overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className={`${project.icon} text-xl text-white`}></i>
                    </div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.impact}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
                {/* Animated background */}
                <div className="absolute inset-0 opacity-30">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full ${hoveredProject === index ? 'animate-ping' : ''}`}></div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-white/10 text-blue-200 px-2 py-1 rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    <i className="fab fa-google-play mr-2 group-hover/link:scale-110 transition-transform"></i>
                    <span className="border-b border-blue-300/50 group-hover/link:border-white">View on Play Store</span>
                    <i className="fas fa-external-link-alt ml-2 text-xs group-hover/link:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Additional projects section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Additional Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-2">My AdaniGas</h4>
                <p className="text-gray-300">Gas booking and management app</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-2">Zoundz</h4>
                <p className="text-gray-300">Music therapy for pet anxiety</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-2">Postfit</h4>
                <p className="text-gray-300">Fitness and health tracking</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-2">Enterprise Apps</h4>
                <p className="text-gray-300">Various corporate solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
