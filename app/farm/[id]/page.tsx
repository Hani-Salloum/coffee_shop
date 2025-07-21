import FarmPage from '@/sections/farm/FarmPageView'
import React, { Fragment } from 'react'

export default async function SingleFarm({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

  return (
    <Fragment>
      <FarmPage />
    </Fragment>
  )
}