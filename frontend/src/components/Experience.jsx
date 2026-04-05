import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-1">
                    <Briefcase size={18} />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="font-medium">{job.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-3">
                    <span className="text-blue-600 mt-1.5">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
