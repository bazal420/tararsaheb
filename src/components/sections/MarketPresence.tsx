import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Globe, Award } from 'lucide-react';

const leadershipPoints = [
  {
    title: 'One',
    description: 'We lead by doing the jobs others hesitate to take. Whether it’s tight deadlines, urgent reinstatements, or awkward sites, we step in, handle it clean, and hand it over right.',
  },
  {
    title: 'Two',
    description: 'We lead by protecting our client’s reputation. On every job, our priority is to make sure the work is safe, approved, and finished without delays or complaints.',
  },
];

export const MarketPresence = () => {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 space-y-16 lg:space-y-24">
      <section id="market-presence">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Presence</h2>
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>At Tarar Saheb Road Contracting, our work speaks for us. We’ve built a steady reputation across the UAE for handling tough, time-sensitive civil and infrastructure jobs with discipline and clean handovers.</p>
              <p>Our presence isn’t counted by billboards — it’s measured by repeat clients, word-of-mouth, and jobs that led to more jobs. It’s built on repeat clients, word-of-mouth, and projects that lead to more projects.</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Reach</h2>
            <div className="text-muted-foreground space-y-4 text-lg">
                <p>While our operations are currently focused within the UAE, our standards match the best anywhere. We believe good, clean work doesn’t need a border, and one day, Our name will carry the same weight outside the UAE as it does here.</p>
                <p>For now, we’re earning our ground at home — the right way.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="industry-leadership">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Industry Leadership</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            We don’t call ourselves leaders to look good on paper. We lead where it counts — on job sites. In handling urgent jobs others avoid. In sorting approvals before problems begin. In delivering projects that protect both our client’s schedule and reputation. Our name is built on steady work, clean sites, and no-excuse handovers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadershipPoints.map((point, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle className="text-accent">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
