import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { Link, useParams } from "react-router-dom";
import { jobListings } from "../Jobs/jobsData";
import { getJobById } from "@/Services/jobsService";
import { BarLoader } from "react-spinners";
import { JobDescription } from "./JobDescription";
import { JobOverview } from "./JobOverview";
import { Button } from "@/components/ui/button";
import { HiSparkles } from "react-icons/hi2";
import { ShareJob } from "./ShareJob";

export const JobDetailsPage = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        console.log("Job fetched:", data); // debug
        setJob(data);
      } catch (err) {
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) return <BarLoader color="blue" width="w-full" height="3px" />;
  if (!job) return <p>Job not found.</p>;

  return (
    <section className="flex flex-col">
      <div className="bg-gray-100">
        <div className="wide-container">
          <JobCard job={job} />
        </div>
      </div>

      <div className="wide-container py-4 flex flex-col md:flex-row">
        <div className="md:w-[70vw] md:py-4 px-2 md:px-8 ">
          <JobDescription job={job} />
        </div>
        <div className="md:w-[30vw] flex flex-col gap-1 md:gap-4">
          <div className="mt-8 md:mt-0 py-4 px-2 md:px-8 bg-gray-100"><JobOverview job={job} /></div>
          <div className="mt-8 md:mt-0 py-4 px-2 md:px-8 bg-gray-100"><ShareJob job={job}/></div>
        </div>
      </div>
      
    </section>
  );
};
