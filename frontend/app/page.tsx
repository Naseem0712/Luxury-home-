import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full bg-gray-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Luxury Interior" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Exceptional Craftsmanship for Exceptional Homes</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover handcrafted luxury architectural elements created by the world's finest artisans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition"
            >
              Explore Collection
            </Link>
            <Link 
              href="/custom-design" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition"
            >
              Request Custom Design
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Staircases', 'Doors', 'Gates', 'Glass Elements'].map((category) => (
              <div key={category} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
                <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:opacity-30 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category}</h3>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link 
                    href={`/products/${category.toLowerCase().replace(' ', '-')}`}
                    className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 w-full bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exceptional Artisans',
                description: 'We partner with the world's most skilled craftspeople who create truly unique pieces.'
              },
              {
                title: 'Custom Design',
                description: 'Work directly with artisans to create bespoke elements perfectly suited to your space.'
              },
              {
                title: 'Premium Materials',
                description: 'Only the finest materials are used, ensuring beauty and longevity for generations.'
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-lg shadow text-center">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 