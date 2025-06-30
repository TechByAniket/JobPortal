import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Product Designer",
    image: "/Home/avatar1.png",
    testimonial: "The AI-powered resume builder helped me create a professional CV in minutes. I loved how it tailored everything to match job descriptions perfectly. I now get more callbacks than ever before!"
  },
  {
    name: "Ravi Mehta",
    role: "Full Stack Developer",
    image: "/Home/avatar2.png",
    testimonial: "This platform's match score feature saved me so much time. It instantly told me how well my resume aligned with the job — no more guesswork. It’s a game-changer for developers like me."
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Lead",
    image: "/Home/avatar3.png",
    testimonial: "I used to apply blindly to jobs. Now, with match scores and optimized resumes, I know exactly where I stand. The recommendations are spot on — I found my current role here!"
  },
  {
    name: "Arjun Deshmukh",
    role: "Data Analyst",
    image: "/Home/avatar4.png",
    testimonial: "The platform helped me build a resume tailored for data roles. The AI insights were super helpful, and the recommendations actually matched my profile. Highly recommended!"
  },
  {
    name: "Meera Iyer",
    role: "Content Strategist",
    image: "/Home/avatar5.png",
    testimonial: "Super intuitive and powerful! I especially loved how my resume score went up as I followed the platform’s suggestions. It helped me feel confident before applying."
  },
  {
    name: "Kunal Verma",
    role: "Founder, StartupHub",
    image: "/Home/avatar6.png",
    testimonial: "We’ve onboarded multiple hires using this platform. The AI-generated resumes and match analysis make shortlisting efficient and effective. It’s a must-use for hiring teams too."
  }
];




export const Testimonals = () => {
  return (
    <>
      <h2 className="text-center mt-15 md:-mt-10 font-medium flex justify-center">
        Join Thousands Who’ve Found Success
      </h2>
      <p className="text-center text-base md:text-lg text-gray-600 font-light flex justify-center pb-5">
        Here’s how we’ve helped job seekers and mentors reach their goals
      </p>
      <div className="container px-2 py-5">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-6  md:grid-rows-2">
           <TestimonialCard {...testimonials[0]} />
           <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex flex-col gap-6 md:mt-12 md:grid-rows-2">
            <TestimonialCard {...testimonials[2]} />
            <TestimonialCard {...testimonials[3]} />
        </div>
        <div className="flex flex-col gap-6 md:grid-rows-2">
        <TestimonialCard {...testimonials[4]} />
           <TestimonialCard {...testimonials[5]} />        
        </div>
      </div>
    </div>
    </>
  );
};



const TestimonialCard = ({ name, role, image, testimonial })=>{
  return (
    <div>
          <Card className="p-6 shadow-lg hover:shadow-xl hover:scale-102 my-transition">
            <CardContent>
              <p className="text-muted-foreground text-sm mb-5">{testimonial}</p>
              <div className="flex justify-between items-center space-x-4">
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
                <Avatar className='h-15 w-15 border-2 border-gray-300'>
                  <AvatarImage src={image} className='object-cover' />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
    </div>
  );
}