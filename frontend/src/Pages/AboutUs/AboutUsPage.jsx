import React from 'react'
import { OurMission } from './OurMission'
import { WhyThisPlatform } from './WhyThisPlatform'
import { MeetTheCreator } from './MeetTheCreator'

export const AboutUsPage = () => {
  return (
    <>
    <section className="wide-container my-padding flex flex-col justify-center items-center gap-3 text-center ">
          <h1 className="font-medium">
            Who <span className="text-blue-600">We Are</span> ?
          </h1>
          <p className="my-subheading">
            Hirrd is a smart job recommendation platform built to bridge the gap between job seekers and the right opportunities. Our system uses intelligent filtering and tailored suggestions to help users find jobs that align with their skills and goals.
          </p>                
    </section>
    <OurMission/>
    <WhyThisPlatform/>
    <MeetTheCreator/>

    </>
  )
}
