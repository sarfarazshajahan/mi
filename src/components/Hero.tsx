import React from 'react';
import { ArrowDown, Download, Linkedin, Mail, BarChart3, Database, TrendingUp, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { icon: BarChart3, delay: '0s', position: 'top-20 left-10' },
    { icon: Database, delay: '0.5s', position: 'top-32 right-16' },
    { icon: TrendingUp, delay: '1s', position: 'bottom-40 left-20' },
    { icon: Zap, delay: '1.5s', position: 'bottom-32 right-12' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 relative overflow-hidden">
      <Helmet>
        <title>Sarfaraz Shajahan - Data Analytics Professional | Home</title>
        <meta name="description" content="Welcome to Sarfaraz Shajahan's professional portfolio. Data Analytics expert with 17+ years experience in business intelligence, SAP, and enterprise systems." />
      </Helmet>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} opacity-20 dark:opacity-10`}
            style={{ 
              animation: `float 6s ease-in-out infinite`,
              animationDelay: item.delay 
            }}
          >
            <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4 animate-fade-in">
                  <Zap className="w-4 h-4" />
                  <span>Available for New Opportunities</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="animate-slide-up">Sarfaraz</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Shajahan
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="typing-animation">Data Analytics Professional</span>
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  Transforming business processes through data-driven insights and analytics. 
                  Experienced in stakeholder engagement, business intelligence, and enterprise systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <a
                  href="https://www.linkedin.com/in/sarfaraz-shajahan-506620359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <Linkedin className="w-5 h-5" />
                  <span className="relative z-10">LinkedIn</span>
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <Mail className="w-5 h-5" />
                  <span className="relative z-10">Contact</span>
                </button>
              </div>
              
              {/* Stats or achievements */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">17+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="flex justify-center md:justify-end relative z-10">
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-blue-300/30 dark:border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-2 w-76 h-76 md:w-92 md:h-92 rounded-full border border-purple-300/20 dark:border-purple-500/20 animate-spin-reverse"></div>
                
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1 shadow-2xl relative z-10 animate-pulse-subtle">
                  <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                      src="/me.jpeg"
                      alt="Sarfaraz Shajahan - Professional headshot"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                  <span className="text-white font-bold text-xs text-center">Data<br/>Analytics</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-bold text-xs text-center">Power<br/>BI</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ animationDelay: '2s' }}>
                  <span className="text-white font-bold text-xs">SAP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleScrollToAbout}
              className="animate-bounce p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typing 3s steps(25, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }
      `}</style>
    </section>
  );
};

export default Hero;