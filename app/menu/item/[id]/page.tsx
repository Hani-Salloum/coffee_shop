import React from 'react'

export default async function SingleItem({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

  return (
    <div>item: { id }</div>
  )
}