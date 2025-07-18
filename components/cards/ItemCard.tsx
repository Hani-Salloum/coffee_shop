import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Item } from '@/types/item'

interface ItemCardProps {
  layout: 'overlay' | 'default' | '' ,
  data: Item
}

function ItemCard({ layout, data }: ItemCardProps ) {
  const { name, price, rate, categories, image } = data

  const overlayStyle = (
    <Card className="p-0 w-full max-w-md mx-auto bg-[#e7dbcf] border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <CardContent className="p-0">
      <div className="relative h-72">
        <div className='relative w-full h-full'>
          <Image src={'/hero_img.jpeg'} alt={name} fill objectFit='cover' />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/20" />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 fill-[#caa378] text-[#caa378]" />
            <span className="text-sm font-medium">{rate}</span>
            <span className="text-xs opacity-80">(128 reviews)</span>
          </div>

          <h3 className="text-2xl font-bold mb-3">{name}</h3>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 2).map((category, index) => (
                <Badge
                  key={index}
                  className="bg-white/20 text-white hover:bg-white/30 text-xs px-3 py-1 rounded-full border-none"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <span className="text-2xl font-bold">${price}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  )
  return overlayStyle
}

export default ItemCard