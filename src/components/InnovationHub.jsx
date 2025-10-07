import React, { useState } from 'react'
import { 
  LightBulbIcon, 
  PlusIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  FireIcon,
  StarIcon,
  TrendingUpIcon,
  TagIcon,
  PaperClipIcon,
  EyeIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { 
  LightBulbIcon as LightBulbSolidIcon,
  FireIcon as FireSolidIcon,
  StarIcon as StarSolidIcon
} from '@heroicons/react/24/solid'

const InnovationHub = ({ currentUser }) => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: 'Hệ thống AI Chatbot cho HR',
      description: 'Xây dựng chatbot thông minh để trả lời tự động các câu hỏi về chính sách, phúc lợi và quy trình HR. Giúp giảm 70% thời gian xử lý thủ công.',
      author: {
        name: 'Nguyễn Thị Bình',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'Marketing Manager',
        department: 'Marketing'
      },
      votes: 89,
      comments: 23,
      views: 456,
      tags: ['AI', 'HR', 'Automation', 'Productivity'],
      category: 'Technology',
      status: 'Under Review',
      priority: 'High',
      timestamp: '2 ngày trước',
      attachments: ['AI_Chatbot_Proposal.pdf'],
      isVoted: false,
      isBookmarked: true,
      isTopIdea: true
    },
    {
      id: 4,
      title: 'Green Office Initiative',
      description: 'Triển khai chương trình văn phòng xanh với hệ thống tiết kiệm năng lượng, tái chế rác thải và sử dụng năng lượng tái tạo. Mục tiêu giảm 30% carbon footprint.',
      author: {
        name: 'Lê Thị Dung',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        role: 'HR Specialist',
        department: 'HR'
      },
      votes: 67,
      comments: 18,
      views: 234,
      tags: ['Green', 'Sustainability', 'Environment', 'CSR'],
      category: 'HR',
      status: 'New',
      priority: 'Medium',
      timestamp: '1 ngày trước',
      attachments: [],
      isVoted: true,
      isBookmarked: false,
      isTopIdea: false
    },
    {
      id: 5,
      title: 'Smart Parking System',
      description: 'Hệ thống đỗ xe thông minh với IoT sensors, giúp nhân viên tìm chỗ đỗ xe nhanh chóng và quản lý không gian đỗ xe hiệu quả.',
      author: {
        name: 'Phạm Văn Em',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        role: 'Marketing Executive',
        department: 'Marketing'
      },
      votes: 34,
      comments: 9,
      views: 156,
      tags: ['IoT', 'Smart', 'Parking', 'Efficiency'],
      category: 'Technology',
      status: 'New',
      priority: 'Low',
      timestamp: '6 giờ trước',
      attachments: ['Smart_Parking_Design.png'],
      isVoted: false,
      isBookmarked: true,
      isTopIdea: false
    },
    {
      id: 2,
      title: 'Chương trình Wellness & Mental Health',
      description: 'Triển khai chương trình chăm sóc sức khỏe tinh thần cho nhân viên với các hoạt động yoga, meditation, và tư vấn tâm lý miễn phí.',
      author: {
        name: 'Lê Thị Dung',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        role: 'HR Specialist',
        department: 'HR'
      },
      votes: 67,
      comments: 18,
      views: 234,
      tags: ['Wellness', 'Mental Health', 'Employee Care'],
      category: 'HR',
      status: 'In Progress',
      priority: 'Medium',
      timestamp: '3 ngày trước',
      attachments: [],
      isVoted: true,
      isBookmarked: false,
      isTopIdea: false
    },
    {
      id: 3,
      title: 'Mobile App cho Remote Work',
      description: 'Phát triển ứng dụng di động tích hợp đầy đủ tính năng: check-in/out, quản lý task, video call, và real-time collaboration.',
      author: {
        name: 'Trần Văn Cường',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        role: 'Senior Developer',
        department: 'IT'
      },
      votes: 45,
      comments: 12,
      views: 189,
      tags: ['Mobile', 'Remote Work', 'Productivity'],
      category: 'Technology',
      status: 'New',
      priority: 'High',
      timestamp: '5 ngày trước',
      attachments: ['Mobile_App_Mockup.png', 'Tech_Requirements.docx'],
      isVoted: false,
      isBookmarked: true,
      isTopIdea: false
    }
  ])

  const [newIdea, setNewIdea] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'Technology'
  })

  const [showCreateForm, setShowCreateForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('All')
  const [sortBy, setSortBy] = useState('votes')

  const categories = [
    { id: 'Technology', name: 'Công nghệ', color: 'bg-blue-100 text-blue-800' },
    { id: 'HR', name: 'Nhân sự', color: 'bg-green-100 text-green-800' },
    { id: 'Process', name: 'Quy trình', color: 'bg-purple-100 text-purple-800' },
    { id: 'Marketing', name: 'Marketing', color: 'bg-pink-100 text-pink-800' },
    { id: 'Finance', name: 'Tài chính', color: 'bg-yellow-100 text-yellow-800' }
  ]

  const statuses = [
    { id: 'New', name: 'Mới', color: 'bg-gray-100 text-gray-800' },
    { id: 'Under Review', name: 'Đang xem xét', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'In Progress', name: 'Đang thực hiện', color: 'bg-blue-100 text-blue-800' },
    { id: 'Completed', name: 'Hoàn thành', color: 'bg-green-100 text-green-800' },
    { id: 'Rejected', name: 'Từ chối', color: 'bg-red-100 text-red-800' }
  ]

  const handleVote = (ideaId) => {
    setIdeas(ideas.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          isVoted: !idea.isVoted,
          votes: idea.isVoted ? idea.votes - 1 : idea.votes + 1
        }
      }
      return idea
    }))
  }

  const handleBookmark = (ideaId) => {
    setIdeas(ideas.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          isBookmarked: !idea.isBookmarked
        }
      }
      return idea
    }))
  }

  const handleCreateIdea = (e) => {
    e.preventDefault()
    if (newIdea.title.trim() && newIdea.description.trim()) {
      const idea = {
        id: ideas.length + 1,
        title: newIdea.title,
        description: newIdea.description,
        author: {
          name: currentUser.name,
          avatar: currentUser.avatar,
          role: currentUser.role,
          department: currentUser.department
        },
        votes: 0,
        comments: 0,
        views: 0,
        tags: newIdea.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        category: newIdea.category,
        status: 'New',
        priority: 'Medium',
        timestamp: 'Vừa xong',
        attachments: [],
        isVoted: false,
        isBookmarked: false,
        isTopIdea: false
      }
      setIdeas([idea, ...ideas])
      setNewIdea({ title: '', description: '', tags: '', category: 'Technology' })
      setShowCreateForm(false)
    }
  }

  const filteredIdeas = ideas.filter(idea => 
    filterStatus === 'All' || idea.status === filterStatus
  ).sort((a, b) => {
    switch (sortBy) {
      case 'votes':
        return b.votes - a.votes
      case 'recent':
        return new Date(b.timestamp) - new Date(a.timestamp)
      case 'comments':
        return b.comments - a.comments
      default:
        return b.votes - a.votes
    }
  })

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.color : 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status) => {
    const stat = statuses.find(s => s.id === status)
    return stat ? stat.color : 'bg-gray-100 text-gray-800'
  }

  const getStatusName = (status) => {
    const stat = statuses.find(s => s.id === status)
    return stat ? stat.name : status
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">💡 Innovation Hub</h1>
            <p className="text-lg opacity-90">Nơi những ý tưởng tuyệt vời được nảy sinh và phát triển</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <LightBulbSolidIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">{ideas.length} ý tưởng</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <FireSolidIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">{ideas.reduce((sum, idea) => sum + idea.votes, 0)} lượt bình chọn</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LightBulbIcon className="h-24 w-24 text-white opacity-80" />
          </div>
        </div>
      </div>

      {/* Top Idea Banner */}
      {ideas.find(idea => idea.isTopIdea) && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <StarSolidIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Ý tưởng của tháng</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {ideas.find(idea => idea.isTopIdea).title}
              </h3>
              <p className="opacity-90">
                Bởi {ideas.find(idea => idea.isTopIdea).author.name} • {ideas.find(idea => idea.isTopIdea).votes} lượt bình chọn
              </p>
            </div>
            <TrophyIcon className="h-16 w-16 text-white opacity-80" />
          </div>
        </div>
      )}

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-wrap items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="All">Tất cả trạng thái</option>
              {statuses.map(status => (
                <option key={status.id} value={status.id}>{status.name}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <TrendingUpIcon className="h-5 w-5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="votes">Bình chọn nhiều nhất</option>
              <option value="recent">Mới nhất</option>
              <option value="comments">Nhiều bình luận nhất</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={() => setShowCreateForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Đăng ý tưởng</span>
        </button>
      </div>

      {/* Create Idea Form */}
      {showCreateForm && (
        <div className="card">
          <form onSubmit={handleCreateIdea} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tiêu đề ý tưởng *
              </label>
              <input
                type="text"
                value={newIdea.title}
                onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
                placeholder="Đặt tên cho ý tưởng của bạn..."
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mô tả chi tiết *
              </label>
              <textarea
                value={newIdea.description}
                onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
                placeholder="Mô tả chi tiết ý tưởng, lợi ích, cách thực hiện..."
                className="input-field"
                rows="4"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Danh mục
                </label>
                <select
                  value={newIdea.category}
                  onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
                  className="input-field"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (phân cách bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  value={newIdea.tags}
                  onChange={(e) => setNewIdea({...newIdea, tags: e.target.value})}
                  placeholder="AI, Productivity, Automation..."
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Đăng ý tưởng
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Ideas List */}
      <div className="space-y-6">
        {filteredIdeas.map((idea) => (
          <div key={idea.id} className={`card ${idea.isTopIdea ? 'ring-2 ring-yellow-300' : ''}`}>
            {/* Idea Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <img
                  src={idea.author.avatar}
                  alt={idea.author.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{idea.title}</h3>
                    {idea.isTopIdea && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <StarSolidIcon className="h-3 w-3 mr-1" />
                        Top Idea
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    Bởi {idea.author.name} • {idea.author.role} • {idea.timestamp}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`badge ${getCategoryColor(idea.category)}`}>
                  {categories.find(c => c.id === idea.category)?.name}
                </span>
                <span className={`badge ${getStatusColor(idea.status)}`}>
                  {getStatusName(idea.status)}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Idea Content */}
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">{idea.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.tags.map((tag, index) => (
                  <span key={index} className="badge badge-primary">
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Attachments */}
              {idea.attachments.length > 0 && (
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <PaperClipIcon className="h-4 w-4" />
                  <span>{idea.attachments.length} tài liệu đính kèm</span>
                </div>
              )}
            </div>

            {/* Idea Stats and Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleVote(idea.id)}
                  className={`flex items-center space-x-2 ${
                    idea.isVoted ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'
                  } transition-colors`}
                >
                  <LightBulbIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">{idea.votes}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span className="text-sm">{idea.comments}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                  <ShareIcon className="h-5 w-5" />
                  <span className="text-sm">Chia sẻ</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <EyeIcon className="h-5 w-5" />
                  <span className="text-sm">{idea.views}</span>
                </button>
              </div>
              
              <button
                onClick={() => handleBookmark(idea.id)}
                className={`${
                  idea.isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                } transition-colors`}
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="btn-primary">
          Xem thêm ý tưởng
        </button>
      </div>
    </div>
  )
}

export default InnovationHub

