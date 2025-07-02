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
import { HiSparkles } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer I",
    company: "Google",
    location: "Bengaluru, IND",
    type: "Full Time",
    postedDate: "30 July, 2025",
    salary: "27 LPA",
    image: "/Jobs/Google-logo1.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Hyderabad, IND",
    type: "Full Time",
    postedDate: "28 July, 2025",
    salary: "24 LPA",
    image: "/Jobs/Google-logo1.png", // same image as you said
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Chennai, IND",
    type: "Contract",
    postedDate: "29 July, 2025",
    salary: "30 LPA",
    image: "/Jobs/Google-logo1.png",
  },
  {
    id: 4,
    title: "AI Engineer",
    company: "OpenAI",
    location: "Remote",
    type: "Full Time",
    postedDate: "25 July, 2025",
    salary: "50 LPA",
    image: "/Jobs/Google-logo1.png",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "Netflix",
    location: "Mumbai, IND",
    type: "Full Time",
    postedDate: "27 July, 2025",
    salary: "35 LPA",
    image: "/Jobs/Google-logo1.png",
  },
];





export const JobsCard = () => {
  return (
    <>
    {
        jobListings.map(({ id, title, company, location, type, postedDate, salary, image })=>{
            return (
                <Card key={id} className='my-2'>
      <CardHeader className='flex gap-5 items-center'>
        <div className="p-0 md:p-2 h-15 w-20 md:w-16 rounded-4xl">
            <img src={image} alt="Google Logo" className="object-contain h-full w-full"/>        
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 justify-between">
            <div className="flex flex-col">
                <CardTitle className='text-theme-hover my-transition cursor-pointer'>{title}</CardTitle>
                <CardDescription>{company}</CardDescription>
                <CardDescription>{location}</CardDescription>
            </div>
        <CardAction className='flex gap-2 text-base md:text-xl'><HiSparkles/> <CiBookmark/></CardAction>
        </div>
      </CardHeader>
      <CardContent className='flex gap-2 text-xs md:text-sm'>
        <span className="bg-green-100 px-2 py-1 rounded-3xl">{type}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-3xl">{postedDate}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-3xl">{salary}</span>
      </CardContent>
      <CardFooter className='justify-end gap-3'>
        <Button className="h-6 md:h-9 px-4 py-2 text-xs rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:brightness-110 transition-all"><HiSparkles/> Tailor Resume</Button>
        <Button className='h-6 md:h-9 px-4 py-2 text-xs rounded-md' variant='blue'>View Details</Button>
      </CardFooter>
    </Card>

            )
        })

    }
    </>
    
  );
};
