export default function SkillsSection() {
  const skills = [
    {
      category: "Languages & Mobile",
      icon: "fas fa-mobile-screen-button",
      color: "bg-blue-500",
      items: ["Dart", "Kotlin", "Java", "Flutter", "Android SDK", "Android Jetpack", "Android TV"]
    },
    {
      category: "Architecture & State",
      icon: "fas fa-diagram-project",
      color: "bg-purple-500",
      items: ["Clean Architecture", "MVVM", "SOLID Principles", "Riverpod", "BLoC", "RESTful API Integration", "Offline-first Design"]
    },
    {
      category: "Security (Banking)",
      icon: "fas fa-shield-alt",
      color: "bg-slate-600",
      items: ["SSL Pinning", "OpenID Connect / OAuth 2.0", "Biometric Authentication", "Payment Integrations"]
    },
    {
      category: "CI/CD & Release",
      icon: "fas fa-rocket",
      color: "bg-teal-500",
      items: ["GitHub Actions", "Codemagic", "Fastlane", "Firebase (Crashlytics, FCM, Remote Config)", "Play Store & App Store Release Management", "Git"]
    },
    {
      category: "AI & Productivity",
      icon: "fas fa-robot",
      color: "bg-indigo-500",
      items: ["GitHub Copilot", "Claude", "Cursor", "LLM API Integration (OpenAI / Gemini)", "Firebase ML Kit", "Prompt Engineering"]
    },
    {
      category: "Leadership & Quality",
      icon: "fas fa-users",
      color: "bg-green-500",
      items: ["Code Review at Scale", "Performance Optimization", "Agile / Scrum", "Sprint Planning", "Mentoring", "Stakeholder Communication", "Production Incident Resolution"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            12 years leading mobile engineering teams and shipping banking-grade Flutter & Android applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${skillGroup.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                  <i className={skillGroup.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 text-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
