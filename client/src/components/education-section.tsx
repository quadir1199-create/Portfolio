export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Education & Courses</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">B.Tech in Computer Science Engineering</h4>
                    <p className="text-gray-600">Dr. A.P.J. Abdul Kalam Technical University</p>
                    <p className="text-gray-500 text-sm">Ghaziabad</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">2014</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Intermediate</h4>
                    <p className="text-gray-600">KDB Public School</p>
                    <p className="text-gray-500 text-sm">Ghaziabad</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">2009</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">High School</h4>
                    <p className="text-gray-600">DAV Public School</p>
                    <p className="text-gray-500 text-sm">Ghaziabad</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">2007</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Flutter Course</h4>
                    <p className="text-gray-600">Udemy</p>
                    <p className="text-gray-500 text-sm">Complete Flutter Development</p>
                  </div>
                  <i className="fas fa-certificate text-accent text-2xl"></i>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Android Development</h4>
                    <p className="text-gray-600">Simplilearn</p>
                    <p className="text-gray-500 text-sm">Android App Development Certificate</p>
                  </div>
                  <i className="fas fa-certificate text-accent text-2xl"></i>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-language text-2xl text-primary mb-2"></i>
                  <p className="font-semibold">English</p>
                  <p className="text-sm text-gray-600">Professional</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-language text-2xl text-primary mb-2"></i>
                  <p className="font-semibold">Hindi/Urdu</p>
                  <p className="text-sm text-gray-600">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
