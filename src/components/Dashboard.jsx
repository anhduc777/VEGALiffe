import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ChartBarIcon, 
  TrendingUpIcon, 
  UserGroupIcon,
  LightBulbIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Dashboard = ({ currentUser }) => {
  const stats = [
    { name: 'Tin tức mới', value: '12', icon: ChartBarIcon, change: '+3', changeType: 'positive' },
    { name: 'Ý tưởng đang bình chọn', value: '8', icon: LightBulbIcon, change: '+2', changeType: 'positive' },
    { name: 'Hoạt động team', value: '5', icon: UserGroupIcon, change: '+1', changeType: 'positive' },
    { name: 'Điểm số của bạn', value: currentUser.points, icon: TrendingUpIcon, change: '+120', changeType: 'positive' },
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'news',
      title: 'Chính sách nghỉ phép mới 2024 - Cập nhật quan trọng',
      time: '2 giờ trước',
      author: 'HR Department'
    },
    {
      id: 2,
      type: 'idea',
      title: 'Ý tưởng: Hệ thống tự động hóa báo cáo với AI',
      time: '4 giờ trước',
      author: 'Nguyễn Thị Bình'
    },
    {
      id: 3,
      type: 'event',
      title: 'Team Building: Khám phá Đà Lạt - Đăng ký đến 20/01',
      time: '1 ngày trước',
      author: 'Admin'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Bạn đã nhận được badge "Innovator" - Chúc mừng!',
      time: '2 ngày trước',
      author: 'Hệ thống'
    },
    {
      id: 5,
      type: 'news',
      title: 'Thông báo nghỉ lễ Tết Nguyên đán 2024',
      time: '3 ngày trước',
      author: 'HR Department'
    },
    {
      id: 6,
      type: 'event',
      title: 'Workshop: Kỹ năng lãnh đạo cho nhân viên',
      time: '4 ngày trước',
      author: 'Training Team'
    },
    {
      id: 7,
      type: 'idea',
      title: 'Ý tưởng: Ứng dụng mobile cho nhân viên',
      time: '5 ngày trước',
      author: 'Trần Văn Cường'
    }
  ]

  const quickActions = [
    {
      title: 'Đăng ý tưởng mới',
      description: 'Chia sẻ sáng kiến của bạn',
      icon: LightBulbIcon,
      href: '/innovation',
      color: 'bg-yellow-500'
    },
    {
      title: 'Xem tin tức',
      description: 'Cập nhật thông tin mới nhất',
      icon: ChartBarIcon,
      href: '/newsfeed',
      color: 'bg-blue-500'
    },
    {
      title: 'Tham gia khảo sát',
      description: 'Đóng góp ý kiến của bạn',
      icon: UserGroupIcon,
      href: '/engagement',
      color: 'bg-green-500'
    },
    {
      title: 'Đặt lịch họp',
      description: 'Lên lịch cuộc họp team',
      icon: CalendarIcon,
      href: '/collaboration',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Chào mừng trở lại, {currentUser.name}! 👋
            </h1>
            <p className="text-lg opacity-90 mb-4">
              Hôm nay là một ngày tuyệt vời để tạo ra những điều mới mẻ
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Level {currentUser.level}</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">⭐ {currentUser.points} điểm</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-24 w-24 rounded-full border-4 border-white border-opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} so với tuần trước
                </p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className={`p-2 rounded-lg ${action.color} text-white mr-3`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-primary-600">
                      {action.title}
                    </p>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h3>
              <Link to="/newsfeed" className="text-sm text-primary-600 hover:text-primary-700">
                Xem tất cả
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    {activity.type === 'news' && <ChartBarIcon className="h-5 w-5 text-blue-500" />}
                    {activity.type === 'idea' && <LightBulbIcon className="h-5 w-5 text-yellow-500" />}
                    {activity.type === 'event' && <CalendarIcon className="h-5 w-5 text-green-500" />}
                    {activity.type === 'achievement' && <TrendingUpIcon className="h-5 w-5 text-purple-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">
                      {activity.author} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sự kiện sắp tới</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-2">
              <CalendarIcon className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-gray-900">Họp team hàng tuần</span>
            </div>
            <p className="text-sm text-gray-600">Thứ 2, 15/01/2024</p>
            <p className="text-xs text-gray-500 mt-1">9:00 - 10:00 AM</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-2">
              <UserGroupIcon className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-900">Training: Agile Method</span>
            </div>
            <p className="text-sm text-gray-600">Thứ 4, 17/01/2024</p>
            <p className="text-xs text-gray-500 mt-1">2:00 - 4:00 PM</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-2">
              <ClockIcon className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-gray-900">Deadline dự án</span>
            </div>
            <p className="text-sm text-gray-600">Thứ 6, 19/01/2024</p>
            <p className="text-xs text-gray-500 mt-1">5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

