import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images: string[];
  fullDescription: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, images, fullDescription }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg bg-white transition-shadow">
          <CardContent className="p-0">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
          
          <div>
            <p className="text-gray-600 leading-relaxed">{fullDescription}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;