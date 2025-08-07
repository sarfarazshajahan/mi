import React from 'react';
import { ArrowUp, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sarfaraz Shajahan</h3>
              <p className="text-gray-400 leading-relaxed">
                Data Analytics Professional passionate about transforming business processes 
                through data-driven insights and enterprise system optimization.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sarfaraz-shajahan-506620359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sarfaraz.shajahan@email.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                <p>📧 sarfaraz.shajahan@email.com</p>
                <p>📱 +966 XXX XXX XXX</p>
                <p>📍 Saudi Arabia</p>
                <p className="text-sm">
                  Available for data analytics consulting and full-time opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-1">
                © {currentYear} Sarfaraz Shajahan. Made with <Heart className="w-4 h-4 text-red-500" /> for data-driven excellence.
              </p>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;