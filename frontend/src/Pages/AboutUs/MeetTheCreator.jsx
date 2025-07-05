import React from "react";
import {
  FaLinkedin,
} from "react-icons/fa";

const iconsMap = {
    LinkedIn: <FaLinkedin />,
  };

  const mySocialMedia = [
    {
      key: "LinkedIn",
      link: "https://www.linkedin.com/in/aniket-khemnar-4b7811286",
      color:"#0077B5"
    },
  ];


export const MeetTheCreator = () => {
  return (
    <section className="my-padding bg-[#010717]">
        <div className="wide-container">
      <h2 className="mb-4 font-medium text-center text-white">Meet The Creator</h2>
      <h3 className="font-medium text-center text-[#6C5CE7]">Aniket Khemnar</h3>

      <div className="flex flex-col-reverse md:flex-row md:justify-center items-center gap-4">
        <div className="p-4 w-[90vw] md:w-[60vw] text-center md:text-left flex flex-col justify-start items-start gap-4">
          <div className="relative bg-white p-6 md:p-10 rounded-xl text-left max-w-3xl mx-auto">
            {/* Top-Left Opening Quote */}
            <img
              src="/AboutUs/OpeningQuote.svg"
              alt="Opening Quote"
              className="absolute top-1 left-1 md:-top-1 md:-left-1 w-6 h-6 md:w-11 md:h-11 opacity-60"
            />

            {/* Bottom-Right Closing Quote */}
            <img
              src="/AboutUs/ClosingQuote.svg"
              alt="Closing Quote"
              className="absolute bottom-3 right-4 w-6 h-6 md:w-11 md:h-11 opacity-60"
            />

            <div className="text-gray-600 text-base space-y-4">
              <p>
                Hello! I'm <strong>Aniket Khemnar</strong>, a passionate
                full-stack developer and engineering student with a deep
                interest in building solutions that solve real-world problems. I
                believe technology, when applied thoughtfully, can make people's
                lives easier and more efficient.
              </p>

              <p>
                This platform is a solo project that I conceptualized, designed,
                and developed from the ground up. The goal was to create a tool
                that helps job seekers navigate their career journey with ease.
                From intelligent job recommendations based on user profiles to a
                resume builder that tailors resumes to job descriptions — every
                feature was crafted with the end user in mind.
              </p>

              <p>
                Throughout this journey, I’ve handled everything from frontend
                UI design to backend logic and database integration — wearing
                every hat to bring this idea to life. It reflects my curiosity,
                willingness to learn, and dedication to creating meaningful
                digital experiences.
              </p>

              <p>
                I’m constantly exploring ways to make this platform smarter,
                faster, and more impactful. If you have feedback, suggestions,
                or just want to connect — I’d love to hear from you!
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 w-[80vw] md:w-[18vw]">
          <div className="p-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl w-fit hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src="/AboutUs/myPhoto.jpg"
              alt="Aniket Khemnar"
              className="h-[300px] md:h-[400px] w-[300px] md:w-[400px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      </div>

      <div className="container flex justify-center items-center">
        <p className="font-medium text-lg md:text-xl text-center text-white">Will be Happy to Connect!</p>
        {mySocialMedia.map(({ key, link, color }) => (
        <a
          key={key}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color }}
          className={`px-4 py-2 text-3xl md:text-4xl`}
        >
          {iconsMap[key]}
        </a>
      ))}
      </div>
    </section>
  );
};
