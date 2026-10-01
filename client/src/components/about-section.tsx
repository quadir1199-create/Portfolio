export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Lead Developer with 12 years in mobile engineering, currently at Commercial Bank of Qatar delivering corporate banking applications used by thousands of enterprise users. Own end-to-end delivery: architecture, technical design, sprint planning, code reviews, Git strategy, CI/CD, and production releases.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Replaced outsourced trade-finance software with an in-house platform, saving <strong className="text-primary">~10M QAR over 5 years</strong>. Deep expertise in Clean Architecture, MVVM, SOLID, Riverpod/BLoC, and banking-grade security (SSL pinning, OpenID Connect, payment integrations).
            </p>
            <p className="text-lg leading-relaxed">
              Drive AI-assisted engineering practices (Copilot, Claude, Cursor) across the team to raise code-review quality and delivery velocity. Previously shipped consumer apps with 1M+ downloads each (Adani One, AkbarTravels).
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M</div>
              <div className="text-gray-600">QAR Savings</div>
            </div>
            <div className="text-center col-span-2">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-gray-600">App Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
