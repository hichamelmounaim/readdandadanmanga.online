import React from 'react';
import SEOHead from '../components/SEOHead';
import { CHARACTERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="Dandadan Manga Characters - Full Profile Database"
        description="Detailed character profiles for Dandadan manga: Momo Ayase, Ken Takakura (Okarun), Seiko Ayase, and more. Powers, roles, and story arcs explained."
        canonicalUrl="https://www.readdandadanmanga.online/characters"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Dandadan Manga Characters",
          "description": "Comprehensive character database for Dandadan manga by Tatsu Yukinobu.",
          "url": "https://www.readdandadanmanga.online/characters",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.readdandadanmanga.online/" },
              { "@type": "ListItem", "position": 2, "name": "Characters", "item": "https://www.readdandadanmanga.online/characters" }
            ]
          }
        }}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Dandadan Manga Characters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive database of every character in the Dandadan manga. Learn about their sports, abilities, and relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CHARACTERS.map((char) => (
          <div key={char.id} className="group flex flex-col bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5">
            {/* Character Image Container */}
            <div className="relative h-80 overflow-hidden bg-[#242424]">
              <img 
                src={char.image} 
                alt={char.name}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90"></div>
              
              {/* Absolute Role Badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-400 bg-pink-950/80 backdrop-blur-md rounded-md border border-pink-500/20 shadow-md">
                {char.role} Character
              </div>
              
              {/* Absolute Grade Badge */}
              {char.grade && (
                <div className="absolute bottom-4 left-4 px-2.5 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-sm rounded-md border border-white/10 shadow-sm">
                  {char.grade}
                </div>
              )}
            </div>

            {/* Character Details Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-white group-hover:text-pink-500 transition-colors mb-3">
                {char.name}
              </h2>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {char.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;