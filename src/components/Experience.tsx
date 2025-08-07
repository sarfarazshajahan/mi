import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Purchase Admin Coordinator',
      company: 'PCD Saudi Arabia Co',
      duration: 'June 2024 - June 2025',
      location: 'Saudi Arabia',
      description: [
        'Leverage data analytics and business intelligence to enhance purchasing processes',
        'Utilize SAP products for streamlined procurement operations',
        'Engage with stakeholders to optimize business workflows',
        'Implement quality assurance measures in purchase administration'
      ],
      technologies: ['SAP', 'Data Analytics', 'Business Intelligence', 'Process Optimization']
    },
    {
      title: 'Purchase Admin Coordinator',
      company: 'Chalhoub Group',
      duration: 'January 2016 - June 2024',
      location: 'UAE',
      description: [
        'Managed procurement processes using Oracle E-Business Suite',
        'Developed business intelligence reports using Microsoft Power BI',
        'Streamlined operations through data-driven decision making',
        'Collaborated with cross-functional teams to improve efficiency'
      ],
      technologies: ['Oracle E-Business Suite', 'Microsoft Power BI', 'Data Analysis', 'ERP Systems']
    },
    {
      title: 'Administrative Assistant',
      company: 'Chalhoub Group',
      duration: 'July 2007 - December 2015',
      location: 'UAE',
      description: [
        'Gained foundational experience in administration and ERP systems',
        'Developed strong communication and organizational skills',
        'Supported business operations through efficient administrative processes',
        'Built expertise in customer service and stakeholder engagement'
      ],
      technologies: ['ERP Systems', 'Administration', 'Customer Service', 'Process Management']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              Over 17 years of progressive experience in business administration, 
              procurement, and data analytics across leading organizations.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                        <Building className="w-5 h-5" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;