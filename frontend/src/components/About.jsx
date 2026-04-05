import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
