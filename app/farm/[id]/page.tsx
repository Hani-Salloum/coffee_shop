//@ts-nocheck
import { getFarmById } from '@/actions/farm'
import FarmPage from '@/sections/farm/FarmPageView'
import React, { Fragment } from 'react'

const getData = async (id: string) => {
  const res = await getFarmById(id)

  return res.data
}

export default async function SingleFarm({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const data = await getData(id)

  return (
    <Fragment>
      <FarmPage data={data} />
    </Fragment>
  )
}