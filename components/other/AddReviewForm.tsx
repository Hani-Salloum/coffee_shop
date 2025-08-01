'use client'

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReview } from "@/actions/review";
import { Review } from "@/types/review";
import { toast } from "react-toastify";
import { Label } from "../ui/label";
import { HInput } from "../reusable/Input";
import { Textarea } from "../ui/textarea";
import Button from "../reusable/Button";

const schema = z.object({
    email: z.email('Email is required'),
    description: z.string().min(20, "Description must be at least 20 characters"),
})
  
type FD = z.infer<typeof schema>

interface Props {
    itemId: string
}

function AddReviewForm({ itemId }: Props) {
    const [rate, setRate] = useState(0)
  const [hoverRate, setHoverRate] = useState(0)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          email: '',
          description: '',
        },
      })
    
      const onSubmit = async (data: FD) => {
        try {
            const res = await addReview({...data, rate, item_id: Number(itemId)} as Review)
            if(res.error) {
              toast.error(res.error)
            } else {
              toast.success('Your Review is submitted successfully')
            }
            reset()
        } catch (error) {
            toast.error('Something went wrong')
        }
      };

  return (
    <Card className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border-0 mb-8">
      <CardContent className="p-0">
        <h3 className="text-3xl font-bold text-primary text-center mb-8">
          Share Your Experience
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Star Rating Input */}
          <div>
            <Label
              htmlFor="review-rate"
              className="block text-lg  text-primary mb-3"
            >
              Your Rating
            </Label>
            <div
              className="flex items-center gap-1"
              role="radiogroup"
              aria-label="Star rating"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "w-8 h-8 cursor-pointer transition-colors",
                    hoverRate >= star || rate >= star
                      ? "fill-secondary text-secondary"
                      : "text-gray-300"
                  )}
                  onMouseEnter={() => setHoverRate(star)}
                  onMouseLeave={() => setHoverRate(rate)}
                  onClick={() => setRate(star)}
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  role="radio"
                  aria-checked={rate === star}
                />
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div>
          <HInput
                        label='Your Email'
                        placeholder='you@example.com'
                        className='w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors'
                        {...register("email")}
                        error={errors.email ? errors.email.message : ''}
                    />
          </div>

          {/* Description Textarea */}
          <div>
            <Label
              htmlFor="review-description"
              className="block text-lg text-primary mb-3"
            >
              Your Review
            </Label>
            <Textarea
                id="form-message"
                placeholder="Tell us about your experience with this item..."
                rows={10}
                { ...register('description') }
                className="w-full border mb-3 border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-y"
              />
              {errors.description && errors.description.message && <p className="text-sm text-red-500 bg-third py-1 px-2 rounded-3xl w-fit">{errors.description.message}</p>}
              {/* className="w-full border border-[#e7dbcf] rounded-xl px-4 py-3 bg-white text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors resize-y" */}
          </div>

          <div className="flex justify-end mt-8">
            <Button text='Submit Review' type='submit' />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddReviewForm;
