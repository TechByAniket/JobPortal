import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { PreviewCards } from "./PreviewCards";
import { BuildResume } from "./BuildResume";
import { TailorResume } from "./TailorResume";

export const ResumePage = () => {

  

  return (
    <section className="container my-padding flex flex-col justify-center items-center gap-3 text-center ">
      <h1 className="font-medium">
        Build a <span className="text-blue-600">Professional Resume</span> in
        Minutes!
      </h1>
      <p className="my-subheading">
        Start by filling out your details, choose a template, and get a
        job-ready resume instantly.
      </p>

      
      <PreviewCards/>
            
    </section>
  );
};
