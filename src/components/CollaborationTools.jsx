import React, { useState } from 'react'
import { 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon,
  CalendarIcon,
  DocumentTextIcon,
  PlusIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  PaperClipIcon,
  PhoneIcon,
  ShareIcon,
  BellIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  Bars3Icon,
  Squares2X2Icon,
  ListBulletIcon
} from '@heroicons/react/24/outline'
import { 
  ChatBubbleLeftRightIcon as ChatSolidIcon,
  VideoCameraIcon as VideoSolidIcon
} from '@heroicons/react/24/solid'

const CollaborationTools = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('chat')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: {
        name: 'Nguyễn Thị Bình',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'Marketing Manager'
      },
      message: 'Chào team! Ai có thể review giúp tôi bản draft proposal cho dự án mới không?',
      timestamp: '10:30 AM',
      isRead: true
    },
    {
      id: 2,
      sender: {
        name: 'Trần Văn Cường',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        role: 'Senior Developer'
      },
      message: 'Tôi có thể xem qua. Bạn gửi file qua đây được không?',
      timestamp: '10:32 AM',
      isRead: true
    },
    {
      id: 3,
      sender: {
        name: currentUser.name,
        avatar: currentUser.avatar,
        role: currentUser.role
      },
      message: 'Tôi cũng muốn tham gia review. Có deadline cụ thể không?',
      timestamp: '10:35 AM',
      isRead: true,
      isOwn: true
    }
  ])

  const [newMessage, setNewMessage] = useState('')

  const projects = [
    {
      id: 1,
      name: 'VEGA Mobile App',
      description: 'Phát triển ứng dụng di động cho nhân viên',
      status: 'In Progress',
      progress: 65,
      team: [
        { name: 'Nguyễn Thị Bình', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
        { name: 'Trần Văn Cường', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
        { name: currentUser.name, avatar: currentUser.avatar }
      ],
      deadline: '2024-03-15',
      priority: 'High'
    },
    {
      id: 2,
      name: 'HR Automation System',
      description: 'Tự động hóa quy trình nhân sự',
      status: 'Planning',
      progress: 25,
      team: [
        { name: 'Lê Thị Dung', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face' },
        { name: currentUser.name, avatar: currentUser.avatar }
      ],
      deadline: '2024-04-30',
      priority: 'Medium'
    }
  ]

  const tasks = [
    {
      id: 1,
      title: 'Review UI/UX Design',
      project: 'VEGA Mobile App',
      assignee: currentUser.name,
      dueDate: '2024-01-20',
      status: 'In Progress',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Setup Development Environment',
      project: 'VEGA Mobile App',
      assignee: 'Trần Văn Cường',
      dueDate: '2024-01-18',
      status: 'Completed',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Write Technical Documentation',
      project: 'HR Automation System',
      assignee: currentUser.name,
      dueDate: '2024-01-25',
      status: 'Pending',
      priority: 'Low'
    }
  ]

  const meetings = [
    {
      id: 1,
      title: 'Daily Standup',
      time: '09:00 AM',
      date: '2024-01-15',
      duration: '30 phút',
      participants: ['Nguyễn Thị Bình', 'Trần Văn Cường', currentUser.name],
      type: 'video',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Sprint Planning',
      time: '02:00 PM',
      date: '2024-01-15',
      duration: '2 giờ',
      participants: ['Development Team'],
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Client Review',
      time: '10:00 AM',
      date: '2024-01-16',
      duration: '1 giờ',
      participants: ['Nguyễn Thị Bình', 'Nguyễn Văn Giám đốc'],
      type: 'video',
      status: 'upcoming'
    }
  ]

  const documents = [
    {
      id: 1,
      name: 'Project Requirements.docx',
      type: 'document',
      size: '2.4 MB',
      modified: '2 giờ trước',
      sharedBy: 'Nguyễn Thị Bình',
      isShared: true
    },
    {
      id: 2,
      name: 'UI Design Mockup.fig',
      type: 'design',
      size: '15.2 MB',
      modified: '1 ngày trước',
      sharedBy: 'Trần Văn Cường',
      isShared: true
    },
    {
      id: 3,
      name: 'Meeting Notes - Sprint 15.pdf',
      type: 'document',
      size: '856 KB',
      modified: '3 ngày trước',
      sharedBy: currentUser.name,
      isShared: false
    }
  ]

  const channels = [
    { id: 1, name: '#general', unread: 3, isActive: true },
    { id: 2, name: '#development', unread: 0, isActive: false },
    { id: 3, name: '#marketing', unread: 1, isActive: false },
    { id: 4, name: '#hr', unread: 0, isActive: false }
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        sender: {
          name: currentUser.name,
          avatar: currentUser.avatar,
          role: currentUser.role
        },
        message: newMessage,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        isRead: true,
        isOwn: true
      }
      setChatMessages([...chatMessages, message])
      setNewMessage('')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Planning':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getFileIcon = (type) => {
    switch (type) {
      case 'document':
        return <DocumentTextIcon className="h-5 w-5 text-blue-500" />
      case 'design':
        return <DocumentTextIcon className="h-5 w-5 text-purple-500" />
      default:
        return <DocumentTextIcon className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">🤝 Cộng Tác & Làm Việc</h1>
            <p className="text-lg opacity-90">Kết nối, chia sẻ và cùng nhau hoàn thành dự án</p>
          </div>
          <div className="hidden md:block">
            <UserGroupIcon className="h-24 w-24 text-white opacity-80" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'chat', name: 'Chat & Video', icon: ChatBubbleLeftRightIcon },
            { id: 'projects', name: 'Dự án', icon: DocumentTextIcon },
            { id: 'tasks', name: 'Nhiệm vụ', icon: CheckCircleIcon },
            { id: 'calendar', name: 'Lịch họp', icon: CalendarIcon },
            { id: 'documents', name: 'Tài liệu', icon: DocumentTextIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Chat Tab */}
      {activeTab === 'chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Channels Sidebar */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Kênh chat</h3>
              <div className="space-y-2">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      channel.isActive 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{channel.name}</span>
                      {channel.unread > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {channel.unread}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Cuộc gọi nhanh</h4>
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                    <PhoneIcon className="h-4 w-4" />
                    <span>Gọi</span>
                  </button>
                  <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                    <VideoCameraIcon className="h-4 w-4" />
                    <span>Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="card h-96 flex flex-col">
              <div className="border-b border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900">#general</h3>
                <p className="text-sm text-gray-500">3 thành viên đang online</p>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex space-x-3 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <img
                        src={message.sender.avatar}
                        alt={message.sender.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className={`${message.isOwn ? 'text-right' : ''}`}>
                        <div className={`p-3 rounded-lg ${
                          message.isOwn 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {message.sender.name} • {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Nhập tin nhắn..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Dự án đang tham gia</h2>
            <button className="btn-primary flex items-center space-x-2">
              <PlusIcon className="h-5 w-5" />
              <span>Tạo dự án</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`badge ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`badge ${getPriorityColor(project.priority)}`}>
                        {project.priority} Priority
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Tiến độ</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Team:</span>
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <img
                          key={index}
                          src={member.avatar}
                          alt={member.name}
                          className="h-6 w-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 inline mr-1" />
                    {new Date(project.deadline).toLocaleDateString('vi-VN')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Nhiệm vụ của tôi</h2>
            <button className="btn-primary flex items-center space-x-2">
              <PlusIcon className="h-5 w-5" />
              <span>Tạo nhiệm vụ</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={task.status === 'Completed'}
                      className="h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <p className="text-sm text-gray-600">{task.project}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`badge ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <span className={`badge ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <div className="text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 inline mr-1" />
                      {new Date(task.dueDate).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Lịch họp & Sự kiện</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{meeting.title}</h3>
                    <p className="text-sm text-gray-600">{meeting.date} • {meeting.time}</p>
                    <p className="text-sm text-gray-500">{meeting.duration}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    meeting.type === 'video' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {meeting.type === 'video' ? (
                      <VideoCameraIcon className="h-5 w-5 text-blue-600" />
                    ) : (
                      <CalendarIcon className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Tham gia:</strong> {meeting.participants.join(', ')}
                  </p>
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">
                      Tham gia
                    </button>
                    <button className="flex-1 btn-secondary text-sm">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documents Tab */}
      {activeTab === 'documents' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Tài liệu chia sẻ</h2>
            <button className="btn-primary flex items-center space-x-2">
              <PlusIcon className="h-5 w-5" />
              <span>Tải lên</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {getFileIcon(doc.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                      <p className="text-sm text-gray-600">
                        {doc.size} • {doc.modified} • Bởi {doc.sharedBy}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {doc.isShared && (
                      <span className="badge badge-success">Đã chia sẻ</span>
                    )}
                    <button className="btn-primary">
                      Tải xuống
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ShareIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CollaborationTools




