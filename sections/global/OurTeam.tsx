import BaristaCard from '@/components/cards/BaristaCard'
import SectionHeading from '@/components/reusable/SectionHeading'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React from 'react'

function OurTeam() {
  const data = [
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
    {
      name: "Hani Rodriguez",
      image: '/hani_salloum.jpg',
      position: "Head Barista",
      nationality: { code: 'italy', name: "Italian" },
      experience_years: 8,
    },
  ]
  return (
    (
      <div className='bg-secondary py-24 max-md:px-5'>
            <div className='container mx-auto'>
                <SectionHeading title="Our Team" />
            </div>
          <div className='container mx-auto rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row'>
          <ScrollArea className="container whitespace-nowrap">
              {/* <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-8'> */}
              <div className="flex w-max space-x-7 p-4">
                  { data.map((item, index) => (
                      <div key={index} className='w-[200px]'>
                          <BaristaCard data={item} />
                      </div>
                  )) }
              </div>
              {/* </div> */}
              <ScrollBar className="opacity-0" orientation="horizontal" />
          </ScrollArea>
          </div>
        </div>
    )
  )
}

export default OurTeam