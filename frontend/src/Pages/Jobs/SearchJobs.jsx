import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { TfiLayers, TfiLayersAlt, TfiViewGrid } from "react-icons/tfi";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

const industries = [
  "IT", "Finance", "Healthcare", "Education",
  "Engineering", "Marketing", "HR",
  "Retail", "Media", "Legal"
];

export const SearchJobs = () => {

  return (
    <section className='my-padding text-center flex flex-col items-center'>
        <h1 className='font-medium'>There Are  <span className='text-blue-600'>2,482</span> Job Opportunities Waiting for You!</h1>
        <p className='my-subheading'>Explore top roles tailored to your skills, interests, and goals — apply with just a click!</p>
        <div className='my-padding flex flex-col md:flex-row gap-4'>
            <div className='flex justify-center items-center gap-4'>
                <span><CiSearch size={25}/></span><input type="text" placeholder='Job Title, Keywords' className='my-transition border-none'/>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <span><CiLocationOn size={25}/></span><input type="text" placeholder='Location' className='my-transition border-none'/>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <span><TfiViewGrid size={20}/></span>
                <DropdownList/>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer">Find Jobs</Button>
        </div>
    </section>
  )
}

const DropdownList = () =>{

    const [ industry, setIndustry ] = useState(null);

    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-[70vw] md:w-[15vw] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm cursor-pointer' >
        <Button variant="outline">{ industry ? industry : "Select Industry" }</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {
        industries.map((industry, index) => (
          <DropdownMenuItem key={index} onSelect={() => setIndustry(industry)} className='focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:rounded-sm cursor-pointer '>
            {industry}
          </DropdownMenuItem>
        ))
        } 
      </DropdownMenuContent>
    </DropdownMenu>
        
    )

}