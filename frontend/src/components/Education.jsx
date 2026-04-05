import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                      <GraduationCap size={18} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <Award size={18} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
