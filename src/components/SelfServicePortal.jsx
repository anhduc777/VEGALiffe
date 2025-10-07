import React, { useState } from 'react'
import { 
  UserIcon, 
  CogIcon, 
  DocumentTextIcon, 
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ShieldCheckIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { 
  UserIcon as UserSolidIcon,
  ChatBubbleLeftRightIcon as ChatSolidIcon
} from '@heroicons/react/24/solid'

const SelfServicePortal = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Xin chào! Tôi là AI Assistant của VEGA Life. Tôi có thể giúp bạn tìm hiểu về chính sách, phúc lợi và quy trình của công ty. Bạn cần hỗ trợ gì?',
      timestamp: new Date().toLocaleTimeString('vi-VN')
    }
  ])
  const [chatInput, setChatInput] = useState('')

  const userProfile = {
    ...currentUser,
    employeeId: 'EMP001234',
    startDate: '15/03/2022',
    manager: 'Nguyễn Văn Giám đốc',
    team: 'Development Team',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    certifications: ['AWS Certified Developer', 'Google Cloud Professional'],
    emergencyContact: {
      name: 'Nguyễn Thị Vợ',
      phone: '0901234567',
      relationship: 'Vợ/Chồng'
    }
  }

  const quickServices = [
    {
      title: 'Nghỉ phép',
      description: 'Đăng ký nghỉ phép, xem lịch nghỉ',
      icon: CalendarIcon,
      color: 'bg-blue-500',
      href: '/leave'
    },
    {
      title: 'Lương & Thưởng',
      description: 'Xem bảng lương, thưởng tháng',
      icon: CurrencyDollarIcon,
      color: 'bg-green-500',
      href: '/salary'
    },
    {
      title: 'Bảo hiểm',
      description: 'Thông tin bảo hiểm xã hội, y tế',
      icon: ShieldCheckIcon,
      color: 'bg-purple-500',
      href: '/insurance'
    },
    {
      title: 'Đào tạo',
      description: 'Đăng ký khóa học, xem chứng chỉ',
      icon: AcademicCapIcon,
      color: 'bg-yellow-500',
      href: '/training'
    },
    {
      title: 'Phúc lợi',
      description: 'Thông tin phúc lợi, voucher',
      icon: HeartIcon,
      color: 'bg-pink-500',
      href: '/benefits'
    },
    {
      title: 'Công việc',
      description: 'Mô tả công việc, mục tiêu',
      icon: BriefcaseIcon,
      color: 'bg-indigo-500',
      href: '/job'
    }
  ]

  const recentDocuments = [
    {
      id: 1,
      title: 'Hợp đồng lao động',
      type: 'Contract',
      date: '15/03/2022',
      status: 'Active',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Quy định công ty 2024',
      type: 'Policy',
      date: '01/01/2024',
      status: 'Updated',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Bảng lương tháng 12/2023',
      type: 'Payroll',
      date: '05/01/2024',
      status: 'Available',
      downloadUrl: '#'
    }
  ]

  const notifications = [
    {
      id: 1,
      title: 'Đơn nghỉ phép đã được duyệt',
      message: 'Đơn nghỉ phép của bạn từ 20-22/01 đã được giám đốc duyệt.',
      type: 'success',
      timestamp: '2 giờ trước',
      isRead: false
    },
    {
      id: 2,
      title: 'Nhắc nhở đánh giá hiệu suất',
      message: 'Vui lòng hoàn thành đánh giá hiệu suất quý IV trước 31/01.',
      type: 'warning',
      timestamp: '1 ngày trước',
      isRead: false
    },
    {
      id: 3,
      title: 'Thông báo nghỉ lễ Tết',
      message: 'Công ty sẽ nghỉ từ 08-16/02/2024 để nghỉ lễ Tết Nguyên đán.',
      type: 'info',
      timestamp: '3 ngày trước',
      isRead: true
    }
  ]

  const faqItems = [
    {
      id: 1,
      question: 'Làm thế nào để đăng ký nghỉ phép?',
      answer: 'Bạn có thể đăng ký nghỉ phép qua hệ thống HR Portal hoặc gửi email trực tiếp cho quản lý trực tiếp.',
      category: 'Leave'
    },
    {
      id: 2,
      question: 'Khi nào nhận được lương?',
      answer: 'Lương được thanh toán vào ngày 25 hàng tháng. Nếu ngày 25 rơi vào cuối tuần, lương sẽ được chuyển vào ngày làm việc gần nhất.',
      category: 'Salary'
    },
    {
      id: 3,
      question: 'Cách đăng ký khóa đào tạo?',
      answer: 'Bạn có thể đăng ký khóa đào tạo qua mục "Đào tạo" trong Self-Service Portal hoặc liên hệ HR Department.',
      category: 'Training'
    }
  ]

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (chatInput.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        message: chatInput,
        timestamp: new Date().toLocaleTimeString('vi-VN')
      }
      
      const botResponse = {
        id: chatMessages.length + 2,
        type: 'bot',
        message: generateBotResponse(chatInput),
        timestamp: new Date().toLocaleTimeString('vi-VN')
      }
      
      setChatMessages([...chatMessages, userMessage, botResponse])
      setChatInput('')
    }
  }

  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('nghỉ phép') || lowerInput.includes('leave')) {
      return 'Để đăng ký nghỉ phép, bạn có thể:\n1. Truy cập mục "Nghỉ phép" trong Self-Service Portal\n2. Gửi email cho quản lý trực tiếp\n3. Liên hệ HR Department qua số hotline: 1900-xxxx'
    } else if (lowerInput.includes('lương') || lowerInput.includes('salary')) {
      return 'Thông tin về lương:\n- Ngày thanh toán: 25 hàng tháng\n- Có thể xem chi tiết trong mục "Lương & Thưởng"\n- Liên hệ Payroll team nếu có thắc mắc'
    } else if (lowerInput.includes('bảo hiểm') || lowerInput.includes('insurance')) {
      return 'Thông tin bảo hiểm:\n- Bảo hiểm xã hội, y tế, thất nghiệp\n- Bảo hiểm sức khỏe bổ sung\n- Chi tiết trong mục "Bảo hiểm"'
    } else {
      return 'Cảm ơn bạn đã hỏi! Tôi có thể giúp bạn về:\n- Chính sách nghỉ phép\n- Thông tin lương thưởng\n- Bảo hiểm và phúc lợi\n- Đào tạo và phát triển\n\nBạn muốn biết thêm về chủ đề nào?'
    }
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />
      default:
        return <BellIcon className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">👤 Cổng Dịch Vụ Cá Nhân</h1>
            <p className="text-lg opacity-90">Quản lý thông tin và truy cập các dịch vụ nội bộ</p>
          </div>
          <div className="hidden md:block">
            <UserIcon className="h-24 w-24 text-white opacity-80" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'profile', name: 'Hồ sơ cá nhân', icon: UserIcon },
            { id: 'services', name: 'Dịch vụ nhanh', icon: CogIcon },
            { id: 'documents', name: 'Tài liệu', icon: DocumentTextIcon },
            { id: 'notifications', name: 'Thông báo', icon: BellIcon },
            { id: 'faq', name: 'Hỏi đáp', icon: QuestionMarkCircleIcon }
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

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="card text-center">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{userProfile.name}</h2>
              <p className="text-gray-600 mb-4">{userProfile.role}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>ID: {userProfile.employeeId}</p>
                <p>Bắt đầu: {userProfile.startDate}</p>
                <p>Phòng ban: {userProfile.department}</p>
                <p>Team: {userProfile.team}</p>
                <p>Quản lý: {userProfile.manager}</p>
              </div>
              <button className="btn-primary mt-4 w-full">
                Chỉnh sửa hồ sơ
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kỹ năng</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.skills.map((skill, index) => (
                  <span key={index} className="badge badge-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Chứng chỉ</h3>
              <div className="space-y-3">
                {userProfile.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AcademicCapIcon className="h-6 w-6 text-primary-600" />
                      <span className="font-medium">{cert}</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Hoàn thành</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Liên hệ khẩn cấp</h3>
              <div className="space-y-2">
                <p><strong>Tên:</strong> {userProfile.emergencyContact.name}</p>
                <p><strong>Quan hệ:</strong> {userProfile.emergencyContact.relationship}</p>
                <p><strong>Số điện thoại:</strong> {userProfile.emergencyContact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Dịch vụ nhanh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="card card-hover cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${service.color} text-white`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
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
          <h2 className="text-xl font-semibold text-gray-900">Tài liệu của bạn</h2>
          <div className="space-y-4">
            {recentDocuments.map((doc) => (
              <div key={doc.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-600">
                        {doc.type} • {doc.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`badge ${
                      doc.status === 'Active' ? 'badge-success' :
                      doc.status === 'Updated' ? 'badge-warning' :
                      'badge-primary'
                    }`}>
                      {doc.status}
                    </span>
                    <button className="btn-primary">
                      Tải xuống
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Thông báo</h2>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className={`card ${!notification.isRead ? 'bg-blue-50 border-blue-200' : ''}`}>
                <div className="flex items-start space-x-4">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                    <p className="text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.timestamp}</p>
                  </div>
                  {!notification.isRead && (
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.id} className="card">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                  <span className="badge badge-primary text-xs">{faq.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatbotOpen && (
          <button
            onClick={() => setChatbotOpen(true)}
            className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            <ChatSolidIcon className="h-6 w-6" />
          </button>
        )}
        
        {chatbotOpen && (
          <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
            <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ChatSolidIcon className="h-5 w-5" />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <button
                onClick={() => setChatbotOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.message}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Nhập câu hỏi..."
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
        )}
      </div>
    </div>
  )
}

export default SelfServicePortal


