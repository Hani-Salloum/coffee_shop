import SectionHeading from '@/components/reusable/SectionHeading'
import { Clock, Coffee } from 'lucide-react'
import React from 'react'

interface Props {
  data: {
    title: string
    description: string
    our_hours: Array<{
      day: string,
      hours: string
    }>
  }
}

function OpeningHours({ data }: Props) {
  const { title, description, our_hours } = data

  return (
    <section className="bg-primary text-white py-24 px-5">
      <SectionHeading title={title} color='white' align='center' />
    <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12">
      { description }
    </p>
    <div className="mt-20 container grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
      <div className='text-center'>
        <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center justify-center gap-3">
          <Clock className="w-6 h-6" /> Our Hours
        </h3>
        <ul className="space-y-2 text-lg">
          { our_hours.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{ item.day }:</span> { item.hours }
            </li>
          )) }
        </ul>
      </div>
      <div className='text-center'>
        <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center justify-center gap-3">
          <Coffee className="w-6 h-6" /> What We Offer
        </h3>
        <ul className="space-y-2 text-lg">
          <li>Freshly Roasted Beans</li>
          <li>Artisan Pastries & Snacks</li>
          <li>Cozy Seating & Free Wi-Fi</li>
          <li>Friendly Baristas</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default OpeningHours