'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Project } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProjectCarouselProps = {
  project: Project;
  children: React.ReactNode;
};

export function ProjectCarousel({ project, children }: ProjectCarouselProps) {
  const images = project.imageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="p-4 sm:p-6">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                image && (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <Image
                          src={image.imageUrl}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={800}
                          height={600}
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
