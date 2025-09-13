import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-muted to-background">
      <div className="container py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Premium Products for Modern Living
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Discover our curated collection of high-quality products designed to enhance your lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">
              Shop Now
            </Link>
            <Link href="/collections" className="btn-secondary text-lg px-8 py-3">
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}