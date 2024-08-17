import React from "react";
import { FloatingNavDemo } from './Navbar'; // Ensure Navbar is correctly imported
import { TypewriterEffectDemo } from './typewriter';
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const TitleCard = () => {
  return (
    <div className="relative bg-black text-white p-8 mb-8 rounded-none shadow-none flex items-center ">
      <StarsBackground />
      <ShootingStars />

      {/* Logo on the Top-Left */}
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src="/logo.png" // Correct path to logo in the public directory
          alt="Company Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Title and Navbar */}
      <div className="flex flex-col items-center flex-grow">
        <div className="sticky top-4 z-50">
          <FloatingNavDemo />
        </div>
        
      </div>
    </div>
  );
};

export default TitleCard; // Ensure TitleCard is exported correctly
