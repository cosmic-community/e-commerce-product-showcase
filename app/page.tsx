import { getProducts, getCollections } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import CollectionSection from '@/components/CollectionSection'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections(),
  ])

  return (
    <div className="space-y-16">
      <Hero />
      
      {collections && collections.length > 0 && (
        <section className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Shop by Collection
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Discover our curated collections of premium products
            </p>
          </div>
          <CollectionSection collections={collections} />
        </section>
      )}
      
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore our selection of high-quality products
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
      </section>
    </div>
  )
}