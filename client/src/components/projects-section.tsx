export default function ProjectsSection() {
  const projects = [
    {
      name: "CB Corporate Banking",
      description: "Next-generation Corporate Internet Banking portal with seamless multi-platform access.",
      category: "Enterprise Banking Solution",
      icon: "fas fa-university",
      link: "https://play.google.com/store/apps/details?id=com.cbq.corporatemobile&hl=en",
      gradient: "from-primary to-accent"
    },
    {
      name: "Adani One",
      description: "Comprehensive travel app providing fast, reliable, and user-friendly travel experience.",
      category: "Travel & Beyond - 1M+ Downloads",
      icon: "fas fa-plane",
      link: "https://play.google.com/store/apps/details?id=com.adanione.android&hl=en",
      gradient: "from-accent to-primary"
    },
    {
      name: "AkbarTravels",
      description: "Seamless flight and hotel bookings with improved stability and performance.",
      category: "Flights & Hotels - 1M+ Downloads",
      icon: "fas fa-hotel",
      link: "https://play.google.com/store/apps/details?id=com.akbartravel.Akbar%20Travels&hl=en",
      gradient: "from-primary to-accent"
    },
    {
      name: "10times",
      description: "Event discovery and networking platform connecting professionals worldwide.",
      category: "Find Events & Network - 100K+ Downloads",
      icon: "fas fa-calendar-alt",
      link: "https://play.google.com/store/apps/details?id=com.tentimes&hl=en",
      gradient: "from-secondary to-primary"
    },
    {
      name: "Rythmos CM",
      description: "Healthcare management application for caregivers and medical professionals.",
      category: "Healthcare Management",
      icon: "fas fa-heartbeat",
      link: "https://play.google.com/store/apps/details?id=com.intrex.caregiver",
      gradient: "from-accent to-secondary"
    },
    {
      name: "Tapestri",
      description: "Advanced mobile analytics and data collection platform for market research.",
      category: "Mobile Analytics Platform",
      icon: "fas fa-mobile-alt",
      link: "https://play.google.com/store/apps/details?id=com.tapestri.io&hl=en_IN",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Published Applications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Portfolio of published mobile applications available on Google Play Store with millions of downloads</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm card-hover overflow-hidden">
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <i className={`${project.icon} text-3xl mb-4`}></i>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-blue-100">{project.category}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center text-primary hover:text-accent transition-colors">
                  <i className="fab fa-google-play mr-2"></i>
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Additional Projects</h3>
          <p className="text-gray-600">
            <strong>Other Notable Projects:</strong> My AdaniGas, Zoundz: Music for Pet Anxiety, Postfit, and various enterprise applications
          </p>
        </div>
      </div>
    </section>
  );
}
