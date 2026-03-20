import './App.css';
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndustryAnalytics from "./Pages/IndustryAnalytics/IndustryAnalytics";



// Home
import Home from "./Pages/Home/Home";

// Auth
import Signup from './Components/auth/signup';
import Login from './Components/auth/login';
import ForgotPassword from './Components/auth/ForgotPassword';

// Dashboards
import UserDashboard from './Pages/dashboard/userdashboard';
import OwnerDashboard from './Pages/dashboard/ownerdashboard';
import AdminDashboard from './Pages/dashboard/admindashboard';

// User Dashboard Components
import ReportPollution from './Components/ReportPollution';
import Learn from './Components/Learn';
import Industuriesdetail from './Components/industuriesdetails';

// Footer Pages
import About from "./Pages/About";
import HowItWorks from "./Pages/HowItWorks";
import ContactPage from "./Pages/Contact";   // renamed to avoid conflict
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Footer Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* Auth */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* User Dashboard */}
      <Route path="/dashboard/user" element={<UserDashboard />} />
      <Route path="/dashboard/user/contact" element={<ContactPage />} />
      <Route path="/dashboard/user/reportpollution" element={<ReportPollution />} />
      <Route path="/dashboard/user/learn" element={<Learn />} />
      <Route path="/dashboard/user/industriesdetails" element={<Industuriesdetail />} />

      {/* Owner & Admin */}
      <Route path="/dashboard/owner" element={<OwnerDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/analytics" element={<IndustryAnalytics />} />

    </Routes>
  );
}

export default App;