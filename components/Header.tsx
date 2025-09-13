import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Store
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-secondary hover:text-foreground transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-secondary hover:text-foreground transition-colors font-medium"
              >
                Products
              </Link>
              <Link 
                href="/collections" 
                className="text-secondary hover:text-foreground transition-colors font-medium"
              >
                Collections
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="btn-primary">
              Shop Now
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 pt-2 border-t border-border">
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-secondary hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-secondary hover:text-foreground transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/collections" 
              className="text-secondary hover:text-foreground transition-colors font-medium"
            >
              Collections
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}