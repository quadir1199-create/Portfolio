export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 timeline-line hidden lg:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {/* Current Position */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover lg:ml-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Senior Software Engineer</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">May 2023 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">Commercial Bank of Qatar (Vismaya Contractor)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Designed, architected, and delivered a next-generation Corporate Internet Banking (CIB) portal</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Designed complete in-house solution for CBQ's Finance Trade Portal (FTP), achieving <strong>10M QAR savings</strong></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Created unified ticketing and complaint management system for POS and ATM operations</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white hidden lg:block"></div>
              <div className="lg:w-1/2 lg:pl-8"></div>
            </div>

            {/* Kellton Tech */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white hidden lg:block"></div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Mobile Team Lead</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Apr 2022 - Jan 2023</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">Kellton Tech, Gurugram</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Developed Adani One: Travel and Beyond app, contributing to <strong>1M+ downloads</strong></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Engineered core features for Akbar Travels One App achieving <strong>1M+ downloads</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SubcoDevs */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover lg:ml-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Sr. Mobile Application Developer</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Oct 2020 - Apr 2022</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">SubcoDevs, Noida</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Developed various client apps across Android, Flutter, and Android TV platforms</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Implemented CI/CD with Fastlane for updating apps on POS systems</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Handled complete Play Store and App Store submissions</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white hidden lg:block"></div>
              <div className="lg:w-1/2 lg:pl-8"></div>
            </div>

            {/* 10times.com */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white hidden lg:block"></div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Sr. Android App Developer</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Dec 2015 - Oct 2020</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">10times.com, Noida</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Developed 10times - Find Events & Network with <strong>100K+ downloads</strong></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Transitioned to white-label event apps project</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Created library and automated processes for app creation and publication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MixORG */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover lg:ml-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Intern & Android App Developer</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Jul 2014 - Dec 2015</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">MixORG, Noida</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Interned and subsequently joined as Android app developer</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Developed 4 apps within a team of 4 individuals</li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i>Created a 2D mobile game</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-400 rounded-full border-4 border-white hidden lg:block"></div>
              <div className="lg:w-1/2 lg:pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
