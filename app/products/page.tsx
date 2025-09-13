import { getProducts } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Products - E-Commerce Product Showcase',
  description: 'Browse our complete collection of premium products',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          All Products
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Browse our complete collection of premium products
        </p>
      </div>
      
      {products && products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">
            No products available at the moment.
          </p>
        </div>
      )}
    </div>
  )
}