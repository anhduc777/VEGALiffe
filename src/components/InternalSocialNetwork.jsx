import React, { useState } from 'react'

const InternalSocialNetwork = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Sample data
  const posts = [
    {
      id: 1,
      author: {
        name: 'Trần Minh Hoàng',
        role: 'Content Manager',
        avatar: '👨',
        time: '2 giờ trước'
      },
      content: 'Chúc mừng team Video Production đã đạt 1M views cho series "Cuộc sống số"! Đặc biệt cảm ơn Mai và team đã làm việc không biết mệt mỏi. #TeamWork #Success #VideoProduction',
      image: '🎉',
      engagement: {
        likes: 45,
        comments: 12,
        shares: 8,
        views: 156
      },
      tags: ['#TeamWork', '#Success', '#VideoProduction']
    },
    {
      id: 2,
      author: {
        name: 'Lê Thị Hương',
        role: 'HR Manager',
        avatar: '👩',
        time: '4 giờ trước'
      },
      content: 'Kết quả khảo sát hài lòng Q3 đã có! Cảm ơn 95% CBNV đã tham gia. Chúng ta sẽ có buổi sharing kết quả vào thứ 6 tuần này. #Survey #EmployeeEngagement',
      chart: {
        type: 'pie',
        data: [
          { label: 'Không hài lòng', value: 5.0, color: 'red' },
          { label: 'Bình thường', value: 15.0, color: 'orange' },
          { label: 'Hài lòng', value: 35.0, color: 'blue' },
          { label: 'Rất hài lòng', value: 45.0, color: 'green' }
        ]
      },
      engagement: {
        likes: 32,
        comments: 18,
        shares: 5,
        views: 89
      },
      tags: ['#Survey', '#EmployeeEngagement']
    }
  ]

  const outstandingEmployees = [
    { name: 'Nguyễn Thị Mai', role: 'Top Creator Q3', rank: 1, avatar: '👩‍💼' },
    { name: 'Trần Minh Hoàng', role: 'Best Manager', rank: 2, avatar: '👨‍💼' },
    { name: 'Lê Thị Hương', role: 'Innovation Leader', rank: 3, avatar: '👩‍💼' }
  ]

  const surveyData = [
    { option: 'Remote 100%', percentage: 45 },
    { option: 'Hybrid', percentage: 35 },
    { option: 'Office 100%', percentage: 20 }
  ]

  const companyInfo = [
    { title: 'Sơ đồ tổ chức', icon: '📊' },
    { title: 'Bản đồ văn phòng', icon: '🗺️' },
    { title: 'Lịch sự kiện', icon: '📅' },
    { title: 'Danh bạ nội bộ', icon: '📞' }
  ]

  const innovationIdea = {
    title: 'AI Assistant cho Video Editing',
    description: 'Ý tưởng: Tích hợp AI để tự động cắt ghép video dựa trên script, giúp tiết kiệm 70% thời gian editing. Có thể nhận diện cảm xúc trong âm thanh để tự động chọn music phù hợp.',
    author: 'Nguyễn Văn An',
    time: '1 ngày trước',
    votes: { up: 47, down: 3 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VEGA Life</h1>
                <p className="text-gray-500">Internal Social Network</p>
              </div>
            </div>
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết, người..."
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                🔔
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                ⚙️
              </button>
              <div className="h-8 w-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👩</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hành động nhanh</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  <span className="mr-3">➕</span>
                  Tạo bài viết
                </button>
                <button className="w-full flex items-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  <span className="mr-3">💡</span>
                  Chia sẻ ý tưởng
                </button>
                <button className="w-full flex items-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  <span className="mr-3">📊</span>
                  Tạo khảo sát
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Khám phá</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <span className="mr-3">🏠</span>
                  Trang chủ
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="mr-3">💡</span>
                  Innovation Hub
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="mr-3">🤝</span>
                  Collaboration
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="mr-3">⚙️</span>
                  Self-Service
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Banner */}
            <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">Chúc mừng Q3 2024!</h2>
                <p className="text-xl opacity-90 mb-6">VEGA đạt 50M lượt xem - Cảm ơn toàn thể team!</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>

            {/* Post Creation Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">👩</span>
                </div>
                <input
                  type="text"
                  placeholder="Chia sẻ điều gì đó với team..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    <span className="mr-2">📷</span>
                    Ảnh
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    <span className="mr-2">🎥</span>
                    Video
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    <span className="mr-2">#</span>
                    Tag
                  </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Đăng
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{post.author.avatar}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">{post.author.name}</h4>
                        <p className="text-sm text-gray-500">{post.author.role} • {post.author.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">{post.content}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Media */}
                  {post.image && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-4xl text-center">{post.image}</div>
                    </div>
                  )}

                  {post.chart && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Kết quả khảo sát</h5>
                      <div className="flex items-center justify-center space-x-4">
                        {post.chart.data.map((item, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mb-2"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.value}%
                            </div>
                            <p className="text-xs text-gray-600">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                        <span className="mr-2">❤️</span>
                        <span className="text-sm font-semibold">{post.engagement.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                        <span className="mr-2">💬</span>
                        <span className="text-sm font-semibold">{post.engagement.comments}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
                        <span className="mr-2">🔄</span>
                        <span className="text-sm font-semibold">{post.engagement.shares}</span>
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">{post.engagement.views} lượt xem</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center space-x-8 mt-4 pt-4 border-t border-gray-100">
                    <button className="text-gray-500 hover:text-red-500 transition-colors">Thích</button>
                    <button className="text-gray-500 hover:text-blue-500 transition-colors">Bình luận</button>
                    <button className="text-gray-500 hover:text-green-500 transition-colors">Chia sẻ</button>
                  </div>
                </div>
              ))}

              {/* Innovation Hub Idea */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">💡</span>
                  <span className="bg-purple-100 text-purple-600 text-sm px-2 py-1 rounded-full font-semibold">
                    Innovation Hub
                  </span>
                  <span className="ml-2 text-sm text-gray-500">Ý tưởng mới • {innovationIdea.time}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{innovationIdea.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{innovationIdea.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                      <span className="mr-1">👍</span>
                      <span className="font-semibold">{innovationIdea.votes.up}</span>
                    </button>
                    <button className="flex items-center text-red-600 hover:text-red-700 transition-colors">
                      <span className="mr-1">👎</span>
                      <span className="font-semibold">{innovationIdea.votes.down}</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Đăng bởi: {innovationIdea.author}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Outstanding Employees */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🏆</span>
                <h3 className="text-lg font-bold text-gray-900">CBNV xuất sắc</h3>
              </div>
              <div className="space-y-3">
                {outstandingEmployees.map((employee, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-3">{employee.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{employee.name}</h4>
                      <p className="text-sm text-gray-600">{employee.role}</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full font-bold">
                      Rank {employee.rank}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Survey */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">📊</span>
                <h3 className="text-lg font-bold text-gray-900">Khảo sát nhanh</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Bạn thích làm việc remote hay office?</p>
              <div className="space-y-2 mb-4">
                {surveyData.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input type="radio" name="survey" className="mr-2" />
                    <span className="text-sm text-gray-600 flex-1">{option.option}</span>
                    <span className="text-sm font-semibold text-blue-600">{option.percentage}%</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Bình chọn
              </button>
            </div>

            {/* Company Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin công ty</h3>
              <div className="space-y-2">
                {companyInfo.map((info, index) => (
                  <a key={index} href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="mr-3">{info.icon}</span>
                    <span className="text-sm">{info.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternalSocialNetwork


