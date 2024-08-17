"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export function ThreeDCardDemo() {
  const router = useRouter(); // Initialize the router

  const handleSignUpClick = () => {
    router.push('/contact#contact-form'); // Redirect to the contact form section
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <CardContainer className="inter-var flex-shrink-0">
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-border duration-300 hover:border-4 hover:border-blue-500">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            DemanualAI's Invoice Parser
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Experience effortless automation and unparalleled accuracy with DemanualAI's Invoice parser, powered by OCR and advanced language learning models.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/prod1.png" // Path relative to the public folder
              height={300} // Adjust the height as needed
              width={300}  // Adjust the width as needed
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Product Thumbnail 1"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleSignUpClick}
              className="px-4 py-2 rounded-xl border border-black dark:border-white text-black dark:text-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold transition-colors duration-300"
            >
              Notify me!!
            </button>
          </div>
        </CardBody>
      </CardContainer>
      
      <CardContainer className="inter-var flex-shrink-0">
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-border duration-300 hover:border-4 hover:border-blue-500">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            DemanualAI's E-com Bot
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Integrate efficient communication into your E-Commerce business with DemanualAI's E-com bot, powered by large language models.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/prod2.png" // Path relative to the public folder
              height={300} // Adjust the height as needed
              width={300}  // Adjust the width as needed
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Product Thumbnail 2"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleSignUpClick}
              className="px-4 py-2 rounded-xl border border-black dark:border-white text-black dark:text-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold transition-colors duration-300"
            >
              Notify me!!
            </button>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
