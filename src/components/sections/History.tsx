import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const History = () => {
  const historyImage = PlaceHolderImages.find(p => p.id === 'history-image');
  return (
    <section id="history" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {historyImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={historyImage.imageUrl}
                        alt={historyImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={historyImage.imageHint}
                    />
                </div>
            )}
            <div className="text-muted-foreground space-y-6 text-left md:text-lg">
              <p>
                Tarar Saheb Road Contracting L.L.C. was established in 2020 with a simple idea: to deliver reliable, high-quality construction services across the UAE. What started with road works and small infrastructure projects has now grown into a company capable of handling a wide range of civil engineering services.
              </p>
              <p>
                We take pride in our hands-on approach. Every project we take on — whether it’s road construction, interlock work, or infrastructure maintenance — is treated with attention to detail, clear communication, and a focus on safety. Our team consists of experienced professionals who understand the demands of working in the region and deliver results that meet both deadlines and client expectations.
              </p>
              <p>
                At TSRC, we believe a good reputation is built on consistency, honest work, and strong relationships. That’s why many of our clients return to us, knowing we value people as much as projects.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};
