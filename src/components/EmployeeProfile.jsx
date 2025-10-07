import React from 'react'

const EmployeeProfile = () => {
  // Sample data
  const monthlyGoals = [
    { goal: 'Sản xuất 8 video chất lượng cao', completed: 6, total: 8, color: 'blue', description: 'Video quảng cáo và animation cho YouTube' },
    { goal: 'Tối ưu SEO cho 15 video', completed: 12, total: 15, color: 'orange', description: 'Keywords, thumbnails, descriptions' },
    { goal: 'Tăng engagement rate lên 15%', completed: 3, total: 5, color: 'green', description: 'Tương tác và retention rate' },
    { goal: 'Hoàn thành khóa học After Effects', completed: 8, total: 10, color: 'purple', description: 'Advanced animation techniques' }
  ]

  const workSchedule = [
    { day: '1', type: 'work' }, { day: '2', type: 'work' }, { day: '3', type: 'work' },
    { day: '4', type: 'work' }, { day: '5', type: 'work' }, { day: '6', type: 'weekend' },
    { day: '7', type: 'weekend' }, { day: '8', type: 'work' }, { day: '9', type: 'work' },
    { day: '10', type: 'leave' }, { day: '11', type: 'work' }, { day: '12', type: 'work' },
    { day: '13', type: 'weekend' }, { day: '14', type: 'weekend' }, { day: '15', type: 'work' },
    { day: '16', type: 'work' }, { day: '17', type: 'work' }, { day: '18', type: 'work' },
    { day: '19', type: 'work' }, { day: '20', type: 'weekend' }, { day: '21', type: 'weekend' },
    { day: '22', type: 'work' }, { day: '23', type: 'work' }, { day: '24', type: 'work' },
    { day: '25', type: 'work' }, { day: '26', type: 'work' }, { day: '27', type: 'weekend' },
    { day: '28', type: 'weekend' }, { day: '29', type: 'work' }, { day: '30', type: 'work' },
    { day: '31', type: 'work' }
  ]

  const incomeData = [
    { month: 'T1', current: 45, previous: 42 },
    { month: 'T2', current: 48, previous: 45 },
    { month: 'T3', current: 50, previous: 47 },
    { month: 'T4', current: 52, previous: 49 },
    { month: 'T5', current: 51, previous: 48 },
    { month: 'T6', current: 53, previous: 50 },
    { month: 'T7', current: 54, previous: 51 },
    { month: 'T8', current: 55, previous: 52 },
    { month: 'T9', current: 54, previous: 51 },
    { month: 'T10', current: 56, previous: 53 },
    { month: 'T11', current: 57, previous: 54 },
    { month: 'T12', current: 56, previous: 55 }
  ]

  const salaryBreakdown = [
    { name: 'Base Salary', value: 60, color: '#3b82f6', amount: '33.6M VND' },
    { name: 'Performance Bonus', value: 25, color: '#10b981', amount: '14M VND' },
    { name: 'Project Bonus', value: 10, color: '#f59e0b', amount: '5.6M VND' },
    { name: 'Other Benefits', value: 5, color: '#8b5cf6', amount: '2.8M VND' }
  ]

  const benefits = [
    { name: 'Bảo hiểm sức khỏe', description: '100% coverage + dental', icon: '🏥', color: 'blue', coverage: '100%' },
    { name: 'Bảo hiểm tai nạn', description: 'Accident insurance 50M VND', icon: '🛡️', color: 'green', coverage: '50M VND' },
    { name: 'Nghỉ phép có lương', description: '12 ngày/năm + sick leave', icon: '🏖️', color: 'orange', coverage: '12 ngày' },
    { name: 'Nghỉ ốm', description: 'Unlimited sick leave', icon: '🤒', color: 'red', coverage: 'Unlimited' },
    { name: 'Đào tạo & phát triển', description: 'Budget 5M VND/năm', icon: '🎓', color: 'purple', coverage: '5M VND' },
    { name: 'Thưởng dự án', description: 'Project-based bonuses', icon: '💰', color: 'yellow', coverage: 'Up to 50%' }
  ]

  const completedCourses = [
    { title: 'Video Production Mastery', instructor: 'John Smith', duration: '40h', progress: 100, rating: 4.8, completionDate: '2024-10-15', certificate: true },
    { title: 'Advanced After Effects', instructor: 'Sarah Johnson', duration: '32h', progress: 85, rating: 4.9, completionDate: '2024-09-20', certificate: false },
    { title: 'YouTube SEO Optimization', instructor: 'Mike Chen', duration: '24h', progress: 100, rating: 4.7, completionDate: '2024-08-10', certificate: true },
    { title: 'Motion Graphics Design', instructor: 'Emma Wilson', duration: '48h', progress: 60, rating: 4.8, completionDate: null, certificate: false }
  ]

  const careerPath = [
    { 
      title: 'Junior Video Editor', 
      period: '2022-2023', 
      status: 'completed',
      achievements: ['Completed 50+ video projects', 'Improved editing speed by 40%', 'Received 2 performance awards'],
      requirements: ['Basic video editing skills', 'Adobe Premiere proficiency', '1+ year experience'],
      salary: '45M VND'
    },
    { 
      title: 'Senior Video Editor', 
      period: '2024-present', 
      status: 'current',
      currentGoals: ['Lead 3 major projects', 'Mentor 2 junior editors', 'Increase video quality standards'],
      progress: 75,
      salary: '75M VND',
      responsibilities: ['Project leadership', 'Quality control', 'Team coordination']
    },
    { 
      title: 'Video Production Manager', 
      period: '2025-Q2', 
      status: 'next',
      targetDate: '2025-06-01',
      requirements: ['5+ years experience', 'Leadership certification', 'Advanced technical skills'],
      milestones: [
        { task: 'Complete management training', completed: false },
        { task: 'Lead 5+ successful projects', completed: false },
        { task: 'Improve team productivity by 25%', completed: false }
      ],
      salary: '120M VND'
    }
  ]

  const competencies = [
    { skill: 'Video Editing', level: 4, max: 5, description: 'Adobe Premiere, Final Cut Pro' },
    { skill: 'Motion Graphics', level: 3, max: 5, description: 'After Effects, Cinema 4D' },
    { skill: 'Creative Thinking', level: 5, max: 5, description: 'Innovation and ideation' },
    { skill: 'Teamwork', level: 4, max: 5, description: 'Collaboration and communication' },
    { skill: 'Project Management', level: 3, max: 5, description: 'Planning and execution' },
    { skill: 'Technical Skills', level: 4, max: 5, description: 'Software proficiency' }
  ]

  const achievements = [
    { title: 'Video của tháng', month: 'Tháng 10/2024', views: '1.2M', retention: '95%', engagement: '12.4%', icon: '🏆', type: 'performance' },
    { title: 'Employee of the Quarter', quarter: 'Q3 2024', description: 'Outstanding contribution to team projects', icon: '⭐', type: 'recognition' },
    { title: 'Innovation Award', date: '2024-09-15', description: 'Creative video editing techniques', icon: '💡', type: 'innovation' },
    { title: 'Mentor of the Year', year: '2024', description: 'Successfully trained 3 junior editors', icon: '👨‍🏫', type: 'leadership' }
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
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{incomeData[incomeData.length - 1].current}M VND</div>
                    <div className="text-sm text-gray-600">Tháng hiện tại</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-600">+{incomeData[incomeData.length - 1].current - incomeData[incomeData.length - 1].previous}M</div>
                    <div className="text-sm text-gray-600">So với tháng trước</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-purple-600">+{Math.round(((incomeData[incomeData.length - 1].current - incomeData[0].current) / incomeData[0].current) * 100)}%</div>
                    <div className="text-sm text-gray-600">Tăng trưởng năm</div>
                  </div>
                </div>
                
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
                    <span>60M</span>
                    <span>55M</span>
                    <span>50M</span>
                    <span>45M</span>
                    <span>40M</span>
                  </div>
                  
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3"/>
                    
                    {/* 2024 line */}
                    <polyline
                      points={incomeData.map((item, index) => 
                        `${50 + (index * 350 / 11)},${180 - ((item.current - 40) / 20) * 160}`
                      ).join(' ')}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      className="drop-shadow-sm"
                    />
                    
                    {/* 2023 line */}
                    <polyline
                      points={incomeData.map((item, index) => 
                        `${50 + (index * 350 / 11)},${180 - ((item.previous - 40) / 20) * 160}`
                      ).join(' ')}
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    
                    {/* Data points */}
                    {incomeData.map((item, index) => (
                      <g key={index}>
                        <circle
                          cx={50 + (index * 350 / 11)}
                          cy={180 - ((item.current - 40) / 20) * 160}
                          r="4"
                          fill="#3b82f6"
                          className="hover:r-6 transition-all cursor-pointer"
                        />
                        <circle
                          cx={50 + (index * 350 / 11)}
                          cy={180 - ((item.previous - 40) / 20) * 160}
                          r="3"
                          fill="#9ca3af"
                          className="hover:r-5 transition-all cursor-pointer"
                        />
                      </g>
                    ))}
                  </svg>
                  
                  {/* Month labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
                    {incomeData.map((item, index) => (
                      <span key={index} className="text-center" style={{width: `${100/12}%`}}>
                        {item.month}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800">Thu nhập trung bình 2024</div>
                    <div className="text-blue-600 font-bold">{Math.round(incomeData.reduce((sum, item) => sum + item.current, 0) / incomeData.length)}M VND/tháng</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-gray-800">Thu nhập trung bình 2023</div>
                    <div className="text-gray-600 font-bold">{Math.round(incomeData.reduce((sum, item) => sum + item.previous, 0) / incomeData.length)}M VND/tháng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Structure */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cơ cấu lương tháng này</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Donut Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-72 h-72">
                    <svg className="w-full h-full" viewBox="0 0 220 220">
                      {/* Background circle */}
                      <circle cx="110" cy="110" r="90" fill="none" stroke="#e5e7eb" strokeWidth="18"/>
                      
                      {/* Salary segments */}
                      {salaryBreakdown.map((item, index) => {
                        const startAngle = index === 0 ? -90 : salaryBreakdown.slice(0, index).reduce((sum, prev) => sum + prev.value, 0) * 3.6 - 90;
                        const endAngle = salaryBreakdown.slice(0, index + 1).reduce((sum, prev) => sum + prev.value, 0) * 3.6 - 90;
                        const largeArcFlag = item.value > 50 ? 1 : 0;
                        
                        const x1 = 110 + 90 * Math.cos((startAngle * Math.PI) / 180);
                        const y1 = 110 + 90 * Math.sin((startAngle * Math.PI) / 180);
                        const x2 = 110 + 90 * Math.cos((endAngle * Math.PI) / 180);
                        const y2 = 110 + 90 * Math.sin((endAngle * Math.PI) / 180);
                        
                        const pathData = `M 110 110 L ${x1} ${y1} A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                        
                        return (
                          <path
                            key={index}
                            d={pathData}
                            fill={item.color}
                            className="hover:opacity-80 transition-opacity cursor-pointer drop-shadow-sm"
                          />
                        );
                      })}
                      
                      {/* Inner circle with shadow */}
                      <circle cx="110" cy="110" r="55" fill="white" stroke="#f3f4f6" strokeWidth="2"/>
                      
                      {/* Center text */}
                      <text x="110" y="105" textAnchor="middle" className="text-xl font-bold text-gray-900">
                        56M
                      </text>
                      <text x="110" y="120" textAnchor="middle" className="text-sm text-gray-600">
                        VND Total
                      </text>
                      <text x="110" y="135" textAnchor="middle" className="text-xs text-gray-500">
                        Tháng này
                      </text>
                    </svg>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Chi tiết lương tháng</h4>
                  {salaryBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div>
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.value}%</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{item.amount}</div>
                        <div className="text-xs text-gray-500">VND</div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">56M VND</div>
                      <div className="text-sm text-blue-800">Tổng thu nhập tháng này</div>
                      <div className="text-xs text-blue-600 mt-1">Tăng 1M so với tháng trước</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Phúc lợi & Bảo hiểm</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`p-4 bg-${benefit.color}-50 rounded-lg border border-${benefit.color}-200 hover:shadow-md transition-shadow`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div className={`text-xs bg-${benefit.color}-100 text-${benefit.color}-800 px-2 py-1 rounded-full font-semibold`}>
                        {benefit.coverage}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.name}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Tổng giá trị phúc lợi/năm</h4>
                    <p className="text-sm text-gray-600">Bao gồm tất cả benefits và bảo hiểm</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">38M VND</div>
                    <div className="text-sm text-blue-800">~68% lương base</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Courses */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Khóa học & Đào tạo</h3>
              <div className="space-y-4">
                {completedCourses.map((course, index) => (
                  <div key={index} className={`p-4 bg-gray-50 rounded-lg border-l-4 ${course.progress === 100 ? 'border-green-400' : 'border-blue-400'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-2xl mr-4">🎓</div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{course.title}</h5>
                          <p className="text-sm text-gray-600">Giảng viên: {course.instructor}</p>
                          <p className="text-xs text-gray-500">Thời lượng: {course.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                        {course.certificate && (
                          <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Có chứng chỉ
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-4">
                        <span className={`font-semibold ${course.progress === 100 ? 'text-green-600' : 'text-blue-600'}`}>
                          {course.progress}%
                        </span>
                        <span className="text-gray-600">
                          {course.progress === 100 ? 'Hoàn thành' : 'Đang học'}
                        </span>
                      </div>
                      {course.completionDate && (
                        <span className="text-xs text-gray-500">
                          {new Date(course.completionDate).toLocaleDateString('vi-VN')}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-blue-800">Khóa đã hoàn thành</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">156h</div>
                  <div className="text-sm text-purple-800">Tổng thời gian học</div>
                </div>
              </div>
            </div>

            {/* Career Path */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lộ trình thăng tiến</h3>
              <div className="space-y-6">
                {careerPath.map((position, index) => (
                  <div key={index} className={`p-6 rounded-xl border-2 ${
                    position.status === 'completed' ? 'border-green-200 bg-green-50' :
                    position.status === 'current' ? 'border-blue-200 bg-blue-50' :
                    'border-purple-200 bg-purple-50'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{position.title}</h4>
                        <p className="text-sm text-gray-600">{position.period}</p>
                        {position.salary && (
                          <p className="text-lg font-bold text-blue-600 mt-1">{position.salary}</p>
                        )}
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        position.status === 'completed' ? 'bg-green-100 text-green-800' :
                        position.status === 'current' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {position.status === 'completed' ? 'Đã hoàn thành' :
                         position.status === 'current' ? 'Vị trí hiện tại' :
                         'Mục tiêu tiếp theo'}
                      </span>
                    </div>
                    
                    {position.status === 'completed' && position.achievements && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Thành tích đạt được:</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {position.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {position.status === 'current' && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Mục tiêu hiện tại:</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {position.currentGoals.map((goal, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{goal}</li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Tiến độ tổng thể</span>
                            <span>{position.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-blue-500"
                              style={{ width: `${position.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {position.status === 'next' && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Yêu cầu cần đạt:</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{req}</li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <h5 className="font-semibold text-gray-900 mb-2">Các bước thực hiện:</h5>
                          {position.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center space-x-2 mb-1">
                              <div className={`w-4 h-4 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                                {milestone.completed && <span className="text-white text-xs">✓</span>}
                              </div>
                              <span className="text-sm text-gray-700">{milestone.task}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                          <p className="text-sm text-purple-800">
                            <strong>Mục tiêu:</strong> {position.targetDate}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Competency Assessment */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Đánh giá năng lực</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Background circles */}
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                      <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      <circle cx="100" cy="100" r="20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      
                      {/* Grid lines */}
                      {competencies.map((comp, index) => {
                        const angle = (index * 360) / competencies.length;
                        const x1 = 100 + 80 * Math.cos((angle - 90) * Math.PI / 180);
                        const y1 = 100 + 80 * Math.sin((angle - 90) * Math.PI / 180);
                        return (
                          <line key={index} x1="100" y1="100" x2={x1} y2={y1} stroke="#e5e7eb" strokeWidth="1"/>
                        );
                      })}
                      
                      {/* Data polygon */}
                      <polygon
                        points={competencies.map((comp, index) => {
                          const angle = (index * 360) / competencies.length;
                          const radius = (comp.level / comp.max) * 80;
                          const x = 100 + radius * Math.cos((angle - 90) * Math.PI / 180);
                          const y = 100 + radius * Math.sin((angle - 90) * Math.PI / 180);
                          return `${x},${y}`;
                        }).join(' ')}
                        fill="rgba(59, 130, 246, 0.3)"
                        stroke="#3b82f6"
                        strokeWidth="3"
                      />
                      
                      {/* Data points */}
                      {competencies.map((comp, index) => {
                        const angle = (index * 360) / competencies.length;
                        const radius = (comp.level / comp.max) * 80;
                        const x = 100 + radius * Math.cos((angle - 90) * Math.PI / 180);
                        const y = 100 + radius * Math.sin((angle - 90) * Math.PI / 180);
                        return (
                          <circle key={index} cx={x} cy={y} r="4" fill="#3b82f6" className="hover:r-6 transition-all"/>
                        );
                      })}
                    </svg>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Chi tiết kỹ năng</h4>
                  {competencies.map((comp, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{comp.skill}</span>
                        <span className="text-sm font-bold text-blue-600">{comp.level}/{comp.max}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{comp.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-blue-500"
                          style={{ width: `${(comp.level / comp.max) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">3.8/5</div>
                      <div className="text-sm text-blue-800">Điểm trung bình tổng thể</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outstanding Achievements */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thành tích nổi bật</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-6 rounded-lg border-2 ${
                    achievement.type === 'performance' ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' :
                    achievement.type === 'recognition' ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' :
                    achievement.type === 'innovation' ? 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200' :
                    'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">{achievement.title}</h5>
                        {achievement.month && (
                          <p className="text-sm text-gray-600 mb-2">{achievement.month}</p>
                        )}
                        {achievement.quarter && (
                          <p className="text-sm text-gray-600 mb-2">{achievement.quarter}</p>
                        )}
                        {achievement.date && (
                          <p className="text-sm text-gray-600 mb-2">{new Date(achievement.date).toLocaleDateString('vi-VN')}</p>
                        )}
                        {achievement.year && (
                          <p className="text-sm text-gray-600 mb-2">{achievement.year}</p>
                        )}
                        
                        {achievement.description && (
                          <p className="text-sm text-gray-700 mb-3">{achievement.description}</p>
                        )}
                        
                        {achievement.views && (
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-white bg-opacity-60 p-2 rounded text-center">
                              <div className="font-bold text-gray-900">{achievement.views}</div>
                              <div className="text-gray-600">Views</div>
                            </div>
                            <div className="bg-white bg-opacity-60 p-2 rounded text-center">
                              <div className="font-bold text-gray-900">{achievement.retention}</div>
                              <div className="text-gray-600">Retention</div>
                            </div>
                            <div className="bg-white bg-opacity-60 p-2 rounded text-center">
                              <div className="font-bold text-gray-900">{achievement.engagement}</div>
                              <div className="text-gray-600">Engagement</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Tổng thành tích năm 2024</h4>
                    <p className="text-sm text-gray-600">4 giải thưởng và nhận dạng</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">4</div>
                    <div className="text-sm text-yellow-800">Achievements</div>
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
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-semibold text-gray-900 text-sm">{goal.goal}</h5>
                      <span className="text-xs text-gray-600">{goal.completed}/{goal.total}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{goal.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          goal.color === 'blue' ? 'bg-blue-500' : 
                          goal.color === 'orange' ? 'bg-orange-500' :
                          goal.color === 'green' ? 'bg-green-500' :
                          'bg-purple-500'
                        }`}
                        style={{ width: `${(goal.completed / goal.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{Math.round((goal.completed / goal.total) * 100)}%</span>
                      <span>{goal.total - goal.completed} còn lại</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">
                    {Math.round(monthlyGoals.reduce((sum, goal) => sum + (goal.completed / goal.total), 0) / monthlyGoals.length * 100)}%
                  </div>
                  <div className="text-xs text-blue-800">Tiến độ tổng thể</div>
                </div>
              </div>
            </div>

            {/* Work Schedule */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lịch làm việc tháng 12</h3>
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
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded mr-1"></div>
                    <span>Ngày công</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-300 rounded mr-1"></div>
                    <span>Nghỉ phép</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-100 rounded mr-1"></div>
                    <span>Cuối tuần</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-50 p-2 rounded text-center">
                    <div className="font-bold text-green-600">{workSchedule.filter(item => item.type === 'work').length}</div>
                    <div className="text-green-800">Ngày công</div>
                  </div>
                  <div className="bg-pink-50 p-2 rounded text-center">
                    <div className="font-bold text-pink-600">{workSchedule.filter(item => item.type === 'leave').length}</div>
                    <div className="text-pink-800">Nghỉ phép</div>
                  </div>
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