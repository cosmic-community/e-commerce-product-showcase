import { Review } from '@/types'
import ReviewCard from '@/components/ReviewCard'

interface ProductReviewsProps {
  reviews: Review[]
  productName: string
}

export default function ProductReviews({ reviews, productName }: ProductReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Customer Reviews
        </h2>
        <div className="text-center py-8">
          <p className="text-secondary">
            No reviews yet for {productName}. Be the first to review!
          </p>
        </div>
      </section>
    )
  }

  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => {
    return sum + parseInt(review.metadata.rating.key)
  }, 0)
  const averageRating = totalRating / reviews.length
  const roundedRating = Math.round(averageRating * 10) / 10

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          Customer Reviews
        </h2>
        <div className="text-right">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${index < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-sm text-secondary">
              {roundedRating} out of 5 ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}