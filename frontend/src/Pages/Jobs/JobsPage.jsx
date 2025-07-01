import React from 'react'
import { SearchJobs } from './SearchJobs'
import { JobsFilter } from './JobsFilter'
import { JobsListings } from './JobsListings'

export const JobsPage = () => {
  return (
    <section className='container'>
      <SearchJobs/>
      <div className='my-padding flex md:flex-row bg-amber-50'>
        <JobsFilter/>
        <JobsListings/>
      </div>
    </section>
  )
}
