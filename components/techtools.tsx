import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { techtools } from "@/data";

export const Techtools = () => {
  return (
    <div className=" py-20" id="testimonials">
      <h1 className=" heading text-white">
        Technologies
        <span className=" ml-3 text-purple"> used in development</span>
      </h1>
      <div className=" flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={techtools} direction="right" speed="fast" />
      </div>
    </div>
  );
};
