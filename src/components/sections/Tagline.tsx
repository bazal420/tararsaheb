import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Tagline = () => {
  const taglineImage = PlaceHolderImages.find(p => p.id === 'tagline-background');

  return (
    <section className="relative py-20 md:py-28 w-full flex items-center justify-center text-center text-primary-foreground">
      {taglineImage && (
        <Image
          src={taglineImage.imageUrl}
          alt={taglineImage.description}
          fill
          className="object-cover"
          data-ai-hint={taglineImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Outstanding Outcome — Innovative Design — Professional Solution
        </h2>
      </div>
    </section>
  );
};
