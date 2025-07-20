import SectionHeading from '@/components/reusable/SectionHeading'
import { CpuIcon, CupSoda, Factory, Leaf, Package, Truck } from 'lucide-react'
import React from 'react'

function CoffeeJourney() {
  return (
    <section className="bg-third py-24 px-5">
          <SectionHeading title='The Coffee Journey' align='center' />

          <div className="relative pt-8 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full"></div>

            {/* Step 1: Sourcing */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">1. Ethical Sourcing</h3>
                <p className="text-primary/80 text-base">
                  We partner directly with sustainable farms, ensuring fair wages and high-quality beans from the start.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Leaf className="w-10 h-10 text-third" />
                {/* <img
                  src={ || "/placeholder.svg"}
                  alt="Coffee Beans"
                  className="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                /> */}
              </div>
            </div>

            {/* Step 2: Roasting */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start relative group">
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Factory className="w-10 h-10 text-third" />
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">2. Expert Roasting</h3>
                <p className="text-primary/80 text-base">
                  Our beans are carefully roasted in small batches to unlock their unique flavor profiles.
                </p>
              </div>
            </div>

            {/* Step 3: Grinding */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">3. Precision Grinding</h3>
                <p className="text-primary/80 text-base">
                  Each blend is ground to perfection, ensuring the ideal consistency for optimal extraction.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Package className="w-10 h-10 text-third" />
              </div>
            </div>

            {/* Step 4: Brewing */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start relative group">
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Truck className="w-10 h-10 text-third" /> {/* Using Truck as a placeholder for brewing process */}
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">4. Masterful Brewing</h3>
                <p className="text-primary/80 text-base">
                  Our skilled baristas craft each drink with precision, bringing out the best in every bean.
                </p>
              </div>
            </div>

            {/* Step 5: Enjoyment */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">5. Your Perfect Cup</h3>
                <p className="text-primary/80 text-base">
                  Finally, the moment of enjoyment. Savor the rich aromas and exquisite flavors in every sip.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <CupSoda className="w-10 h-10 text-third" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default CoffeeJourney