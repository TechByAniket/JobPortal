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
import {jobListings} from './jobsData'
import { getAllJobs } from "@/Services/jobsService";
import { BarLoader } from "react-spinners";



export const JobsListCard = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
        // console.log(jobs);
        
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <BarLoader color="blue" width='w-full' height='3px' />;

  return (
    <>
  {jobs.map(
    ({
      id,
      title,
      company,
      location,
      job_type,
      posted_date,
      salary,
      logo_url,
      industry = "Software & IT", // optional default if not in your data
    }) => {
      return (
        <Card key={id} className="my-2">
          <CardHeader className="flex gap-5 items-center">
            <div className="p-0 md:p-2 h-15 w-20 md:w-16 rounded-4xl">
              <Link to={`/jobs/${id}`}>
                <img
                  src='/Jobs/Amazon.png'
                  alt={`${company} Logo`}
                  className="object-contain h-full w-full"
                />
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-2 justify-between">
              <div className="flex flex-col">
                <CardTitle className="text-theme-hover my-transition cursor-pointer">
                  <Link to={`/jobs/${id}`}>{title}</Link>
                </CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-2 text-muted-foreground">
                  <span>{company}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-blue-800 px-2 py-0.5 rounded-md text-theme">
                    {industry}
                  </span>
                </CardDescription>

                <CardDescription>{location}</CardDescription>
              </div>
              <CardAction className="flex gap-2 text-base md:text-xl">
                <HiSparkles /> <CiBookmark />
              </CardAction>
            </div>
          </CardHeader>
          <CardContent className="flex gap-2 text-xs md:text-sm">
            <span className="bg-green-100 px-2 py-1 rounded-3xl">
              {job_type}
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-3xl">
              {posted_date}
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-3xl">
              {salary}
            </span>
          </CardContent>
          <CardFooter className="justify-end gap-3">
            <Button className="h-6 md:h-9 px-4 py-2 text-xs rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:brightness-110 transition-all">
              <HiSparkles /> Tailor Resume
            </Button>
            <Button
              className="h-6 md:h-9 px-4 py-2 text-xs rounded-md"
              variant="blue"
            >
              <Link to={`/jobs/${id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      );
    }
  )}
</>

  );
};
