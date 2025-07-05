import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const uspFeatures = [
  {
    title: "Smart Job Recommendations",
    description:
      "Get personalized job suggestions based on your skills, preferences, and experience using intelligent matching algorithms.",
    icon: "/AboutUs/SmartMatch.png",
  },
  {
    title: "Tailor Resumes for Each Job",
    description:
      "Automatically customize your resume for every job you apply to, increasing your chances of selection by matching key requirements.",
    icon: "/AboutUs/TailorResume.png",
  },
  {
    title: "AI-Powered Resume Builder",
    description:
      "Create professional, ATS-friendly resumes in minutes with our easy-to-use and customizable resume builder.",
    icon: "/AboutUs/BuildResume.png",
  },
  {
    title: "Simplified Job Search",
    description:
      "Browse, save, and apply to relevant job listings with powerful filters and a clean, user-friendly interface.",
    icon: "/AboutUs/JobSearch.png",
  },
];

export const WhyThisPlatform = () => {
  return (
    <section className="wide-container my-padding">
      <div className="text-center">
        <h2 className="font-medium mb-4">Why This Platform ?</h2>
        <p className="mb-6 text-base md:text-lg text-gray-600 text-left md:text-center">
          In today’s crowded job market, job seekers often spend hours scrolling
          through irrelevant listings, struggling to find roles that truly fit
          their skills and goals. Our platform solves this by using intelligent
          algorithms to:
        </p>
      </div>

      <div className="pt-4 flex flex-col md:flex-row gap-4 items-center ">
        {uspFeatures.map(({ title, description, icon }) => (
          <Card className="relative h-[43vh] md:h-[45vh] w-[80vw] md:w-[20vw] gap-1 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[url('/AboutUs/wave.png')] bg-cover bg-center text-white overflow-hidden">
            <CardHeader className="relative z-10 flex flex-col justify-center items-center">
              <CardTitle className="font-medium text-white text-lg border-b-[1px] border-blue-200 my-transition">
                {title}
              </CardTitle>
              <img src={icon} alt="" className="h-32 w-32 object-contain" />
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-base text-gray-600">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
