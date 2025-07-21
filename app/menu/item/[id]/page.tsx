import MainItemSection from '@/sections/menu/item/MainItemSection'
import RelatedItemsSection from '@/sections/menu/item/RelatedItemsSection'
import React, { Fragment } from 'react'

export default async function SingleItem({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

    const coffeeItemData = {
      id: 1,
      name: "Refreshing Ice Latte",
      image: "/hero_img.jpeg", // Adjusted image size for contained display
      price: 6.5,
      ingredients: ["Freshly Brewed Espresso", "Cold Milk", "Ice Cubes", "Optional Syrup"],
      rate: 4.7,
      sizes: ["Small", "Medium", "Large"],
      categories: ["Iced Coffee", "Espresso", "Refreshing", "Dairy"],
      related_items: [
        {
          id: 1,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: ["Premium", "Espresso", "Organic"],
          image: '/hero_img.jpeg'
        },
        {
          id: 2,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: ["Premium", "Espresso", "Organic"],
          image: '/hero_img.jpeg'
        },
        {
          id: 3,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: ["Premium", "Espresso", "Organic"],
          image: '/hero_img.jpeg'
        },
        {
          id: 4,
          name: "Premium Espresso Blend",
          price: 24.99,
          rate: 4.8,
          categories: ["Premium", "Espresso", "Organic"],
          image: '/hero_img.jpeg'
        },
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
    </Fragment>
  )
}