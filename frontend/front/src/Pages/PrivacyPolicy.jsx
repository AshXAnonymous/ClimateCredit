import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Your privacy is important to us. We ensure that your data is handled securely, transparently, and responsibly.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto grid gap-8">

        {/* Section 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-300">
            We collect basic user details such as name, email, and login credentials. 
            For industries, we collect emission data and related environmental metrics.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Data</h2>
          <p className="text-gray-300">
            The data is used to calculate climate scores, improve transparency, and provide insights to users.
            We never misuse or sell your personal information.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
          <p className="text-gray-300">
            We use secure systems and encryption to protect your data. Only authorized access is allowed
            to sensitive information.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl font-semibold mb-3">4. Transparency</h2>
          <p className="text-gray-300">
            Our platform promotes openness. Industry climate scores are visible to users,
            but sensitive data remains protected.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p className="text-gray-300">
            You have the right to access, update, or delete your personal data at any time.
            Contact us if you need assistance.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-gray-400 text-sm">
        © {new Date().getFullYear()} Climate Credit System. All rights reserved.
      </div>

    </div>
  );
}

export default PrivacyPolicy;