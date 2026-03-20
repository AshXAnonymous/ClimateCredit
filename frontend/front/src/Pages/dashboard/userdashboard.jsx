import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';

const UserDashboard = () => {

  const [username, setUsername] = useState('');
useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    setUsername(storedUsername);
  }
}, []);

  // Mock industry data
  const industries = [
    {
      id: 1,
      name: 'GreenTech Manufacturing',
      category: 'Technology',
      location: 'San Francisco, CA',
      score: 'A+',
      lastUpdated: 'June 15, 2023'
    },
    {
      id: 2,
      name: 'EcoTextiles Inc.',
      category: 'Textile',
      location: 'Portland, OR',
      score: 'A',
      lastUpdated: 'June 10, 2023'
    },
    {
      id: 3,
      name: 'SunPower Energy',
      category: 'Energy',
      location: 'Phoenix, AZ',
      score: 'A+',
      lastUpdated: 'June 12, 2023'
    },
    {
      id: 4,
      name: 'Oceanic Plastics',
      category: 'Manufacturing',
      location: 'Miami, FL',
      score: 'C',
      lastUpdated: 'June 5, 2023'
    },
    {
      id: 5,
      name: 'Fresh Harvest Foods',
      category: 'Agriculture',
      location: 'Sacramento, CA',
      score: 'B',
      lastUpdated: 'June 8, 2023'
    },
    {
      id: 6,
      name: 'Metro Transit Systems',
      category: 'Transportation',
      location: 'Denver, CO',
      score: 'B',
      lastUpdated: 'June 14, 2023'
    }
  ];

  // Function to get badge color based on score
  const getScoreBadgeColor = (score) => {
    switch (score) {
      case 'A+':
        return 'bg-green-500';
      case 'A':
        return 'bg-blue-500';
      case 'B':
        return 'bg-yellow-500';
      case 'C':
        return 'bg-orange-500';
      case 'D':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-teal-600">Climate Credit System</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/dashboard/user" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Dashboard</Link>
            <Link to="/dashboard/user/industriesdetails" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Industries</Link>
            <Link to="/dashboard/user/ReportPollution" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Report Pollution</Link>
            <Link to="/dashboard/user/learn" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Learn</Link>
            <Link to="/dashboard/user/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Contact</Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-teal-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center ml-4">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
              <span className="text-teal-600 font-semibold text-sm">{username.charAt(0)}</span>
            </div>
            <span className="ml-2 text-gray-700 hidden sm:block">{username}</span>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-1">
            <Link to="/dashboard/user" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Dashboard</Link>
            <Link to="/dashboard/user/industriesdetails" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Industries</Link>
            <Link to="/dashboard/user/ReportPollution" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Report Pollution</Link>
            <Link to="/dashboard/user/learn" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Learn</Link>
            <Link to="/dashboard/user/contact" className="block py-2 text-gray-700 hover:text-teal-600 font-medium">Contact</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Welcome, {username}!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Track industry climate scores and stay aware of environmental impact.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://picsum.photos/seed/climate-dashboard/600/300.jpg" 
              alt="Climate Dashboard" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* View Industries Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">View Industries</h4>
                <p className="text-gray-600 mb-4">Browse and compare industry climate scores</p>
                <Link to="/dashboard/user/industriesdetails" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Explore
                </Link>
              </div>
            </div>

            {/* Report Pollution Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Report Pollution</h4>
                <p className="text-gray-600 mb-4">Help us track environmental issues</p>
                <Link to="/dashboard/user/ReportPollution" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Report
                </Link>
              </div>
            </div>

            {/* Learn About Climate Credits Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Learn About Climate Credits</h4>
                <p className="text-gray-600 mb-4">Understand environmental impact</p>
                <Link to="/dashboard/user/learn" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Score List */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Industry Climate Scores</h3>
            <Link to="/dashboard/user/industriesdetails" className="text-teal-600 hover:text-teal-700 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(industry => (
              <div key={industry.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{industry.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getScoreBadgeColor(industry.score)}`}>
                    {industry.score}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{industry.category}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{industry.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Updated: {industry.lastUpdated}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/industry/${industry.id}`} 
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-center transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-teal-600 transition-colors">About</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-teal-600 transition-colors">Privacy</Link>
            <Link to="/dashboard/user/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Climate Credit System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;