import { getCollections } from '@/lib/cosmic'
import CollectionSection from '@/components/CollectionSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections - E-Commerce Product Showcase',
  description: 'Explore our curated collections of premium products',
}

export default async function CollectionsPage() {
  const collections = await getCollections()

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Our Collections
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Explore our curated collections of premium products
        </p>
      </div>
      
      {collections && collections.length > 0 ? (
        <CollectionSection collections={collections} />
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">
            No collections available at the moment.
          </p>
        </div>
      )}
    </div>
  )
}