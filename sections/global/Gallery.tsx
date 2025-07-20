import SectionHeading from '@/components/reusable/SectionHeading'
import Image from 'next/image'
import React from 'react'

function Gallery() {
  const data = [
    { id: 1, image: '/coffee_shop.jpg' },
    { id: 2, image: '/coffee_shop.jpg' },
    { id: 3, image: '/coffee_shop.jpg' },
    { id: 4, image: '/coffee_shop.jpg' },
    { id: 5, image: '/coffee_shop.jpg' },
    { id: 6, image: '/coffee_shop.jpg' },
  ]

  const images = data.slice(0, 6)

  return (
    <div className='bg-third py-24 max-md:px-5'>
          <div className='container mx-auto'>
              <SectionHeading title="Gallery" />
          </div>
        <div className='container mx-auto mt-8 rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row'>
          <div className='w-full grid grid-cols-12 grid-rows-2 gap-4'>
              <div className="col-span-3 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[0].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              <div className="col-span-5 col-start-4 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[1].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              <div className="col-span-4 col-start-9 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[2].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              <div className="col-span-5 row-start-2 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[3].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              <div className="col-span-4 col-start-6 row-start-2 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[4].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              <div className="col-span-3 col-start-10 row-start-2 h-[250px] relative overflow-hidden rounded-4xl">
                <Image src={images[5].image || '/placeholder.svg'} alt='first gallery image' fill objectFit='cover' />
              </div>
              
          </div>
        </div>
      </div>
  )
}

export default Gallery