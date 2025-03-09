import Link from "next/link";

export default function News() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">News & Announcements</h1>
          <p className="text-xl md:text-2xl text-white">Stay Updated with Barangay Ligaya</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-gray-700 text-lg">
            Keep up with the latest news, events, and announcements from Barangay Ligaya. 
            Our community is always active with various programs and initiatives aimed at improving the quality of life of our residents.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Featured News</h2>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                {/* Placeholder for featured news image */}
                <div className="h-64 md:h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Featured News Image</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-yellow-500 font-bold mb-2">July 20, 2023</div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">Barangay Ligaya Wins Clean and Green Award</h3>
                <p className="text-gray-700 mb-6">
                  Barangay Ligaya has been recognized as the cleanest and greenest barangay in Gabaldon, Nueva Ecija for the year 2023. The award was presented during the annual Municipal Environmental Summit held last week.
                </p>
                <p className="text-gray-700 mb-6">
                  The recognition comes after months of implementing various environmental programs including weekly clean-up drives, waste segregation campaign, and tree planting activities.
                </p>
                <Link href="/news/clean-green-award" className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Recent News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 15, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">COVID-19 Vaccination Schedule</h3>
                <p className="text-gray-700 mb-4">
                  The next COVID-19 vaccination schedule for Barangay Ligaya residents will be on July 20, 2023 at the Barangay Hall. All residents aged 18 and above are encouraged to get their booster shots.
                </p>
                <Link href="/news/covid-vaccination" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 10, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Cleanup Drive</h3>
                <p className="text-gray-700 mb-4">
                  Join us for our monthly cleanup drive on July 25, 2023. Let's work together to keep our barangay clean and green. Volunteers will be provided with cleaning materials and refreshments.
                </p>
                <Link href="/news/cleanup-drive" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">July 5, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Livelihood Training Program</h3>
                <p className="text-gray-700 mb-4">
                  Free livelihood training program for Barangay Ligaya residents will start on August 1, 2023. Register now at the Barangay Hall to secure your slot in this valuable opportunity.
                </p>
                <Link href="/news/livelihood-training" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">June 28, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Scholarship Program for SY 2023-2024</h3>
                <p className="text-gray-700 mb-4">
                  Applications for the Barangay Ligaya Scholarship Program for the School Year 2023-2024 are now open. Qualified students may submit their requirements until July 31, 2023.
                </p>
                <Link href="/news/scholarship-program" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Item 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">June 20, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Barangay Fiesta Announcement</h3>
                <p className="text-gray-700 mb-4">
                  The annual Barangay Ligaya Fiesta will be celebrated on August 15-16, 2023. Various activities and competitions are being prepared for this year's celebration.
                </p>
                <Link href="/news/barangay-fiesta" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Item 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">News Image</p>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 font-bold mb-2">June 15, 2023</div>
                <h3 className="text-xl font-bold mb-3 text-green-800">Road Improvement Project</h3>
                <p className="text-gray-700 mb-4">
                  The road improvement project for Sampaguita Street will commence on July 1, 2023. Residents are advised to take alternative routes during the construction period.
                </p>
                <Link href="/news/road-improvement" className="text-green-700 font-semibold hover:text-green-900">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <a href="#" className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300">1</a>
              <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">2</a>
              <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">3</a>
              <span className="px-4 py-2 text-gray-700">...</span>
              <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">8</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get the latest news and announcements from Barangay Ligaya delivered straight to your inbox.</p>
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