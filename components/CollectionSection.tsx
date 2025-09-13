import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionSectionProps {
  collections: Collection[]
}

export default function CollectionSection({ collections }: CollectionSectionProps) {
  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary text-lg">No collections available</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collections.map((collection) => (
        <Link 
          key={collection.id}
          href={`/collections/${collection.slug}`} 
          className="group"
        >
          <article className="card overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-video overflow-hidden">
              {collection.metadata.featured_image ? (
                <img
                  src={`${collection.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                  alt={collection.metadata.name}
                  width="400"
                  height="200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-secondary">No image</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {collection.metadata.name}
              </h3>
              {collection.metadata.description && (
                <p className="text-secondary line-clamp-2">
                  {collection.metadata.description}
                </p>
              )}
              <div className="mt-4 flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                Explore Collection
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}