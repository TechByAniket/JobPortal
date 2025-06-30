import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const footerContent = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "FAQs", href: "#faqs" },
        { label: "Resume Tips", href: "/resume-tips" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
];

export const Footer = () => {
  return (
    <section className="bg-gray-50">
      <div className='container text-center py-5 flex flex-col justify-center items-center'>
         <Link to='/'>
          <img src="/logo-black.png" alt="" className="w-15 md:w-20" />
        </Link>

        <div className='md:w-[80vw] py-5 flex flex-col md:flex-row gap-8 md:gap-12 text-center md:text-left justify-center'>
          {
            footerContent.map(({ title, links})=>{
              return (
                <div className='flex flex-col justify-start px-20'>
            <h5 className='font-medium'>{title}</h5>
            <ul className='text-sm md:text-base '>
                {
                  links.map(({label, href})=>{
                    //  return <li key={label}><Link to={href}>{label}</Link></li>
                    return <li key={label} className='hover:text-blue-500 my-transition cursor-pointer'>
                      <a href={href}>{label}</a>
                      </li>
                  })
                }
            </ul>
          </div>

              );
            })
          }
        </div>

      </div>
</section>
  )
}
