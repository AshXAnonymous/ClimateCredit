// src/ClimateGreennessOverview.jsx

import React from 'react';

// --- Mock Data ---
// In a real application, this data would come from an API.
const industriesData = [
  {
    id: 1,
    name: 'Technology',
    grade: 'A',
    description: 'High potential for green energy adoption and carbon-neutral data centers.',
  },
  {
    id: 2,
    name: 'Renewable Energy',
    grade: 'A+',
    description: 'Leading the charge in sustainable power generation and innovation.',
  },
  {
    id: 3,
    name: 'Automotive',
    grade: 'B',
    description: 'Making significant strides with EVs, but supply chain emissions remain a challenge.',
  },
  {
    id: 4,
    name: 'Fashion & Apparel',
    grade: 'C',
    description: 'Notorious for water waste and pollution, but slow improvements are being made.',
  },
  {
    id: 5,
    name: 'Food & Agriculture',
    grade: 'C',
    description: 'A major source of emissions, with sustainable farming practices on the rise.',
  },
  {
    id: 6,
    name: 'Oil & Gas',
    grade: 'D',
    description: 'A primary contributor to global emissions, facing pressure to transition.',
  },
];

// --- Helper Function for Styling ---
// Returns the appropriate Tailwind CSS classes based on the grade.
const getGradeStyles = (grade) => {
  switch (grade) {
    case 'A+':
      return 'bg-green-500 text-white';
    case 'A':
      return 'bg-green-400 text-white';
    case 'B':
      return 'bg-yellow-400 text-gray-900';
    case 'C':
      return 'bg-orange-500 text-white';
    case 'D':
      return 'bg-red-600 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

// --- Main Component ---
const Industuriesdetail = () => {
  // *** NEW: Create a sorted array for the leaderboard ***
  // We sort by grade alphabetically ('A+' comes before 'A', etc.) to get the ranking.
  const sortedIndustries = [...industriesData].sort((a, b) => a.grade.localeCompare(b.grade));

  return (
    <div className="bg-gray-50 min-h-screen font-sans p-4 md:p-8 lg:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Industries – Climate Greenness Overview 🌿
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the environmental performance of all registered industries. This section lets you view each industry's Climate Grade, identify the most eco-friendly industries, check transparency & accountability, and make informed choices.
        </p>
      </div>

      {/* *** NEW: Leaderboard Section *** */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🏆 Green Leaderboard</h2>
        <ul className="space-y-2">
          {sortedIndustries.map((industry, index) => (
            <li key={industry.id} className={`flex justify-between items-center p-3 rounded-md ${index < 3 ? 'bg-gray-50' : ''}`}>
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-500 mr-4 w-8">{index + 1}.</span>
                <span className="text-lg font-medium text-gray-800">{industry.name}</span>
              </div>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${getGradeStyles(industry.grade)}`}>
                {industry.grade}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Grade Legend */}
      <div className="max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-400 p-4 mb-10 rounded-md shadow-sm">
        <p className="font-bold text-blue-800 mb-2">Climate Grade Key:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
          <span className="flex items-center"><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span> A+ = Very Green</span>
          <span className="flex items-center"><span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span> A = Green</span>
          <span className="flex items-center"><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2"></span> B = Moderate</span>
          <span className="flex items-center"><span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span> C = Polluting</span>
          <span className="flex items-center"><span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span> D = Highly Polluting</span>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{industry.name}</h2>
              <span
                className={`text-sm font-bold px-3 py-1 rounded-full ${getGradeStyles(industry.grade)}`}
              >
                {industry.grade}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
      
      {/* Footer/Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center text-gray-600">
        <p className="text-sm">
          Every industry's score is updated regularly based on <span className="font-semibold">verified pollution and emission data</span>. 
          Make a difference by <span className="font-semibold">supporting industries that are contributing positively to the environment.</span>
        </p>
      </div>
    </div>
  );
};

export default Industuriesdetail;