import ItemDescription from '@/components/other/ItemDescription'
import ItemImage from '@/components/other/ItemImage'
import ItemOriginStory from '@/components/other/ItemOriginStory'
import Button from '@/components/reusable/Button'
import { Badge } from '@/components/ui/badge'
import { Item } from '@/types/item'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React, { Fragment } from 'react'

interface Props {
  data: Item
}

function MainItemSection({ data }: Props) {
  return (
    <Fragment>
      <ItemImage image={data.image} name={data.name} price={data.price} rate={data.rate} categories={data.categories} sizes={data.sizes} />
      <ItemDescription ingredients={data.ingredients ?? []} description={data.description ?? ''} />
      <ItemOriginStory origin_story={data.origin_story} />
    </Fragment>
  )
}

export default MainItemSection