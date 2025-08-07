import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Professional Excellence',
      description: '8+ years experience in business administration and analytics'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering data-driven solutions and insights'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description: 'Proven track record in cross-functional collaboration'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Expertise in transforming data into actionable insights'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <Helmet>
        <title>About Sarfaraz Shajahan - Data Analytics Professional</title>
        <meta name="description" content="Learn about Sarfaraz Shajahan's professional background in data analytics, business intelligence, and enterprise systems. 17+ years of experience in stakeholder engagement and process optimization." />
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Passionate Data Analytics Professional
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm an accomplished professional with a strong background in stakeholder engagement, 
                technical report writing, and quality assurance. Currently transitioning into data 
                analytics, I bring years of experience in business operations and enterprise systems 
                to deliver data-driven solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey spans from administrative roles to senior coordination positions, where I've 
                developed expertise in SAP products, Oracle E-Business Suite, and Microsoft Power BI. 
                I'm passionate about leveraging data analytics to enhance business processes and drive 
                organizational growth.
              </p>
              <div className="pt-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Core Competencies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Business Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Process Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Stakeholder Management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;