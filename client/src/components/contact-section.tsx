export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to discuss new opportunities or collaborate on exciting projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-blue-100">+974 71287994</p>
            <p className="text-blue-100">+91 88266 28482</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-blue-100">quadir.1199@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-blue-100">Doha, Qatar</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-linkedin text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/abdul-quadir-982905106" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-100 hover:text-white transition-colors">
              Connect with me
            </a>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="mailto:quadir.1199@gmail.com" 
             className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <i className="fas fa-paper-plane mr-2"></i>
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}
