import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      </div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Jan Kowalski
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-100 font-light">
              Senior Software Developer
            </h2>
            <div className="flex flex-wrap gap-6 text-sm text-blue-50 mb-8">
              <a href="mailto:jan.kowalski@example.com" 
                 className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span>jan.kowalski@example.com</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone size={16} />
                </div>
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded-full">
                  <MapPin size={16} />
                </div>
                <span>Warszawa, Polska</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" 
                 className="flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">
                <Download size={18} />
                Pobierz CV
              </a>
              <div className="flex gap-2">
                <a href="https://github.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 hover:bg-white/10 rounded-full transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 hover:bg-white/10 rounded-full transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}