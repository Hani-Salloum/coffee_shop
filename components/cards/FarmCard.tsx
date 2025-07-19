import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Farm } from '@/types/farm'
import Image from 'next/image'

interface FarmCardProps {
  data: Farm
}

function FarmCard({ data }: FarmCardProps) {
  const { id, name, region, image } = data

  return (
    <Card className="w-full p-0 max-w-md mx-auto bg-white border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-56 overflow-hidden">
            <div className='h-full relative w-full'>
              <Image src={image || "/placeholder.svg"} alt={name} fill objectFit='cover' />
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#493831] text-white px-8 py-4 rounded-2xl shadow-xl min-w-max">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#caa378] rounded-full"></div>
                  <span className="text-sm text-[#caa378]">{region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12"></div>
      </CardContent>
    </Card>
  )
}

export default FarmCard