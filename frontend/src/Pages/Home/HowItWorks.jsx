import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  UserPlus,
  Sliders,
  SearchCheck,
  Handshake
} from "lucide-react";


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GiCabbage } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HowItWorks = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  const howItWorks = [
  {
    cardNo: 1,
    title: "Create Your Profile",
    description:
      "Begin your journey by signing up and building a comprehensive profile. Add your educational background, past work experience, certifications, and career objectives to help us understand your goals better and tailor opportunities specifically for you.",
    icon: UserPlus,
    tag: "Build Profile"
  },
  {
    cardNo: 2,
    title: "Add Skills & Preferences",
    description:
      "Tell us what you're great at—be it programming, marketing, design, or something else. Specify your preferred industries, work locations, job types (remote, hybrid, full-time), and let our platform fine-tune the experience for you.",
    icon: Sliders,
    tag: "Tailor It"
  },
  {
    cardNo: 3,
    title: "Get Personalized Job Matches",
    description:
      "Our intelligent recommendation engine uses your profile data and preferences to scan thousands of job listings. You’ll receive curated job suggestions that align with your skillset, aspirations, and ideal working environment.",
    icon: SearchCheck,
    tag: "Smart Match"
  },
  {
    cardNo: 4,
    title: "Apply or Connect with Mentors",
    description:
      "Found a role you love? Apply instantly. Still unsure? No worries—reach out to experienced mentors for feedback, interview tips, or career advice. Our supportive community is here to guide you every step of the way.",
    icon: Handshake,
    tag: "Make It Happen"
  }
];




  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, howItWorks.length - visibleCount)
    );
  };

  const visibleCards = howItWorks.slice(startIndex, startIndex + visibleCount);

  return (
    <Carousel
  opts={{
    align: "start",
    loop: false,
  }}
  className="w-full max-w-6xl mx-auto"
>
  {/* Arrows */}
  <CarouselPrevious className='h-12 w-12 rounded-full bg-white shadow-md text-black hover:bg-gray-100 cursor-pointer my-transition' />
  
  <CarouselContent className="gap-6 px-10 py-4 flex">
    {howItWorks.map(({ cardNo, title, description, icon: Icon, tag }) => (
      <CarouselItem
        key={cardNo}
        className="basis-full md:basis-1/2"
      >
        <Card className="relative h-[450px] w-full md:h-64 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl my-transition">
          <CardHeader className="text-center flex justify-start items-center gap-5 md:gap-20">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              {cardNo}
            </div>
            {/* ✅ Changed CardTitle to semantic <h3> */}
            <h3 className="font-medium">{title}</h3>
          </CardHeader>

          <CardContent className='group flex flex-col justify-center items-center gap-10'>
            <p className="text-muted-foreground text-center transition-opacity duration-300 group-hover:opacity-30">
              {description}
            </p>
            <div className="how-it-works absolute inset-0 z-10 h-full w-full pt-[100%] hover:pt-0 hover:backdrop-blur-sm flex flex-col justify-center items-center my-transition">
              <Icon className="w-12 h-12 text-blue-600 hover:pt-0" />
              <p>{tag}</p>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselNext className='h-12 w-12 rounded-full bg-white shadow-md text-black hover:bg-gray-100 cursor-pointer my-transition' />
</Carousel>



  );
};
