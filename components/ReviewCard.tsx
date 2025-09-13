import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata.rating.key)

  return (
    <article className="card p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {review.metadata.customer_name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-foreground">
              {review.metadata.customer_name}
            </h3>
            {review.metadata.verified_purchase && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Verified Purchase
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
              {review.metadata.rating.value}
            </span>
          </div>
          
          {review.metadata.review_text && (
            <p className="text-foreground leading-relaxed">
              {review.metadata.review_text}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}