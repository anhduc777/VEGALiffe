import React from 'react'

const EmployeeProfile = () => {
  // Sample data - Rich data for demo
  const incomeData = [
    { month: 'T1', amount: 45, previous: 42, bonus: 8, base: 37 },
    { month: 'T2', amount: 52, previous: 45, bonus: 12, base: 40 },
    { month: 'T3', amount: 48, previous: 52, bonus: 10, base: 38 },
    { month: 'T4', amount: 62, previous: 48, bonus: 15, base: 47 },
    { month: 'T5', amount: 58, previous: 62, bonus: 13, base: 45 },
    { month: 'T6', amount: 68, previous: 58, bonus: 18, base: 50 },
    { month: 'T7', amount: 72, previous: 68, bonus: 20, base: 52 },
    { month: 'T8', amount: 68, previous: 72, bonus: 18, base: 50 },
    { month: 'T9', amount: 72, previous: 68, bonus: 19, base: 53 },
    { month: 'T10', amount: 78, previous: 72, bonus: 22, base: 56 },
    { month: 'T11', amount: 82, previous: 78, bonus: 24, base: 58 },
    { month: 'T12', amount: 85, previous: 82, bonus: 25, base: 60 }
  ]

  const salaryStructure = [
    { name: 'Lương cơ bản', amount: 60, color: 'blue', percentage: 70 },
    { name: 'Phụ cấp', amount: 18, color: 'orange', percentage: 21 },
    { name: 'Thưởng KPI', amount: 9, color: 'yellow', percentage: 9 }
  ]

  const benefits = [
    { icon: '🛡️', title: 'Bảo hiểm', description: '100% phí y tế' },
    { icon: '🎁', title: 'Voucher', description: '₫2.5M/tháng' },
    { icon: '☀️', title: 'Nghỉ dưỡng', description: '15 ngày/năm' }
  ]

  const monthlyGoals = [
    { goal: 'Sản xuất 8 video', completed: 6, total: 8, color: 'blue' },
    { goal: 'Tối ưu SEO cho 15 video', completed: 12, total: 15, color: 'orange' }
  ]

  const workSchedule = [
    { day: 1, type: 'work' }, { day: 2, type: 'work' }, { day: 3, type: 'work' },
    { day: 4, type: 'work' }, { day: 5, type: 'work' }, { day: 6, type: 'weekend' },
    { day: 7, type: 'weekend' }, { day: 8, type: 'work' }, { day: 9, type: 'work' },
    { day: 10, type: 'leave' }, { day: 11, type: 'work' }, { day: 12, type: 'work' },
    { day: 13, type: 'weekend' }, { day: 14, type: 'weekend' }
  ]

  const courses = [
    { name: 'Advanced Video Editing', progress: 100, status: 'Completed', icon: '🎥' },
    { name: 'YouTube Analytics', progress: 75, status: 'In Progress', icon: '📊' }
  ]

  const careerPath = [
    { title: 'Junior Producer', status: 'Completed', icon: '✅' },
    { title: 'Senior Producer', status: 'Current Position', icon: '⭐' },
    { title: 'Lead Producer', status: 'Next Goal', icon: '🏆' }
  ]

  const competencies = [
    { skill: 'Kỹ thuật', score: 4.5 },
    { skill: 'Sáng tạo', score: 4.8 },
    { skill: 'Giao tiếp', score: 4.2 },
    { skill: 'Quản lý thời gian', score: 4.6 },
    { skill: 'Teamwork', score: 4.7 }
  ]

  const achievements = [
    { title: 'Video của tháng', period: 'Tháng 10/2024', description: '1.2M views, 95% retention', icon: '🏆' },
    { title: 'KPI vượt mục tiêu', period: 'Q3 2024', description: '125% target achieved', icon: '🎯' }
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
              <h1 className="text-2xl font-bold text-gray-900">VEGA Life</h1>
            </div>
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
              <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">My Profile</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Teams</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                🔔
              </button>
              <div className="h-8 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Background Image */}
          <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="h-24 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-2xl font-bold">👨</span>
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">Trần Minh</h2>
                  <p className="text-xl text-white opacity-90 mb-4">Senior Video Producer</p>
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center">
                      <span className="mr-2">🏢</span>
                      <span>Content Creation Team</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>3 years at VEGA</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Ho Chi Minh City</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors">
                    <span className="mr-2">✏️</span>
                    Edit Profile
                  </button>
                  <div className="text-right text-white">
                    <div className="text-2xl font-bold">127 Videos Created</div>
                    <div className="text-lg opacity-90">4.8M Total Views</div>
                    <div className="text-lg opacity-90">₫45M Revenue Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Salary & Benefits */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lương & Phúc lợi</h3>
              
              {/* Income Chart */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Thu nhập 12 tháng gần nhất</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  {/* Legend */}
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
                  
                  {/* Line Chart */}
                  <div className="relative h-48">
                    {/* Y-axis Labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                      <span>85M</span>
                      <span>70M</span>
                      <span>55M</span>
                      <span>40M</span>
                      <span>25M</span>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="ml-8 mr-4 h-full relative">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 25, 50, 75, 100].map((percent) => (
                          <div key={percent} className="border-t border-gray-200" style={{ top: `${percent}%` }}></div>
                        ))}
                      </div>
                      
                      {/* SVG for Line Chart */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* 2023 Line (Grey) */}
                        <polyline
                          points={incomeData.map((item, index) => {
                            const x = (index / (incomeData.length - 1)) * 100
                            const y = 100 - ((item.previous / 85) * 100)
                            return `${x},${y}`
                          }).join(' ')}
                          fill="none"
                          stroke="#9ca3af"
                          strokeWidth="2"
                          className="transition-all duration-1000 ease-out"
                        />
                        
                        {/* 2024 Line (Blue) */}
                        <polyline
                          points={incomeData.map((item, index) => {
                            const x = (index / (incomeData.length - 1)) * 100
                            const y = 100 - ((item.amount / 85) * 100)
                            return `${x},${y}`
                          }).join(' ')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          className="transition-all duration-1000 ease-out"
                        />
                        
                        {/* Data Points for 2023 */}
                        {incomeData.map((item, index) => {
                          const x = (index / (incomeData.length - 1)) * 100
                          const y = 100 - ((item.previous / 85) * 100)
                          return (
                            <circle
                              key={`2023-${index}`}
                              cx={x}
                              cy={y}
                              r="2"
                              fill="#9ca3af"
                              className="transition-all duration-300 hover:r-3"
                            />
                          )
                        })}
                        
                        {/* Data Points for 2024 */}
                        {incomeData.map((item, index) => {
                          const x = (index / (incomeData.length - 1)) * 100
                          const y = 100 - ((item.amount / 85) * 100)
                          return (
                            <circle
                              key={`2024-${index}`}
                              cx={x}
                              cy={y}
                              r="2.5"
                              fill="#3b82f6"
                              className="transition-all duration-300 hover:r-4"
                            />
                          )
                        })}
                      </svg>
                      
                      {/* Month Labels */}
                      <div className="absolute -bottom-6 left-0 right-0 flex justify-between">
                        {incomeData.map((item, index) => (
                          <div key={index} className="text-xs font-semibold text-gray-600 text-center">
                            {item.month}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Growth Indicator */}
                  <div className="mt-8 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">📈</span>
                        <span className="text-sm font-semibold text-gray-700">Tăng trưởng năm 2024</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-green-600">+18.5%</span>
                        <div className="text-xs text-gray-500">So với 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary Structure */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Cơ cấu lương tháng này</h4>
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Donut Chart SVG */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      
                      {/* Lương cơ bản - 70% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="8"
                        strokeDasharray={`${70 * 2.51} 251`}
                        strokeDashoffset="0"
                        className="transition-all duration-1000 ease-out"
                      />
                      
                      {/* Phụ cấp - 21% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="8"
                        strokeDasharray={`${21 * 2.51} 251`}
                        strokeDashoffset={`-${70 * 2.51}`}
                        className="transition-all duration-1000 ease-out"
                      />
                      
                      {/* Thưởng KPI - 9% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="8"
                        strokeDasharray={`${9 * 2.51} 251`}
                        strokeDashoffset={`-${(70 + 21) * 2.51}`}
                        className="transition-all duration-1000 ease-out"
                      />
                      
                      {/* Center text */}
                      <text
                        x="50"
                        y="45"
                        textAnchor="middle"
                        className="text-sm font-bold fill-gray-700"
                        transform="rotate(90 50 50)"
                      >
                        ₫87M
                      </text>
                      <text
                        x="50"
                        y="55"
                        textAnchor="middle"
                        className="text-xs fill-gray-500"
                        transform="rotate(90 50 50)"
                      >
                        Tháng 12
                      </text>
                    </svg>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {salaryStructure.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-3 ${
                          item.color === 'blue' ? 'bg-blue-500' :
                          item.color === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'
                        }`}></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                          <div className="text-xs text-gray-500">₫{item.amount}M</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                        <div className="text-xs text-gray-500">
                          {item.percentage === 70 ? '₫60.9M' : 
                           item.percentage === 21 ? '₫18.3M' : '₫7.8M'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Summary */}
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-700">Tổng thu nhập</div>
                      <div className="text-xs text-gray-500">Tháng 12/2024</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">₫87M</div>
                      <div className="text-xs text-green-600">+12% so với tháng trước</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Phúc lợi</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      index === 0 ? 'bg-blue-50' :
                      index === 1 ? 'bg-orange-50' : 'bg-yellow-50'
                    }`}>
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <h5 className="font-semibold text-gray-900 mb-1">{benefit.title}</h5>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Development */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Phát triển bản thân</h3>
              
              {/* Completed Courses */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Khóa học đã hoàn thành</h4>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mr-4">{course.icon}</div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">{course.name}</h5>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${
                              course.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>{course.progress}%</span>
                          <span className={course.status === 'Completed' ? 'text-green-600' : 'text-blue-600'}>
                            {course.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Progression */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Lộ trình thăng tiến</h4>
                <div className="space-y-3">
                  {careerPath.map((path, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl mr-4">{path.icon}</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{path.title}</h5>
                        <p className={`text-sm ${
                          path.status === 'Current Position' ? 'text-blue-600' :
                          path.status === 'Completed' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {path.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Results */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kết quả làm việc</h3>
              
              {/* Competency Assessment */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Đánh giá năng lực</h4>
                <div className="relative w-64 h-64 mx-auto mb-4">
                  {/* Radar Chart Representation */}
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Grid circles */}
                    {[1, 2, 3, 4, 5].map((level) => (
                      <circle key={level} cx="100" cy="100" r={level * 20} fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    ))}
                    
                    {/* Axes */}
                    {competencies.map((comp, index) => {
                      const angle = (index * 72) * (Math.PI / 180)
                      const x = 100 + 100 * Math.cos(angle - Math.PI / 2)
                      const y = 100 + 100 * Math.sin(angle - Math.PI / 2)
                      return (
                        <line key={index} x1="100" y1="100" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1"/>
                      )
                    })}
                    
                    {/* Data polygon */}
                    <polygon
                      points={competencies.map((comp, index) => {
                        const angle = (index * 72) * (Math.PI / 180)
                        const radius = (comp.score / 5) * 100
                        const x = 100 + radius * Math.cos(angle - Math.PI / 2)
                        const y = 100 + radius * Math.sin(angle - Math.PI / 2)
                        return `${x},${y}`
                      }).join(' ')}
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                {/* Skills Labels - Below the chart */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  {competencies.map((comp, index) => (
                    <div key={index} className="flex items-center justify-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-xs font-semibold text-gray-600">{comp.skill}</div>
                      <div className="ml-2 text-xs text-blue-600 font-bold">{comp.score}/5</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outstanding Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Thành tích nổi bật</h4>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="text-3xl mr-4">{achievement.icon}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900">{achievement.title}</h5>
                        <p className="text-sm text-gray-600">{achievement.period}</p>
                        <p className="text-sm text-gray-700 mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Work Management */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quản trị công việc</h3>
              
              {/* Monthly Goals */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Mục tiêu tháng này</h4>
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
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Lịch làm việc</h4>
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
                  <span className="text-xl font-bold text-gray-900">6</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👁️</span>
                    <span className="text-sm text-gray-600">Total views</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">847K</span>
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
