import Image from 'next/image'
import React from 'react'

interface Props {
  image: string
  description: string
}

function SoilInfo({ image, description }: Props) {
  return (
    <section className="bg-third py-8 md:py-12">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">About Your Grower</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Radar Chart Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white p-4 flex items-center justify-center">
              <div className="h-[300px] w-full max-w-[300px] relative">
                <Image src={image || "/placeholder.svg"} alt="Coffee Flavor Profile Radar Chart" fill objectFit="contain" />
              </div>
            </div>

            {/* Right: Origin Story Text */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-primary/80 leading-relaxed mb-6">{description}</p>
            </div>
          </div>
        </section>
  )
}

export default SoilInfo