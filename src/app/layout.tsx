import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import './globals.css';
import { Inter } from 'next/font/google';
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DemanualAI',
  description: 'Company portfolio website created using Next.js, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex flex-col min-h-screen bg-black text-white`}>
        <StarsBackground />
        <ShootingStars />
        <div className="relative z-10 flex flex-col min-h-screen">
          <TitleCard />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
