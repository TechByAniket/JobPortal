import React, { useState } from "react";
import { SearchJobs } from "./SearchJobs";
import { JobsFilter } from "./JobsFilter";
import { JobsListings } from "./JobsListings";


export const JobsPage = () => {
  

  return ( 
    <section className="wide-container">
      <SearchJobs />

      <div className="relative py-8 flex flex-col md:gap-0 md:flex-row">
        
        <div className="hidden md:block">
          <JobsFilter />
        </div>

        <JobsListings />
      </div>
    </section>
  );
};
