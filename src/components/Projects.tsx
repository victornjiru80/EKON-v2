import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Reale Hospital',
      description: 'Modern healthcare facility with state-of-the-art equipment and patient-centered design.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
      images: [
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png'
      ],
      fullDescription: 'The Reale Hospital project represents our commitment to healthcare infrastructure. This multi-story facility features advanced medical equipment, patient rooms, surgical suites, and administrative offices. Built with sustainable materials and energy-efficient systems.'
    },
    {
      title: 'Commercial Complex',
      description: 'Multi-purpose commercial building with retail and office spaces.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
      images: [
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png'
      ],
      fullDescription: 'A modern commercial complex designed to meet the needs of businesses and shoppers alike. Features include retail spaces, office suites, parking facilities, and common areas with contemporary architectural design.'
    },
    {
      title: 'Residential Tower',
      description: 'Luxury residential apartments with modern amenities.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
      images: [
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png'
      ],
      fullDescription: 'High-end residential tower offering luxury living spaces with panoramic views. Each unit features modern finishes, spacious layouts, and access to premium amenities including fitness center and rooftop garden.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;