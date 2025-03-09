

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-white">How We Serve the Community of Barangay Ligaya</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-gray-700 text-lg">
            Barangay Ligaya offers a range of essential services to meet the needs of our residents. 
            Our dedicated staff is committed to providing efficient, accessible, and quality service to everyone in our community.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Main Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 - Barangay Clearance */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Barangay Clearance</h3>
                  <p className="text-gray-700 mb-4">
                    A document certifying that an individual has no derogatory record in the barangay. This is often required for employment, scholarship applications, and other official transactions.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Valid ID</li>
                      <li>Proof of residency</li>
                      <li>Application form</li>
                      <li>Processing fee: ₱50.00</li>
                    </ul>
                    <p className="mt-2 text-gray-700"><span className="font-semibold">Processing time:</span> 1-2 working days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Residency Certificate */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Certificate of Residency</h3>
                  <p className="text-gray-700 mb-4">
                    A document certifying that an individual is a resident of Barangay Ligaya. This is often required for school enrollment, voter registration, and other official purposes.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Valid ID</li>
                      <li>Proof of residency (utility bill, etc.)</li>
                      <li>Application form</li>
                      <li>Processing fee: ₱50.00</li>
                    </ul>
                    <p className="mt-2 text-gray-700"><span className="font-semibold">Processing time:</span> Same day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Business Permit */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Barangay Business Clearance</h3>
                  <p className="text-gray-700 mb-4">
                    A prerequisite document for obtaining a business permit from the municipal government. This certifies that the business complies with barangay regulations.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Business registration documents</li>
                      <li>Valid ID of business owner</li>
                      <li>Proof of business location</li>
                      <li>Application form</li>
                      <li>Processing fee: ₱100.00 - ₱500.00 (depending on business type)</li>
                    </ul>
                    <p className="mt-2 text-gray-700"><span className="font-semibold">Processing time:</span> 2-3 working days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 - Complaint Filing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Complaint Filing & Mediation</h3>
                  <p className="text-gray-700 mb-4">
                    The barangay handles minor disputes and complaints through the Lupong Tagapamayapa (Peace Council). This service aims to resolve conflicts at the community level before they escalate to formal legal proceedings.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Process:</h4>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                      <li>File a complaint at the Barangay Hall</li>
                      <li>Receive a summons for mediation</li>
                      <li>Attend mediation sessions</li>
                      <li>Resolution and agreement signing</li>
                    </ol>
                    <p className="mt-2 text-gray-700"><span className="font-semibold">Schedule:</span> Monday to Friday, 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Additional Service 1 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Health Services</h3>
              <p className="text-gray-700 mb-4">
                Regular medical missions, vaccination drives, and basic health consultations in coordination with the Municipal Health Office.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Schedule:</span> Every 2nd Saturday of the month</p>
            </div>

            {/* Additional Service 2 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Senior Citizen Assistance</h3>
              <p className="text-gray-700 mb-4">
                Registration and processing of senior citizen IDs, coordination of benefits, and special programs for elderly residents.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Contact Person:</span> Ms. Elena Bautista</p>
            </div>

            {/* Additional Service 3 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Youth Development</h3>
              <p className="text-gray-700 mb-4">
                Educational assistance, sports activities, and leadership training programs for the youth of Barangay Ligaya.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Contact Person:</span> Mr. Carlos Mendoza</p>
            </div>

            {/* Additional Service 4 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Livelihood Programs</h3>
              <p className="text-gray-700 mb-4">
                Skills training, job matching, and small business development assistance for residents seeking employment or entrepreneurship opportunities.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Schedule:</span> Quarterly training sessions</p>
            </div>

            {/* Additional Service 5 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Disaster Preparedness</h3>
              <p className="text-gray-700 mb-4">
                Training, drills, and information campaigns to prepare residents for natural disasters and emergencies.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Contact:</span> Barangay Disaster Risk Reduction Management Office</p>
            </div>

            {/* Additional Service 6 */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-800">Community Clean-up</h3>
              <p className="text-gray-700 mb-4">
                Regular clean-up drives, waste management education, and environmental conservation initiatives.
              </p>
              <p className="text-gray-700"><span className="font-semibold">Schedule:</span> Last Saturday of every month</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Avail Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">How to Avail Our Services</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ol className="list-decimal pl-5 text-gray-700 space-y-4">
              <li className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Visit the Barangay Hall</h3>
                <p>Our office is open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 8:00 AM to 12:00 PM.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Bring Required Documents</h3>
                <p>Prepare all necessary documents as listed in the service requirements.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Fill Out Application Form</h3>
                <p>Complete the appropriate application form available at the Barangay Hall.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Pay the Processing Fee</h3>
                <p>Pay the corresponding fee at the Barangay Treasurer's Office.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Claim Your Document</h3>
                <p>Return on the specified date to claim your requested document or service.</p>
              </li>
            </ol>
            
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> For urgent concerns or inquiries, you may contact us at 0917-123-4567 or email us at barangayligaya@example.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}