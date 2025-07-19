import FarmCard from '@/components/cards/FarmCard'
import SectionHeading from '@/components/reusable/SectionHeading'
import Link from 'next/link'
import React from 'react'

function FarmsSection() {
  const data = [
      {
        id: 1,
        name: 'Brazil',
        image: '/guatemala.jpg',
        region: 'Brazil, Sao Paolo' 
      },
      {
        id: 2,
        name: 'Guatemala',
        image: '/guatemala.jpg',
        region: 'Guatemala, Sao Paolo' 
      },
      {
        id: 3,
        name: 'Ethiopia',
        image: '/guatemala.jpg',
        region: 'Ethiopia, Sao Paolo' 
      },
      {
        id: 4,
        name: 'Kenya',
        image: '/guatemala.jpg',
        region: 'Kenya, Sao Paolo' 
      },
  ] 

  return (
    <div className='bg-primary py-24 max-md:px-5'>
          <div className='container mx-auto'>
              <SectionHeading title="Our Farms" color='third' />
          </div>
        <div className='container mx-auto rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-8'>
              { data.map((item, index) => (
                  <div key={index} className='col-span-1'>
                    <Link href={`/farm/${item.id}`}>
                      <FarmCard data={item} />
                    </Link>
                  </div>
              )) }
          </div>
        </div>
      </div>
  )
}

export default FarmsSection