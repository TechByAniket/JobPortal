import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { JobsCard } from "./JobsCard";
import { RxCross2 } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";
import { JobsFilter } from "./JobsFilter";

const sortBy = ["Newest First", "Oldest First"];

export const JobsListings = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="md:w-[55vw] flex flex-col gap-3">
      <div className="flex gap-2 justify-end">
        <Button
          variant="ghost"
          className="md:hidden cursor-pointer"
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
          <div
            className={`absolute right-0 top-20 z-50 w-[80vw] md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <JobsFilter />
          </div>
        )}
        <DropdownList />
      </div>
      <div>
        <JobsCard />
      </div>
    </section>
  );
};





const DropdownList = () => {
  const [sort, setSort] = useState(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-[20vw] md:w-[10vw] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm cursor-pointer"
      >
        <Button variant='ghost' className='w-24 cursor-pointer'>{sort ? sort : "Sort By"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {sortBy.map((sort, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => setSort(sort)}
            className="focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:rounded-sm cursor-pointer "
          >
            {sort}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
