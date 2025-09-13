import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata.product_images?.[0]
  const hasComparePrice = product.metadata.compare_at_price && product.metadata.compare_at_price > product.metadata.price

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <article className="card overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="aspect-square overflow-hidden">
          {firstImage ? (
            <img
              src={`${firstImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={product.metadata.name}
              width="300"
              height="300"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-secondary text-sm">No image</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {product.metadata.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-foreground">
              ${product.metadata.price}
            </span>
            {hasComparePrice && (
              <span className="text-sm text-secondary line-through">
                ${product.metadata.compare_at_price}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-1 rounded-full ${
              product.metadata.in_stock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
            
            {product.metadata.sku && (
              <span className="text-xs text-secondary">
                SKU: {product.metadata.sku}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}