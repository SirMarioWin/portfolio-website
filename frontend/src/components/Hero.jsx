import React from 'react';
import { Button } from './ui/button';
import { Download, Mail, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const handleDownloadCV = () => {
    window.open('/api/download-cv', '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium tracking-wide uppercase text-sm">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Transforming complex data into actionable insights. Specialized in Python, SQL, and Power BI with a focus on machine learning and AI-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                onClick={() => window.open(personalInfo.github, '_blank')}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
