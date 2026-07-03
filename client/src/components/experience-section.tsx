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
                    <h3 className="text-xl font-bold text-primary">Flutter Team Lead</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">May 2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-building-columns text-primary text-sm"></i>
                    </div>
                    <h4 className="text-lg font-semibold">Commercial Bank of Qatar (via Vismaya)</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Lead a <strong>team of 10+ mobile engineers</strong>, owning complete delivery: solution architecture, technical design, sprint planning, code reviews, Git strategy, CI/CD, production releases, mentoring, and stakeholder communication</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Architected the next-generation Corporate Internet Banking (CIB) platform (Flutter, Clean Architecture, MVVM, Riverpod) used by thousands of enterprise users; implemented SSL pinning, OpenID Connect, and biometric authentication</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Designed and delivered the in-house Finance Trade Portal (FTP), replacing outsourced licensed software — <strong>~10M QAR saved over a 5-year licensing period</strong></span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Built a unified ticketing and complaint-management system for POS and ATM operations across web and mobile</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Own payment integrations and production-issue resolution; run release management across Play Store and App Store</span></li>
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
                    <h3 className="text-xl font-bold text-primary">Lead Engineer</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Apr 2022 - Jan 2023</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <h4 className="text-lg font-semibold">Kellton Tech, Gurugram</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Developed and optimized Adani One: Travel and Beyond (<strong>1M+ downloads</strong>), delivering fast, reliable booking experiences across flights, hotels, and airport services</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Engineered core booking features for AkbarTravels: Flights & Hotels (<strong>1M+ downloads</strong>), improving app stability and performance</span></li>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-building text-gray-600 text-sm"></i>
                    </div>
                    <h4 className="text-lg font-semibold">SubcoDevs, Noida</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Delivered client apps across Android, Flutter, and Android TV; owned Play Store and App Store releases end to end</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Implemented CI/CD with Fastlane to automate app updates on POS device fleets</span></li>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-calendar-days text-gray-600 text-sm"></i>
                    </div>
                    <h4 className="text-lg font-semibold">10times.com, Noida</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Built 10times – Find Events & Network (<strong>100K+ downloads</strong>), the flagship app of the world's largest event-discovery platform</span></li>
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>Architected the white-label event-app platform: a shared library and automated pipeline enabling rapid rollout of branded apps from one codebase</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MixORG */}
            <div className="relative flex items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-gray-50 p-8 rounded-xl card-hover lg:ml-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">Android App Developer (Intern → Full-time)</h3>
                    <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">Jul 2014 - Dec 2015</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-building text-gray-600 text-sm"></i>
                    </div>
                    <h4 className="text-lg font-semibold">MixORG, Noida</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><i className="fas fa-chevron-right text-accent mt-1 mr-2 text-xs"></i><span>First engineering role; shipped 4 production apps in a 4-person team</span></li>
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
