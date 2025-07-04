import { Button } from "@/components/ui/button";
import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const JobDescription = ({ job }) => {
  const { skills } = job;
  const keysToShow = ["description", "key_responsibilities", "requirements"];

  const jobArray = Object.entries(job).filter(([key]) =>
    keysToShow.includes(key)
  );

  return (
    <>
      {jobArray.map(([key, value]) => (
        <div className="pb-10">
          <h3 key={key} className="font-medium capitalize text-theme">
            {key.replace(/_/g, " ")}:
          </h3>
          {Array.isArray(value) &&
          (key === "key_responsibilities" || key === "requirements") ? (
            <ul className="list-disc list-inside leading-6 md:leading-9 text-sm md:text-base text-gray-600 space-y-1">
              {value.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm md:text-base leading-6 md:leading-9 text-gray-600">
              {Array.isArray(value) ? value.join(", ") : String(value)}
            </p>
          )}
        </div>
      ))}

      <h3 className="font-medium text-theme">Skills</h3>
      <div className="grid grid-cols-3 grid-rows-2 md:flex gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 px-2 py-1 text-sm md:text-base rounded-3xl">{skill}</span>
        ))}
      </div>
    </>
  );
};
