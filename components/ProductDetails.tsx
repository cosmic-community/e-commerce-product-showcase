import { Product } from '@/types'
import Link from 'next/link'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const hasComparePrice = product.metadata.compare_at_price && product.metadata.compare_at_price > product.metadata.price
  const collection = typeof product.metadata.collection === 'object' ? product.metadata.collection : null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Images */}
      <div className="space-y-4">
        {product.metadata.product_images && product.metadata.product_images.length > 0 ? (
          <>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`${product.metadata.product_images[0].imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={product.metadata.name}
                width="400"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.metadata.product_images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.metadata.product_images.slice(1, 5).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-md">
                    <img
                      src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={`${product.metadata.name} ${index + 2}`}
                      width="100"
                      height="100"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
            <span className="text-secondary">No images available</span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {product.metadata.name}
          </h1>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-foreground">
              ${product.metadata.price}
            </span>
            {hasComparePrice && (
              <>
                <span className="text-lg text-secondary line-through">
                  ${product.metadata.compare_at_price}
                </span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">
                  Save ${product.metadata.compare_at_price - product.metadata.price}
                </span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              product.metadata.in_stock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
            
            {product.metadata.sku && (
              <span className="text-secondary text-sm">
                SKU: {product.metadata.sku}
              </span>
            )}
          </div>
        </div>
        
        {product.metadata.description && (
          <div className="prose prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
          </div>
        )}
        
        {collection && (
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-secondary mb-2">Collection</h3>
            <Link 
              href={`/collections/${collection.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              {collection.metadata.name}
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
        
        <div className="space-y-3">
          <button 
            className="w-full btn-primary py-3 text-lg"
            disabled={!product.metadata.in_stock}
          >
            {product.metadata.in_stock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button className="w-full btn-secondary py-3">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}