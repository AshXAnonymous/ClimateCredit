import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setErrorMessage(data.message || "Login failed");
        return;
      }

      // Save token, role & user ID
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username); 

      // Redirect based on the role coming from backend
      if (data.role === "user") navigate("/dashboard/user");
      else if (data.role === "admin") navigate("/dashboard/admin");
      else if (data.role === "owner") navigate("/dashboard/owner");

    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background */}
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

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-300">
              Climate Credit System
            </h1>
            <p className="text-black-300">Sign in to your account</p>
          </div>

          {errorMessage && (
            <p className="text-red-300 text-center mb-3">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-teal-400 text-black"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <span className="text-blue-600">🔒</span>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-teal-400 text-black"
                  placeholder="•••••••"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 bg-blue-900 border-blue-300 rounded"
                />
                <label className="ml-2 text-sm text-blue-600">Remember me</label>
              </div>

              <Link to="/forgotpassword" className="text-teal-300 text-sm">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <p className="text-center mt-6 text-blue-100">
            Don't have an account?
            <Link to="/signup" className="text-teal-300 ml-1">Sign Up</Link>
          </p>

        </div>
      </div>

      {/* Floating Earth */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-50">
        <div className="relative w-full h-full animate-spin-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-green-400"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }
      `}</style>
    </div>
  );
};

export default Login;
