import React, { useState } from 'react'

const HRSearchChat = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('content')
  const [chatMessage, setChatMessage] = useState('')

  // Sample data
  const orgChart = [
    {
      id: 'ceo',
      name: 'Trần Minh',
      title: 'CEO',
      role: 'Chief Executive Officer',
      avatar: '👨‍💼',
      color: 'purple',
      reports: ['content', 'tech', 'marketing']
    },
    {
      id: 'content',
      name: 'Nguyễn Thu Hà',
      title: 'Director',
      role: 'Content',
      avatar: '👩‍💼',
      color: 'blue',
      reports: ['content1', 'content2', 'content3']
    },
    {
      id: 'tech',
      name: 'Lê Văn',
      title: 'Director',
      role: 'Tech',
      avatar: '👨‍💻',
      color: 'green',
      reports: ['tech1', 'tech2']
    },
    {
      id: 'marketing',
      name: 'Phạm Thị',
      title: 'Director',
      role: 'Marketing',
      avatar: '👩‍💼',
      color: 'orange',
      reports: ['marketing1', 'marketing2']
    },
    // Team members
    { id: 'content1', name: 'Nguyễn Thị Mai', title: 'Senior Producer', role: 'Video Editor', avatar: '👩‍🎬', color: 'blue' },
    { id: 'content2', name: 'Hoàng Văn Đức', title: 'Video Editor', role: 'Content Writer', avatar: '👨‍🎨', color: 'blue' },
    { id: 'content3', name: 'Trần Thị Linh', title: 'Content Writer', role: 'Content Writer', avatar: '👩‍💻', color: 'blue' },
    { id: 'tech1', name: 'Vũ Hoàng Nam', title: 'Full Stack Dev', role: 'DevOps', avatar: '👨‍💻', color: 'green' },
    { id: 'tech2', name: 'Đỗ Minh An', title: 'DevOps', role: 'DevOps', avatar: '👨‍💻', color: 'green' },
    { id: 'marketing1', name: 'Lê Thị Hương', title: 'Social Media', role: 'SEO Specialist', avatar: '👩‍💼', color: 'orange' },
    { id: 'marketing2', name: 'Nguyễn Anh Tuấn', title: 'SEO Specialist', role: 'SEO Specialist', avatar: '👨‍💼', color: 'orange' }
  ]

  const chatMessages = [
    {
      id: 1,
      sender: 'Nguyễn Thị Mai',
      message: 'Chào bạn! Mình có thể hỗ trợ gì cho bạn không?',
      time: '10:30 AM',
      avatar: '👩‍💼',
      isUser: false
    },
    {
      id: 2,
      sender: 'You',
      message: 'Hi Mai! Mình muốn hỏi về deadline dự án video tuần này',
      time: '10:31 AM',
      avatar: '👨',
      isUser: true
    },
    {
      id: 3,
      sender: 'Nguyễn Thị Mai',
      message: 'Dự án video về "Top 10 YouTube Tips" cần hoàn thành vào thứ 6 này nhé. Mình đã gửi brief qua email rồi.',
      time: '10:32 AM',
      avatar: '👩‍💼',
      isUser: false
    },
    {
      id: 4,
      sender: 'VEGA AI Assistant',
      message: 'Tôi thấy bạn đang hỏi về deadline. Dựa trên lịch làm việc, Mai có 3 video cần hoàn thành tuần này. Bạn có muốn xem chi tiết không?',
      time: '10:32 AM',
      avatar: '🤖',
      isUser: false,
      isAI: true,
      actions: ['Xem lịch', 'Hỏi khác']
    }
  ]

  const quickActions = [
    { title: 'Tạo Group Chat', icon: '👥' },
    { title: 'Đặt lịch họp', icon: '📅' },
    { title: 'Chia sẻ file', icon: '📤' }
  ]

  const getPersonById = (id) => orgChart.find(person => person.id === id)

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
                <p className="text-gray-500">Tra cứu Nhân sự & Chat</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                🔔
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

      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Tìm kiếm nhân viên theo tên, chức danh, kỹ năng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
              <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
            </div>
            <button className="flex items-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              <span className="mr-2">🔽</span>
              Bộ lọc
            </button>
            <button className="flex items-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
              <span className="mr-2">🤖</span>
              AI Assistant
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Bộ lọc nhanh:</span>
            {['Content Team', 'Marketing', 'Tech', 'Operations'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.toLowerCase()
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Organizational Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  <h2 className="text-xl font-bold text-gray-900">Sơ đồ tổ chức</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    ➖
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    ➕
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    ⛶
                  </button>
                </div>
              </div>

              {/* Organizational Chart */}
              <div className="relative">
                {/* CEO */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg max-w-xs">
                    <div className="text-center">
                      <div className="text-3xl mb-2">👨‍💼</div>
                      <h3 className="font-bold text-lg">Trần Minh CEO</h3>
                      <p className="text-sm opacity-90">Chief Executive Officer</p>
                    </div>
                  </div>
                </div>

                {/* Directors */}
                <div className="flex justify-center space-x-8 mb-8">
                  {['content', 'tech', 'marketing'].map((directorId) => {
                    const director = getPersonById(directorId)
                    return (
                      <div key={directorId} className={`bg-gradient-to-r ${
                        director.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        director.color === 'green' ? 'from-green-500 to-green-600' :
                        'from-orange-500 to-orange-600'
                      } text-white p-4 rounded-xl shadow-lg max-w-xs`}>
                        <div className="text-center">
                          <div className="text-3xl mb-2">{director.avatar}</div>
                          <h3 className="font-bold text-lg">{director.name}</h3>
                          <p className="text-sm opacity-90">{director.role}</p>
                          <p className="text-xs opacity-75">{director.title}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Content Team */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 text-center mb-4">Content Team</h4>
                    {['content1', 'content2', 'content3'].map((memberId) => {
                      const member = getPersonById(memberId)
                      return (
                        <div key={memberId} className="bg-blue-50 border border-blue-200 p-3 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{member.avatar}</div>
                            <div>
                              <h5 className="font-semibold text-gray-900 text-sm">{member.name}</h5>
                              <p className="text-xs text-gray-600">{member.title}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tech Team */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 text-center mb-4">Tech Team</h4>
                    {['tech1', 'tech2'].map((memberId) => {
                      const member = getPersonById(memberId)
                      return (
                        <div key={memberId} className="bg-green-50 border border-green-200 p-3 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{member.avatar}</div>
                            <div>
                              <h5 className="font-semibold text-gray-900 text-sm">{member.name}</h5>
                              <p className="text-xs text-gray-600">{member.title}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Marketing Team */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 text-center mb-4">Marketing Team</h4>
                    {['marketing1', 'marketing2'].map((memberId) => {
                      const member = getPersonById(memberId)
                      return (
                        <div key={memberId} className="bg-orange-50 border border-orange-200 p-3 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{member.avatar}</div>
                            <div>
                              <h5 className="font-semibold text-gray-900 text-sm">{member.name}</h5>
                              <p className="text-xs text-gray-600">{member.title}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hành động nhanh:</h3>
              <div className="flex space-x-4">
                {quickActions.map((action, index) => (
                  <button key={index} className="flex items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <span className="mr-2">{action.icon}</span>
                    <span className="text-sm font-medium">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">👩‍💼</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Nguyễn Thị Mai</h3>
                      <p className="text-sm text-gray-500">Senior Video Producer • Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      📞
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      📹
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      ⋮
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-xs ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="text-xl mr-2">{message.avatar}</div>
                      <div className={`${message.isUser ? 'ml-2' : 'mr-2'}`}>
                        {!message.isUser && (
                          <p className="text-xs text-gray-500 mb-1">{message.sender}</p>
                        )}
                        <div className={`p-3 rounded-lg ${
                          message.isUser 
                            ? 'bg-blue-500 text-white' 
                            : message.isAI 
                              ? 'bg-yellow-50 border border-yellow-200' 
                              : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.message}</p>
                          {message.actions && (
                            <div className="mt-2 flex space-x-2">
                              {message.actions.map((action, index) => (
                                <button key={index} className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors">
                                  {action}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    📎
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    😊
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Nhập tin nhắn..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    🎤
                  </button>
                  <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                    📤
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>127 người online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRSearchChat


