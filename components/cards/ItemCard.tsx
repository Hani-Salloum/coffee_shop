import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Item } from '@/types/item'
import Link from 'next/link'
import { baseURL } from '@/utils/axios'

interface ItemCardProps {
  layout?: 'overlay' | 'default' | '' ,
  data: Item
}

function ItemCard({ layout, data }: ItemCardProps ) {
  const { name, price, rate, categories, image } = data
  const imagePath = baseURL + image

  const OverlayStyle = () => (
    <Card className="p-0 w-full max-w-md mx-auto bg-[#e7dbcf] border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <CardContent className="p-0">
      <div className="relative h-72">
        <div className='relative w-full h-full'>
          <Image src={imagePath} alt={name} fill objectFit='cover' />
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

  const DefaultStyle = () => (
    <Card className="p-0 w-full max-w-md mx-auto bg-gradient-to-br from-white to-white border-none shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0 relative">
        <div className="h-52 overflow-hidden rounded-t-3xl">
          <div className='w-full h-full relative'>
            <Image src={imagePath || "/placeholder.svg"} alt={name} fill objectFit='cover' />
          </div>
        </div>

        {/* Floating rating badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#caa378] text-[#caa378]" />
            <span className="text-sm font-semibold text-primary">{rate}</span>
          </div>
        </div>

        {/* Floating price tag */}
        <div className="absolute -bottom-4 right-6 bg-primary text-third px-4 py-3 rounded-2xl shadow-lg">
          <span className="text-lg font-bold">${price}</span>
        </div>

        <div className="p-6 pb-10">
          <h3 className="text-xl font-bold text-primary mb-4">{name}</h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs px-3 py-1 rounded-full border-none"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
  return (
    <Link href={`/menu/item/${data.id}`}>
      { layout === 'overlay' ? <OverlayStyle /> : <DefaultStyle /> }
    </Link>
  )
}

export default ItemCard