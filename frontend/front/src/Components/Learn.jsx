import React from 'react';

const Learn = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Learn About Climate Credits</h1>
          <p className="text-lg text-gray-600">
            Understand how climate credits work and why they matter for our environment
          </p>
        </div>

        <div className="space-y-8">
          {/* What are climate credits */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">What are Climate Credits?</h2>
                  <p className="text-gray-600 mb-4">
                    Climate credits, also known as carbon credits, are permits that allow the holder to emit a certain amount of carbon dioxide or other greenhouse gases. One credit permits the emission of one ton of carbon dioxide or the equivalent in other greenhouse gases.
                  </p>
                  <p className="text-gray-600">
                    The credit system is designed to reduce greenhouse gas emissions by setting a cap on total emissions and allowing companies with lower emissions to sell their unused allowances to companies that exceed their limits. This creates a financial incentive for companies to reduce their carbon footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How emissions affect scoring */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">How Emissions Affect Scoring</h2>
                  <p className="text-gray-600 mb-4">
                    The climate credit scoring system evaluates industries based on their greenhouse gas emissions, sustainability practices, and environmental initiatives. The scoring algorithm considers several factors:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Direct emissions from owned or controlled sources</li>
                    <li>Indirect emissions from the generation of purchased electricity</li>
                    <li>Other indirect emissions in the value chain</li>
                    <li>Implementation of emission reduction technologies</li>
                    <li>Renewable energy usage and energy efficiency measures</li>
                    <li>Waste management and recycling practices</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Industries with lower emissions and stronger sustainability practices receive higher scores (A+, A), while those with higher emissions receive lower scores (C, D).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why industries must track pollution */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Industries Must Track Pollution</h2>
                  <p className="text-gray-600 mb-4">
                    Tracking pollution and emissions is crucial for several reasons:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Environmental Responsibility</h3>
                      <p className="text-gray-600 text-sm">
                        Industries have a responsibility to minimize their environmental impact and preserve natural resources for future generations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-600 text-sm">
                        Many countries have regulations requiring industries to monitor and report their emissions to ensure compliance with environmental standards.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Economic Benefits</h3>
                      <p className="text-gray-600 text-sm">
                        Reducing emissions often leads to increased efficiency, lower energy costs, and potential revenue from selling excess carbon credits.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Corporate Reputation</h3>
                      <p className="text-gray-600 text-sm">
                        Companies with strong environmental performance enjoy better public perception, increased customer loyalty, and enhanced brand value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="/" className="group block p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-teal-100 text-teal-600 group-hover:bg-teal-200 transition-colors">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600">Climate Credit Guide</h3>
                      <p className="text-sm text-gray-500">Comprehensive guide to understanding climate credits</p>
                    </div>
                  </div>
                </a>
                <a href="/" className="group block p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-teal-100 text-teal-600 group-hover:bg-teal-200 transition-colors">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600">Video Tutorials</h3>
                      <p className="text-sm text-gray-500">Watch educational videos about climate credits</p>
                    </div>
                  </div>
                </a>
                <a href="/" className="group block p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-teal-100 text-teal-600 group-hover:bg-teal-200 transition-colors">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600">Research Papers</h3>
                      <p className="text-sm text-gray-500">Access scientific research on climate change</p>
                    </div>
                  </div>
                </a>
                <a href="/" className="group block p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-teal-100 text-teal-600 group-hover:bg-teal-200 transition-colors">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600">Community Forum</h3>
                      <p className="text-sm text-gray-500">Join discussions with other concerned citizens</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;