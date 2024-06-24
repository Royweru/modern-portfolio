"use client";
import { BiArrowToRight, BiQuestionMark } from "react-icons/bi";
import { Spotlight } from "./ui/Spotlight";
import { MagicButton } from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FaLocationArrow } from "react-icons/fa";
import { SparklesCore } from "./ui/sparlkes";

export const Hero = () => {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "create",
    },
    {
      text: "something",
    },
    {
      text: "Extra",
      className: "dark:text-purple",
    },
    {
      text: "odinary",
      className: "dark:text-indigo-500",
    },
    {
      text: "together",
      className: "dark:text-blue-500",
    },
  ];
  return (
    <div className="pb-20 pt-20">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] 
      absolute top-0 right-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-50">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="font-semibold tracking-widest text-xs text-center text-blue-100 max-w-80">
            Transform your brand&#39;s dream into a reality
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TypewriterEffect words={words} />

          <a href="#about">
            <MagicButton
              title="What are we about"
              icon={<BiQuestionMark />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
