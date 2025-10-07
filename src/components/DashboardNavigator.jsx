import React, { useState } from 'react'
import RevenueDashboard from './RevenueDashboard'
import EmployeeProfile from './EmployeeProfile'
import InternalSocialNetwork from './InternalSocialNetwork'
import HRSearchChat from './HRSearchChat'

const DashboardNavigator = () => {
  const [activeDashboard, setActiveDashboard] = useState('social')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const dashboards = [
    {
      id: 'social',
      name: 'Cuộc sống số',
      icon: '🌟',
      component: InternalSocialNetwork,
      description: 'Trang chủ - Mạng xã hội nội bộ'
    },
    {
      id: 'profile',
      name: 'Trang cá nhân',
      icon: '👤',
      component: EmployeeProfile,
      description: 'Thông tin cá nhân và công việc'
    },
    {
      id: 'revenue',
      name: 'Kết quả kinh doanh',
      icon: '💰',
      component: RevenueDashboard,
      description: 'Quản lý doanh thu và hiệu suất'
    },
    {
      id: 'hr-chat',
      name: 'Chat',
      icon: '💬',
      component: HRSearchChat,
      description: 'Tra cứu nhân sự và chat'
    }
  ]

  const ActiveComponent = dashboards.find(d => d.id === activeDashboard)?.component || InternalSocialNetwork

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex">
      {/* Left Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-16'} bg-white/90 backdrop-blur-lg shadow-xl transition-all duration-300 border-r border-white/20 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">VEGA Life</h1>
                <p className="text-xs text-gray-500">Employee Hub</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {dashboards.map((dashboard) => (
              <li key={dashboard.id}>
                <button
                  onClick={() => setActiveDashboard(dashboard.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                    activeDashboard === dashboard.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                    {dashboard.icon}
                  </span>
                  {sidebarOpen && (
                    <div>
                      <div className="font-semibold text-sm">{dashboard.name}</div>
                      <div className="text-xs opacity-75">{dashboard.description}</div>
                    </div>
                  )}
                  {activeDashboard === dashboard.id && sidebarOpen && (
                    <div className="ml-auto">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Notifications & Settings */}
        {sidebarOpen && (
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors relative">
                <span className="text-lg mr-2">🔔</span>
                <span className="text-sm">Thông báo</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-lg mr-2">⚙️</span>
                <span className="text-sm">Cài đặt</span>
              </button>
            </div>
          </div>
        )}

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">👩</span>
            </div>
            {sidebarOpen && (
              <div className="ml-3 flex-1">
                <div className="text-sm font-semibold text-gray-900">Nguyễn Thị Mai</div>
                <div className="text-xs text-gray-500">Senior Producer</div>
                <div className="flex items-center mt-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-gray-500">Online</span>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}

export default DashboardNavigator

