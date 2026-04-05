import React from 'react';
import { Card } from './ui/card';
import { Code, Database, BarChart3, Brain, Server } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: skills.programming,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Data Tools',
      icon: Database,
      skills: skills.dataTools,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      skills: skills.dataAnalysis,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: skills.concepts,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Systems',
      icon: Server,
      skills: skills.systems,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <Icon className={category.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
