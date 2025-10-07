import React from 'react'

const EmployeeProfile = () => {
  // Sample data
  const monthlyGoals = [
    { goal: 'Sản xuất 8 video', completed: 6, total: 8, color: 'blue' },
    { goal: 'Tối ưu SEO cho 15 video', completed: 12, total: 15, color: 'orange' }
  ]

  const workSchedule = [
    { day: '1', type: 'work' }, { day: '2', type: 'work' }, { day: '3', type: 'work' },
    { day: '4', type: 'work' }, { day: '5', type: 'work' }, { day: '6', type: 'weekend' },
    { day: '7', type: 'weekend' }, { day: '8', type: 'work' }, { day: '9', type: 'work' },
    { day: '10', type: 'leave' }, { day: '11', type: 'work' }, { day: '12', type: 'work' },
    { day: '13', type: 'weekend' }, { day: '14', type: 'weekend' }
  ]

  const hrPolicies = [
    { title: 'Lương thưởng', description: '13th month salary + KPI bonus', icon: '💰', status: 'Active', statusColor: 'blue' },
    { title: 'Bảo hiểm', description: 'Social + Health + Accident', icon: '🛡️', status: '100%', statusColor: 'green' },
    { title: 'Nghỉ phép', description: '12 ngày/năm + sick leave', icon: '🧳', status: '8 còn lại', statusColor: 'yellow' },
    { title: 'Đào tạo', description: 'Budget 5M VND/năm', icon: '🎓', status: '3.2M còn lại', statusColor: 'purple' }
  ]

  const hrDocuments = [
    { title: 'Quy chế công ty', icon: '📄', type: 'PDF' },
    { title: 'Hướng dẫn nghỉ phép', icon: '📋', type: 'PDF' },
    { title: 'Chính sách bảo hiểm', icon: '📑', type: 'PDF' },
    { title: 'Bảng lương theo cấp bậc', icon: '📊', type: 'Excel' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Trang cá nhân</h1>
                <p className="text-gray-600">Quản lý thông tin cá nhân và công việc</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                🔔
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Wide */}
          <div className="lg:col-span-3 space-y-6">
            {/* Income Chart */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thu nhập 12 tháng gần nhất</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-end space-x-4 text-xs mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
                    <span className="text-gray-600 font-medium">2024</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-gray-400 mr-2"></div>
                    <span className="text-gray-600 font-medium">2023</span>
                  </div>
                </div>
                <div className="relative h-48">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                    <span>85M</span>
                    <span>70M</span>
                    <span>55M</span>
                    <span>40M</span>
                    <span>25M</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <polyline
                      points="50,150 100,120 150,100 200,80 250,90 300,70 350,60"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                    />
                    <polyline
                      points="50,160 100,140 150,130 200,110 250,120 300,100 350,90"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Salary Structure */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cơ cấu lương tháng này</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="20"/>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#3b82f6" strokeWidth="20" 
                            strokeDasharray={`${2 * Math.PI * 80 * 0.6} ${2 * Math.PI * 80}`}
                            strokeDashoffset={2 * Math.PI * 80 * 0.25}
                            transform="rotate(-90 100 100)"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">60%</div>
                      <div className="text-sm text-gray-600">Base Salary</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Phúc lợi</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🏥</div>
                  <h4 className="font-semibold text-gray-900">Bảo hiểm sức khỏe</h4>
                  <p className="text-sm text-gray-600">100% coverage</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">🏖️</div>
                  <h4 className="font-semibold text-gray-900">Nghỉ phép</h4>
                  <p className="text-sm text-gray-600">12 ngày/năm</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-2">🎓</div>
                  <h4 className="font-semibold text-gray-900">Đào tạo</h4>
                  <p className="text-sm text-gray-600">5M VND/năm</p>
                </div>
              </div>
            </div>

            {/* Completed Courses */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Khóa học đã hoàn thành</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mr-4">🎬</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">Video Production Mastery</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>100%</span>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Path */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lộ trình thăng tiến</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border-2 border-green-200 bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Junior Video Editor</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                  </div>
                  <p className="text-sm text-gray-600">Completed: 2023</p>
                </div>
                <div className="p-4 rounded-xl border-2 border-blue-200 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Senior Video Editor</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Current</span>
                  </div>
                  <p className="text-sm text-gray-600">Started: 2024</p>
                </div>
              </div>
            </div>

            {/* Competency Assessment */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Đánh giá năng lực</h3>
              <div className="flex items-center space-x-6">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                    <polygon
                      points="100,40 140,80 120,140 80,140 60,80"
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Video Editing</span>
                    <span className="text-sm font-bold text-blue-600">4/5</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Creative Thinking</span>
                    <span className="text-sm font-bold text-blue-600">5/5</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Teamwork</span>
                    <span className="text-sm font-bold text-blue-600">4/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outstanding Achievements */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thành tích nổi bật</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="text-3xl mr-4">🏆</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900">Video của tháng</h5>
                    <p className="text-sm text-gray-600">Tháng 10/2024</p>
                    <p className="text-sm text-gray-700 mt-1">1.2M views, 95% retention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Narrow */}
          <div className="space-y-6">
            {/* Monthly Goals */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mục tiêu tháng này</h3>
              <div className="space-y-4">
                {monthlyGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-semibold text-gray-900">{goal.goal}</h5>
                      <span className="text-sm text-gray-600">{goal.completed}/{goal.total} hoàn thành</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          goal.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${(goal.completed / goal.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Schedule */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lịch làm việc</h3>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
                  <div key={day} className="text-center text-xs font-semibold text-gray-500 py-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {workSchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded flex items-center justify-center text-xs font-semibold ${
                      item.type === 'work' ? 'bg-green-400 text-white' :
                      item.type === 'leave' ? 'bg-pink-300 text-pink-700' :
                      'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4 mt-3 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded mr-1"></div>
                  <span>Ngày công</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-300 rounded mr-1"></div>
                  <span>Nghỉ phép</span>
                </div>
              </div>
            </div>

            {/* HR Policies & Benefits */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Chính sách & Phúc lợi</h3>
              <div className="space-y-3">
                {hrPolicies.map((policy, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 bg-${policy.statusColor}-50 rounded-lg`}>
                    <div className="flex items-center">
                      <span className={`text-${policy.statusColor}-600 mr-3`}>{policy.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{policy.title}</p>
                        <p className="text-xs text-gray-600">{policy.description}</p>
                      </div>
                    </div>
                    <span className={`text-xs bg-${policy.statusColor}-100 text-${policy.statusColor}-800 px-2 py-1 rounded-full`}>
                      {policy.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Document Search */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tra cứu hồ sơ & quy định</h3>
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm tài liệu, quy định..."
                    className="w-full px-4 py-2 pl-10 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
                
                <div className="space-y-2">
                  {hrDocuments.map((doc, index) => (
                    <button key={index} className="w-full text-left flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-3">{doc.icon}</span>
                        <span className="text-sm">{doc.title}</span>
                      </div>
                      <span className="text-xs text-gray-400">{doc.type}</span>
                    </button>
                  ))}
                </div>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm transition-colors">
                  Xem tất cả tài liệu
                </button>
              </div>
            </div>

            {/* Quick Statistics */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thống kê nhanh</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">▶️</span>
                    <span className="text-sm text-gray-600">Videos this month</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👀</span>
                    <span className="text-sm text-gray-600">Total views</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">2.4M</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👍</span>
                    <span className="text-sm text-gray-600">Avg engagement</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">12.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeProfile