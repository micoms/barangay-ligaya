import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Barangay Ligaya</h1>
          <p className="text-xl md:text-2xl text-white">Our History, Mission, and Vision</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Barangay Ligaya was established in 1974 as part of the reorganization of local government units in Gabaldon, Nueva Ecija. The name &quot;Ligaya,&quot; which means &quot;joy&quot; or &quot;happiness&quot; in Filipino, was chosen to reflect the community&apos;s aspiration for a prosperous and harmonious society.
              </p>
              <p className="text-gray-700 mb-4">
                Originally an agricultural community, Barangay Ligaya has grown over the decades to become a vibrant part of Gabaldon municipality, with developments in infrastructure, education, and local commerce while maintaining its rich cultural heritage and natural resources.
              </p>
              <p className="text-gray-700">
                Today, Barangay Ligaya is home to approximately 3,000 residents who continue to work together to build a progressive and sustainable community for future generations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400/065f46/FFFFFF?text=Historical+Photo" 
                  alt="Historical Photo of Barangay Ligaya" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Barangay Ligaya is committed to providing efficient and effective public service to improve the quality of life of its residents through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Promoting sustainable development and environmental protection</li>
                <li>Ensuring peace and order within the community</li>
                <li>Delivering accessible and quality basic services</li>
                <li>Encouraging citizen participation in governance</li>
                <li>Supporting educational and livelihood opportunities</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                By 2030, Barangay Ligaya envisions itself as:
              </p>
              <p className="text-gray-700 mb-4">
                A progressive, peaceful, and resilient community where residents enjoy a high quality of life, with access to essential services, sustainable livelihood opportunities, and a clean environment.
              </p>
              <p className="text-gray-700">
                A model barangay in Gabaldon that exemplifies good governance, citizen empowerment, and inclusive growth, where traditions and innovations harmoniously coexist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Integrity</h3>
              <p className="text-gray-700">
                We uphold honesty, transparency, and accountability in all our actions and decisions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Service</h3>
              <p className="text-gray-700">
                We are dedicated to serving our community with compassion, efficiency, and respect.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of working together and involving all stakeholders in community development.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Innovation</h3>
              <p className="text-gray-700">
                We embrace new ideas and approaches to address challenges and improve our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Barangay Demographics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Population */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Population</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">3,000+</p>
              <p className="text-gray-600">Residents as of 2023</p>
            </div>

            {/* Land Area */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Land Area</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">450</p>
              <p className="text-gray-600">Hectares</p>
            </div>

            {/* Households */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Households</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">750</p>
              <p className="text-gray-600">Registered families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}