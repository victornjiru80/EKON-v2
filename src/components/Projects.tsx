import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, MapPin, Calendar, Building, User } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
    transition: { type: "spring" as "spring", stiffness: 100, damping: 15 }
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      title: 'Blissful Hospital',
      description: 'Modern healthcare facility with state-of-the-art equipment and patient-centered design.',
      category: 'Healthcare',
      location: 'Nairobi',
      year: '2023',
      size: '8,500 sqm',
      status: 'Completed',
      image: '/projects/IMG-20250707-WA0002.jpg',
      images: [
        '/projects/IMG-20250707-WA0002.jpg',
        '/projects/IMG-20250707-WA0004.jpg',
        '/projects/IMG-20250707-WA0005.jpg'
      ],
      fullDescription: 'The Blissful Hospital project represents our commitment to healthcare infrastructure. This multi-story facility features advanced medical equipment, patient rooms, surgical suites, and administrative offices. Built with sustainable materials and energy-efficient systems.',
      features: ['Advanced Medical Equipment', 'Sustainable Materials', 'Energy Efficient', 'Patient-Centered Design'],
      client: 'Blissful Healthcare Group'
    },
    {
      title: 'Commercial Complex',
      description: 'Multi-purpose commercial building with 2000 sqm retail and office spaces.',
      category: 'Commercial',
      location: 'Mombasa',
      year: '2023',
      size: '2,000 sqm',
      status: 'Completed',
      image: '/projects/IMG-20250707-WA0004.jpg',
      images: [
        '/projects/IMG-20250707-WA0004.jpg',
        '/projects/IMG-20250707-WA0005.jpg',
        '/projects/IMG-20250707-WA0002.jpg'
      ],
      fullDescription: 'A modern commercial complex designed to meet the needs of businesses and shoppers alike. Features include retail spaces, office suites, parking facilities, and common areas with contemporary architectural design.',
      features: ['Retail Spaces', 'Office Suites', 'Parking Facilities', 'Modern Architecture'],
      client: 'Coast Development Ltd'
    },
    {
      title: 'Residential Tower',
      description: 'Luxury residential apartments with modern amenities.',
      category: 'Residential',
      location: 'Nairobi',
      year: '2024',
      size: '12,000 sqm',
      status: 'In Progress',
      image: '/projects/IMG-20250707-WA0005.jpg',
      images: [
        '/projects/IMG-20250707-WA0005.jpg',
        '/projects/IMG-20250707-WA0002.jpg',
        '/projects/IMG-20250707-WA0004.jpg'
      ],
      fullDescription: 'High-end residential tower offering luxury living spaces with panoramic views. Each unit features modern finishes, spacious layouts, and access to premium amenities including fitness center and rooftop garden.',
      features: ['Luxury Finishes', 'Panoramic Views', 'Fitness Center', 'Rooftop Garden'],
      client: 'Premium Living Estates'
    },
    {
      title: 'Educational Campus',
      description: 'State-of-the-art educational facility with modern learning environments.',
      category: 'Educational',
      location: 'Kisumu',
      year: '2023',
      size: '15,000 sqm',
      status: 'In Progress',
      image: '/projects/IMG-20250707-WA0002.jpg',
      images: [
        '/projects/IMG-20250707-WA0002.jpg',
        '/projects/IMG-20250707-WA0004.jpg',
        '/projects/IMG-20250707-WA0005.jpg'
      ],
      fullDescription: 'A comprehensive educational campus featuring classrooms, laboratories, library, sports facilities, and administrative buildings. Designed to foster learning and innovation.',
      features: ['Modern Classrooms', 'Science Labs', 'Sports Facilities', 'Digital Library'],
      client: 'Lake Region University'
    },
    {
      title: 'Industrial Warehouse',
      description: 'Large-scale industrial facility for manufacturing and distribution.',
      category: 'Industrial',
      location: 'Nakuru',
      year: '2022',
      size: '20,000 sqm',
      status: 'Completed',
      image: '/projects/IMG-20250707-WA0004.jpg',
      images: [
        '/projects/IMG-20250707-WA0004.jpg',
        '/projects/IMG-20250707-WA0005.jpg',
        '/projects/IMG-20250707-WA0002.jpg'
      ],
      fullDescription: 'Modern industrial warehouse designed for efficient manufacturing and distribution operations. Features include high-bay storage, loading docks, and office spaces.',
      features: ['High-Bay Storage', 'Loading Docks', 'Office Integration', 'Security Systems'],
      client: 'Kenya Manufacturing Co.'
    },
    {
      title: 'Luxury Hotel',
      description: 'Five-star hospitality facility with world-class amenities.',
      category: 'Hospitality',
      location: 'Nairobi',
      year: '2024',
      size: '10,000 sqm',
      status: 'In Progress',
      image: '/projects/IMG-20250707-WA0005.jpg',
      images: [
        '/projects/IMG-20250707-WA0005.jpg',
        '/projects/IMG-20250707-WA0002.jpg',
        '/projects/IMG-20250707-WA0004.jpg'
      ],
      fullDescription: 'Luxury hotel project featuring premium guest rooms, conference facilities, restaurants, spa, and recreational amenities. Designed to international hospitality standards.',
      features: ['Premium Suites', 'Conference Center', 'Spa & Wellness', 'Fine Dining'],
      client: 'East Africa Hotels Group'
    }
  ];

  const categories = ['All', 'Healthcare', 'Commercial', 'Residential', 'Educational', 'Industrial', 'Hospitality'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (project.location && project.location.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful construction projects across various sectors, 
            showcasing our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-xl border-2 border-orange-100 focus:border-orange-300 focus:ring-orange-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200 border-orange-500'
                      : 'bg-white/80 text-slate-600 border-orange-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/80 backdrop-blur-sm rounded-lg border-2 border-orange-100 p-1">
              <Button
                onClick={() => setViewMode('grid')}
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                className={`p-2 ${
                  viewMode === 'grid'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setViewMode('list')}
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                className={`p-2 ${
                  viewMode === 'list'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-slate-500">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={`${
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'flex flex-col gap-6'
          }`}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: viewMode === 'grid' ? 1.035 : 1.02,
                boxShadow: "0 20px 40px 0 rgba(249,115,22,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 18 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`group rounded-2xl bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ProjectCard {...project} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-600 mb-2">No projects found</h3>
            <p className="text-slate-500">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;