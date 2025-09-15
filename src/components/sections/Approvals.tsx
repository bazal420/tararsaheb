import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { approvals, Authority } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

const authorities: Authority[] = [
    { name: 'RTA' },
    { name: 'DEWA (Dubai Electricity & Water Authority)' },
    { name: 'Nakheel' },
    { name: 'Dubai Holdings Community Management' },
    { name: 'EMAAR' },
    { name: 'Al Futtain' },
];

export const Approvals = () => {
  return (
    <section id="approvals">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Authority Approvals</h2>
        <div className="text-muted-foreground mt-4 max-w-3xl mx-auto space-y-4 text-left md:text-center">
            <p>
                At TSRC, every project starts with proper approvals. We work directly with major authorities to secure NOCs and clearances before any site work begins. Following rules is not a burden; it protects the client, the project, and our name. 
            </p>
            <p>
                By respecting procedures, we avoid stoppages, penalties, and disputes. Our sites run steady, safe, and without unnecessary delays. Every project is handed over with full compliance to authority requirements.
            </p>
            <p className="font-semibold text-foreground">The authorities we get approval from include:</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {authorities.map((authority) => (
            <Badge key={authority.name} variant="secondary" className="text-lg px-4 py-2">
                {authority.name}
            </Badge>
        ))}
      </div>
      <div className="text-center mt-12 text-muted-foreground max-w-3xl mx-auto">
        <p>By managing these approvals from start to finish, TSRC ensures that clients never face stoppages or compliance issues. Every project moves forward with the right documents in place.</p>
      </div>
    </section>
  );
};
