import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardNavigator from './components/DashboardNavigator'

// Simple test component first
const TestComponent = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        {children}
      </div>
    </div>
  )
}

// Personal Profile Dashboard - HR & Personal Information Focus
const Dashboard = () => {
  // Salary comparison data (this year vs last year)
  const salaryComparisonData = [
    { month: 'T1', thisYear: 20, lastYear: 18 },
    { month: 'T2', thisYear: 21, lastYear: 19 },
    { month: 'T3', thisYear: 19, lastYear: 18 },
    { month: 'T4', thisYear: 22, lastYear: 20 },
    { month: 'T5', thisYear: 23, lastYear: 21 },
    { month: 'T6', thisYear: 24, lastYear: 22 },
    { month: 'T7', thisYear: 22, lastYear: 21 },
    { month: 'T8', thisYear: 24, lastYear: 22 },
    { month: 'T9', thisYear: 25, lastYear: 23 },
    { month: 'T10', thisYear: 23, lastYear: 22 },
    { month: 'T11', thisYear: 24, lastYear: 23 },
    { month: 'T12', thisYear: 25, lastYear: 24 }
  ]

  // Attendance calendar data
  const attendanceData = [
    { date: 1, status: 'present', type: 'work' },
    { date: 2, status: 'present', type: 'work' },
    { date: 3, status: 'present', type: 'work' },
    { date: 4, status: 'present', type: 'work' },
    { date: 5, status: 'present', type: 'work' },
    { date: 6, status: 'present', type: 'work' },
    { date: 7, status: 'present', type: 'work' },
    { date: 8, status: 'present', type: 'work' },
    { date: 9, status: 'present', type: 'work' },
    { date: 10, status: 'present', type: 'work' },
    { date: 11, status: 'present', type: 'work' },
    { date: 12, status: 'present', type: 'work' },
    { date: 13, status: 'present', type: 'work' },
    { date: 14, status: 'present', type: 'work' },
    { date: 15, status: 'present', type: 'work' },
    { date: 16, status: 'present', type: 'work' },
    { date: 17, status: 'present', type: 'work' },
    { date: 18, status: 'present', type: 'work' },
    { date: 19, status: 'present', type: 'work' },
    { date: 20, status: 'present', type: 'work' },
    { date: 21, status: 'present', type: 'work' },
    { date: 22, status: 'present', type: 'work' },
    { date: 23, status: 'absent', type: 'holiday' },
    { date: 24, status: 'absent', type: 'holiday' },
    { date: 25, status: 'absent', type: 'holiday' },
    { date: 26, status: 'present', type: 'work' },
    { date: 27, status: 'present', type: 'work' },
    { date: 28, status: 'present', type: 'work' },
    { date: 29, status: 'present', type: 'work' },
    { date: 30, status: 'present', type: 'work' },
    { date: 31, status: 'present', type: 'work' }
  ]

  // KPI details
  const kpiDetails = [
    { name: 'Hoàn thành dự án', target: 10, achieved: 12, percentage: 120, color: 'from-green-400 to-emerald-500' },
    { name: 'Chất lượng video', target: 95, achieved: 97, percentage: 102, color: 'from-blue-400 to-cyan-500' },
    { name: 'Deadline đúng hạn', target: 90, achieved: 94, percentage: 104, color: 'from-purple-400 to-indigo-500' },
    { name: 'Sáng tạo nội dung', target: 8, achieved: 9, percentage: 113, color: 'from-orange-400 to-red-500' },
    { name: 'Teamwork', target: 4.5, achieved: 4.8, percentage: 107, color: 'from-pink-400 to-rose-500' }
  ]

  // Evaluation history
  const evaluationHistory = [
    { quarter: 'Q1', score: 4.2, trend: 'up' },
    { quarter: 'Q2', score: 4.4, trend: 'up' },
    { quarter: 'Q3', score: 4.6, trend: 'up' },
    { quarter: 'Q4', score: 4.8, trend: 'up' }
  ]

  const salaryBreakdown = [
    { name: 'Lương cơ bản', value: '18M', percentage: 72, color: 'from-blue-400 to-blue-600' },
    { name: 'Thưởng KPI', value: '4M', percentage: 16, color: 'from-green-400 to-green-600' },
    { name: 'Phụ cấp', value: '2M', percentage: 8, color: 'from-purple-400 to-purple-600' },
    { name: 'Thưởng đặc biệt', value: '1M', percentage: 4, color: 'from-orange-400 to-orange-600' }
  ]

  const recentActivities = [
    { title: 'Đánh giá hiệu suất Q4 hoàn thành', time: '2 ngày trước', author: 'HR Manager', type: 'evaluation', priority: 'high', image: '📋' },
    { title: 'Đăng ký khóa học Leadership', time: '1 tuần trước', author: 'Training Team', type: 'training', priority: 'medium', image: '🎓' },
    { title: 'Nghỉ phép được duyệt', time: '3 ngày trước', author: 'HR System', type: 'leave', priority: 'low', image: '🏖️' },
    { title: 'Thưởng tháng 12 đã chuyển', time: '5 ngày trước', author: 'Finance Team', type: 'salary', priority: 'high', image: '💰' }
  ]

  const quickActions = [
    { title: 'Xem lương', icon: '💰', color: 'from-green-400 to-emerald-500', action: 'salary' },
    { title: 'Đăng ký nghỉ phép', icon: '🏖️', color: 'from-blue-400 to-cyan-500', action: 'leave' },
    { title: 'Đánh giá KPI', icon: '📊', color: 'from-purple-400 to-indigo-500', action: 'kpi' },
    { title: 'Đăng ký đào tạo', icon: '🎓', color: 'from-orange-400 to-red-500', action: 'training' },
    { title: 'Xem thông tin HR', icon: '👤', color: 'from-pink-400 to-rose-500', action: 'hr' },
    { title: 'Lộ trình nghề nghiệp', icon: '🚀', color: 'from-yellow-400 to-orange-500', action: 'career' }
  ]

  const trainingProgress = [
    { title: 'Leadership Skills', progress: 85, status: 'In Progress', icon: '👑', color: 'from-purple-500 to-indigo-500' },
    { title: 'Project Management', progress: 100, status: 'Completed', icon: '📋', color: 'from-green-500 to-emerald-500' },
    { title: 'Digital Marketing', progress: 60, status: 'In Progress', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { title: 'Data Analysis', progress: 30, status: 'Not Started', icon: '📊', color: 'from-orange-500 to-red-500' }
  ]

  const careerPath = [
    { title: 'Senior Video Producer', level: 'Current', icon: '🎬', color: 'from-blue-500 to-purple-500', earned: true },
    { title: 'Lead Creative Director', level: 'Next Level', icon: '👑', color: 'from-purple-500 to-pink-500', earned: false, progress: 75 },
    { title: 'Creative Manager', level: 'Future Goal', icon: '🏆', color: 'from-pink-500 to-red-500', earned: false, progress: 40 },
    { title: 'VP of Creative', level: 'Long-term', icon: '🌟', color: 'from-red-500 to-orange-500', earned: false, progress: 15 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
      <div className="space-y-6">
        {/* Personal Profile Header - Compact */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-5 left-5 w-10 h-10 bg-white/10 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-10 w-8 h-8 bg-white/10 rounded-full animate-ping animation-delay-1000"></div>
          </div>
          <div className="relative p-4 rounded-xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-12 w-12 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-purple-600">NA</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    <h2 className="text-lg font-bold">Nguyễn Văn An</h2>
                    <p className="text-sm opacity-90">Senior Video Producer • ID: VGA001</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/30">
                      <span className="text-xs font-medium">💰 25M VNĐ</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/30">
                      <span className="text-xs font-medium">📅 22 ngày</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/30">
                      <span className="text-xs font-medium">⭐ 4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl opacity-20 animate-bounce">👤</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section - 3 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Salary Line Chart - 12 months */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-900 flex items-center">
                <span className="mr-1">💰</span>
                Lương 12 tháng
              </h3>
              <div className="flex items-center space-x-2 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                  <span>2023</span>
                </div>
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="relative h-24 bg-gray-50 rounded-lg p-2">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <span>25M</span>
                <span>20M</span>
                <span>15M</span>
              </div>
              
              {/* Chart area */}
              <div className="ml-8 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 33, 66, 100].map((percent) => (
                    <div key={percent} className="border-t border-gray-200" style={{ top: `${percent}%` }}></div>
                  ))}
                </div>
                
                {/* Data points and lines */}
                <div className="relative h-full flex items-end justify-between">
                  {salaryComparisonData.map((item, index) => {
                    const thisYearY = ((25 - item.thisYear) / 10) * 100
                    const lastYearY = ((25 - item.lastYear) / 10) * 100
                    
                    return (
                      <div key={index} className="flex flex-col items-center relative">
                        {/* This year line point */}
                        <div 
                          className="absolute w-2 h-2 bg-blue-500 rounded-full border-2 border-white shadow-sm"
                          style={{ bottom: `${thisYearY}%` }}
                        ></div>
                        {/* Last year line point */}
                        <div 
                          className="absolute w-2 h-2 bg-gray-400 rounded-full border-2 border-white shadow-sm"
                          style={{ bottom: `${lastYearY}%` }}
                        ></div>
                        {/* Month label */}
                        <div className="absolute -bottom-4 text-xs font-semibold text-gray-600">
                          {item.month}
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* 2024 line */}
                  <polyline
                    points={salaryComparisonData.map((item, index) => {
                      const x = (index / (salaryComparisonData.length - 1)) * 100
                      const y = 100 - ((25 - item.thisYear) / 10) * 100
                      return `${x}%,${y}%`
                    }).join(' ')}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  {/* 2023 line */}
                  <polyline
                    points={salaryComparisonData.map((item, index) => {
                      const x = (index / (salaryComparisonData.length - 1)) * 100
                      const y = 100 - ((25 - item.lastYear) / 10) * 100
                      return `${x}%,${y}%`
                    }).join(' ')}
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            
            {/* Summary */}
            <div className="flex justify-between text-xs mt-2">
              <span className="text-gray-600">TB: +1.5M/tháng</span>
              <span className="font-semibold text-green-600">+6.25% năm</span>
            </div>
          </div>

          {/* Salary Breakdown - Compact */}
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-3 shadow-lg border border-yellow-200">
            <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-1">💰</span>
              Chi tiết T12
            </h3>
            <div className="space-y-1.5">
              {salaryBreakdown.map((item, index) => (
                <div key={index} className="p-1.5 bg-gray-50/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                    <span className="text-xs font-bold text-gray-900">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-0.5">
                    <div
                      className="h-0.5 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${item.percentage}%`,
                        background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-0.5">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance Calendar - Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-3 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-gray-900 flex items-center">
                <span className="mr-1">📅</span>
                Chấm công T12
              </h3>
              <span className="text-xs font-semibold text-blue-600">28/31</span>
            </div>
            
            {/* Compact calendar grid */}
            <div className="grid grid-cols-7 gap-0.5 mb-1">
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day) => (
                <div key={day} className="text-center text-xs font-semibold text-gray-500 py-0.5">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0.5">
              {attendanceData.map((item) => (
                <div
                  key={item.date}
                  className={`h-4 rounded-sm flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                    item.status === 'present'
                      ? item.type === 'work'
                        ? 'bg-green-400 text-white hover:bg-green-500'
                        : 'bg-blue-400 text-white hover:bg-blue-500'
                      : 'bg-red-300 text-red-700 hover:bg-red-400'
                  }`}
                >
                  {item.date}
                </div>
              ))}
            </div>
            
            {/* Compact legend */}
            <div className="flex items-center justify-center space-x-2 mt-1 text-xs">
              <div className="flex items-center">
                <div className="w-1 h-1 bg-green-400 rounded mr-1"></div>
                <span>Làm</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-blue-400 rounded mr-1"></div>
                <span>Thêm</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-red-300 rounded mr-1"></div>
                <span>Nghỉ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* KPI Details */}
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-900 flex items-center">
                <span className="mr-1">📊</span>
                KPI T12
              </h3>
              <span className="text-xs font-semibold text-purple-600">TB: 109%</span>
            </div>
            <div className="space-y-1.5">
              {kpiDetails.map((kpi, index) => (
                <div key={index} className="p-2 bg-gray-50/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 text-xs">{kpi.name}</h4>
                    <span className="text-xs font-bold text-gray-900">{kpi.achieved}/{kpi.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
                    <div
                      className="h-1 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${Math.min(kpi.percentage, 100)}%`,
                        background: `linear-gradient(135deg, ${kpi.color.split(' ')[1]}, ${kpi.color.split(' ')[3]})`
                      }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">T: {kpi.target}</span>
                    <span className="font-semibold text-green-600">+{kpi.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation History */}
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-900 flex items-center">
                <span className="mr-1">⭐</span>
                Đánh giá quý
              </h3>
              <span className="text-xs font-semibold text-orange-600">↗️ Tăng</span>
            </div>
            <div className="space-y-1.5">
              {evaluationHistory.map((evaluation, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-8 text-xs font-semibold text-gray-600">{evaluation.quarter}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500"
                      style={{ width: `${(evaluation.score / 5) * 100}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white drop-shadow-sm">{evaluation.score}</span>
                    </div>
                  </div>
                  <div className="w-10 text-right">
                    <div className="text-xs font-bold text-gray-900">{evaluation.score}/5</div>
                    <div className="text-xs text-gray-500">
                      {evaluation.trend === 'up' ? '📈' : '📉'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 p-2 bg-gray-50/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700">TB năm:</span>
                <span className="text-xs font-bold text-orange-600">4.5/5.0</span>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Quick Actions */}
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-pink-200">
            <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-1">⚡</span>
              Thao tác nhanh
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center p-2 rounded-lg hover:shadow-lg transition-all duration-200 group"
                  style={{background: `linear-gradient(135deg, ${action.color.split(' ')[1]}, ${action.color.split(' ')[3]})`}}
                >
                  <span className="text-base mb-1 group-hover:scale-110 transition-transform duration-200">
                    {action.icon}
                  </span>
                  <span className="text-white font-semibold text-xs text-center group-hover:translate-y-1 transition-transform duration-200">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Training Progress */}
          <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-teal-200">
            <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-1">🎓</span>
              Tiến độ đào tạo
            </h3>
            <div className="space-y-1.5">
              {trainingProgress.map((training, index) => (
                <div key={index} className="p-1.5 bg-gray-50/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1.5">
                      <div className="text-sm">{training.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs">{training.title}</h4>
                        <span className={`text-xs px-1 py-0.5 rounded-full ${
                          training.status === 'Completed' ? 'bg-green-100 text-green-600' :
                          training.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {training.status === 'Completed' ? '✅' :
                           training.status === 'In Progress' ? '🔄' : '⏸️'}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-900">{training.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="h-1 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${training.progress}%`,
                        background: `linear-gradient(135deg, ${training.color.split(' ')[1]}, ${training.color.split(' ')[3]})`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Path */}
        <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-indigo-200">
          <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
            <span className="mr-1">🚀</span>
            Lộ trình nghề nghiệp
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5">
            {careerPath.map((path, index) => (
              <div key={index} className={`p-1.5 rounded-lg border-2 relative ${
                path.earned
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
                  : 'bg-gray-50/50 border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-sm mb-1">{path.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">{path.title}</h4>
                  <p className="text-xs text-gray-600 mb-1">{path.level}</p>
                  {path.earned ? (
                    <span className="bg-green-100 text-green-600 text-xs px-1 py-0.5 rounded-full font-semibold">
                      ✅ Hiện tại
                    </span>
                  ) : (
                    <div>
                      <div className="w-full bg-gray-200 rounded-full h-0.5 mb-1">
                        <div
                          className="h-0.5 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${path.progress}%`,
                            background: `linear-gradient(135deg, ${path.color.split(' ')[1]}, ${path.color.split(' ')[3]})`
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{path.progress}%</span>
                    </div>
                  )}
                </div>
                {index < careerPath.length - 1 && (
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-emerald-200">
          <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
            <span className="mr-1">📈</span>
            Hoạt động gần đây
          </h3>
          <div className="space-y-1.5">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-2 p-1.5 rounded-lg hover:bg-gray-50/50 transition-all duration-200 group cursor-pointer"
              >
                <div className="text-sm">{activity.image}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-xs group-hover:text-blue-600 transition-colors duration-200">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center mt-0.5">
                    <span className="mr-1">
                      {activity.type === 'evaluation' ? '📋' :
                       activity.type === 'training' ? '🎓' :
                       activity.type === 'leave' ? '🏖️' : '💰'}
                    </span>
                    {activity.author} • {activity.time}
                  </p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  activity.priority === 'high' ? 'bg-red-500 animate-pulse' :
                  activity.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const Newsfeed = () => {
  const [posts] = useState([
    {
      id: 1,
      author: { name: 'Creative Director', role: 'Phòng Sáng tạo', avatar: '🎬' },
      content: '🚀 BREAKING: Video "iPhone 15 Pro Max Review" của team đã đạt 2.4M views trong 48 giờ! Đây là thành tích tốt nhất trong lịch sử công ty. Cảm ơn team Production và Post-production đã làm việc xuất sắc! 🏆',
      stats: { likes: 324, comments: 67, shares: 45 },
      timestamp: '30 phút trước',
      tags: ['#Trending', '#iPhone15', '#Milestone', '#TeamWork'],
      isPinned: true,
      hasImage: true,
      imageUrl: '📱',
      type: 'achievement'
    },
    {
      id: 2,
      author: { name: 'Lê Thị Dung', role: 'Video Editor', avatar: '✂️' },
      content: 'Chia sẻ một số tips editing After Effects mà tôi học được từ khóa học mới. Đặc biệt là technique "Cinematic Color Grading" - sẽ giúp video trông chuyên nghiệp hơn rất nhiều! 🎨',
      stats: { likes: 189, comments: 34, shares: 28 },
      timestamp: '2 giờ trước',
      tags: ['#Tutorial', '#AfterEffects', '#ColorGrading', '#Tips'],
      isPinned: false,
      hasImage: false,
      type: 'knowledge'
    },
    {
      id: 3,
      author: { name: 'Trần Văn Cường', role: 'Motion Graphics Artist', avatar: '🎭' },
      content: 'Behind the scenes của dự án animation cho Samsung Galaxy S24! Quá trình từ concept đến final render mất 3 tuần. Rất tự hào về kết quả cuối cùng! ✨',
      stats: { likes: 267, comments: 45, shares: 32 },
      timestamp: '4 giờ trước',
      tags: ['#BTS', '#Samsung', '#Animation', '#BehindTheScenes'],
      isPinned: false,
      hasImage: true,
      imageUrl: '🎨',
      type: 'project'
    },
    {
      id: 4,
      author: { name: 'Phạm Văn Em', role: 'YouTube Manager', avatar: '📺' },
      content: 'Phân tích YouTube Analytics tháng 12: Tổng lượt xem tăng 35%, watch time tăng 42%, subscriber tăng 18%. Xu hướng content tech review và unboxing đang rất hot! 📊',
      stats: { likes: 156, comments: 23, shares: 19 },
      timestamp: '6 giờ trước',
      tags: ['#Analytics', '#YouTube', '#Growth', '#Data'],
      isPinned: false,
      hasImage: false,
      type: 'data'
    },
    {
      id: 5,
      author: { name: 'Nguyễn Thị Bình', role: 'Content Creator', avatar: '📸' },
      content: 'Workshop "Storytelling trong Video Marketing" diễn ra hôm nay thật bổ ích! Học được nhiều kỹ thuật mới để tạo ra những video có tính lan tỏa cao. Cảm ơn trainer! 🎓',
      stats: { likes: 98, comments: 18, shares: 12 },
      timestamp: '8 giờ trước',
      tags: ['#Workshop', '#Storytelling', '#Marketing', '#Learning'],
      isPinned: false,
      hasImage: true,
      imageUrl: '🎓',
      type: 'event'
    },
    {
      id: 6,
      author: { name: 'Admin', role: 'Hệ thống', avatar: '🤖' },
      content: 'Thông báo: Tuần tới sẽ có cuộc thi "Best Video of 2024" với giải thưởng 10 triệu VNĐ! Deadline nộp bài: 31/12. Chúc các bạn may mắn! 🏆',
      stats: { likes: 145, comments: 56, shares: 23 },
      timestamp: '1 ngày trước',
      tags: ['#Contest', '#Award', '#BestVideo2024', '#Competition'],
      isPinned: false,
      hasImage: false,
      type: 'announcement'
    }
  ])

  const featuredCreators = [
    { name: 'Nguyễn Văn An', role: 'Senior Producer', avatar: '👨‍💼', videos: 47, views: '2.4M', subscribers: '125K' },
    { name: 'Lê Thị Dung', role: 'Video Editor', avatar: '👩‍💻', videos: 32, views: '1.8M', subscribers: '98K' },
    { name: 'Trần Văn Cường', role: 'Motion Artist', avatar: '👨‍🎨', videos: 28, views: '1.5M', subscribers: '87K' },
    { name: 'Phạm Văn Em', role: 'Content Creator', avatar: '👩‍🎬', videos: 41, views: '2.1M', subscribers: '112K' }
  ]

          const companyHighlights = [
            { title: 'Doanh thu tháng 12', value: '$125K', change: '+15%', icon: '💰', trend: 'up' },
            { title: 'Video xuất bản', value: '156', change: '+23', icon: '🎬', trend: 'up' },
            { title: 'Tổng lượt xem', value: '12.4M', change: '+2.1M', icon: '👁️', trend: 'up' },
            { title: 'Khách hàng mới', value: '8', change: '+3', icon: '👥', trend: 'up' },
            { title: 'Nhân viên mới', value: '12', change: '+4', icon: '👨‍💼', trend: 'up' },
            { title: 'Dự án hoàn thành', value: '45', change: '+8', icon: '✅', trend: 'up' }
          ]

          const companyNews = [
            { title: 'VEGA Media đạt giải thưởng "Best Creative Agency 2024"', content: 'Công ty vinh dự nhận giải thưởng danh giá từ Hiệp hội Quảng cáo Việt Nam...', time: '2 giờ trước', author: 'PR Team', type: 'award', priority: 'high' },
            { title: 'Khai trương văn phòng mới tại TP.HCM', content: 'Văn phòng mới với diện tích 2000m² sẽ là nơi làm việc cho 150 nhân viên...', time: '1 ngày trước', author: 'HR Team', type: 'expansion', priority: 'high' },
            { title: 'Chương trình đào tạo kỹ năng mềm cho toàn bộ nhân viên', content: 'Khóa học về Leadership, Communication và Teamwork sẽ bắt đầu từ tháng 1/2025...', time: '3 ngày trước', author: 'Training Team', type: 'training', priority: 'medium' }
          ]

          const companyEvents = [
            { title: 'Year End Party 2024', date: '28/12/2024', time: '18:00', location: 'Hotel InterContinental', attendees: 180, status: 'upcoming', type: 'party' },
            { title: 'Team Building - Đà Nẵng', date: '15-17/01/2025', time: 'All day', location: 'Đà Nẵng', attendees: 120, status: 'upcoming', type: 'team-building' },
            { title: 'Workshop: AI trong Content Creation', date: '10/01/2025', time: '14:00', location: 'Conference Room A', attendees: 50, status: 'upcoming', type: 'workshop' }
          ]

  return (
    <div className="space-y-8">
      {/* Digital Life Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping animation-delay-2000"></div>
        </div>
        <div className="relative p-8 rounded-3xl text-white">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                🌟 Cuộc sống số
              </h2>
              <p className="text-xl opacity-90">Nơi chia sẻ, kết nối và sáng tạo trong thế giới truyền thông</p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                  <span className="text-sm font-medium">🔥 9 tin hot</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                  <span className="text-sm font-medium">📌 2 bài ghim</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                  <span className="text-sm font-medium">🎬 156 videos</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-8xl opacity-20 animate-bounce">🌟</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Highlights */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">📊</span>
          Hiệu suất công ty
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companyHighlights.map((highlight, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl">{highlight.icon}</div>
                <div className="text-sm font-semibold text-green-600">{highlight.change}</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{highlight.value}</h4>
              <p className="text-sm text-gray-600">{highlight.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Company News */}
        <div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📰</span>
              Tin tức công ty
            </h3>
            <div className="space-y-4">
              {companyNews.map((news, index) => (
                <div key={index} className="p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{news.title}</h4>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{news.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{news.author} • {news.time}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      news.type === 'award' ? 'bg-yellow-100 text-yellow-600' :
                      news.type === 'expansion' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {news.type === 'award' ? '🏆 Giải thưởng' :
                       news.type === 'expansion' ? '🏢 Mở rộng' : '🎓 Đào tạo'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Company Events */}
        <div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📅</span>
              Sự kiện sắp tới
            </h3>
            <div className="space-y-4">
              {companyEvents.map((event, index) => (
                <div key={index} className="p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{event.title}</h4>
                  <div className="space-y-1 text-xs text-gray-600 mb-3">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      {event.date} - {event.time}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👥</span>
                      {event.attendees} người tham gia
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.type === 'party' ? 'bg-pink-100 text-pink-600' :
                      event.type === 'team-building' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {event.type === 'party' ? '🎉 Party' :
                       event.type === 'team-building' ? '🤝 Team Building' : '🎓 Workshop'}
                    </span>
                    <span className="text-xs text-green-600 font-semibold">Sắp diễn ra</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Creators */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">👥</span>
          Gương mặt tiêu biểu
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCreators.map((creator, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {creator.avatar}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{creator.name}</h4>
                <p className="text-xs text-gray-600 mb-3">{creator.role}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Videos:</span>
                    <span className="font-semibold text-blue-600">{creator.videos}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Views:</span>
                    <span className="font-semibold text-green-600">{creator.views}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Subs:</span>
                    <span className="font-semibold text-purple-600">{creator.subscribers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post Section */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">NA</span>
          </div>
          <button className="flex-1 text-left px-4 py-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            Chia sẻ ý tưởng, kinh nghiệm hoặc thành tựu của bạn...
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
            <span className="mr-2">📷</span>
            Ảnh
          </button>
          <button className="flex items-center text-gray-500 hover:text-red-600 transition-colors">
            <span className="mr-2">🎥</span>
            Video
          </button>
          <button className="flex items-center text-gray-500 hover:text-green-600 transition-colors">
            <span className="mr-2">📊</span>
            Thống kê
          </button>
          <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors">
            <span className="mr-2">🎨</span>
            Portfolio
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className={`group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/20 ${
              post.isPinned ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50' : ''
            }`}
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {post.author.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{post.author.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="mr-2">👔</span>
                    {post.author.role} • {post.timestamp}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {post.isPinned && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                    📌 Bài ghim
                  </span>
                )}
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  post.type === 'achievement' ? 'bg-green-100 text-green-600' :
                  post.type === 'knowledge' ? 'bg-blue-100 text-blue-600' :
                  post.type === 'project' ? 'bg-purple-100 text-purple-600' :
                  post.type === 'data' ? 'bg-orange-100 text-orange-600' :
                  post.type === 'event' ? 'bg-pink-100 text-pink-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {post.type === 'achievement' ? '🏆 Thành tựu' :
                   post.type === 'knowledge' ? '💡 Chia sẻ' :
                   post.type === 'project' ? '🎨 Dự án' :
                   post.type === 'data' ? '📊 Phân tích' :
                   post.type === 'event' ? '🎓 Sự kiện' : '📢 Thông báo'}
                </span>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200">
                  ⋮
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-6">
              <p className="text-gray-900 leading-relaxed text-lg mb-4">{post.content}</p>
              
              {/* Post Image */}
              {post.hasImage && (
                <div className="mb-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                  <div className="text-6xl text-center">{post.imageUrl}</div>
                </div>
              )}
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-8">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-all duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">❤️</span>
                  <span className="text-sm font-semibold">{post.stats.likes}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-all duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">💬</span>
                  <span className="text-sm font-semibold">{post.stats.comments}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-all duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">🔄</span>
                  <span className="text-sm font-semibold">{post.stats.shares}</span>
                </button>
              </div>
              
              <button className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 group">
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">🔖</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const EmployeeEngagement = () => (
  <TestComponent title="🏆 Employee Engagement">
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">Bảng xếp hạng nhân viên</h3>
      <p className="text-gray-600">Hệ thống vinh danh và gắn kết nhân viên...</p>
    </div>
  </TestComponent>
)

const InnovationHub = () => (
  <TestComponent title="💡 Innovation Hub">
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">Ý tưởng sáng tạo</h3>
      <p className="text-gray-600">Nơi chia sẻ và bình chọn ý tưởng...</p>
    </div>
  </TestComponent>
)

const SelfServicePortal = () => (
  <TestComponent title="👤 Self-Service Portal">
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">Dịch vụ cá nhân</h3>
      <p className="text-gray-600">Quản lý thông tin cá nhân và các dịch vụ HR...</p>
    </div>
  </TestComponent>
)

const CollaborationTools = () => (
  <TestComponent title="🤝 Collaboration Tools">
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">Cộng tác & Làm việc</h3>
      <p className="text-gray-600">Chat, quản lý dự án, chia sẻ tài liệu...</p>
    </div>
  </TestComponent>
)

// Modern Layout with animations
const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  const tabs = [
    { id: 'dashboard', name: 'Trang cá nhân', icon: '👤', color: 'from-blue-500 to-purple-600' },
    { id: 'newsfeed', name: 'Cuộc sống số', icon: '🌟', color: 'from-pink-500 to-red-600' },
    { id: 'engagement', name: 'Gắn kết', icon: '🏆', color: 'from-yellow-500 to-orange-600' },
    { id: 'innovation', name: 'Sáng kiến', icon: '💡', color: 'from-green-500 to-teal-600' },
    { id: 'self-service', name: 'Dịch vụ', icon: '⚙️', color: 'from-indigo-500 to-purple-600' },
    { id: 'collaboration', name: 'Cộng tác', icon: '🤝', color: 'from-purple-500 to-pink-600' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg animate-pulse">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  VEGA Life
                </span>
                <p className="text-xs text-gray-500">Employee Experience Hub</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                  🔔
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 bg-white/50 rounded-full px-4 py-2 shadow-md">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NA</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Nguyễn Văn An</p>
                  <p className="text-xs text-gray-500">Level 5 • 2840 pts</p>
                </div>
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Modern Sidebar */}
        <nav className={`${sidebarOpen ? 'w-72' : 'w-16'} bg-white/70 backdrop-blur-lg shadow-xl h-screen transition-all duration-300 border-r border-white/20`}>
          <div className="p-4">
            {/* Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-center p-2 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <span className="text-xl">{sidebarOpen ? '←' : '→'}</span>
            </button>

            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                        : 'text-gray-600 hover:bg-white/50 hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {tab.icon}
                    </span>
                    {sidebarOpen && (
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {tab.name}
                      </span>
                    )}
                    {activeTab === tab.id && sidebarOpen && (
                      <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Stats */}
            {sidebarOpen && (
              <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Ideas Today</span>
                    <span className="font-semibold text-blue-600">3</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Kudos Received</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Points Earned</span>
                    <span className="font-semibold text-purple-600">+120</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content with smooth transitions */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="animate-fadeIn">
                <Dashboard />
              </div>
            )}
            {activeTab === 'newsfeed' && (
              <div className="animate-slideInRight">
                <Newsfeed />
              </div>
            )}
            {activeTab === 'engagement' && (
              <div className="animate-slideInLeft">
                <EmployeeEngagement />
              </div>
            )}
            {activeTab === 'innovation' && (
              <div className="animate-bounceIn">
                <InnovationHub />
              </div>
            )}
            {activeTab === 'self-service' && (
              <div className="animate-fadeIn">
                <SelfServicePortal />
              </div>
            )}
            {activeTab === 'collaboration' && (
              <div className="animate-slideInUp">
                <CollaborationTools />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardNavigator />} />
          <Route path="/old" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/newsfeed" element={<Newsfeed />} />
                <Route path="/engagement" element={<EmployeeEngagement />} />
                <Route path="/innovation" element={<InnovationHub />} />
                <Route path="/self-service" element={<SelfServicePortal />} />
                <Route path="/collaboration" element={<CollaborationTools />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App

