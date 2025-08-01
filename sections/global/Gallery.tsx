import SectionHeading from '@/components/reusable/SectionHeading'
import { GalleryImage } from '@/types/gallery'
import Image from 'next/image'
import React from 'react'

interface Props {
  data: Array<GalleryImage>
}

function Gallery({ data }: Props) {
  const images = data.slice(0, 6)

  return (
    <div className='bg-third py-24 px-5'>
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