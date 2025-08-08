export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
            <div className="text-center mb-6">
              <i className="fab fa-android text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Android SDK</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Java/Kotlin Programming</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Flutter SDK</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Dart</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Android Jetpack Components</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> State Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
            <div className="text-center mb-6">
              <i className="fas fa-code text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Architecture & APIs</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> MVVM/MVP Architecture</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> RESTful APIs Integration</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Performance Optimization</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Firebase</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Material Design</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> UI/UX Design</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
            <div className="text-center mb-6">
              <i className="fas fa-cogs text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">DevOps & Collaboration</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> CI/CD</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Git Version Control</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Agile/Scrum Methodologies</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Code Review & Collaboration</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Debugging & Troubleshooting</li>
              <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> App Responsiveness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
