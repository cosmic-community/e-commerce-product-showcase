// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductDetails from '@/components/ProductDetails'
import ProductReviews from '@/components/ProductReviews'
import type { Metadata } from 'next'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }
  
  return {
    title: `${product.metadata.name} - E-Commerce Product Showcase`,
    description: product.metadata.description || `Shop ${product.metadata.name} at our store`,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    notFound()
  }
  
  const reviews = await getProductReviews(product.id)
  
  return (
    <div className="container py-8">
      <ProductDetails product={product} />
      <div className="mt-16">
        <ProductReviews reviews={reviews} productName={product.metadata.name} />
      </div>
    </div>
  )
}