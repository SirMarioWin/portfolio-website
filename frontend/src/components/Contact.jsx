import React from 'react';
import { Card } from './ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm currently open to new opportunities in Data Analytics and Data Science roles. 
              Feel free to reach out if you'd like to connect or discuss potential collaborations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.email}</p>
                </div>
              </a>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone (Nigeria)</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.phone}</p>
                </div>
              </a>
              
              <a
                href={`tel:${personalInfo.phoneVietnam}`}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone (Vietnam)</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.phoneVietnam}</p>
                </div>
              </a>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-900 transition-colors">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">GitHub</p>
                  <p className="text-gray-900 font-semibold">@SirMarioWin</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg md:col-span-2">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Location</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
