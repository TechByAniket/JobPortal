import React from "react";
import { Button } from "../../components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
      <div className="container h-[80vh] md:h-[90vh] flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-3xl max-w-3xl font-medium md:-mt-16 md:text-6xl md:max-w-4xl leading-tight">
          No More Missed Opportunities. Only{" "}
          <span className="text-blue-600">Perfect Matches.</span>
        </h1>

        <p className="text-sm max-w-lg md:text-xl leading-tight md:max-w-2xl text-gray-600">
          Get personalized job matches based on your skills, goals, and dreams —
          not just keywords.
        </p>

        <div>
          <Button className="rounded-4xl flex justify-end items-center cursor-pointer">
            Change Starts Here{" "}
            <span>
              <FaArrowRightLong size={20} />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
