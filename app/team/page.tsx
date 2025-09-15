
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';

export default function TeamPage() {
  return (
    <section id="team" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
            At Tarar Saheb Road Contracting, our strength lies in our people. We are a collective of seasoned engineers, diligent managers, and skilled on-site professionals, each committed to upholding our standard of excellence. Meet the dedicated individuals who drive our success and ensure every project is completed with integrity and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <Card className="text-center flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6 flex flex-col flex-grow items-center">
                      {image && (
                         <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent shadow-md">
                           <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />
                           <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                         </Avatar>
                      )}
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-accent font-medium mb-4">{member.role}</p>
                      {member.statement && (
                        <blockquote className="mt-auto text-muted-foreground italic border-l-2 border-accent pl-4 text-left text-sm">
                          "{member.statement}"
                        </blockquote>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">{member.name}</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {image && (
                         <Avatar className="w-32 h-32 flex-shrink-0 border-4 border-accent shadow-md">
                           <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />
                           <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                         </Avatar>
                      )}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                        <p className="text-accent font-medium mb-2">{member.role}</p>
                        {member.statement && (
                          <blockquote className="text-muted-foreground italic text-sm">
                            "{member.statement}"
                          </blockquote>
                        )}
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-center sm:text-left">Key Duties</h4>
                      <ul className="space-y-2">
                        {member.duties?.map((duty, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{duty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};
