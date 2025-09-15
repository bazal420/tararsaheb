'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects, ProjectCategory } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ProjectCarousel } from './ProjectCarousel';

const categories: ProjectCategory[] = ['Asphalt', 'Interlock', 'LPG Connection', 'FIC/Sewerage', 'Access', 'Ongoing'];

export const Gallery = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <div className="text-muted-foreground mt-4 max-w-3xl mx-auto space-y-4">
            <p>
              Our portfolio is a record of steady work carried out across the UAE. From asphalt reinstatements and road works to LPG connections, FIC installations, access roads, and civil structures, every project reflects discipline, care, and timely delivery.
            </p>
            <p>
              We do not believe in promises written on paper. The proof lies in the sites we have completed, the roads we have paved, and the trust of the clients who continue to call us back. Each project is not just a contract closed but a mark of responsibility conducted to the last detail.
            </p>
            <p>
              Here are some of our project pictures, each reflecting the work we stand by and deliver with consistency.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          <Button
            variant={filter === 'All' ? 'default' : 'outline'}
            onClick={() => setFilter('All')}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.imageIds[0]);
            return (
              <ProjectCarousel key={project.id} project={project}>
                <Card className="overflow-hidden group flex flex-col h-full cursor-pointer">
                  <CardContent className="p-0 flex-grow flex flex-col">
                    {image && (
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
                      {project.location && <p className="text-xs text-muted-foreground mt-2"><b>Location:</b> {project.location}</p>}
                      <div className="flex justify-between items-center mt-4">
                         <Badge variant={project.category === 'Ongoing' ? 'destructive' : 'default'}>{project.category}</Badge>
                         {project.date && <span className="text-xs text-muted-foreground">{project.date}</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ProjectCarousel>
            );
          })}
        </div>
      </div>
    </section>
  );
};
