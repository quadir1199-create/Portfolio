export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create download link for resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Abdul_Quadir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-accent text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abdul Quadir</h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">Senior Software Engineer & Tech Lead</p>
          <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
            11+ years of expertise in Android & Flutter development, delivering scalable, high-performance solutions across banking, fintech, e-commerce, and enterprise domains.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>Doha, Qatar</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>+974 71287994</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>quadir.1199@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={scrollToContact}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </button>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
