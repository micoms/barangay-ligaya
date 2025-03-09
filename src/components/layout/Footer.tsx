import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Contact Us</h3>
            <p className="mb-2">Barangay Ligaya</p>
            <p className="mb-2">Gabaldon, Nueva Ecija</p>
            <p className="mb-2">Philippines</p>
            <p className="mb-2">Email: barangayligaya@example.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300 transition duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/officials" className="hover:text-yellow-300 transition duration-200">
                  Officials
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-300 transition duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-yellow-300 transition duration-200">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Office Hours</h3>
            <p className="mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="mb-2">Saturday: 8:00 AM - 12:00 PM</p>
            <p className="mb-2">Sunday: Closed</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-yellow-300">Emergency Hotline</h4>
              <p>09123456789</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Barangay Ligaya, Gabaldon, Nueva Ecija. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}