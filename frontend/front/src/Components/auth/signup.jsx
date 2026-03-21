import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = "https://climatecredit.onrender.com";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    industry: '',
    industryCategory: '',
    industryLocation: '',
    emissionCertificateId: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showIndustryFields, setShowIndustryFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show industry fields only when role is Owner
    setShowIndustryFields(formData.role === 'owner');
  }, [formData.role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.role === 'owner') {
      if (!formData.industry.trim()) {
        newErrors.industry = 'Industry name is required';
      }
      if (!formData.industryCategory.trim()) {
        newErrors.industryCategory = 'Industry category is required';
      }
      if (!formData.industryLocation.trim()) {
        newErrors.industryLocation = 'Industry location is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          industry: formData.industry,
          industryCategory: formData.industryCategory,
         industryLocation:
    formData.role === "owner"
      ? {
          city: formData.industryLocation,
          state: "",
          country: "India"
        }
      : null,
          emissionCertificateId: formData.emissionCertificateId
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(prev => ({
          ...prev,
          general: data.message || "Signup failed. Please try again.",
        }));
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setErrors(prev => ({
        ...prev,
        general: "Network error. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-teal-500 opacity-10 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
              Climate Credit System
            </h1>
            <p className="text-blue-100">Create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-white">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-blue-200">👤</span>
                </div>
                <input
                  id="fullName"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.username ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                  placeholder="Enter Name"
                />
              </div>
              {errors.username && <p className="mt-1 text-sm text-red-300">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-blue-600">📧</span>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-black">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-blue-600">🔒</span>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.password ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-300">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-black">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-blue-600">🔒</span>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-300">{errors.confirmPassword}</p>}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2 text-black">Select Role</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-blue-600">👤</span>
                </div>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-10 pr-8 py-3 bg-white/85 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 appearance-none"
                >
                  <option value="user" className="bg-blue">Normal User</option>
                  <option value="admin" className="bg-blue">Admin</option>
                  <option value="owner" className="bg-blue">Owner</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Industry Fields */}
            {showIndustryFields && (
              <div className="space-y-4 pt-4 border-t border-white border-opacity-20 animate-fadeIn">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2 text-black-600">Industry Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-blue-600">🏭</span>
                    </div>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.industry ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                      placeholder="Industry Corp"
                    />
                  </div>
                  {errors.industry && <p className="mt-1 text-sm text-red-300">{errors.industry}</p>}
                </div>

                <div>
                  <label htmlFor="industryCategory" className="block text-sm font-medium mb-2 text-black">Industry Category</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-blue-600">🏷️</span>
                    </div>
                    <select
                      id="industryCategory"
                      name="industryCategory"
                      value={formData.industryCategory}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-8 py-3 bg-white/85 border ${errors.industryCategory ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 appearance-none`}
                    >
                      <option value="" className="bg-white">Select a category</option>
                      <option value="Manufacturing" className="bg-white">Manufacturing</option>
                      <option value="Energy" className="bg-white">Energy</option>
                      <option value="Technology" className="bg-white">Technology</option>
                      <option value="Transportation" className="bg-white">Transportation</option>
                      <option value="Agriculture" className="bg-white">Agriculture</option>
                      <option value="Construction" className="bg-white">Construction</option>
                      <option value="Other" className="bg-white">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.industryCategory && <p className="mt-1 text-sm text-red-300">{errors.industryCategory}</p>}
                </div>

                <div>
                  <label htmlFor="industryLocation" className="block text-sm font-medium mb-2 text-black
                  ">Industry Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-blue-200">📍</span>
                    </div>
                    <input
                      id="industryLocation"
                      name="industryLocation"
                      type="text"
                      value={formData.industryLocation}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-3 bg-white/85 border ${errors.industryLocation ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500`}
                      placeholder="City, Country"
                    />
                  </div>
                  {errors.industryLocation && <p className="mt-1 text-sm text-red-300">{errors.industryLocation}</p>}
                </div>

                <div>
                  <label htmlFor="emissionCertificateId" className="block text-sm font-medium mb-2 text-black">Emission Certificate ID (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-blue-200">📄</span>
                    </div>
                    <input
                      id="emissionCertificateId"
                      name="emissionCertificateId"
                      type="text"
                      value={formData.emissionCertificateId}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-white/85 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-gray-900 placeholder-gray-500"
                      placeholder="EC-123456789"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Creating...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-blue-600">
              Already have an account? <Link to="/login" className="font-medium text-teal-300 hover:text-teal-200">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
