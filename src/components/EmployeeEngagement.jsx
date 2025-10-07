import React, { useState } from 'react'
import { 
  TrophyIcon, 
  StarIcon, 
  FireIcon, 
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  GiftIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { 
  TrophyIcon as TrophySolidIcon,
  StarIcon as StarSolidIcon,
  FireIcon as FireSolidIcon
} from '@heroicons/react/24/solid'

const EmployeeEngagement = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('leaderboard')

  const topPerformers = [
    {
      id: 1,
      name: 'Nguyễn Thị Bình',
      role: 'Marketing Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      points: 4850,
      level: 'Lv. 8',
      rank: 1,
      achievements: ['Innovator', 'Team Player', 'Problem Solver'],
      department: 'Marketing',
      quote: 'Luôn tìm cách để làm việc hiệu quả hơn và sáng tạo hơn!'
    },
    {
      id: 2,
      name: 'Trần Văn Cường',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      points: 4620,
      level: 'Lv. 7',
      rank: 2,
      achievements: ['Tech Expert', 'Mentor', 'Code Master'],
      department: 'IT',
      quote: 'Chia sẻ kiến thức để cùng nhau phát triển.'
    },
    {
      id: 3,
      name: 'Lê Thị Dung',
      role: 'HR Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      points: 4380,
      level: 'Lv. 7',
      rank: 3,
      achievements: ['People Champion', 'Culture Builder', 'Wellness Advocate'],
      department: 'HR',
      quote: 'Mỗi nhân viên đều là một phần quan trọng của gia đình VEGA.'
    },
    {
      id: 4,
      name: currentUser.name,
      role: currentUser.role,
      avatar: currentUser.avatar,
      points: currentUser.points,
      level: currentUser.level,
      rank: 4,
      achievements: ['Rising Star', 'Collaborator'],
      department: currentUser.department,
      quote: 'Đang trên con đường phát triển và học hỏi mỗi ngày.'
    }
  ]

  const recentKudos = [
    {
      id: 1,
      from: 'Nguyễn Thị Bình',
      to: 'Trần Văn Cường',
      message: 'Cảm ơn anh đã hỗ trợ tôi hoàn thành dự án marketing automation. Kiến thức chuyên môn của anh thật tuyệt vời!',
      type: 'expertise',
      timestamp: '2 giờ trước',
      fromAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      toAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      from: 'Lê Thị Dung',
      to: 'Phạm Văn Em',
      message: 'Chúc mừng bạn đã hoàn thành xuất sắc khóa training mới! Thái độ học hỏi của bạn thật đáng khen ngợi.',
      type: 'learning',
      timestamp: '4 giờ trước',
      fromAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      toAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      from: 'Admin',
      to: 'Toàn bộ team Marketing',
      message: 'Team Marketing đã hoàn thành xuất sắc chiến dịch Black Friday với doanh thu vượt 30% mục tiêu!',
      type: 'teamwork',
      timestamp: '1 ngày trước',
      fromAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      toAvatar: null
    },
    {
      id: 4,
      from: 'Trần Văn Cường',
      to: 'Nguyễn Văn An',
      message: 'Cảm ơn bạn đã review code rất kỹ lưỡng. Những góp ý của bạn giúp tôi cải thiện chất lượng code đáng kể!',
      type: 'expertise',
      timestamp: '6 giờ trước',
      fromAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      toAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      from: 'Phạm Văn Em',
      to: 'Lê Thị Dung',
      message: 'Cảm ơn chị đã tổ chức buổi team building rất vui vẻ. Mọi người đều rất hài lòng và gắn kết hơn!',
      type: 'teamwork',
      timestamp: '1 ngày trước',
      fromAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      toAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      from: 'Nguyễn Văn Giám đốc',
      to: 'Toàn bộ công ty',
      message: 'Chúc mừng tất cả nhân viên đã hoàn thành xuất sắc mục tiêu quý IV. Tôi rất tự hào về đội ngũ của chúng ta!',
      type: 'achievement',
      timestamp: '2 ngày trước',
      fromAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      toAvatar: null
    }
  ]

  const surveys = [
    {
      id: 1,
      title: 'Khảo sát mức độ hài lòng công việc Q4',
      description: 'Chúng tôi muốn lắng nghe ý kiến của bạn về môi trường làm việc',
      progress: 75,
      participants: 120,
      total: 160,
      deadline: '3 ngày nữa',
      reward: 50,
      isCompleted: false
    },
    {
      id: 2,
      title: 'Đánh giá chương trình training',
      description: 'Phản hồi về chất lượng các khóa học trong tháng',
      progress: 100,
      participants: 45,
      total: 45,
      deadline: 'Đã hoàn thành',
      reward: 30,
      isCompleted: true
    }
  ]

  const achievements = [
    {
      id: 1,
      name: 'Innovator',
      description: 'Đóng góp 5 ý tưởng sáng tạo',
      icon: SparklesIcon,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      isUnlocked: true,
      progress: 5,
      target: 5
    },
    {
      id: 2,
      name: 'Team Player',
      description: 'Tham gia 10 hoạt động team building',
      icon: HeartIcon,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
      isUnlocked: true,
      progress: 10,
      target: 10
    },
    {
      id: 3,
      name: 'Knowledge Sharer',
      description: 'Chia sẻ 20 bài viết hữu ích',
      icon: ChatBubbleLeftIcon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      isUnlocked: false,
      progress: 12,
      target: 20
    },
    {
      id: 4,
      name: 'Mentor',
      description: 'Hướng dẫn 5 nhân viên mới',
      icon: GiftIcon,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      isUnlocked: false,
      progress: 2,
      target: 5
    }
  ]

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <TrophySolidIcon className="h-6 w-6 text-yellow-500" />
      case 2:
        return <TrophyIcon className="h-6 w-6 text-gray-400" />
      case 3:
        return <TrophyIcon className="h-6 w-6 text-orange-400" />
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>
    }
  }

  const getKudosIcon = (type) => {
    switch (type) {
      case 'expertise':
        return <StarSolidIcon className="h-5 w-5 text-yellow-500" />
      case 'learning':
        return <FireSolidIcon className="h-5 w-5 text-orange-500" />
      case 'teamwork':
        return <HeartIcon className="h-5 w-5 text-pink-500" />
      default:
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">🏆 Vinh danh & Gắn kết</h1>
            <p className="text-lg opacity-90">Nơi ghi nhận thành tích và thúc đẩy tinh thần đồng đội</p>
          </div>
          <div className="hidden md:block">
            <TrophyIcon className="h-24 w-24 text-white opacity-80" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'leaderboard', name: 'Bảng xếp hạng', icon: TrophyIcon },
            { id: 'kudos', name: 'Lời khen', icon: HeartIcon },
            { id: 'surveys', name: 'Khảo sát', icon: ChatBubbleLeftIcon },
            { id: 'achievements', name: 'Thành tích', icon: StarIcon }
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

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">🏆 Top Performers</h2>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={performer.id} className={`p-6 rounded-xl border-2 transition-all ${
                  performer.rank <= 3 
                    ? 'border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                        {getRankIcon(performer.rank)}
                      </div>
                      <img
                        src={performer.avatar}
                        alt={performer.name}
                        className="h-16 w-16 rounded-full border-4 border-white shadow-lg"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">{performer.name}</h3>
                          {performer.id === currentUser.id && (
                            <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                              Bạn
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{performer.role} • {performer.department}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm font-medium text-secondary-600">
                            ⭐ {performer.points} điểm
                          </span>
                          <span className="text-sm text-gray-500">{performer.level}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {performer.achievements.map((achievement, idx) => (
                            <span key={idx} className="badge badge-primary text-xs">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 italic">"{performer.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Kudos Tab */}
      {activeTab === 'kudos' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">💝 Lời khen gần đây</h2>
            <button className="btn-primary">
              Gửi lời khen
            </button>
          </div>
          
          <div className="space-y-4">
            {recentKudos.map((kudo) => (
              <div key={kudo.id} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={kudo.fromAvatar}
                      alt={kudo.from}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="font-medium text-gray-900">{kudo.from}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getKudosIcon(kudo.type)}
                      <span className="text-sm text-gray-500">đã khen</span>
                      {kudo.toAvatar ? (
                        <div className="flex items-center space-x-2">
                          <img
                            src={kudo.toAvatar}
                            alt={kudo.to}
                            className="h-8 w-8 rounded-full"
                          />
                          <span className="font-medium text-gray-900">{kudo.to}</span>
                        </div>
                      ) : (
                        <span className="font-medium text-gray-900">{kudo.to}</span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{kudo.message}</p>
                    <p className="text-sm text-gray-500">{kudo.timestamp}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <HeartIcon className="h-5 w-5" />
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

      {/* Surveys Tab */}
      {activeTab === 'surveys' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">📊 Khảo sát & Phản hồi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surveys.map((survey) => (
              <div key={survey.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{survey.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{survey.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Tiến độ tham gia</span>
                        <span>{survey.participants}/{survey.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${survey.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4" />
                        <span>{survey.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-secondary-600">
                        <GiftIcon className="h-4 w-4" />
                        <span>+{survey.reward} điểm</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    survey.isCompleted 
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                  disabled={survey.isCompleted}
                >
                  {survey.isCompleted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircleIcon className="h-5 w-5" />
                      <span>Đã hoàn thành</span>
                    </div>
                  ) : (
                    'Tham gia khảo sát'
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">🏅 Thành tích của bạn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`card ${
                achievement.isUnlocked ? 'ring-2 ring-green-200' : 'opacity-75'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{achievement.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    
                    {!achievement.isUnlocked && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Tiến độ</span>
                          <span>{achievement.progress}/{achievement.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${(achievement.progress / achievement.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {achievement.isUnlocked && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircleIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">Đã mở khóa</span>
                      </div>
                    )}
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

export default EmployeeEngagement

