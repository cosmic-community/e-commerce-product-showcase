# E-Commerce Product Showcase

![App Preview](https://imgix.cosmicjs.com/43548f40-90de-11f0-bcbd-9176d0adbb08-photo-1505740420928-5e560c06d30e-1757794473233.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce website built with Next.js 15 and Cosmic CMS. Features product browsing, detailed product pages, customer reviews, and collection-based navigation with a clean, minimalist design.

## Features

- 🛍️ **Dynamic Product Catalog** - Browse products with detailed information, pricing, and images
- 📦 **Collection-Based Navigation** - Explore products organized by collections
- ⭐ **Customer Review System** - Display authentic reviews with star ratings
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **Performance Optimized** - Fast loading with Next.js 15 App Router
- 🎨 **Modern Design** - Clean, minimalist interface with smooth animations
- 🔍 **SEO Ready** - Proper meta tags and structured data

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c5d0250a2eeaef39f42c41&clone_repository=68c5d1910a2eeaef39f42c62)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for "Design a content model for an e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun installed on your system
- A Cosmic account and bucket

### Installation

1. Install dependencies:
```bash
bun install
```

2. Set up environment variables:
Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with collection data
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const products = response.objects
```

### Fetching Reviews for a Product
```typescript
// Get reviews for a specific product
const response = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const reviews = response.objects
```

## Cosmic CMS Integration

This application integrates with three main content types in your Cosmic bucket:

### Products
- **Name**: Product display name
- **Description**: Rich HTML product description
- **Price**: Product price in dollars
- **Compare At Price**: Original/sale price (optional)
- **SKU**: Stock keeping unit
- **Product Images**: Gallery of product photos
- **In Stock**: Availability status
- **Collection**: Associated product collection

### Collections
- **Name**: Collection display name
- **Description**: Collection description
- **Featured Image**: Collection banner image

### Reviews
- **Customer Name**: Reviewer's name
- **Rating**: 1-5 star rating system
- **Review Text**: Customer feedback
- **Product**: Associated product (object relationship)
- **Verified Purchase**: Verification badge

## Deployment Options

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command to `bun run build`
3. Set publish directory to `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for future features)

<!-- README_END -->