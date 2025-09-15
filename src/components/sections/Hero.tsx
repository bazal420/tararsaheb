import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary-foreground">
          Building the Foundations of Tomorrow
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          TSRC Contracting delivers excellence in road construction, asphalt, and interlock services with unmatched professionalism.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </div>
    </section>
  );
};
