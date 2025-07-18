import ItemCard from '@/components/cards/ItemCard'
import SectionHeading from '@/components/reusable/SectionHeading'
import React from 'react'

function TodayPicks() {
    const itemData = {
        id: 1,
        name: "Premium Espresso Blend",
        price: 24.99,
        rate: 4.8,
        categories: ["Premium", "Espresso", "Organic"],
        image: '/hero_img.jpeg'
      }
    
    const data = [ itemData, itemData, itemData ]

  return (
    <div className='bg-secondary py-24 max-md:px-5'>
        <div className='container mx-auto'>
            <SectionHeading title="Today's Picks" />
        </div>
      <div className='container mx-auto rounded-[40px] overflow-hidden flex justify-between items-center gap-3 flex-col md:flex-row'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8'>
            { data.map((item, index) => (
                <div key={index} className='col-span-1'>
                    <ItemCard layout='overlay' data={item} />
                </div>
            )) }
        </div>
      </div>
    </div>
  )
}

export default TodayPicks