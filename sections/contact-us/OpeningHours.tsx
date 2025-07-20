import SectionHeading from '@/components/reusable/SectionHeading'
import { Clock, Coffee } from 'lucide-react'
import React from 'react'

function OpeningHours() {
  return (
    <section className="bg-primary text-white py-24 px-5">
      <SectionHeading title='A Warm Welcome Awaits' color='white' align='center' />
    <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12">
      Step into The Koffee Room and experience a haven where rich aromas meet cozy ambiance. Whether you're
      starting your day, catching up with friends, or finding a quiet spot to work, we're here to make your visit
      special.
    </p>
    <div className="mt-20 container grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
      <div className='text-center'>
        <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center justify-center gap-3">
          <Clock className="w-6 h-6" /> Our Hours
        </h3>
        <ul className="space-y-2 text-lg">
          <li>
            <span className="font-semibold">Monday - Friday:</span> 7:00 AM - 6:00 PM
          </li>
          <li>
            <span className="font-semibold">Saturday:</span> 8:00 AM - 5:00 PM
          </li>
          <li>
            <span className="font-semibold">Sunday:</span> 9:00 AM - 4:00 PM
          </li>
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