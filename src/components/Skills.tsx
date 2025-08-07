import React from 'react';
import { BarChart3, Database, Settings, Brain, TrendingUp, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Power BI', level: 90 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Business Intelligence', level: 88 },
        { name: 'Statistical Analysis', level: 75 }
      ],
      color: 'blue'
    },
    {
      title: 'Technical Skills',
      icon: Database,
      skills: [
        { name: 'SAP Products', level: 92 },
        { name: 'Oracle E-Business Suite', level: 90 },
        { name: 'ERP Systems', level: 88 },
        { name: 'SQL', level: 70 }
      ],
      color: 'green'
    },
    {
      title: 'Business Skills',
      icon: TrendingUp,
      skills: [
        { name: 'Process Optimization', level: 95 },
        { name: 'Quality Assurance', level: 90 },
        { name: 'Project Management', level: 85 },
        { name: 'Risk Assessment', level: 80 }
      ],
      color: 'purple'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Stakeholder Engagement', level: 95 },
        { name: 'Communication', level: 92 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Problem Solving', level: 90 }
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-200'
      }
    };
    return colorMap[color][type];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              Comprehensive skill set spanning data analytics, business intelligence, 
              and enterprise system management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${getColorClasses(category.color, 'bg')} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${getColorClasses(category.color, 'text')}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getColorClasses(category.color, 'bg')} transition-all duration-700 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional certifications or learning section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="text-center">
              <Brain className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Currently pursuing advanced data analytics certifications and staying updated 
                with the latest trends in business intelligence, machine learning, and data visualization technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;