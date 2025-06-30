import { Button } from '@/components/ui/button'
import React from 'react'

export const CallToAction = () => {
  return (
    <section className="text-center py-16 bg-[#010717]">
  <h2 className="font-bold mb-4 text-white">
    Ready to land your dream job?
  </h2>
  <p className="text-gray-300 mb-6">
    Start by uploading your resume or building a new one with our AI Resume Builder.
  </p>
  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base rounded-lg cursor-pointer">
    Get Started for Free
  </Button>
</section>
  )
}
