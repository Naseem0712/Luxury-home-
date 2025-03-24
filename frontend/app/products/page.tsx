import Image from 'next/image';
import Link from 'next/link';

const productCategories = [
  {
    id: 'staircases',
    name: 'Staircases',
    description: 'Elegant and customized staircases crafted from the finest materials.',
    image: '/images/categories/staircases.jpg',
    items: 24
  },
  {
    id: 'doors',
    name: 'Doors',
    description: 'Handcrafted doors that make a statement in any luxury home.',
    image: '/images/categories/doors.jpg',
    items: 36
  },
  {
    id: 'gates',
    name: 'Gates',
    description: 'Security combined with artistic elegance for home entrances.',
    image: '/images/categories/gates.jpg',
    items: 18
  },
  {
    id: 'glass-elements',
    name: 'Glass Elements',
    description: 'Custom glass installations that transform spaces with light and artistry.',
    image: '/images/categories/glass.jpg',
    items: 15
  },
  {
    id: 'railings',
    name: 'Railings',
    description: 'Meticulously designed railings that balance safety and style.',
    image: '/images/categories/railings.jpg',
    items: 29
  },
  {
    id: 'fixtures',
    name: 'Fixtures',
    description: 'Unique luxury fixtures that add the perfect finishing touch.',
    image: '/images/categories/fixtures.jpg',
    items: 42
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our curated collections of luxury architectural elements, handcrafted by world-class artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for real images */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">{category.name} Image</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <span className="text-sm text-gray-500">{category.items} items</span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  href={`/products/${category.id}`}
                  className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
                <p className="text-gray-600 mb-6">
                  Our artisans specialize in creating bespoke architectural elements tailored to your exact specifications and design vision.
                </p>
                <Link
                  href="/custom-design"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
                >
                  Request Custom Design
                </Link>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500 text-lg">Custom Design Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 