import Image from 'next/image';
import { clients } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Clients = () => {
  return (
    <section id="clients" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Valued Clients</h2>
          <p className="text-muted-foreground mt-2">
            We are proud to have partnered with a diverse range of leading companies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => {
            const image = PlaceHolderImages.find(p => p.id === client.imageId);
            return (
              <div key={client.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={client.name}
                    width={150}
                    height={75}
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
