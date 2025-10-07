import React, { useState } from 'react'
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ShareIcon, 
  BookmarkIcon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const Newsfeed = ({ currentUser }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'HR Department',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        role: 'Human Resources',
        isVerified: true
      },
      content: {
        text: '🎉 Chúc mừng tất cả nhân viên! Chúng ta đã hoàn thành xuất sắc mục tiêu quý IV với doanh thu tăng 25% so với cùng kỳ năm trước. Cảm ơn sự nỗ lực và đóng góp của tất cả mọi người! 💪',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
        type: 'announcement'
      },
      stats: {
        likes: 156,
        comments: 23,
        shares: 12
      },
      timestamp: '2 giờ trước',
      tags: ['#Achievement', '#TeamWork', '#Success'],
      isPinned: true,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 4,
      author: {
        name: 'Lê Thị Dung',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        role: 'HR Specialist',
        isVerified: false
      },
      content: {
        text: '🌟 Thông báo quan trọng: Chương trình đào tạo "Digital Skills for Future" sẽ bắt đầu vào tuần tới. Đăng ký ngay để không bỏ lỡ cơ hội phát triển kỹ năng!',
        type: 'announcement'
      },
      stats: {
        likes: 45,
        comments: 8,
        shares: 15
      },
      timestamp: '3 giờ trước',
      tags: ['#Training', '#DigitalSkills', '#Development'],
      isPinned: false,
      isLiked: true,
      isBookmarked: true
    },
    {
      id: 5,
      author: {
        name: 'Phạm Văn Em',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        role: 'Marketing Executive',
        isVerified: false
      },
      content: {
        text: '📱 Chia sẻ kinh nghiệm: Sau 3 tháng sử dụng ứng dụng VEGA Life, tôi thấy productivity tăng đáng kể. Đặc biệt tính năng Innovation Hub giúp tôi có nhiều ý tưởng hay hơn!',
        type: 'experience'
      },
      stats: {
        likes: 32,
        comments: 12,
        shares: 5
      },
      timestamp: '5 giờ trước',
      tags: ['#Experience', '#Productivity', '#Innovation'],
      isPinned: false,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      author: {
        name: 'Nguyễn Thị Bình',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'Marketing Manager',
        isVerified: false
      },
      content: {
        text: 'Buổi team building vừa qua thật tuyệt vời! Cảm ơn team đã tạo ra những khoảnh khắc đáng nhớ. Đặc biệt là trò chơi "Escape Room" - team chúng ta đã hoàn thành trong thời gian kỷ lục! 🏆',
        images: [
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop'
        ],
        type: 'event'
      },
      stats: {
        likes: 89,
        comments: 15,
        shares: 8
      },
      timestamp: '5 giờ trước',
      tags: ['#TeamBuilding', '#Fun', '#Memories'],
      isPinned: false,
      isLiked: true,
      isBookmarked: true
    },
    {
      id: 3,
      author: {
        name: 'Trần Văn Cường',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        role: 'Senior Developer',
        isVerified: false
      },
      content: {
        text: 'Chia sẻ một số tips về React Performance Optimization mà tôi đã học được trong dự án vừa qua. Hy vọng sẽ hữu ích cho các bạn! 💻',
        document: {
          title: 'React Performance Tips.pdf',
          size: '2.4 MB'
        },
        type: 'knowledge'
      },
      stats: {
        likes: 67,
        comments: 12,
        shares: 19
      },
      timestamp: '1 ngày trước',
      tags: ['#Tech', '#Learning', '#React', '#Performance'],
      isPinned: false,
      isLiked: false,
      isBookmarked: false
    }
  ])

  const [newPostText, setNewPostText] = useState('')
  const [showCreatePost, setShowCreatePost] = useState(false)

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          stats: {
            ...post.stats,
            likes: post.isLiked ? post.stats.likes - 1 : post.stats.likes + 1
          }
        }
      }
      return post
    }))
  }

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isBookmarked: !post.isBookmarked
        }
      }
      return post
    }))
  }

  const handleCreatePost = (e) => {
    e.preventDefault()
    if (newPostText.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: {
          name: currentUser.name,
          avatar: currentUser.avatar,
          role: currentUser.role,
          isVerified: false
        },
        content: {
          text: newPostText,
          type: 'text'
        },
        stats: {
          likes: 0,
          comments: 0,
          shares: 0
        },
        timestamp: 'Vừa xong',
        tags: [],
        isPinned: false,
        isLiked: false,
        isBookmarked: false
      }
      setPosts([newPost, ...posts])
      setNewPostText('')
      setShowCreatePost(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">📢 Tin tức & Thông báo</h1>
          <p className="text-lg opacity-90">Cập nhật thông tin mới nhất từ công ty và đồng nghiệp</p>
        </div>
      </div>

      {/* Create Post */}
      <div className="card">
        <div className="flex items-center space-x-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-12 w-12 rounded-full"
          />
          <button
            onClick={() => setShowCreatePost(true)}
            className="flex-1 text-left px-4 py-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
          >
            Bạn đang nghĩ gì? Chia sẻ với đồng nghiệp...
          </button>
        </div>
        
        {showCreatePost && (
          <form onSubmit={handleCreatePost} className="mt-4 space-y-4">
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="Viết nội dung bài đăng..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              rows="4"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button type="button" className="flex items-center text-gray-500 hover:text-gray-700">
                  <PhotoIcon className="h-5 w-5 mr-2" />
                  Ảnh
                </button>
                <button type="button" className="flex items-center text-gray-500 hover:text-gray-700">
                  <VideoCameraIcon className="h-5 w-5 mr-2" />
                  Video
                </button>
                <button type="button" className="flex items-center text-gray-500 hover:text-gray-700">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Tài liệu
                </button>
              </div>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowCreatePost(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={!newPostText.trim()}
                >
                  Đăng bài
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className={`card ${post.isPinned ? 'ring-2 ring-primary-200' : ''}`}>
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                    {post.author.isVerified && (
                      <span className="text-blue-500">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{post.author.role} • {post.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {post.isPinned && (
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    📌 Ghim
                  </span>
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-gray-900 leading-relaxed">{post.content.text}</p>
              
              {/* Post Images */}
              {post.content.images && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {post.content.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              {/* Post Image */}
              {post.content.image && (
                <img
                  src={post.content.image}
                  alt="Post content"
                  className="w-full h-64 object-cover rounded-lg mt-4"
                />
              )}

              {/* Document Attachment */}
              {post.content.document && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center space-x-3">
                  <DocumentTextIcon className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{post.content.document.title}</p>
                    <p className="text-sm text-gray-500">{post.content.document.size}</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="badge badge-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 ${
                    post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  } transition-colors`}
                >
                  {post.isLiked ? (
                    <HeartSolidIcon className="h-5 w-5" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                  <span className="text-sm">{post.stats.likes}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span className="text-sm">{post.stats.comments}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                  <ShareIcon className="h-5 w-5" />
                  <span className="text-sm">{post.stats.shares}</span>
                </button>
              </div>
              
              <button
                onClick={() => handleBookmark(post.id)}
                className={`${
                  post.isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
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
          Tải thêm tin tức
        </button>
      </div>
    </div>
  )
}

export default Newsfeed

