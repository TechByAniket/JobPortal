import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useReducer, useState } from "react";

export const JobsFilter = () => {
  const filters = [
    { key: "Work Mode", options: ["Remote", "Hybrid", "On-Site"] },
    {
      key: "Job Type",
      options: [
        "Full-time",
        "Part-time",
        "Internship",
        "Freelance",
        "Contract",
      ],
    },
    {
      key: "Experience Level",
      options: [
        "Fresher / Entry-level",
        "Mid-level (1–3 years)",
        "Senior-level (3+ years)",
        "Manager / Director",
      ],
    },
    {
      key: "Company Type",
      options: ["Startup", "MNC", "Government", " NGO / Non-profit"],
    },
  ];

  const initialFilterState = filters.reduce((acc, curr) => {
    acc[curr.key] = []; // All filters start with no selection
    return acc;
  }, {});

  function filterReducer(state, action) {
    switch (action.type) {
      case "TOGGLE_OPTION":
        const { filterKey, value } = action;
        const current = state[filterKey];
        const updated = current.includes(value)
          ? current.filter((item) => item !== value) // Remove if already selected
          : [...current, value]; // Add if not selected
        return { ...state, [filterKey]: updated };

      case "RESET":
        return initialFilterState;

      default:
        return state;
    }
  }

  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);
  const [isOpen, setOpen] = useState(false);
  console.log(filterState);

  return (
    <section className="w-[60vw] p-2 md:p-0 md:w-[25vw] flex flex-col">
      <h2 className="pl-5 md:pl-0">Filters</h2>

      {filters.map(({ key, options }) => {
        return (
          <div key={key} className="px-5 py-5 flex flex-col gap-2">
            <h4>{key}</h4>

            {options.map((option) => {
              return (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${key}-${option}`}
                    checked={filterState[key].includes(option)}
                    onCheckedChange={(checked) => {
                        dispatch({
                          type: "TOGGLE_OPTION",
                          filterKey: key,
                          value: option,
                        });
                      }
                    }
                    className="w-4 h-4 border border-gray-400"
                  />
                  <Label htmlFor={`${key}-${option}`} className='text-sm md:text-base'>{option}</Label>
                </div>
              );
            })}
          </div>  
        );
      })}
    </section>
  );
};
