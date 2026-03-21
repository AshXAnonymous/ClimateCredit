import React, { useState } from 'react';
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';

const ReportPollution = () => {
  const [formData, setFormData] = useState({
    industryName: '',
    location: '',
    description: '',
    image: null,
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.industryName.trim()) {
      newErrors.industryName = 'Industry name is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const formPayload = new FormData();
    formPayload.append("industryName", formData.industryName);
    formPayload.append("location", formData.location);
    formPayload.append("description", formData.description);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);

    if (formData.image) {
      formPayload.append("image", formData.image);
    }

    const res = await fetch("https://climatecredit.onrender.com/api/report", {
      method: "POST",
      body: formPayload, // ❗ no headers here
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Failed to submit report");
      return;
    }

    console.log("Report saved:", data);
    setIsSubmitted(true);

    // reset after success
    setTimeout(() => {
      setFormData({
        industryName: '',
        location: '',
        description: '',
        image: null,
        email: '',
        phone: ''
      });
      setIsSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error("Submit error:", error);
    alert("Server error. Try again later.");
  }
};


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Pollution</h1>
          <p className="text-lg text-gray-600">
            Help us keep track of environmental impact by reporting pollution incidents
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center fade-in">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your contribution. Our team will review your report and take appropriate action.
            </p>
            <p className="text-sm text-gray-500">You will be redirected in 5 seconds...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="industryName" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry Name *
                </label>
                <input
                  type="text"
                  id="industryName"
                  name="industryName"
                  value={formData.industryName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.industryName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter the name of the industry"
                />
                {errors.industryName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <ExclamationIcon className="h-4 w-4 mr-1" />
                    {errors.industryName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter the location of the industry"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <ExclamationIcon className="h-4 w-4 mr-1" />
                    {errors.location}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Provide a detailed description of the pollution incident (at least 20 characters)"
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <ExclamationIcon className="h-4 w-4 mr-1" />
                    {errors.description}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image (Optional)
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose File
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="sr-only"
                    />
                  </label>
                  <span className="text-sm text-gray-500">
                    {formData.image ? formData.image.name : 'No file chosen'}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Supported formats: JPG, PNG, GIF. Max file size: 5MB.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationIcon className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationIcon className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Submit Report
                </button>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  By submitting this report, you confirm that the information provided is accurate to the best of your knowledge.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPollution;