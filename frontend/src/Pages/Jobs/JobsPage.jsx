import React, { useState } from "react";
import { SearchJobs } from "./SearchJobs";
import { JobsFilter } from "./JobsFilter";
import { JobsListings } from "./JobsListings";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";

export const JobsPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="container">
      <SearchJobs />
      <div className="relative my-padding flex flex-col md:gap-0 md:flex-row">
        <Button
          variant="ghost"
          className="md:hidden ml-52 mb-5 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {isOpen ? (
            <span className="flex justify-center items-center gap-1">
              Close <RxCross2 />
            </span>
          ) : (
            <span className="flex justify-center items-center gap-1">
              Filters <CiFilter />
            </span>
          )}
        </Button>


        
        {isOpen && (
          <div className={`absolute right-0 top-20 z-50 w-[80vw] md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}>
            <JobsFilter />
          </div>
        )}
        <div className="hidden md:block">
          <JobsFilter />
        </div>

        <JobsListings />
      </div>
    </section>
  );
};
