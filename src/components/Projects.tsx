import React from 'react';
import { ExternalLink, Github, BarChart, Database, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Purchase Process Analytics Dashboard',
      description: 'Comprehensive Power BI dashboard for analyzing procurement processes and vendor performance metrics.',
      technologies: ['Power BI', 'SAP', 'Data Analysis', 'Process Optimization'],
      features: [
        'Real-time procurement metrics tracking',
        'Vendor performance analysis',
        'Cost optimization insights',
        'Process bottleneck identification'
      ],
      icon: BarChart,
      status: 'Enterprise Project'
    },
    {
      title: 'ERP Data Integration System',
      description: 'Streamlined data integration between Oracle E-Business Suite and various business intelligence tools.',
      technologies: ['Oracle EBS', 'SQL', 'Data Integration', 'ETL'],
      features: [
        'Automated data extraction processes',
        'Cross-system data validation',
        'Performance monitoring dashboards',
        'Error handling and logging'
      ],
      icon: Database,
      status: 'Production Ready'
    },
    {
      title: 'Business Intelligence Reporting Suite',
      description: 'Custom reporting solution for stakeholder insights and operational decision-making.',
      technologies: ['Business Intelligence', 'Data Visualization', 'Reporting', 'Analytics'],
      features: [
        'Executive summary reports',
        'Operational KPI tracking',
        'Trend analysis and forecasting',
        'Automated report distribution'
      ],
      icon: TrendingUp,
      status: 'In Development'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              Key projects demonstrating expertise in data analytics, business intelligence, 
              and enterprise system optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Looking for Collaboration?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                I'm open to new opportunities and collaborations in data analytics and business intelligence projects. 
                Let's discuss how we can work together to drive data-driven insights.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;