import SectionHeading from '@/components/reusable/SectionHeading'
import { CpuIcon, CupSoda, Factory, Leaf, Package, Truck } from 'lucide-react'
import React from 'react'

interface Props {
  data: Array<{
    title: string,
    description: string
  }>
}

function CoffeeJourney({ data }: Props) {
  return (
    <section className="bg-third py-24 px-5">
          <SectionHeading title='The Coffee Journey' align='center' />

          <div className="relative pt-8 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full"></div>

            {/* Step 1: Sourcing */}
            { data[0] && <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">1. { data[0].title } </h3>
                <p className="text-primary/80 text-base">{ data[0].description }</p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Leaf className="w-10 h-10 text-third" />
              </div>
            </div>}

            {/* Step 2: Roasting */}
            { data[1] && <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start relative group">
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Factory className="w-10 h-10 text-third" />
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">2. { data[1].title }</h3>
                <p className="text-primary/80 text-base">{ data[1].description }</p>
              </div>
            </div>}

            {/* Step 3: Grinding */}
            { data[2] && <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">3. { data[2].title }</h3>
                <p className="text-primary/80 text-base">{ data[2].description }</p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Package className="w-10 h-10 text-third" />
              </div>
            </div>}

            {/* Step 4: Brewing */}
            { data[3] && <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start relative group">
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <Truck className="w-10 h-10 text-third" /> {/* Using Truck as a placeholder for brewing process */}
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">4. { data[3].title }</h3>
                <p className="text-primary/80 text-base">{ data[3].description }</p>
              </div>
            </div>}

            {/* Step 5: Enjoyment */}
            { data[4] && <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end md:text-right relative group">
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold text-primary mb-2">5. { data[4].title }</h3>
                <p className="text-primary/80 text-base">{ data[4].description }</p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md  ">
                <CupSoda className="w-10 h-10 text-third" />
              </div>
            </div>}
          </div>
        </section>
  )
}

export default CoffeeJourney