"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "Business",
    },
    {
      text: "with",
    },
    {
      text: "AI",
    },
    {
      text: "Innovation",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Precision",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
    <p className="text-neutral-600 dark:text-neutral-200 text-base mb-5">
      Let's build your dream project
    </p>
    <TypewriterEffect words={words} />
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
  <button 
    onClick={() => window.open('https://calendly.com/demanual-team/scheduled-meeting?month=2024-08', '_blank')}
    className="w-40 h-10 rounded-xl border border-black dark:border-white text-black dark:text-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold transition-colors duration-300"
    aria-label="Book a call with us"
  >
    Book a call with us
  </button>
</div>

  </div>
  
  );
}
