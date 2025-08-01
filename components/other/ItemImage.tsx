import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { baseURL } from '@/utils/axios'

interface Props {
  name: string
  price: number
  sizes?: Array<string>
  categories: Array<string>
  rate: number
  image: string
  number_rating: number
}

function ItemImage({ name, price, sizes, categories, rate, image, number_rating }: Props) {
  const imagePath = baseURL + image

  return (
    <div className='bg-third py-24 px-5'>
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-secondary p-2">
              <div className='w-full h-[345px] rounded-3xl overflow-hidden relative'>
                <Image src={imagePath || "/placeholder.svg"} alt={name} fill objectFit='cover' />
              </div>
            </div>

            {/* Details Column */}
            <div className="bg-secondary p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-third leading-tight">{name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary">${Number(price).toFixed(2)}</span>
                <div className="flex items-center gap-1 text-primary/80">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(rate) ? "fill-primary text-primary" : "text-primary"
                      }`}
                    />
                  ))}
                  <span className="font-semibold text-lg">{rate} / 5</span>
                  <span className="text-sm text-primary/60">({number_rating} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    className="bg-third/60 text-primary hover:bg-third  text-sm px-3 py-1.5 rounded-full"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              { sizes && <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Available Sizes:</h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size, index) => (
                    <Badge
                    key={index}
                    className="border-third text-primary hover:bg-third hover:text-primary rounded-full px-5 py-2 bg-transparent"
                  >
                    {size}
                  </Badge>
                  ))}
                </div>
              </div>}
            </div>
          </section>
    </div>
  )
}

export default ItemImage