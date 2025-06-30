import { HeroSection } from "@/Pages/Home/HeroSection";
import React from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { HowItWorks } from "./HowItWorks";
import { Features } from "./Features";
import { Testimonals } from "./Testimonials";
import { CallToAction } from "./CallToAction";
import { FAQ } from "./FAQ";

export const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="h-[40vh] md:h-[30vh] mb-28 md:mb-24">
        <h2 className="text-center font-medium flex justify-center">
          Together, We’re Changing Careers
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 font-light flex justify-center pb-10">
          Trusted by Thousands of Learners and Mentors
        </p>

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

      <div id="how-it-works" className="h-[75vh] md:h-[55vh] mb-28 md:mb-15"> 
        {/* ------------------------------------------------ */}
        <h2 className="text-center mt-15 md:-mt-10 font-medium flex justify-center">
          Start. Match. Connect. Succeed.
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 font-light flex justify-center pb-5">
          From creating your profile to landing the right job — here's how we
          make it easy for you.
        </p>
        <HowItWorks />
      </div>

      <div id="features" className="h-[100vh] mt-20 pt-3 md:-mt-10 md:h-[70vh] mb-15 bg-gradient-to-tr from-[#60a5fa] via-[#3b82f6] to-[#2563eb] text-white">
        <h2 className="text-center font-medium flex justify-center">
          Powerful Features Built for Your Success.
        </h2>
        <p className="text-center text-base md:text-lg font-light flex justify-center pb-5">
          Explore the tools that simplify your journey and help you achieve more
          with less effort.
        </p>
        <Features />
      </div>

      <div id="testimonials" className="mt-20">
        <Testimonals/>
      </div>

      <div className="mt-20">
        <CallToAction/>
      </div>

      <div id="faqs" className="mt-20">
        <FAQ/>
      </div>
    </>
  );
};
