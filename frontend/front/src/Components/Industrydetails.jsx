import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/industry';

const getScoreColor = (score) => {
  switch (score) {
    case 'A+':
      return 'bg-green-500';
    case 'A':
      return 'bg-green-400';
    case 'B':
      return 'bg-yellow-400';
    case 'C':
      return 'bg-orange-400';
    case 'D':
      return 'bg-red-400';
    default:
      return 'bg-gray-400';
  }
};

const IndustryDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the industry by ID
  const industry = data.find(ind => ind.id === parseInt(id));
  
  if (!industry) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Industry Not Found</h1>
          <p className="text-gray-600">The industry you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const { name, category, location, score, lastUpdated, description, emissions, certificates } = industry;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{category}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className={`px-6 py-3 rounded-full text-white text-xl font-bold ${getScoreColor(score)}`}>
                Climate Score: {score}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('emissions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'emissions'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Emission History
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'certificates'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Certificates
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'overview' && (
            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Industry Overview</h2>
              <p className="text-gray-600 mb-6">{description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Environmental Impact</h3>
                  <p className="text-gray-600">
                    This industry has been rated based on its carbon emissions, waste management practices, 
                    and commitment to sustainability initiatives.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Recent Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Implemented new waste reduction system</li>
                    <li>• Switched to renewable energy sources</li>
                    <li>• Achieved ISO 14001 certification</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'emissions' && (
            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Emission History</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-600 mb-4">
                  Track the industry's carbon emissions over time. Lower emissions contribute to a better climate score.
                </p>
                <div className="h-64 flex items-center justify-center bg-white rounded border border-gray-200">
                  <p className="text-gray-500">Emission Chart Placeholder</p>
                  {/* In a real app, you would integrate a chart library like Chart.js or Recharts */}
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Period
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CO2 Emissions (tons)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Change from Previous Period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emissions.map((emission, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {emission.period}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {emission.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            emission.change.startsWith('-')
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {emission.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Environmental Certificates</h2>
              <p className="text-gray-600 mb-6">
                View the environmental certificates and compliance documents this industry has obtained.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((certificate, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{certificate.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">Issued by: {certificate.issuer}</p>
                        <p className="text-sm text-gray-500">Valid until: {certificate.validUntil}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        certificate.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {certificate.status}
                      </span>
                    </div>
                    <div className="mt-4">
                      <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">
                        View Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;