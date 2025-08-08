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
              Innovative and results-driven Lead Developer with 11+ years of expertise in Android & Flutter development, delivering scalable, high-performance solutions across banking, fintech, e-commerce, and enterprise domains.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Proven track record in end-to-end project delivery, from architecture to deployment, including the Corporate Internet Banking platform and the CBQ Finance Trade Portal that achieved <strong className="text-primary">10M QAR in cost savings</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Skilled in team leadership, solution architecture, and cross-platform strategies, ensuring mission-critical projects are delivered on time and exceed expectations. Recognized for technical excellence, mentoring, and driving innovation in fast-paced environments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">11+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M</div>
              <div className="text-gray-600">QAR Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-gray-600">App Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
