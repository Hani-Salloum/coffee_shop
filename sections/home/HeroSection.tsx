import Button from '@/components/reusable/Button'
import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className='bg-primary py-24 px-5 h-[calc(100vh-60px)] flex '>
      <div className='container mx-auto bg-third rounded-[40px] overflow-hidden flex justify-between items-center gap-3 flex-col md:flex-row'>
        <div className='p-20'>
          <h2 className='text-primary text-3xl font-semibold tracking-wide'>Premium dose of kaffine</h2>
          <p className='mt-5 mb-8 text-primary text-lg leading-6'>Retingiush your caffine thirst with the most premium caffine you can drain</p>
          <Button text='See Our Menu' prependIcon='lucide:chevron-right' href='/menu'/>
        </div>
        <div className='self-end basis-1/2 flex justify-center pb-0 items-end md:justify-end'> 
          <Image src={'/hero_img.jpeg'} alt='cups' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection