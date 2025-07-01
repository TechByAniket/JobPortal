import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const featureCards = [
  {
    title: "Smart Matches",
    heading: "Find the Right Jobs Instantly",
    description:
      "Get job suggestions tailored to your skills, preferences, and goals using AI-powered matching.",
    img: "SmartMatch.svg",
  },
  {
    title: "AI Resume Builder",
    heading: "Build a Resume in Seconds",
    description:
      "Just enter your details and let the system auto-generate a professional, ready-to-download resume.",
    img: "AIResume.svg",
  },
  {
    title: "Match Score",
    heading: "Know Your Fit Before You Apply",
    description:
      "Analyze how closely your resume aligns with a job description and get instant improvement tips.",
    img: "MatchScore.svg",
  },
  {
    title: "Saved Jobs",
    heading: "Your Favorite Opportunities, Saved",
    description:
      "Save jobs you’re interested in and revisit them anytime from your personalized job board.",
    img: "SaveJobs.svg",
  },
  {
    title: "Job Tracker",
    heading: "Stay on Top of Your Applications",
    description:
      "Keep track of all jobs you’ve saved or applied for in one easy-to-manage dashboard.",
    img: "TrackApplication.svg",
  },
];

export const Features = () => {
  const [selected, setSelected] = useState(featureCards[0].title);
  const currentFeature = featureCards.find((f) => f.title === selected);

  return (
    <div className="container flex justify-center items-center h-[60vh] px-4 py-10">
  <div className="w-full max-w-6xl flex flex-col items-start gap-6">
    {/* Scrollable Button Row (Tabs) */}
    <div className="w-full overflow-x-auto px-2 mt-24 md:-mt-15">
      <ToggleGroup
        type="single"
        value={selected}
        onValueChange={(value) => {
          if (value) setSelected(value);
        }}
        className="flex min-w-full gap-2 px-2"
      >
        {featureCards.map(({ title }) => (
          <ToggleGroupItem
            key={title}
            value={title}
            className="shrink-0 px-4 py-2 text-sm border rounded-md cursor-pointer"
          >
            {title}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>

    {/* Content Section */}
    {currentFeature && (
      <div className="h-[70vh] md:h-auto w-full -mt-5 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg shadow-md">
  {/* Description */}
  <div className="flex flex-col justify-center items-center">
    <div className="h-[30vh] md:h-[30vh] md:w-[40vw] flex flex-col justify-center items-center">
    <h3 className="font-semibold text-center md:text-left">
      {currentFeature.heading}
    </h3>
    <p className="h-32 text-center md:text-left md:leading-relaxed text-black md:w-1/2">
      {currentFeature.description}
    </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="h-60 w-60 md:w-[400px] md:h-[300px] flex justify-center items-center backdrop-blur-md bg-white/60 border border-gray-200 shadow-xl ring-1 ring-gray-100 rounded-tl-[48px] rounded-br-[32px] rounded-tr-[8px] rounded-bl-[0px] overflow-hidden hover:scale-101 transition duration-300 ease-in-out">
    <img
      src={`/Home/${currentFeature.img}`}
      alt={currentFeature.title}
      className="max-h-full max-w-full object-contain"
    />
  </div>
</div>

    )}
  </div>
</div>

  );
};
