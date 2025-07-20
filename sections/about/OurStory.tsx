import SectionHeading from '@/components/reusable/SectionHeading'
import Image from 'next/image'
import React from 'react'

interface SectionProps {

}

function OurStory() {
  return (
    <section className="bg-primary py-24 px-5">
          <SectionHeading title='Our Story' align='center' color='third' />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className='w-full h-[450px] relative rounded-3xl overflow-hidden shadow-md'>
                <Image src={'/coffee_shop.jfif'} alt='ous story image' fill objectFit='cover' />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-xl text-third/80 leading-relaxed mb-6">
                Founded in 2020, The Koffee Room began with a simple passion: to bring the finest coffee experience to
                our community. We believe that every cup tells a story, from the rich soil it grew in to the hands that
                carefully brew it. Our journey started in a small, cozy corner, driven by a commitment to quality,
                sustainability, and a deep love for coffee.
              </p>
              <p className="text-xl text-third/80 leading-relaxed">
                We source our beans ethically from the best farms around the globe, ensuring fair practices and
                exceptional flavor. Our values are steeped in community, craftsmanship, and creating a welcoming space
                where everyone can enjoy a perfect moment with their favorite brew.
              </p>
            </div>
          </div>
        </section>
  )
}

export default OurStory