import { HeroSection } from "@/Pages/Home/HeroSection";
import React from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { HowItWorks } from "./HowItWorks";
import { Features } from "./Features";

export const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="h-[40vh] md:h-[30vh] mb-15">
      <h2 className="text-2xl text-center font-medium flex justify-center">Together, We’re Changing Careers</h2>
      <h3 className="text-base text-center text-gray-600 font-light flex justify-center pb-10">Trusted by Thousands of Learners and Mentors</h3>

      <div className="container flex justify-center items-center">
        <div className="-ml-5 grid grid-rows-3 md:grid-cols-3 place-items-center">
          <div className="w-96 pl-5 flex flex-col justify-center items-center gap-1 md:border-r-2 border-black">
            <AnimatedCounter end={10000} suffix="+" />
            <span>Job Seekers Enrolled</span>
          </div>
          <div className="w-96 pl-5 flex flex-col justify-center items-center gap-1 md:border-r-2 border-black">
            <AnimatedCounter end={1000} suffix="+" />
            <span>Career Mentors</span>
          </div>
          <div className="w-96 pl-5 flex flex-col justify-center items-center gap-1 ">
            <AnimatedCounter end={8000} suffix="+" />
            <span> Successful Matches</span>
          </div>
        </div>
      </div>
      </div>


      <div className="h-[75vh] md:h-[55vh] mb-15 ">
      <h2 className="text-2xl text-center mt-15 md:-mt-10 font-medium flex justify-center">Start. Match. Connect. Succeed.</h2>
      <h3 className="text-base text-center text-gray-600 font-light flex justify-center pb-5">From creating your profile to landing the right job — here's how we make it easy for you.</h3>
      <HowItWorks />
      </div>

      <div className="h-[75vh] md:-mt-10 md:h-[60vh] mb-15 bg-gradient-to-tr from-[#60a5fa] via-[#3b82f6] to-[#2563eb] text-white">
      <div className="container pt-5">
        <h2 className="text-2xl text-center font-medium flex justify-center">Powerful Features Built for Your Success.</h2>
        <h3 className="text-base text-center font-light flex justify-center pb-5">Explore the tools that simplify your journey and help you achieve more with less effort.</h3>
        <Features/>
      </div>
      </div>
    </>
  );
};
