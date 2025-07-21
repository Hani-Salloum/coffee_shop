import { Leaf } from 'lucide-react'
import React from 'react'

interface Props {
  ingredients: Array<string>
  description: string
}

function ItemDescription({ ingredients, description }: Props) {
  return (
    <div className='bg-third pb-24 px-5'>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">About This Product</h2>
              <p className="text-lg text-primary/80 leading-relaxed">{description}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">What's Inside</h2>
              <ul className="space-y-4">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-primary">
                    <Leaf className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
    </div>
  )
}

export default ItemDescription