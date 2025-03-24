import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LuxHome</h3>
            <p className="text-gray-300 text-sm">
              Exceptional craftsmanship for exceptional homes. Discover handcrafted luxury architectural elements created by the finest artisans.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/staircases" className="text-gray-300 hover:text-white text-sm">
                  Staircases
                </Link>
              </li>
              <li>
                <Link href="/products/doors" className="text-gray-300 hover:text-white text-sm">
                  Doors
                </Link>
              </li>
              <li>
                <Link href="/products/gates" className="text-gray-300 hover:text-white text-sm">
                  Gates
                </Link>
              </li>
              <li>
                <Link href="/products/glass-elements" className="text-gray-300 hover:text-white text-sm">
                  Glass Elements
                </Link>
              </li>
              <li>
                <Link href="/products/custom" className="text-gray-300 hover:text-white text-sm">
                  Custom Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="text-gray-300 hover:text-white text-sm">
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} LuxHome. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center text-gray-400">
                <FiMail className="h-5 w-5 mr-2" />
                <span className="text-sm">contact@luxhome.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 