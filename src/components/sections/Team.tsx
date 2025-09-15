import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Team = () => {
  return (
    <section id="team">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Meet the experienced professionals dedicated to bringing your projects to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => {
          const image = PlaceHolderImages.find(p => p.id === member.imageId);
          return (
            <Card key={member.name} className="text-center">
              <CardContent className="pt-6">
                {image && (
                   <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-accent">
                     <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />
                     <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                   </Avatar>
                )}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                {member.statement && (
                  <blockquote className="mt-4 text-muted-foreground italic border-l-2 border-accent pl-4 text-left">
                    "{member.statement}"
                  </blockquote>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
