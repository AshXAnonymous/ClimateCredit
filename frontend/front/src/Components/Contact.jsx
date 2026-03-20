import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setSuccess("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback about the Climate Credit System?
            We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* CONTACT INFO */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                📞
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                ✉️
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">support@climatecredit.com</p>
              </div>
            </div>

            <div className="pt-4 text-sm text-gray-500">
              We usually respond within 24 hours.
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                {success}
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
