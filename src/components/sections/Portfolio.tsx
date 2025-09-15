import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ProjectCarousel } from './ProjectCarousel';

export const Portfolio = () => {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A glimpse into our successfully delivered projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const image = PlaceHolderImages.find((p) => p.id === project.imageIds[0]);
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
                      <div className="flex justify-between items-center mt-4">
                        <Badge variant={project.category === 'Ongoing' ? 'destructive' : 'default'}>
                          {project.category}
                        </Badge>
                        {project.date && <span className="text-xs text-muted-foreground">{project.date}</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ProjectCarousel>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
