import React, { useState } from "react";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password reset link sent to your email.");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-900 via-teal-900 to-green-900">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md w-full"
      >

        <h2 className="text-3xl font-bold text-center mb-6 
          bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
          Forgot Password
        </h2>

        <p className="text-blue-100 text-center mb-6">
          Enter your registered email to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit}>

          <label className="text-blue-200 font-medium text-sm mb-2 block">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-blue-200 
              focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="example@mail.com"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 
              text-white font-semibold text-lg shadow-lg hover:scale-[1.02] 
              transition-all disabled:opacity-40"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Success message */}
        {message && (
          <p className="text-green-300 text-center mt-4 font-medium">{message}</p>
        )}

        {/* Error message */}
        {error && (
          <p className="text-red-300 text-center mt-4 font-medium">{error}</p>
        )}

      </motion.div>
    </div>
  );
};

export default ForgotPassword;
