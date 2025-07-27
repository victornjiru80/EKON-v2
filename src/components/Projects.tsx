import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as "spring", stiffness: 70, damping: 15 }
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } 
  }
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Blissful Hospital',
      description: 'Modern healthcare facility with state-of-the-art equipment and patient-centered design.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
      images: [
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png',
        'https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png'
      ],
      fullDescription: 'The Blissful Hospital project represents our commitment to healthcare infrastructure. This multi-story facility features advanced medical equipment, patient rooms, surgical suites, and administrative offices. Built with sustainable materials and energy-efficient systems.'
    },
    {
      title: 'Commercial Complex',
      description: 'Multi-purpose commercial building with 2000 sqm retail and office spaces.',
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-muted-foreground mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.035,
                boxShadow: "0 8px 32px 0 rgba(249,115,22,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 18 }
              }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border-0"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;