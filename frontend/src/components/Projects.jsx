import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <Code2 className="text-blue-600" size={24} />
                </div>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.githubUrl && (
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="outline"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </Button>
                </div>
              )}
              
              {!project.githubUrl && (
                <div className="text-sm text-gray-500 italic">
                  GitHub repository link will be added soon
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
