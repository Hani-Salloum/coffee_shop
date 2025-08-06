//@ts-nocheck

import { getItemById } from '@/actions/item'
import MainItemSection from '@/sections/menu/item/MainItemSection'
import RelatedItemsSection from '@/sections/menu/item/RelatedItemsSection'
import ReviewSection from '@/sections/menu/item/ReviewSection'
import React, { Fragment } from 'react'

const getData = async (id: string) => {
  const res = await getItemById(id)
  return res.data
}

export default async function SingleItem({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    // const coffeeItemData = await getData(id)

    const coffeeItemData = {
      id: 1,
      name: "Refreshing Ice Latte",
      image: "/hero_img.jpeg", // Adjusted image size for contained display
      price: 6.5,
      ingredients: [{id: 1, name: "Freshly Brewed Espresso"}, {id: 2, name: "Cold Milk"}, {id: 3, name: "Ice Cubes"}, {id: 4, name: "Optional Syrup"}],
      rate: 4.7,
      sizes: [{ id: 1, name: 'Small' }, { id: 2, name: 'Medium' }, { id: 3, name: 'Large' }],
      categories: [{id: 1, name: "Iced Coffee"}, {id: 2, name: "Espresso"}, {id: 3, name: "Dairy"}],
      // categories: ["Iced Coffee", "Espresso", "Refreshing", "Dairy"],
      related_items: [
        {
          id: 1,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: [{id: 1, name: "Premium"}, {id: 2, name: "Espresso"}, {id: 3, name: "Organic"}],
          image: '/hero_img.jpeg'
        },
        {
          id: 2,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: [{id: 1, name: "Premium"}, {id: 2, name: "Espresso"}, {id: 3, name: "Organic"}],
          image: '/hero_img.jpeg'
        },
        {
          id: 3,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: [{id: 1, name: "Premium"}, {id: 2, name: "Espresso"}, {id: 3, name: "Organic"}],
          image: '/hero_img.jpeg'
        },
        {
          id: 4,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: [{id: 1, name: "Premium"}, {id: 2, name: "Espresso"}, {id: 3, name: "Organic"}],
          image: '/hero_img.jpeg'
        },
      ],
      reviews: [
        { id: 1, email: 'hani2003s@gmail.com', rate: 4, description: 'Very Good' },
        { id: 2, email: 'test@gmail.com', rate: 2, description: 'Not Very Good' },
      ],
      description:
        "Our refreshing Ice Latte is the perfect pick-me-up for any time of day. Crafted with our signature espresso, chilled milk, and a generous amount of ice, it offers a smooth, creamy, and invigorating experience. Customize it with your favorite syrup for an extra touch of sweetness. It's an ideal choice for those seeking a cool and delightful coffee moment.",
      origin_story:
        "While the concept of iced coffee has existed for centuries, the modern Ice Latte gained widespread popularity in the late 20th century as global coffee culture evolved. Our version pays homage to this rich history, focusing on high-quality espresso and fresh dairy (or non-dairy) to create a perfectly balanced and consistently delicious cold beverage. It's a testament to our commitment to offering diverse and delightful coffee experiences, blending tradition with contemporary tastes.",
    }

  return (
    <Fragment>
      <MainItemSection data={coffeeItemData} />
      <RelatedItemsSection data={coffeeItemData.related_items} />
      <ReviewSection itemId={id} reviews={coffeeItemData?.reviews} />
    </Fragment>
  )
}