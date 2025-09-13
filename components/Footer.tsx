import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Store</h3>
            <p className="text-secondary">
              Premium products for modern living. Built with Cosmic CMS.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-secondary hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-secondary hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-secondary hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-secondary hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-border">
          <p className="text-center text-secondary">
            © 2024 E-Commerce Store. Built with Cosmic CMS.
          </p>
        </div>
      </div>
    </footer>
  )
}