// app/page.tsx

import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import './globals.css';
import { Inter } from 'next/font/google';
import { GlobeDemo } from "./components/globalservice";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { TypewriterEffectDemo } from './components/typewriter';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Company Portfolio',
  description: 'Company portfolio website created using Next.js, TypeScript, and Tailwind CSS.',
};

export default function Home() {
  return (
    <div>

      {/* Reduce the bottom margin of GlobeDemo */}
      <div className="mt-0">
      <TypewriterEffectDemo />
        <GlobeDemo />
        
       
       
      </div>
</div>
  );
}
