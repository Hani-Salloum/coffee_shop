import AddReviewForm from "@/components/other/AddReviewForm";
import ItemReviews from "@/components/other/ItemReviews";
import { Review } from "@/types/review";
import React from "react";

interface Props {
  itemId: string;
  reviews: Array<Review>;
}

function ReviewSection({ itemId, reviews }: Props) {
  return (
    <section className="py-20 px-5">
      <AddReviewForm itemId={itemId} />
      <ItemReviews reviews={reviews} />
    </section>
  );
}

export default ReviewSection;
