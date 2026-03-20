import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, Factory, TrendingUp, BarChart3, Bell, FileCheck, Activity, Settings, History, Menu, X, Search, Filter, Plus, Edit, Trash2, Check, XCircle, Eye, AlertCircle, ChevronDown
} from 'lucide-react';

// --- Dummy Data ---
const usersData = [
  { id: 1, name: 'Alex Ray', email: 'alex.r@futuretech.com', role: 'Industry Owner', status: 'Active', lastActive: '2024-07-21' },
  { id: 2, name: 'Priya Singh', email: 'priya.s@renewable.com', role: 'Industry Owner', status: 'Active', lastActive: '2024-07-20' },
  { id: 3, name: 'John Doe', email: 'john.doe@example.com', role: 'Normal User', status: 'Inactive', lastActive: '2024-06-15' },
  { id: 4, name: 'Jane Smith', email: 'jane.s@ecobuild.com', role: 'Industry Owner', status: 'Pending', lastActive: '2024-07-19' },
];

const industriesData = [
  { id: 1, name: 'FutureTech Manufacturing', owner: 'Alex Ray', score: 'A+', status: 'Approved', emissions: 450 },
  { id: 2, name: 'GreenBuild Constructions', owner: 'Jane Smith', score: 'A', status: 'Pending', emissions: 780 },
  { id: 3, name: 'Renewable Energy Corp', owner: 'Priya Singh', score: 'A+', status: 'Approved', emissions: 120 },
];

const tradesData = [
  { id: 'T101', buyer: 'AutoDrive Motors', seller: 'FutureTech Manufacturing', amount: 500, price: 85, status: 'Pending', date: '2024-07-22' },
  { id: 'T102', buyer: 'Eco-Fashion Ltd.', seller: 'AgriSolutions Inc.', amount: 200, price: 82, status: 'Approved', date: '2024-07-21' },
  { id: 'T103', buyer: 'Renewable Energy Corp', seller: 'GreenBuild Constructions', amount: 1000, price: 86, status: 'Rejected', date: '2024-07-20' },
];

const emissionsTrendData = [
  { name: 'Jan', emissions: 4000, waste: 2400, energy: 2400 },
  { name: 'Feb', emissions: 3000, waste: 1398, energy: 2210 },
  { name: 'Mar', emissions: 2000, waste: 9800, energy: 2290 },
  { name: 'Apr', emissions: 2780, waste: 3908, energy: 2000 },
  { name: 'May', emissions: 1890, waste: 4800, energy: 2181 },
  { name: 'Jun', emissions: 2390, waste: 3800, energy: 2500 },
  { name: 'Jul', emissions: 3490, waste: 4300, energy: 2100 },
];

const categoryData = [
  { name: 'Technology', value: 400, color: '#00bcd4' },
  { name: 'Energy', value: 300, color: '#4caf50' },
  { name: 'Construction', value: 300, color: '#ff9800' },
  { name: 'Agriculture', value: 200, color: '#f44336' },
];

const activityLogs = [
  { id: 1, user: 'Admin', action: 'Approved trade T102', timestamp: '2024-07-21 10:30 AM' },
  { id: 2, user: 'Alex Ray', action: 'Updated Emissions Data', timestamp: '2024-07-21 09:15 AM' },
  { id: 3, user: 'Admin', action: 'Added new user Jane Smith', timestamp: '2024-07-20 04:00 PM' },
];

// --- Main Component ---
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [industries, setIndustries] = useState(industriesData);
  const [trades, setTrades] = useState(tradesData);

  // Modal states
  const [showUserModal, setShowUserModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const menuItems = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'User Management', icon: Users },
    { name: 'Industry Management', icon: Factory },
    { name: 'Leaderboard & Scoring', icon: TrendingUp },
    { name: 'Trading Oversight', icon: TrendingUp },
    { name: 'Reports & Analytics', icon: BarChart3 },
    { name: 'Notifications & Alerts', icon: Bell },
    { name: 'Certificate & Compliance', icon: FileCheck },
    { name: 'Real-Time Monitoring', icon: Activity },
    { name: 'System Settings', icon: Settings },
    { name: 'Audit & Activity Logs', icon: History },
  ];

  const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl p-6 ${className}`}>
      {children}
    </div>
  );

  // --- Sidebar Component ---
  const Sidebar = () => (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:inset-0`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
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
              activeSection === item.name ? 'bg-cyan-500/20 border-l-4 border-cyan-400' : 'hover:bg-white/10'
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  // --- View Components ---

  const DashboardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <GlassCard>
        <p className="text-gray-300">Total Users</p>
        <p className="text-3xl font-bold text-white">{users.length}</p>
      </GlassCard>
      <GlassCard>
        <p className="text-gray-300">Active Industries</p>
        <p className="text-3xl font-bold text-green-400">
          {industries.filter((i) => i.status === 'Approved').length}
        </p>
      </GlassCard>
      <GlassCard>
        <p className="text-gray-300">Pending Trades</p>
        <p className="text-3xl font-bold text-yellow-400">
          {trades.filter((t) => t.status === 'Pending').length}
        </p>
      </GlassCard>
      <GlassCard>
        <p className="text-gray-300">System Alerts</p>
        <p className="text-3xl font-bold text-red-400">3</p>
      </GlassCard>
    </div>
  );

  const UserManagementView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleAddEditUser = (user) => {
      setSelectedUser(user);
      setShowUserModal(true);
    };
    const handleDeleteUser = (userId) => {
      if (window.confirm('Are you sure?')) setUsers(users.filter((u) => u.id !== userId));
    };

    return (
      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <button
            onClick={() => handleAddEditUser(null)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} /> Add User
          </button>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-white">
            <Filter size={20} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'Active'
                          ? 'bg-green-500'
                          : user.status === 'Inactive'
                          ? 'bg-red-500'
                          : 'bg-yellow-500'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => handleAddEditUser(user)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    );
  };

  const IndustryManagementView = () => {
    const handleApproveReject = (id, status) =>
      setIndustries(industries.map((ind) => (ind.id === id ? { ...ind, status } : ind)));

    return (
      <GlassCard>
        <h2 className="text-2xl font-bold text-white mb-6">Industry Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th>Name</th>
                <th>Owner</th>
                <th>Score</th>
                <th>Status</th>
                <th>Emissions (tons CO₂e)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((industry) => (
                <tr key={industry.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{industry.name}</td>
                  <td className="px-4 py-3">{industry.owner}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-500">
                      {industry.score}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        industry.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    >
                      {industry.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{industry.emissions}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {industry.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApproveReject(industry.id, 'Approved')}
                          className="text-green-400 hover:text-green-300"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={() => handleApproveReject(industry.id, 'Rejected')}
                          className="text-red-400 hover:text-red-300"
                        >
                          <XCircle size={18} />
                        </button>
                      </>
                    )}
                    <button className="text-blue-400 hover:text-blue-300">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    );
  };

  const TradingOversightView = () => {
    const handleApproveRejectTrade = (id, status) =>
      setTrades(trades.map((trade) => (trade.id === id ? { ...trade, status } : trade)));

    return (
      <GlassCard>
        <h2 className="text-2xl font-bold text-white mb-6">Trading Platform Oversight</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th>Trade ID</th>
                <th>Buyer</th>
                <th>Seller</th>
                <th>Amount</th>
                <th>Price/Credit</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{trade.id}</td>
                  <td className="px-4 py-3">{trade.buyer}</td>
                  <td className="px-4 py-3">{trade.seller}</td>
                  <td className="px-4 py-3">{trade.amount}</td>
                  <td className="px-4 py-3">${trade.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trade.status === 'Approved'
                          ? 'bg-green-500'
                          : trade.status === 'Rejected'
                          ? 'bg-red-500'
                          : 'bg-yellow-500'
                      }`}
                    >
                      {trade.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{trade.date}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {trade.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApproveRejectTrade(trade.id, 'Approved')}
                          className="text-green-400 hover:text-green-300"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={() => handleApproveRejectTrade(trade.id, 'Rejected')}
                          className="text-red-400 hover:text-red-300"
                        >
                          <XCircle size={18} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    );
  };

  const ReportsAnalyticsView = () => (
    <div className="space-y-6">
      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">Emissions, Waste & Energy Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={emissionsTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #00bcd4' }}
            />
            <Legend />
            <Line type="monotone" dataKey="emissions" stroke="#f44336" strokeWidth={2} />
            <Line type="monotone" dataKey="waste" stroke="#ff9800" strokeWidth={2} />
            <Line type="monotone" dataKey="energy" stroke="#00bcd4" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-4">Emissions by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #00bcd4' }}
              />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-4">Industry Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #00bcd4' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>
    </div>
  );

  const AuditLogsView = () => (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white mb-6">Audit & Activity Logs</h2>
      <div className="space-y-3">
        {activityLogs.map((log) => (
          <div
            key={log.id}
            className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
          >
            <div>
              <p className="text-white font-semibold">{log.action}</p>
              <p className="text-gray-400 text-sm">by {log.user}</p>
            </div>
            <p className="text-gray-400 text-sm">{log.timestamp}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );

  const PlaceholderView = ({ title }) => (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400">
        Content for the <span className="text-white font-semibold">{title}</span> section will be
        implemented here.
      </p>
      {title === 'Real-Time Monitoring' && (
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
        </div>
      )}
    </GlassCard>
  );

  // --- Modal Component ---
  const UserModal = ({ isOpen, onClose, user }) => {
    const [formData, setFormData] = useState(
      user || { name: '', email: '', role: 'Normal User', status: 'Active' }
    );
    const handleSubmit = (e) => {
      e.preventDefault();
      if (user) {
        setUsers(users.map((u) => (u.id === user.id ? { ...u, ...formData } : u)));
      } else {
        const newUser = {
          ...formData,
          id: users.length + 1,
          lastActive: new Date().toISOString().split('T')[0],
        };
        setUsers([...users, newUser]);
      }
      onClose();
    };
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-slate-800 border border-cyan-500/30 rounded-xl p-6 w-full max-w-md">
          <h3 className="text-2xl font-bold text-white mb-4">
            {user ? 'Edit User' : 'Add New User'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
              required
            />
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
            >
              <option>Normal User</option>
              <option>Industry Owner</option>
            </select>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg"
              >
                {user ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 md:hidden bg-black/50 p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Layout row: sidebar + main */}
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">{activeSection}</h1>

          {activeSection === 'Dashboard' && <DashboardView />}
          {activeSection === 'User Management' && <UserManagementView />}
          {activeSection === 'Industry Management' && <IndustryManagementView />}
          {activeSection === 'Trading Oversight' && <TradingOversightView />}
          {activeSection === 'Reports & Analytics' && <ReportsAnalyticsView />}
          {activeSection === 'Audit & Activity Logs' && <AuditLogsView />}
          {['Leaderboard & Scoring', 'Notifications & Alerts', 'Certificate & Compliance', 'Real-Time Monitoring', 'System Settings'].map(
            (section) =>
              activeSection === section && <PlaceholderView key={section} title={section} />
          )}
        </div>
      </div>

      <UserModal
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default AdminDashboard;
