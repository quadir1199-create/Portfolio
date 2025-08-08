export default function SkillsSection() {
  const skills = [
    {
      category: "Mobile Development",
      icon: "📱",
      color: "bg-blue-500",
      items: [
        { name: "Android SDK", level: 95 },
        { name: "Java/Kotlin", level: 90 },
        { name: "Flutter/Dart", level: 88 },
        { name: "Jetpack Components", level: 92 },
        { name: "State Management", level: 87 },
        { name: "Material Design", level: 88 }
      ]
    },
    {
      category: "Architecture & APIs",
      icon: "⚙️",
      color: "bg-purple-500",
      items: [
        { name: "MVVM/MVP Pattern", level: 93 },
        { name: "RESTful APIs", level: 91 },
        { name: "Performance Optimization", level: 89 },
        { name: "Firebase Integration", level: 86 },
        { name: "Database Design", level: 84 },
        { name: "Testing Frameworks", level: 82 }
      ]
    },
    {
      category: "Leadership & DevOps",
      icon: "👨‍💼",
      color: "bg-green-500",
      items: [
        { name: "Team Leadership", level: 88 },
        { name: "CI/CD Pipelines", level: 87 },
        { name: "Git Version Control", level: 94 },
        { name: "Agile/Scrum", level: 92 },
        { name: "Code Review", level: 90 },
        { name: "Technical Mentoring", level: 85 }
      ]
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
            11+ years of hands-on experience across mobile development, architecture design, and technical leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${skillGroup.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skillGroup.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 text-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">11+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}