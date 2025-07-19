import React from 'react'
import { Icon } from "@iconify/react";
import { Card, CardContent } from '../ui/card'
import { Briefcase, Coffee } from 'lucide-react'
import { Barista } from '@/types/barista'
import Image from 'next/image';

interface BaristaCardProps {
  data: Barista
}

function BaristaCard({data}: BaristaCardProps) {
  const { id, name, image, position, nationality, experience_years } = data

  return (
    <Card className="w-full p-0 max-w-md mx-auto bg-white border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:rotate-1">
      <CardContent className="p-0">
        <div className="relative">
          {/* Geometric background shapes */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#caa378] rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#493831] rounded-tr-full opacity-10"></div>

          <div className="p-8">
            <div className="flex items-center justify-center mb-4">
              <Icon icon={`twemoji:flag-${nationality.code}`} className='size-6 text-secondary' />
              <span className="text-sm font-medium text-[#493831] ml-2">{ nationality.name }</span>
            </div>

            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#e7dbcf] shadow-lg relative">
              <div className='h-full w-full relative'>
                <Image src={image || "/placeholder.svg"}
                alt={name} fill objectFit='cover' />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-[#493831] mb-2">{name}</h3>
              <p className="text-[#493831]/80 text-sm mb-3">{position}</p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-[#caa378]" />
                <span className="text-sm font-medium text-[#493831]">
                  {experience_years} Years of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BaristaCard