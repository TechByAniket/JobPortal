import React from 'react'
import { BsCalendar2Date } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { SlBriefcase, SlLocationPin, SlGraduation } from "react-icons/sl";


export const JobOverview = ({ job }) => {
  const keysToShow = [
    "posted_date",
    "location",
    "salary",
    "experience",
    "qualification",
  ];

  const iconMap = {
  posted_date: <BsCalendar2Date size={18} />,
  location: <SlLocationPin size={18} />,
  salary: <BiDollar size={18} />,
  experience: <SlBriefcase size={18} />,
  qualification: <SlGraduation size={18} />,
};

  const jobArray = Object.entries(job).filter(([key]) => keysToShow.includes(key));

  return (
    <>
    <h3 className='pb-5 font-medium text-theme'>Job Overview</h3>
        <ul>
      {jobArray.map(([key, value]) => (
        <li key={key} className='py-3 flex gap-2 justify-items-center'>
          <div className='flex items-start'>
          <span>{iconMap[key]}</span>
          </div>
          <div className='flex flex-col gap-1 items-start'>
          <h5 className='-mt-1 font-medium capitalize text-gray-800'>{key}:</h5>{" "}
          <p className='text-sm md:text-base text-gray-600'>{Array.isArray(value) ? value.join(", ") : String(value)}</p>
          </div>
        </li>
      ))}
    </ul>
    </>
    
  );
}
