import React, { useState } from 'react'

const InternalSocialNetwork = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showShareIdea, setShowShareIdea] = useState(false)
  const [showCreateSurvey, setShowCreateSurvey] = useState(false)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  // Sample data - Rich and diverse content
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
    },
    {
      id: 3,
      author: {
        name: 'Nguyễn Văn Đức',
        role: 'CEO',
        avatar: '👨‍💼',
        time: '6 giờ trước'
      },
      content: '🎊 THÔNG BÁO QUAN TRỌNG: VEGA Life đã chính thức ký hợp đồng với 3 khách hàng lớn mới! Doanh thu Q4 dự kiến tăng 40%. Cảm ơn tất cả team đã nỗ lực! #CompanyGrowth #Success #NewClients',
      image: '📈',
      engagement: {
        likes: 89,
        comments: 25,
        shares: 15,
        views: 234
      },
      tags: ['#CompanyGrowth', '#Success', '#NewClients']
    },
    {
      id: 4,
      author: {
        name: 'Phạm Thị Lan',
        role: 'Finance Director',
        avatar: '👩‍💼',
        time: '8 giờ trước'
      },
      content: '💰 Báo cáo tài chính tháng 12: Doanh thu đạt 2.8 tỷ VND (+15% so với tháng trước). Lợi nhuận tăng 22%. Chúc mừng team đã vượt target! #Finance #Growth #Achievement',
      chart: {
        type: 'bar',
        data: [
          { month: 'T10', revenue: 2.4, profit: 0.6 },
          { month: 'T11', revenue: 2.6, profit: 0.7 },
          { month: 'T12', revenue: 2.8, profit: 0.8 }
        ]
      },
      engagement: {
        likes: 67,
        comments: 19,
        shares: 12,
        views: 178
      },
      tags: ['#Finance', '#Growth', '#Achievement']
    },
    {
      id: 5,
      author: {
        name: 'Hoàng Minh Tuấn',
        role: 'Tech Lead',
        avatar: '👨‍💻',
        time: '10 giờ trước'
      },
      content: '🚀 Cập nhật hệ thống: Chúng ta vừa triển khai AI Content Generator - công cụ hỗ trợ tạo nội dung tự động. Demo sẽ có trong cuộc họp team tuần này! #Innovation #AI #Technology',
      image: '🤖',
      engagement: {
        likes: 54,
        comments: 16,
        shares: 9,
        views: 145
      },
      tags: ['#Innovation', '#AI', '#Technology']
    },
    {
      id: 6,
      author: {
        name: 'Trần Thị Mai',
        role: 'Senior Video Producer',
        avatar: '👩',
        time: '12 giờ trước'
      },
      content: '📹 Chia sẻ kinh nghiệm: 5 tips để tạo video viral trên YouTube. Đã áp dụng thành công cho dự án "Cuộc sống số" và đạt 500K views trong 1 tuần! #Tips #YouTube #Viral',
      image: '🎬',
      engagement: {
        likes: 78,
        comments: 23,
        shares: 18,
        views: 267
      },
      tags: ['#Tips', '#YouTube', '#Viral']
    },
    {
      id: 7,
      author: {
        name: 'Lê Văn Hùng',
        role: 'Marketing Manager',
        avatar: '👨',
        time: '1 ngày trước'
      },
      content: '📊 Phân tích xu hướng: Video ngắn (Short-form content) đang chiếm ưu thế trên TikTok và YouTube Shorts. Team cần tập trung vào format này trong Q1/2024. #Trend #Marketing #Strategy',
      chart: {
        type: 'line',
        data: [
          { platform: 'TikTok', growth: 85 },
          { platform: 'YouTube Shorts', growth: 72 },
          { platform: 'Instagram Reels', growth: 68 },
          { platform: 'Facebook Video', growth: 45 }
        ]
      },
      engagement: {
        likes: 43,
        comments: 14,
        shares: 7,
        views: 156
      },
      tags: ['#Trend', '#Marketing', '#Strategy']
    },
    {
      id: 8,
      author: {
        name: 'Nguyễn Thị Hoa',
        role: 'HR Specialist',
        avatar: '👩',
        time: '1 ngày trước'
      },
      content: '🎓 Chương trình đào tạo Q1/2024: Khởi động "VEGA Academy" - nơi CBNV có thể học kỹ năng mới và phát triển bản thân. Budget 50M VND cho toàn công ty! #Training #Development #Academy',
      image: '🎓',
      engagement: {
        likes: 56,
        comments: 21,
        shares: 11,
        views: 189
      },
      tags: ['#Training', '#Development', '#Academy']
    },
    {
      id: 9,
      author: {
        name: 'Phạm Đức Thắng',
        role: 'Operations Manager',
        avatar: '👨‍💼',
        time: '2 ngày trước'
      },
      content: '🏢 Thông báo văn phòng: Văn phòng mới tại Quận 7 sẽ khai trương vào 15/1/2024. Diện tích 500m² với đầy đủ tiện nghi hiện đại. Team Video Production sẽ chuyển đến đây! #Office #Expansion #NewSpace',
      image: '🏢',
      engagement: {
        likes: 41,
        comments: 17,
        shares: 6,
        views: 134
      },
      tags: ['#Office', '#Expansion', '#NewSpace']
    },
    {
      id: 10,
      author: {
        name: 'Bùi Thị Linh',
        role: 'Creative Director',
        avatar: '👩‍🎨',
        time: '2 ngày trước'
      },
      content: '🎨 Cuộc thi thiết kế nội bộ: "VEGA Creative Challenge 2024" - Tạo logo cho sản phẩm mới. Giải nhất: 10M VND + 1 tuần nghỉ phép. Deadline: 31/1/2024. #Contest #Creative #Design',
      image: '🎨',
      engagement: {
        likes: 73,
        comments: 28,
        shares: 14,
        views: 198
      },
      tags: ['#Contest', '#Creative', '#Design']
    },
    {
      id: 11,
      author: {
        name: 'Vũ Minh Quang',
        role: 'Client Success Manager',
        avatar: '👨',
        time: '3 ngày trước'
      },
      content: '🤝 Case study thành công: Dự án "Brand Storytelling" cho khách hàng ABC đã tăng engagement 300% và conversion rate 45%. Chia sẻ chi tiết trong slide deck! #CaseStudy #Success #Client',
      chart: {
        type: 'funnel',
        data: [
          { stage: 'Awareness', value: 100 },
          { stage: 'Interest', value: 75 },
          { stage: 'Consideration', value: 50 },
          { stage: 'Purchase', value: 25 }
        ]
      },
      engagement: {
        likes: 62,
        comments: 19,
        shares: 13,
        views: 167
      },
      tags: ['#CaseStudy', '#Success', '#Client']
    },
    {
      id: 12,
      author: {
        name: 'Đỗ Thị Nga',
        role: 'Quality Assurance',
        avatar: '👩',
        time: '3 ngày trước'
      },
      content: '✅ Quy trình mới: Áp dụng "Quality Gate" cho tất cả dự án video. Mỗi video sẽ qua 3 vòng review trước khi deliver. Mục tiêu: 99% client satisfaction! #Quality #Process #Improvement',
      image: '✅',
      engagement: {
        likes: 38,
        comments: 12,
        shares: 5,
        views: 123
      },
      tags: ['#Quality', '#Process', '#Improvement']
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
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative"
                >
                  🔔
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                </button>
                
                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">Thông báo</h3>
                        <button 
                          onClick={() => setShowNotifications(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-blue-600">🎉</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">Chúc mừng!</p>
                            <p className="text-sm text-gray-600 mt-1">Bạn đã được đề xuất cho giải "Nhân viên xuất sắc tháng"</p>
                            <p className="text-xs text-gray-400 mt-2">2 giờ trước</p>
                          </div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-green-600">📊</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">Khảo sát mới</p>
                            <p className="text-sm text-gray-600 mt-1">Khảo sát hài lòng Q4 đã sẵn sàng</p>
                            <p className="text-xs text-gray-400 mt-2">1 ngày trước</p>
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-yellow-600">💡</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">Ý tưởng được đánh giá</p>
                            <p className="text-sm text-gray-600 mt-1">Ý tưởng "AI Content Generator" đã được team review</p>
                            <p className="text-xs text-gray-400 mt-2">3 ngày trước</p>
                          </div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-purple-600">📅</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">Lịch họp</p>
                            <p className="text-sm text-gray-600 mt-1">Cuộc họp team Video Production lúc 14:00 hôm nay</p>
                            <p className="text-xs text-gray-400 mt-2">5 giờ trước</p>
                          </div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-red-600">⚠️</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">Nhắc nhở</p>
                            <p className="text-sm text-gray-600 mt-1">Báo cáo tháng 12 cần nộp trước 31/12</p>
                            <p className="text-xs text-gray-400 mt-2">1 tuần trước</p>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                      <button className="w-full text-center text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Xem tất cả thông báo
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                ⚙️
              </button>
              <div 
                onClick={() => setShowEditProfile(true)}
                className="h-8 w-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
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
                <button 
                  onClick={() => setShowCreatePost(true)}
                  className="w-full flex items-center p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <span className="mr-3">➕</span>
                  Tạo bài viết
                </button>
                <button 
                  onClick={() => setShowShareIdea(true)}
                  className="w-full flex items-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <span className="mr-3">💡</span>
                  Chia sẻ ý tưởng
                </button>
                <button 
                  onClick={() => setShowCreateSurvey(true)}
                  className="w-full flex items-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
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

      {/* Popup Modals */}
      
      {/* Create Post Popup */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Tạo bài viết mới</h3>
              <button 
                onClick={() => setShowCreatePost(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <textarea 
              placeholder="Chia sẻ những gì bạn đang nghĩ..."
              className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-500">📷</button>
                <button className="p-2 text-gray-400 hover:text-blue-500">🎥</button>
                <button className="p-2 text-gray-400 hover:text-blue-500">📄</button>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Idea Popup */}
      {showShareIdea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Chia sẻ ý tưởng</h3>
              <button 
                onClick={() => setShowShareIdea(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <input 
              type="text" 
              placeholder="Tiêu đề ý tưởng..."
              className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Mô tả chi tiết ý tưởng của bạn..."
              className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center justify-between mt-4">
              <select className="p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Chọn danh mục</option>
                <option>Innovation</option>
                <option>Process Improvement</option>
                <option>Product Development</option>
              </select>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Gửi ý tưởng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Survey Popup */}
      {showCreateSurvey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Tạo khảo sát</h3>
              <button 
                onClick={() => setShowCreateSurvey(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <input 
              type="text" 
              placeholder="Tiêu đề khảo sát..."
              className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="space-y-2 mb-4">
              <input 
                type="text" 
                placeholder="Tùy chọn 1..."
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Tùy chọn 2..."
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="text-blue-500 hover:text-blue-600 text-sm">+ Thêm tùy chọn</button>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors">
              Tạo khảo sát
            </button>
          </div>
        </div>
      )}

      {/* Edit Profile Popup */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Chỉnh sửa hồ sơ</h3>
              <button 
                onClick={() => setShowEditProfile(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="text-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-2xl font-bold">👩</span>
              </div>
              <button className="text-blue-500 hover:text-blue-600 text-sm">Thay đổi ảnh đại diện</button>
            </div>
            <div className="space-y-3">
              <input 
                type="text" 
                defaultValue="Nguyễn Thị Mai"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                defaultValue="Senior Video Producer"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                defaultValue="Chuyên sản xuất video quảng cáo và nội dung sáng tạo cho các thương hiệu hàng đầu."
                className="w-full h-20 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors mt-4">
              Lưu thay đổi
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default InternalSocialNetwork


