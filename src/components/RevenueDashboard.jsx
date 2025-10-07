import React, { useState } from 'react'

const RevenueDashboard = () => {
  const [timeFilter, setTimeFilter] = useState('day')
  const [contentFilter, setContentFilter] = useState('all')

  // Sample data - Rich data for demo (in millions VND)
  const revenueData = [
    { month: 'T1', revenue: 45, target: 40, ads: 12, organic: 33, previous: 38, value: 45 },
    { month: 'T2', revenue: 52, target: 42, ads: 15, organic: 37, previous: 45, value: 52 },
    { month: 'T3', revenue: 48, target: 44, ads: 13, organic: 35, previous: 52, value: 48 },
    { month: 'T4', revenue: 62, target: 46, ads: 18, organic: 44, previous: 48, value: 62 },
    { month: 'T5', revenue: 58, target: 48, ads: 16, organic: 42, previous: 62, value: 58 },
    { month: 'T6', revenue: 68, target: 50, ads: 20, organic: 48, previous: 58, value: 68 },
    { month: 'T7', revenue: 72, target: 52, ads: 22, organic: 50, previous: 68, value: 72 },
    { month: 'T8', revenue: 68, target: 54, ads: 20, organic: 48, previous: 72, value: 68 },
    { month: 'T9', revenue: 72, target: 56, ads: 21, organic: 51, previous: 68, value: 72 },
    { month: 'T10', revenue: 78, target: 58, ads: 23, organic: 55, previous: 72, value: 78 },
    { month: 'T11', revenue: 82, target: 60, ads: 25, organic: 57, previous: 78, value: 82 },
    { month: 'T12', revenue: 85, target: 62, ads: 22, organic: 63, previous: 82, value: 85 }
  ]

  const mediaChannels = [
    {
      name: 'VEGA Tech Review',
      platform: 'YouTube',
      icon: '▶️',
      subscribers: '1.2M',
      views: '45.8M',
      revenue: '₫18.45M'
    },
    {
      name: 'VEGA Lifestyle',
      platform: 'TikTok',
      icon: '🎵',
      subscribers: '850K',
      views: '28.5M',
      revenue: '₫12.34M'
    },
    {
      name: 'VEGA Music',
      platform: 'YouTube',
      icon: '▶️',
      subscribers: '680K',
      views: '15.2M',
      revenue: '₫8.92M'
    }
  ]

  const videoLibrary = [
    {
      title: 'iPhone 15 Pro Max Full Review',
      category: 'Tech Review',
      time: '2 days ago',
      views: '2.4M views',
      revenue: '₫3.24M revenue',
      cpm: '₫1.35K CPM',
      thumbnail: '📱'
    },
    {
      title: 'My Morning Routine 2024',
      category: 'Vlog',
      time: '5 days ago',
      views: '1.8M views',
      revenue: '₫2.16M revenue',
      cpm: '₫1.20K CPM',
      thumbnail: '☀️'
    },
    {
      title: 'Lo-fi Study Music Mix',
      category: 'Music',
      time: '1 week ago',
      views: '950K views',
      revenue: '₫1.14M revenue',
      cpm: '₫1.20K CPM',
      thumbnail: '🎵'
    }
  ]

  const teamContributions = [
    {
      name: 'Content Creation Team',
      status: 'Top Performer',
      videos: 15,
      views: '8.2M',
      revenuePercent: 65,
      revenue: '₫28.45M',
      color: 'green'
    },
    {
      name: 'Music Production Team',
      status: '',
      videos: 8,
      views: '3.1M',
      revenuePercent: 20,
      revenue: '₫8.92M',
      color: 'blue'
    },
    {
      name: 'Lifestyle Team',
      status: '',
      videos: 6,
      views: '2.4M',
      revenuePercent: 15,
      revenue: '₫6.63M',
      color: 'orange'
    }
  ]

  const revenueSummary = [
    { period: 'Today', icon: '💰', amount: '₫24.65M', change: '+12.5%', color: 'green' },
    { period: 'This Week', icon: '📅', amount: '₫156.42M', change: '+8.3%', color: 'green' },
    { period: 'This Month', icon: '📊', amount: '₫642.85M', change: '+15.7%', color: 'purple' }
  ]

  const contentCategories = [
    { name: 'Tech Review', percentage: 40, color: 'blue' },
    { name: 'Lifestyle', percentage: 25, color: 'orange' },
    { name: 'Gaming', percentage: 15, color: 'green' },
    { name: 'Music', percentage: 20, color: 'purple' }
  ]

  const revenueSources = [
    { source: 'YouTube Ads', amount: '₫28.45M', percentage: 65 },
    { source: 'TikTok Ads', amount: '₫12.34M', percentage: 28 },
    { source: 'Sponsorship', amount: '₫3.21M', percentage: 7 }
  ]

  const regionRevenue = [
    { country: 'Thailand', q1: 18, q2: 32, q3: 25, q4: 22 },
    { country: 'India', q1: 12, q2: 25, q3: 28, q4: 18 },
    { country: 'US', q1: 8, q2: 28, q3: 24, q4: 16 },
    { country: 'Vietnam', q1: 15, q2: 22, q3: 18, q4: 12 }
  ]

  const funnelData = [
    { stage: 'Total Views', value: '45,800,000' },
    { stage: 'Monetized Views', value: '32,060,000' },
    { stage: 'Ad Impressions', value: '25,648,000' },
    { stage: 'Ad Revenue', value: '44,000' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">VEGA Life</h1>
            <p className="text-gray-500">Revenue Management Hub</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Over Time */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Doanh thu theo thời gian</h2>
              <div className="flex space-x-2">
                {['Ngày', 'Tuần', 'Tháng'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeFilter(period.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeFilter === period.toLowerCase()
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="relative h-64 bg-gray-50 rounded-lg p-4">
              {/* Y-axis */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-400">
                <span>90M</span>
                <span>70M</span>
                <span>50M</span>
                <span>30M</span>
              </div>
              
              {/* Chart Area */}
              <div className="ml-12 h-full relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 25, 50, 75, 100].map((percent) => (
                    <div key={percent} className="border-t border-gray-200" style={{ top: `${percent}%` }}></div>
                  ))}
                </div>
                
                {/* Data Points and Line */}
                <div className="relative h-full flex items-end justify-between">
                  {revenueData.map((item, index) => {
                    const height = (item.revenue / 90) * 100
                    return (
                      <div key={index} className="flex flex-col items-center relative">
                        <div 
                          className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"
                          style={{ bottom: `${height}%` }}
                        ></div>
                        <div className="absolute -bottom-6 text-xs font-semibold text-gray-600">
                          {item.month}
                        </div>
                        <div className="absolute -top-6 text-xs font-bold text-blue-600 bg-white px-1 rounded">
                          {item.revenue}M
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* SVG Line */}
                <svg className="absolute inset-0 w-full h-full">
                  <polyline
                    points={revenueData.map((item, index) => {
                      const x = (index / (revenueData.length - 1)) * 100
                      const y = 100 - (item.revenue / 90) * 100
                      return `${x}%,${y}%`
                    }).join(' ')}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Media Channels */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Kênh truyền thông</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mediaChannels.map((channel, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{channel.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{channel.name}</h3>
                      <p className="text-sm text-gray-500">{channel.platform}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subscribers:</span>
                      <span className="font-semibold">{channel.subscribers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views:</span>
                      <span className="font-semibold">{channel.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue tháng này:</span>
                      <span className="font-bold text-green-600">{channel.revenue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Library */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Video Library</h2>
              <div className="flex space-x-2">
                {['All', 'Vlog', 'Review', 'Music'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setContentFilter(filter.toLowerCase())}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      contentFilter === filter.toLowerCase()
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {videoLibrary.map((video, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-3xl mr-4">{video.thumbnail}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{video.category} • {video.time}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="font-semibold text-blue-600">{video.views}</span>
                      <span className="font-semibold text-green-600">{video.revenue}</span>
                      <span className="font-semibold text-purple-600">{video.cpm}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Contribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Team Contribution</h2>
            <div className="space-y-4">
              {teamContributions.map((team, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    {team.status === 'Top Performer' && (
                      <span className="mr-2">👑</span>
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900">{team.name}</h3>
                      <p className="text-sm text-gray-500">{team.videos} videos • {team.views} views • {team.revenuePercent}% of total revenue</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 text-lg">{team.revenue}</p>
                    {team.status && (
                      <p className="text-xs text-green-600 font-semibold">{team.status}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Funnel */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Funnel</h2>
            <div className="flex flex-col items-center space-y-2">
              {funnelData.map((stage, index) => (
                <div key={index} className="w-full max-w-md">
                  <div 
                    className="bg-blue-500 text-white p-3 rounded-lg text-center font-semibold"
                    style={{ 
                      width: `${100 - (index * 15)}%`,
                      marginLeft: `${(index * 15) / 2}%`
                    }}
                  >
                    <div className="text-sm">{stage.stage}</div>
                    <div className="text-lg">{stage.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Revenue Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {revenueSummary.map((summary, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{summary.icon}</span>
                    <span className={`text-sm font-semibold ${
                      summary.color === 'green' ? 'text-green-600' : 'text-purple-600'
                    }`}>
                      {summary.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{summary.amount}</h3>
                  <p className="text-sm text-gray-500">{summary.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Categories */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Phân loại nội dung</h2>
            <div className="relative w-48 h-48 mx-auto">
              {/* Simple Pie Chart Representation */}
              <div className="absolute inset-0 rounded-full border-8 border-blue-400" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 0%, 0% 0%)'}}></div>
              <div className="absolute inset-0 rounded-full border-8 border-orange-400" style={{clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%, 75% 100%)'}}></div>
              <div className="absolute inset-0 rounded-full border-8 border-green-400" style={{clipPath: 'polygon(50% 50%, 75% 100%, 100% 100%, 100% 75%)'}}></div>
              <div className="absolute inset-0 rounded-full border-8 border-purple-400" style={{clipPath: 'polygon(50% 50%, 100% 75%, 100% 100%, 50% 100%)'}}></div>
            </div>
            <div className="mt-4 space-y-2">
              {contentCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      category.color === 'blue' ? 'bg-blue-400' :
                      category.color === 'orange' ? 'bg-orange-400' :
                      category.color === 'green' ? 'bg-green-400' : 'bg-purple-400'
                    }`}></div>
                    <span className="text-sm text-gray-600">{category.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{category.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Sources */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Nguồn doanh thu</h2>
            <div className="space-y-4">
              {revenueSources.map((source, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{source.source}</span>
                    <span className="font-bold text-gray-900">{source.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue by Region */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Doanh thu theo khu vực</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-sm font-semibold text-gray-600">Country</th>
                    <th className="text-center py-2 text-sm font-semibold text-gray-600">Q1</th>
                    <th className="text-center py-2 text-sm font-semibold text-gray-600">Q2</th>
                    <th className="text-center py-2 text-sm font-semibold text-gray-600">Q3</th>
                    <th className="text-center py-2 text-sm font-semibold text-gray-600">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  {regionRevenue.map((region, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 text-sm font-semibold text-gray-900">{region.country}</td>
                      <td className="py-2 text-center">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          region.q1 >= 20 ? 'bg-blue-800 text-white' :
                          region.q1 >= 15 ? 'bg-blue-600 text-white' :
                          region.q1 >= 10 ? 'bg-blue-400 text-white' : 'bg-blue-200 text-gray-700'
                        }`}>
                          ${region.q1}k
                        </div>
                      </td>
                      <td className="py-2 text-center">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          region.q2 >= 30 ? 'bg-blue-800 text-white' :
                          region.q2 >= 25 ? 'bg-blue-600 text-white' :
                          region.q2 >= 20 ? 'bg-blue-400 text-white' : 'bg-blue-200 text-gray-700'
                        }`}>
                          ${region.q2}k
                        </div>
                      </td>
                      <td className="py-2 text-center">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          region.q3 >= 25 ? 'bg-blue-800 text-white' :
                          region.q3 >= 20 ? 'bg-blue-600 text-white' :
                          region.q3 >= 15 ? 'bg-blue-400 text-white' : 'bg-blue-200 text-gray-700'
                        }`}>
                          ${region.q3}k
                        </div>
                      </td>
                      <td className="py-2 text-center">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          region.q4 >= 20 ? 'bg-blue-800 text-white' :
                          region.q4 >= 15 ? 'bg-blue-600 text-white' :
                          region.q4 >= 10 ? 'bg-blue-400 text-white' : 'bg-blue-200 text-gray-700'
                        }`}>
                          ${region.q4}k
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-xs text-gray-500">0</span>
              <div className="w-16 h-2 bg-gradient-to-r from-blue-200 to-blue-800 rounded"></div>
              <span className="text-xs text-gray-500">40k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueDashboard


