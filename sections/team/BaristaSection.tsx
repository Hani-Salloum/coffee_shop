import { Barista } from '@/types/barista'
import { Briefcase, CalendarDays, Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Icon } from "@iconify/react";


interface BaristaSectionProps {
  data: Barista
  index: number
}

function BaristaSection({ data, index }: BaristaSectionProps) {
  const { name, nationality, age, experience_years, description, image, position } = data

  return (
    <section
            key={name}
            className={`bg-white rounded-3xl shadow-lg p-6 md:p-10 flex justify-between flex-col gap-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div className="md:w-1/3 flex-shrink-0 relative">
              <div className='w-[300px] h-[300px] relative rounded-3xl overflow-hidden shadow-md border-4 border-secondary/50'>
                <Image src={image || "/placeholder.svg"} alt={name} fill objectFit='cover' objectPosition='top' />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/3 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <Icon icon={`twemoji:flag-${nationality.code}`} className='size-8 text-secondary' />
              </div>  
            </div>

            <div className="md:w-2/3 text-center md:text-left pt-8 md:pt-0">
              <h2 className="text-3xl font-bold text-primary mb-2">{name}</h2>
              <p className="text-xl font-semibold text-secondary mb-6">{position}</p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6 text-primary/80">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-secondary" />
                  <span>{age} Years Old</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-secondary" />
                  <span>{experience_years} Years Experience</span>
                </div>
              </div>

              <div className="relative bg-third rounded-xl p-5 text-primary/90 italic text-base leading-relaxed shadow-inner">
                <Quote className="absolute top-3 left-3 w-6 h-6 text-secondary opacity-60" />
                <p className="pl-8 pr-2">"{description}"</p>
              </div>
            </div>
          </section>
  )
}

export default BaristaSection