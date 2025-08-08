import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold gradient-text">Abdul Quadir</h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">About</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Projects</button>
          <button onClick={() => scrollToSection('education')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Education</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Contact</button>
        </div>
      </div>
    </nav>
  );
}
