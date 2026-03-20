import { useEffect } from "react";
// import { authFetch } from "../utils/api";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import {
  Home,
  Database,
  Trophy,
  TrendingUp,
  FileText,
  Activity,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Upload,
  AlertTriangle,
  CheckCircle,
  Clock,
  Info,
  Plus,
  Minus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// --- Dummy Data ---
const ownerData = {
  name: "Alex Ray",
  industry: "FutureTech Manufacturing",
  score: "A+",
  scoreColor: "bg-green-500",
  category: "Technology",
  location: "San Francisco, CA",
  lastUpdated: "2024-05-21",
};

const priceData = [
  { name: 'Jan', price: 4000 },
  { name: 'Feb', price: 3000 },
  { name: 'Mar', price: 5000 },
  { name: 'Apr', price: 2780 },
  { name: 'May', price: 6890 },
  { name: 'Jun', price: 7390 },
  { name: 'Jul', price: 8490 },
];

const leaderboardData = [
  { rank: 1, name: "Renewable Energy Corp", score: "A+", change: -15, category: "Energy" },
  { rank: 2, name: "GreenBuild Constructions", score: "A", change: -8, category: "Construction" },
  { rank: 3, name: "FutureTech Manufacturing", score: "A+", change: -12, category: "Technology" },
  { rank: 4, name: "Eco-Fashion Ltd.", score: "B+", change: -5, category: "Apparel" },
  { rank: 5, name: "AgriSolutions Inc.", score: "B", change: +2, category: "Agriculture" },
  { rank: 6, name: "AutoDrive Motors", score: "C", change: +10, category: "Automotive" },
];

const transactionHistory = [
  { id: 'TX001', type: 'Buy', amount: 500, date: '2024-07-10', price: 82 },
  { id: 'TX002', type: 'Sell', amount: 200, date: '2024-06-25', price: 75 },
  { id: 'TX003', type: 'Buy', amount: 1000, date: '2024-05-15', price: 70 },
];

const notifications = [
  { id: 1, type: 'warning', icon: AlertTriangle, title: 'Low Credit Balance', message: 'You have less than 100 credits remaining.' },
  { id: 2, type: 'info', icon: Clock, title: 'Certificate Expiring', message: 'ISO 14001 certificate expires in 30 days.' },
  { id: 3, type: 'error', icon: X, title: 'High Pollution Warning', message: 'PM2.5 levels exceeded weekly threshold.' },
  { id: 4, type: 'success', icon: CheckCircle, title: 'Report Verified', message: 'Your Q2 2024 report has been verified.' },
];

// --- Main Component ---
const OwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [carbonCredits, setCarbonCredits] = useState(1500);
  const marketPrice = 85;

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Update Industry Data', icon: Database },
    { name: 'Leaderboard', icon: Trophy },
    { name: 'Trading Platform', icon: TrendingUp },
    { name: 'Certificates', icon: FileText },
    { name: 'Real-Time Monitoring', icon: Activity },
    { name: 'Reports', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
    { name: 'Logout', icon: LogOut },
  ];

  const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl p-6 ${className}`}>
      {children}
    </div>
  );

  const renderSidebar = () => (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:inset-0`}
    >
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white">ClimateCredits</h2>
        <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setActiveSection(item.name);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white transition-all duration-200 ${
              activeSection === item.name
                ? 'bg-cyan-500/20 border-l-4 border-cyan-400'
                : 'hover:bg-white/10'
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Update Industry Data':
        return <DataInputPanel />;
      case 'Leaderboard':
        return <LeaderboardView />;
      case 'Trading Platform':
        return <TradingPlatformView />;
      case 'Certificates':
      case 'Real-Time Monitoring':
      case 'Reports':
      case 'Settings':
        return <PlaceholderView title={activeSection} />;
      case 'Logout':
        return <LogoutView />;
      default:
        return <DashboardView />;
    }
  };

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Top header to fill the empty area */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-sm text-gray-300">
          Overview of your climate performance & trading activity
        </p>
      </div>

      {/* Existing content below */}
      <WelcomeSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TradingSummaryCard />
          <TransactionHistoryTable />
        </div>
        <NotificationsPanel />
      </div>
    </div>
  );

  const WelcomeSection = () => (
    <GlassCard>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {ownerData.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span><strong>Industry:</strong> {ownerData.industry}</span>
            <span><strong>Category:</strong> {ownerData.category}</span>
            <span><strong>Location:</strong> {ownerData.location}</span>
            <span><strong>Last Updated:</strong> {ownerData.lastUpdated}</span>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-300 text-sm">Your Climate Score</p>
          <span className={`inline-block mt-1 px-4 py-2 rounded-full text-white font-bold text-2xl ${ownerData.scoreColor}`}>
            {ownerData.score}
          </span>
        </div>
      </div>
    </GlassCard>
  );

  const DataInputPanel = () => {
    const steps = ['Emissions', 'Waste Mgmt', 'Certificates', 'Compliance', 'Reports'];
    const progressPercentage = (currentStep / steps.length) * 100;

    return (
      <GlassCard>
        <h2 className="text-2xl font-bold text-white mb-6">Update Industry Data</h2>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep > index + 1
                      ? 'bg-green-500'
                      : currentStep === index + 1
                      ? 'bg-cyan-500'
                      : 'bg-gray-600'
                  }`}
                >
                  {currentStep > index + 1 ? <CheckCircle size={20} /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-full h-1 mx-2 transition-all duration-300 ${
                      currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-4">
          {currentStep === 1 && <EmissionsFormStep />}
          {currentStep === 2 && <WasteFormStep />}
          {currentStep === 3 && <CertificatesFormStep />}
          {currentStep === 4 && <ComplianceFormStep />}
          {currentStep === 5 && <ReportsFormStep />}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg disabled:opacity-50 hover:bg-gray-500 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            disabled={currentStep === steps.length}
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg disabled:opacity-50 hover:bg-cyan-500 transition-colors"
          >
            {currentStep === steps.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </GlassCard>
    );
  };

  const EmissionsFormStep = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">CO₂ Emissions (tons)</label>
        <input
          type="number"
          className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
          placeholder="e.g., 500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">PM2.5 (µg/m³)</label>
        <input
          type="number"
          className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
          placeholder="e.g., 35"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Water Waste (m³)</label>
        <input
          type="number"
          className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
          placeholder="e.g., 1200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Energy Usage (kWh)</label>
        <input
          type="number"
          className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
          placeholder="e.g., 80000"
        />
      </div>
    </div>
  );

  const WasteFormStep = () => (
    <div className="text-white">
      <p>Waste Management Form Fields...</p>
    </div>
  );

  const CertificatesFormStep = () => (
    <div className="text-white space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">Certificate Name</label>
        <input
          type="text"
          className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
          placeholder="e.g., ISO 14001"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Upload Document</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ComplianceFormStep = () => (
    <div className="text-white">
      <p>Pollution Control Compliance Form Fields...</p>
    </div>
  );

  const ReportsFormStep = () => (
    <div className="text-white">
      <p>Quarterly Report Form Fields...</p>
    </div>
  );

  const LeaderboardView = () => (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white mb-6">Industry Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="px-4 py-3 text-left">Rank</th>
              <th className="px-4 py-3 text-left">Industry</th>
              <th className="px-4 py-3 text-left">Score</th>
              <th className="px-4 py-3 text-left">Emission Change</th>
              <th className="px-4 py-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item) => (
              <tr
                key={item.rank}
                className={`border-b border-white/10 hover:bg-white/5 ${
                  item.name === ownerData.industry ? 'bg-cyan-500/10' : ''
                }`}
              >
                <td className="px-4 py-3">{item.rank}</td>
                <td className="px-4 py-3 font-semibold">{item.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      item.score === 'A+'
                        ? 'bg-green-500'
                        : item.score === 'A'
                        ? 'bg-green-400'
                        : item.score === 'B+'
                        ? 'bg-yellow-400'
                        : 'bg-orange-500'
                    }`}
                  >
                    {item.score}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`flex items-center ${
                      item.change < 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {item.change < 0 ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}
                    {Math.abs(item.change)}%
                  </span>
                </td>
                <td className="px-4 py-3">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );

  const TradingPlatformView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="flex flex-col justify-between">
          <div>
            <p className="text-gray-300 text-sm">My Carbon Credits</p>
            <p className="text-4xl font-bold text-white mt-2">{carbonCredits.toLocaleString()}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setShowBuyModal(true)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Buy
            </button>
            <button
              onClick={() => setShowSellModal(true)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Minus size={18} /> Sell
            </button>
          </div>
        </GlassCard>
        <GlassCard>
          <p className="text-gray-300 text-sm">Market Price / Credit</p>
          <p className="text-4xl font-bold text-cyan-400 mt-2">${marketPrice}</p>
          <p className="text-green-400 text-sm mt-2">+5.2% from last week</p>
        </GlassCard>
        <GlassCard>
          <p className="text-gray-300 text-sm">24h Trading Volume</p>
          <p className="text-4xl font-bold text-white mt-2">1.2M</p>
          <p className="text-gray-400 text-sm mt-2">Credits</p>
        </GlassCard>
      </div>
      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">Credit Price History</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={priceData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopOpacity={0.8} />
                <stop offset="95%" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #00bcd4' }} />
            <Area type="monotone" dataKey="price" stroke="#00bcd4" fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>
      <TransactionHistoryTable />
    </div>
  );

  const TradingSummaryCard = () => (
    <GlassCard>
      <h3 className="text-xl font-bold text-white mb-4">Trading at a Glance</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-300 text-sm">Available Credits</p>
          <p className="text-2xl font-bold text-white">{carbonCredits.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-300 text-sm">Market Price</p>
          <p className="text-2xl font-bold text-cyan-400">${marketPrice}</p>
        </div>
      </div>
      <button
        onClick={() => setActiveSection('Trading Platform')}
        className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Go to Trading Platform
      </button>
    </GlassCard>
  );

  const TransactionHistoryTable = () => (
    <GlassCard>
      <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((tx) => (
              <tr key={tx.id} className="border-b border-white/10">
                <td className="px-4 py-3">{tx.id}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      tx.type === 'Buy' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td className="px-4 py-3">{tx.amount}</td>
                <td className="px-4 py-3">${tx.price}</td>
                <td className="px-4 py-3">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );

  const NotificationsPanel = () => (
    <GlassCard>
      <h3 className="text-xl font-bold text-white mb-4">Notifications & Alerts</h3>
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 ${
              notif.type === 'error'
                ? 'bg-red-500/10 border-red-500'
                : notif.type === 'warning'
                ? 'bg-yellow-500/10 border-yellow-500'
                : notif.type === 'success'
                ? 'bg-green-500/10 border-green-500'
                : 'bg-blue-500/10 border-blue-500'
            }`}
          >
            <notif.icon
              className={`mt-0.5 ${
                notif.type === 'error'
                  ? 'text-red-400'
                  : notif.type === 'warning'
                  ? 'text-yellow-400'
                  : notif.type === 'success'
                  ? 'text-green-400'
                  : 'text-blue-400'
              }`}
              size={20}
            />
            <div>
              <p className="text-white font-semibold text-sm">{notif.title}</p>
              <p className="text-gray-400 text-xs">{notif.message}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );

  const PlaceholderView = ({ title }) => (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      {title === 'Real-Time Monitoring' ? (
        <div className="space-y-4">
          <p className="text-cyan-400 font-semibold">
            Future Feature: Real-Time Environmental Monitoring
          </p>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse w-4/6"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-700/50 p-4 rounded-lg h-24 animate-pulse"></div>
            <div className="bg-gray-700/50 p-4 rounded-lg h-24 animate-pulse"></div>
          </div>
        </div>
      ) : (
        <p className="text-gray-400">
          Content for the <span className="text-white font-semibold">{title}</span> section will be
          implemented here.
        </p>
      )}
    </GlassCard>
  );

  const LogoutView = () => (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white">Are you sure you want to logout?</h2>
      <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
        Confirm Logout
      </button>
    </GlassCard>
  );

  const TradingModal = ({ title, onClose, onConfirm }) => {
    const [amount, setAmount] = useState(0);
    const isBuy = title === 'Buy Credits';
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-slate-800 border border-cyan-500/30 rounded-xl p-6 w-full max-w-md">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Amount of Credits</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md text-white p-2"
            />
          </div>
          <p className="text-gray-300">
            Total Cost:{' '}
            <span className="text-cyan-400 font-bold">${amount * marketPrice}</span>
          </p>
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm(amount);
                onClose();
              }}
              className={`px-4 py-2 ${
                isBuy ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              } text-white rounded-lg transition-colors`}
            >
              Confirm {isBuy ? 'Buy' : 'Sell'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 md:hidden bg-black/50 p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Layout wrapper: sidebar + main in a row on desktop */}
      <div className="flex">
        {/* Sidebar */}
        {renderSidebar()}

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Modals */}
      {showBuyModal && (
        <TradingModal
          title="Buy Credits"
          onClose={() => setShowBuyModal(false)}
          onConfirm={(amount) =>
            setCarbonCredits(carbonCredits + parseInt(amount || 0, 10))
          }
        />
      )}
      {showSellModal && (
        <TradingModal
          title="Sell Credits"
          onClose={() => setShowSellModal(false)}
          onConfirm={(amount) =>
            setCarbonCredits(carbonCredits - parseInt(amount || 0, 10))
          }
        />
      )}
    </div>
  );
};

export default OwnerDashboard;
