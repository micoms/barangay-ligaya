import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-green-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Barangay Ligaya</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Gabaldon, Nueva Ecija</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Latest Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Announcement 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 15, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">COVID-19 Vaccination Schedule</h3>
                <p className="text-gray-700 mb-4">The next COVID-19 vaccination schedule for Barangay Ligaya residents will be on July 20, 2023 at the Barangay Hall.</p>
                <Link href="/news/covid-vaccination" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Announcement 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 10, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Cleanup Drive</h3>
                <p className="text-gray-700 mb-4">Join us for our monthly cleanup drive on July 25, 2023. Let&apos;s work together to keep our barangay clean and green.</p>
                <Link href="/news/cleanup-drive" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Announcement 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 5, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Livelihood Training Program</h3>
                <p className="text-gray-700 mb-4">Free livelihood training program for Barangay Ligaya residents will start on August 1, 2023. Register now at the Barangay Hall.</p>
                <Link href="/news/livelihood-training" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Barangay Clearance</h3>
              <p className="text-gray-600">Get your barangay clearance for various purposes such as employment, business, and more.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Residency Certificate</h3>
              <p className="text-gray-600">Obtain a certificate proving your residency in Barangay Ligaya for legal and administrative purposes.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Business Permit</h3>
              <p className="text-gray-600">Apply for a barangay business permit to legally operate your business within our jurisdiction.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Complaint Filing</h3>
              <p className="text-gray-600">File complaints or concerns that need attention from the barangay officials for resolution.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/services" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Officials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Barangay Officials</h2>
          
          {/* Featured Official - Barangay Captain */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-8">
            <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden">
              <Image 
                src="https://placehold.co/192x192/1D4ED8/FFFFFF?text=Captain" 
                alt="Barangay Captain Juan Dela Cruz" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left md:max-w-md">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Juan Dela Cruz</h3>
              <p className="text-xl text-yellow-600 font-semibold mb-4">Barangay Captain</p>
              <p className="text-gray-700 mb-4">Leading Barangay Ligaya since 2018, Captain Dela Cruz has implemented various programs to improve the quality of life of residents.</p>
              <p className="text-gray-700">Contact: 0917-123-4567 | captain@barangayligaya.example.com</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/officials" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Meet All Officials
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected with Barangay Ligaya</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to our newsletter to receive updates on barangay activities, announcements, and events.</p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
