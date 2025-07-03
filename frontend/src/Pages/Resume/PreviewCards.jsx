import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiNotePencilBold } from "react-icons/pi"
import { LiaToolsSolid } from "react-icons/lia"

export const PreviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      
      {/* Build Resume Card */}
      <Card className="relative w-full overflow-hidden rounded-xl border shadow-sm hover:shadow-md transition">
        {/* Background Image */}
        <img
          src="/Resume/card1bg.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />

        {/* Card Content */}
        <CardContent className="relative z-10 flex flex-col items-center gap-3 p-6">
          <h3 className="font-medium mb-2 text-center">Start from Scratch</h3>
          <p className="text-gray-600 mb-4 text-center">
            Create a new, professional resume by entering your details step-by-step.
          </p>
          <ul className="text-sm text-gray-500 list-disc pl-4 space-y-1 text-left">
            <li>Choose from modern templates</li>
            <li>Guided section builder</li>
            <li>Download in PDF format</li>
          </ul>
          <Button variant='blue' className="rounded-4xl py-3 w-fit mt-4 flex items-center gap-2">
            Build Now
            <PiNotePencilBold size={22} />
          </Button>
        </CardContent>
      </Card>

      {/* Tailor Resume Card */}
      <Card className="relative w-full overflow-hidden rounded-xl border shadow-sm hover:shadow-md transition">
        {/* Background Image */}
        <img
          src="/Resume/card2bg.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />

        {/* Card Content */}
        <CardContent className="relative z-10 flex flex-col items-center gap-3 p-6">
          <h3 className="font-medium mb-2 text-center">Tailor Resume to a Job</h3>
          <p className="text-gray-600 mb-4 text-center">
            Upload your resume and tailor it for any job using AI-powered suggestions.
          </p>
          <ul className="text-sm text-gray-500 list-disc pl-4 space-y-1 text-left">
            <li>Keyword-based enhancements</li>
            <li>Role-specific personalization</li>
            <li>ATS-friendly formatting</li>
          </ul>
          <Button variant='blue' className="rounded-4xl py-3 w-fit mt-4 flex items-center gap-2">
            Tailor to Job
            <LiaToolsSolid size={22} />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
