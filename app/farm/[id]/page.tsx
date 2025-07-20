import React from 'react'

export default async function SingleFarm({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

  return (
    <div>farm: { id }</div>
  )
}