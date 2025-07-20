import ItemCard from '@/components/cards/ItemCard'
import Button from '@/components/reusable/Button'
import SectionHeading from '@/components/reusable/SectionHeading'
import Image from 'next/image'
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
    <>
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
      <div className='bg-third py-24 max-md:px-5'>
        <div className='container mx-auto flex justify-between items-center gap-8 flex-col md:flex-row'>
          <div className='basis-[48%] self-stretch min-h-[300px] rounded-4xl overflow-hidden relative'>
              <Image src={'/coffee_shop.jpg'} alt='menu img' fill objectFit='cover' /> 
          </div>
          <div className='basis-[48%] rounded-4xl overflow-hidden relative text-center p-20 bg-secondary'>
            <h2 className='text-primary text-3xl font-semibold tracking-wide'>What's in menu</h2>
            <p className='mt-5 mb-8 text-primary text-lg leading-6'>Retingiush your caffine thirst with the most premium caffine you can drain</p>
            <Button text='See Our Menu' href='/menu'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodayPicks