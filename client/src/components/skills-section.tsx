import { useState, useEffect, useRef } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "fab fa-android",
      gradient: "from-green-400 to-blue-500",
      skills: [
        { name: "Android SDK", level: 95 },
        { name: "Java/Kotlin", level: 90 },
        { name: "Flutter SDK", level: 88 },
        { name: "Dart", level: 85 },
        { name: "Jetpack Components", level: 92 },
        { name: "State Management", level: 87 }
      ]
    },
    {
      title: "Architecture & APIs",
      icon: "fas fa-code",
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "MVVM/MVP", level: 93 },
        { name: "RESTful APIs", level: 91 },
        { name: "Performance Optimization", level: 89 },
        { name: "Firebase", level: 86 },
        { name: "Material Design", level: 88 },
        { name: "UI/UX Design", level: 84 }
      ]
    },
    {
      title: "DevOps & Leadership",
      icon: "fas fa-cogs",
      gradient: "from-orange-400 to-red-500",
      skills: [
        { name: "CI/CD", level: 87 },
        { name: "Git Version Control", level: 94 },
        { name: "Agile/Scrum", level: 92 },
        { name: "Code Review", level: 90 },
        { name: "Team Leadership", level: 88 },
        { name: "Technical Mentoring", level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setSkillsAnimated(true), 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            11+ years of hands-on experience with cutting-edge technologies and development methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover-glow transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Card header with gradient background */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient} rounded-t-2xl`}></div>
              
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`skill-bar bg-gradient-to-r ${category.gradient} h-2 rounded-full ${skillsAnimated ? 'animate' : ''}`}
                        style={{ 
                          transform: skillsAnimated ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                          transitionDelay: `${(categoryIndex * 300) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Bottom statistics */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Developers Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
