import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const FounderMessage = () => {
  const founder = teamMembers.find(member => member.role.includes('Founder'));
  const image = founder ? PlaceHolderImages.find(p => p.id === founder.imageId) : null;

  const founderStatement = "With over 20 years of experience in the industry, I have gathered countless lessons deeply rooted in the construction business of the UAE. As an entrepreneur, I have come to realize there is no tomorrow — whatever can be accomplished today holds the utmost value. I began my journey by first acquiring comprehensive, practical knowledge of my trade, then took measured, steady steps to register my own brand under the name Tarar Saheb Road Contracting. There, I established my own principles, aimed at bridging the work-life balance gap that salaried individuals often endure. At TRC, our employees are regarded as our most valuable assets. Their comfort, well-being, and satisfaction stand as our highest priority.";

  return (
    <section id="founder-message">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">A Message from Our Founder</h2>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {image && founder && (
          <div className="flex-shrink-0 text-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-accent shadow-lg">
              <AvatarImage src={image.imageUrl} alt={founder.name} data-ai-hint={image.imageHint} />
              <AvatarFallback>{founder.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold mt-4">{founder.name}</h3>
            <p className="text-accent font-medium">{founder.role}</p>
          </div>
        )}
        <div className="text-muted-foreground space-y-4 text-left md:text-lg border-l-4 border-accent pl-6 md:pl-8 italic">
            {founderStatement.split('\n\n').map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
            <p className="font-semibold not-italic text-foreground mt-4">— Zia Ullah Tarar</p>
        </div>
      </div>
    </section>
  );
};
