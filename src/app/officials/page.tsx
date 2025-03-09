import Image from "next/image";

export default function Officials() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Barangay Officials</h1>
          <p className="text-xl md:text-2xl text-white">Meet the Leaders of Barangay Ligaya</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-gray-700 text-lg">
            Our barangay officials are dedicated public servants committed to the development and welfare of Barangay Ligaya. 
            They work tirelessly to address community concerns, implement local projects, and ensure the delivery of essential services.
          </p>
        </div>
      </section>

      {/* Barangay Captain Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Barangay Captain</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden">
              <Image 
                src="https://placehold.co/256x256/1D4ED8/FFFFFF?text=Captain" 
                alt="Barangay Captain Juan Dela Cruz" 
                width={256} 
                height={256} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left md:max-w-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Juan Dela Cruz</h3>
              <p className="text-xl text-yellow-600 font-semibold mb-4">Barangay Captain (2022-2025)</p>
              <p className="text-gray-700 mb-4">
                Captain Juan Dela Cruz has been serving Barangay Ligaya since 2018. Under his leadership, the barangay has seen significant improvements in infrastructure, health services, and community programs. He holds a degree in Public Administration and has previously worked in local government for over 15 years.
              </p>
              <div className="mt-4">
                <p className="text-gray-700"><span className="font-semibold">Contact:</span> 0917-123-4567</p>
                <p className="text-gray-700"><span className="font-semibold">Email:</span> captain@barangayligaya.example.com</p>
                <p className="text-gray-700"><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barangay Councilors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Barangay Councilors (Kagawad)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Councilor 1 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Maria" 
                    alt="Kagawad Maria Santos" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Maria Santos</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Health</p>
                <p className="text-gray-700 mb-4 text-center">
                  Leading health initiatives and programs for the community since 2020.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-234-5678</p>
              </div>
            </div>

            {/* Councilor 2 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Pedro" 
                    alt="Kagawad Pedro Reyes" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Pedro Reyes</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Peace and Order</p>
                <p className="text-gray-700 mb-4 text-center">
                  Ensuring community safety and security through various initiatives.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-345-6789</p>
              </div>
            </div>

            {/* Councilor 3 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Ana" 
                    alt="Kagawad Ana Lim" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Ana Lim</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Education</p>
                <p className="text-gray-700 mb-4 text-center">
                  Advocating for educational programs and scholarships for youth.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-456-7890</p>
              </div>
            </div>

            {/* Councilor 4 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Roberto" 
                    alt="Kagawad Roberto Garcia" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Roberto Garcia</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Infrastructure</p>
                <p className="text-gray-700 mb-4 text-center">
                  Overseeing development projects and infrastructure improvements.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-567-8901</p>
              </div>
            </div>

            {/* Councilor 5 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Elena" 
                    alt="Kagawad Elena Bautista" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Elena Bautista</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Environment</p>
                <p className="text-gray-700 mb-4 text-center">
                  Leading environmental conservation and waste management programs.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-678-9012</p>
              </div>
            </div>

            {/* Councilor 6 */}
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src="https://placehold.co/128x128/047857/FFFFFF?text=Carlos" 
                    alt="Kagawad Carlos Mendoza" 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-green-800 text-center">Carlos Mendoza</h3>
                <p className="text-yellow-600 font-semibold mb-3 text-center">Kagawad - Committee on Youth and Sports</p>
                <p className="text-gray-700 mb-4 text-center">
                  Organizing sports events and youth development activities.
                </p>
                <p className="text-gray-700 text-center">Contact: 0917-789-0123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Officials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Other Barangay Officials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Secretary */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://placehold.co/96x96/047857/FFFFFF?text=Juana" 
                  alt="Barangay Secretary Juana Reyes" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-green-800">Juana Reyes</h3>
              <p className="text-yellow-600 font-semibold mb-3">Barangay Secretary</p>
              <p className="text-gray-700">
                Contact: 0917-890-1234
              </p>
            </div>

            {/* Treasurer */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://placehold.co/96x96/047857/FFFFFF?text=Miguel" 
                  alt="Barangay Treasurer Miguel Torres" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-green-800">Miguel Torres</h3>
              <p className="text-yellow-600 font-semibold mb-3">Barangay Treasurer</p>
              <p className="text-gray-700">
                Contact: 0917-901-2345
              </p>
            </div>

            {/* SK Chairman */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://placehold.co/96x96/047857/FFFFFF?text=Paolo" 
                  alt="SK Chairman Paolo Dizon" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-green-800">Paolo Dizon</h3>
              <p className="text-yellow-600 font-semibold mb-3">SK Chairman</p>
              <p className="text-gray-700">
                Contact: 0917-012-3456
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Organizational Structure</h2>
          
          <div className="max-w-4xl mx-auto bg-green-50 p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-8">
              The organizational structure of Barangay Ligaya follows the standard structure as mandated by the Local Government Code of the Philippines.
            </p>
            
            {/* Simple Org Chart */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-green-700 text-white px-6 py-3 rounded-lg w-64 text-center">
                <p className="font-bold">Barangay Captain</p>
              </div>
              
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg w-56 text-center">
                <p className="font-bold">Barangay Secretary</p>
              </div>
              
              <div className="flex flex-row justify-center space-x-4 w-full">
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
              </div>
              
              <div className="flex flex-row justify-center space-x-4 w-full">
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg w-40 text-center">
                  <p className="font-bold">Kagawad</p>
                </div>
              </div>
              
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg w-56 text-center">
                <p className="font-bold">SK Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}