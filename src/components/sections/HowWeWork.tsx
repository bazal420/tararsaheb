import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const HowWeWork = () => {
  const howWeWorkImage = PlaceHolderImages.find(p => p.id === 'how-we-work-image');
  return (
    <section id="how-we-work" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How Do We Work?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-muted-foreground space-y-6 text-left md:text-lg">
            <p>
              At Tarar Saheb Road Contracting L.L.C., our way of working is simple, clear, and built on years of hands-on experience in the UAE’s construction industry. Every project, no matter its size, is approached with a focus on three things: quality work, timely delivery, and client satisfaction.
            </p>
            <p>
              We start by understanding the exact needs of our client and the technical demands of the project. Our management personally inspects sites, evaluates conditions, and discusses challenges upfront — because the groundwork for any good project begins long before the first machine arrives.
            </p>
            <p>
             Once work begins, our experienced supervisors and technical staff closely monitor every stage. From material selection to site safety, from daily progress tracking to final finishing, we ensure no detail is overlooked. Clear communication and quick decision-making are at the heart of our daily operations.
            </p>
             <p>
              At TSRC, we believe in doing the job right the first time — avoiding shortcuts, respecting deadlines, and maintaining a clean, safe working environment. It’s this dependable, no-nonsense approach that has earned us the trust of our clients and the respect of our industry peers.
            </p>
          </div>
          {howWeWorkImage && (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={howWeWorkImage.imageUrl}
                alt={howWeWorkImage.description}
                fill
                className="object-cover"
                data-ai-hint={howWeWorkImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
