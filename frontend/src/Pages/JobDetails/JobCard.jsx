import React, { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiSparkles } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const JobCard = ({ job }) => {
  const {
    id,
    title,
    company,
    location,
    job_type,
    posted_date,
    salary,
    logo_url,
    industry = "Tech",
  } = job;

  return (
    <Card key={id} className="border-none shadow-none bg-transparent p-0">
      <CardHeader className="py-4 flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="p-0 md:p-2 h-20 w-20 md:h-28 md:w-28 rounded-xl">
          <img
            src="/Jobs/Amazon.png"
            alt={`${company} Logo`}
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center justify-center md:items-center gap-2">
          <div className="flex flex-col items-center md:items-start">
            <CardTitle className="cursor-pointer">
              <h1 className="text-xl md:text-3xl font-medium">{title}</h1>
            </CardTitle>
            <CardDescription className="-mt-2 md:-mt-3 flex flex-wrap justify-center md:justify-start items-center gap-2 text-muted-foreground">
              <span>{company}</span>
              <span className="text-gray-400">|</span>
              <span className="text-theme">{industry}</span>
            </CardDescription>
            <CardDescription className="flex flex-wrap justify-center md:justify-start items-center">
              {location}
            </CardDescription>
          </div>

          <div className="flex justify-center md:justify-end mt-2 md:mt-0 w-full md:w-auto">
            <CardAction className="flex flex-col text-base md:text-xl">
              <div className="flex gap-2 justify-center md:justify-end">
                <HiSparkles /> <CiBookmark />
              </div>
              <div className="hidden py-4 md:flex justify-center items-center gap-5">
                <Button className=" text-xs rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:brightness-110 transition-all cursor-pointer">
                  <HiSparkles /> Tailor Resume
                </Button>
                <Button
                  className=" text-xs rounded-md cursor-pointer"
                  variant="blue"
                >
                  <Link to={`${job.apply_link}`}>Apply Now</Link>
                </Button>
              </div>
            </CardAction>
          </div>
        </div>
      </CardHeader>
      <CardContent className="-mt-4 md:-mt-12 md:pl-32 flex justify-center md:justify-start gap-2 text-xs md:text-sm">
        <span className="bg-green-100 px-2 py-1 rounded-3xl">{job_type}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-3xl">{posted_date}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-3xl">{salary}</span>
      </CardContent>
      <CardFooter className="justify-center">
        <div className="md:hidden flex justify-center items-center gap-5">
                <Button className=" text-xs rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:brightness-110 transition-all cursor-pointer">
                  <HiSparkles /> Tailor Resume
                </Button>
                <Button
                  className=" text-xs rounded-md cursor-pointer"
                  variant="blue"
                >
                  <Link to={`${job.apply_link}`}>Apply Now</Link>
                </Button>
            </div>
      </CardFooter>
    </Card>
  );
};
