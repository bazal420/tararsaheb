import { Approvals } from '@/components/sections/Approvals';
import { Clients } from '@/components/sections/Clients';
import { FounderMessage } from '@/components/sections/FounderMessage';
import { History } from '@/components/sections/History';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { MarketPresence } from '@/components/sections/MarketPresence';

export default function AboutPage() {
  return (
    <>
      <div id="about" className="container mx-auto px-4 py-16 lg:py-24 space-y-16 lg:space-y-24">
        <FounderMessage />
        <History />
      </div>
      <HowWeWork />
      <MarketPresence />
      <div id="about-cont" className="container mx-auto px-4 py-16 lg:py-24 space-y-16 lg:space-y-24">
        <Approvals />
      </div>
      <Clients />
    </>
  );
}
