import { Hero } from '@/components/sections/Hero';
import { Tagline } from '@/components/sections/Tagline';
import { Portfolio } from '@/components/sections/Portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Tagline />
    </>
  );
}
