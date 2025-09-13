import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building2, User, CheckCircle, Clock, Ruler } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images: string[];
  fullDescription: string;
  category?: string;
  location?: string;
  year?: string;
  size?: string;
  status?: string;
  features?: string[];
  client?: string;
  viewMode?: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  images, 
  fullDescription, 
  category, 
  location, 
  year, 
  size, 
  status, 
  features = [], 
  client,
  viewMode = 'grid' 
}) => {
  const isListView = viewMode === 'list';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`cursor-pointer bg-transparent border-none shadow-none transition-all duration-300 ${
          isListView ? 'flex flex-row overflow-hidden' : ''
        }`}>
          <CardContent className="p-0 relative z-10">
            {/* Image Section */}
            <div className={`relative overflow-hidden ${
              isListView ? 'w-80 flex-shrink-0' : 'w-full'
            }`}>
              <img
                src={image}
                alt={title}
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                  isListView ? 'w-full h-48' : 'w-full h-64'
                } rounded-t-2xl ${isListView ? 'rounded-r-none rounded-l-2xl' : ''}`}
              />
              
              {/* Status Badge */}
              {status && (
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={status === 'Completed' ? 'default' : 'secondary'}
                    className={`${
                      status === 'Completed' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    } shadow-lg backdrop-blur-sm`}
                  >
                    {status === 'Completed' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {status}
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              {category && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-orange-600 hover:bg-white border border-orange-200 shadow-lg backdrop-blur-sm">
                    <Building2 className="w-3 h-3 mr-1" />
                    {category}
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                  {title}
                </h3>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2">
                {description}
              </p>

              {/* Project Details */}
              <div className={`space-y-2 mb-4 ${isListView ? 'grid grid-cols-2 gap-3' : ''}`}>
                {location && (
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    {location}
                  </div>
                )}
                {year && (
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                    {year}
                  </div>
                )}
                {size && (
                  <div className="flex items-center text-sm text-slate-500">
                    <Ruler className="w-4 h-4 mr-2 text-orange-500" />
                    {size}
                  </div>
                )}
                {client && (
                  <div className="flex items-center text-sm text-slate-500">
                    <User className="w-4 h-4 mr-2 text-orange-500" />
                    {client}
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-colors">
                  View Details →
                </span>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Building2 className="w-4 h-4 text-orange-600" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      {/* Enhanced Modal */}
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border-2 border-orange-100">
        <DialogHeader className="border-b border-orange-100 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-3xl font-bold text-slate-800 mb-2">{title}</DialogTitle>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                {category && (
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                    <Building2 className="w-3 h-3 mr-1" />
                    {category}
                  </Badge>
                )}
                {status && (
                  <Badge 
                    variant={status === 'Completed' ? 'default' : 'secondary'}
                    className={status === 'Completed' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                    }
                  >
                    {status === 'Completed' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {status}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8 pt-6">
          {/* Images Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Project Gallery</h4>
            {images.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Project Overview</h4>
              <p className="text-slate-600 leading-relaxed">{fullDescription}</p>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-orange-50 rounded-xl">
              {location && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-medium text-slate-800">{location}</p>
                  </div>
                </div>
              )}
              {year && (
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-500">Year</p>
                    <p className="font-medium text-slate-800">{year}</p>
                  </div>
                </div>
              )}
              {size && (
                <div className="flex items-center">
                  <Ruler className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-500">Size</p>
                    <p className="font-medium text-slate-800">{size}</p>
                  </div>
                </div>
              )}
              {client && (
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-500">Client</p>
                    <p className="font-medium text-slate-800">{client}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;