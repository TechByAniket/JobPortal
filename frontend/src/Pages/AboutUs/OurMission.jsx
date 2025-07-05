import React from "react";
import { PiTargetLight } from "react-icons/pi";

export const OurMission = () => {
  return (
    <section className="my-padding bg-gray-50">
        <div className="wide-container flex flex-col gap-4 text-center">
      <h2 className="font-medium">What We Do ?</h2>
      <div className="flex flex-col md:flex-row">
      <div className="p-4 w-[90vw] md:w-[40vw]">
        <img src="/AboutUs/handshake.avif" alt="" className="rounded-2xl"/>
      </div>

      <div className="p-4 w-[90vw] md:w-[40vw] text-left">
        <h2 className="flex items-center gap-2 font-medium "><PiTargetLight/> Our Mission</h2>
        <div className="flex flex-col leading-normal md:leading-relaxed text-gray-600">
          At JobMatch, our mission is to simplify the job search process by
          connecting individuals with the most relevant opportunities tailored
          to their skills, experience, and career goals.
          
          <p className="pt-4 font-medium">We aim to:</p>
          <ul className="py-4 list-disc list-inside">
            <li>Eliminate the noise of irrelevant job listings</li>
            <li>Empower users with smart resume-building tools</li>
            <li>Provide personalized job recommendations that truly match their profile</li>
          </ul>
          We believe that finding the right job
          shouldn't be hard — it should be smart, fast, and focused. That's why
          we’re building a platform that understands you better, helps you stand
          out, and brings you one step closer to your dream job.
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};
