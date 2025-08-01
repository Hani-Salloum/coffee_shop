import AddReviewForm from '@/components/other/AddReviewForm'
import ItemReviews from '@/components/other/ItemReviews'
import SectionHeading from '@/components/reusable/SectionHeading'
import { Review } from '@/types/review'
import React from 'react'

interface Props {
    itemId: string,
    reviews: Array<Review>
}

function ReviewSection({ itemId, reviews }: Props) {
  return (
    <section className="py-20 px-5">

          {/* Add a Review Form */}
          <AddReviewForm  itemId={itemId} />

          <SectionHeading title='What our customers say ...' className='mt-16' />

          {/* Display Existing Reviews */}
          <ItemReviews reviews={reviews} />

        </section>
  )
}

export default ReviewSection