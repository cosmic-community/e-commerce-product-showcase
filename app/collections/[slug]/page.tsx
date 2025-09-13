// app/collections/[slug]/page.tsx
import { getCollection, getProductsByCollection } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'
import type { Metadata } from 'next'

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = await getCollection(slug)
  
  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }
  
  return {
    title: `${collection.metadata.name} - E-Commerce Product Showcase`,
    description: collection.metadata.description || `Shop ${collection.metadata.name} collection`,
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = await getCollection(slug)
  
  if (!collection) {
    notFound()
  }
  
  const products = await getProductsByCollection(collection.id)
  
  return (
    <div className="container py-12">
      <div className="mb-12">
        {collection.metadata.featured_image && (
          <div className="mb-8">
            <img
              src={`${collection.metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={collection.metadata.name}
              width="1200"
              height="400"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {collection.metadata.name}
          </h1>
          {collection.metadata.description && (
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {collection.metadata.description}
            </p>
          )}
        </div>
      </div>
      
      {products && products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">
            No products available in this collection.
          </p>
        </div>
      )}
    </div>
  )
}