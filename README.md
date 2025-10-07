# VEGA Life - Employee Experience Hub

Một nền tảng "Employee Experience Hub" hiện đại được xây dựng với React, mang đến trải nghiệm như một "mạng xã hội nội bộ" cho doanh nghiệp. Được thiết kế đặc biệt cho các công ty truyền thông chuyên sản xuất video quảng cáo và hoạt hình.

## 🌟 Tính năng chính

### 1. 🌟 Cuộc sống số (Digital Life)
- **Trang chủ mặc định** với giao diện mạng xã hội nội bộ
- Timeline hiển thị tin tức công ty, sự kiện, hoạt động team building
- Banner động cho các chiến dịch marketing
- Bài viết với hình ảnh, video sản xuất
- Thông tin doanh thu tổng quát của công ty
- Gương mặt tiêu biểu và thành tích nổi bật

### 2. 👤 Trang cá nhân (Personal Page)
- **Biểu đồ lương line chart** so sánh 2024 vs 2023
- **Biểu đồ donut** cơ cấu lương chi tiết (Lương cơ bản, Phụ cấp, Thưởng KPI)
- **Radar chart** đánh giá năng lực (Kỹ thuật, Sáng tạo, Giao tiếp, Quản lý thời gian, Teamwork)
- Lịch chấm công với màu sắc phân biệt
- Mục tiêu tháng với progress bars
- Thành tích nổi bật với badges
- Lộ trình phát triển nghề nghiệp
- Khóa học đã hoàn thành

### 3. 💰 Kết quả kinh doanh (Revenue Management Hub)
- **Biểu đồ doanh thu** 12 tháng với dữ liệu phong phú
- **Media channels** metrics (YouTube, TikTok, Facebook, Instagram)
- **Video library** với thống kê views, revenue, engagement
- **Team contributions** và hiệu suất làm việc
- **Revenue funnel** và conversion tracking
- **Content categories** phân loại theo loại video
- **Regional heatmaps** và phân bố địa lý

### 4. 💬 Chat (HR Search & Chat Interface)
- **Tìm kiếm nhân sự** với filter nâng cao
- **Organizational chart** tương tác
- **Chat interface** với AI assistant
- **Quick actions** cho các tác vụ HR
- **Employee directory** với thông tin chi tiết

## 🎨 Thiết kế UI/UX

### Giao diện hiện đại
- **Nền gradient hồng/tím** tạo cảm giác nữ tính và hiện đại
- **Sidebar navigation** có thể thu gọn/mở rộng
- **Cards trắng** với shadow và backdrop blur nổi bật
- **Glassmorphism effects** cho sidebar
- **Responsive design** tối ưu mọi thiết bị

### Animations & Interactions
- **Smooth transitions** giữa các dashboard
- **Hover effects** trên charts và buttons
- **Loading animations** với skeleton screens
- **Interactive charts** với tooltips và legends

## 🚀 Cách chạy dự án

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt và chạy

1. **Clone repository:**
```bash
git clone https://github.com/anhduc777/VEGALiffe.git
cd VEGALiffe
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Chạy development server:**
```bash
npm run dev
```

4. **Mở trình duyệt:**
```
http://localhost:3000
```

### Build cho production
```bash
npm run build
npm run preview
```

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Framework với hooks
- **Vite** - Build tool nhanh và hiệu quả
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **SVG** - Custom charts và visualizations
- **CSS Grid & Flexbox** - Layout responsive

## 📊 Biểu đồ và Data Visualization

### Charts được implement
- **Line Chart**: So sánh doanh thu 2 năm
- **Donut Chart**: Cơ cấu lương với animation
- **Radar Chart**: Đánh giá năng lực nhân viên
- **Bar Chart**: Thống kê team contributions
- **Progress Bars**: Mục tiêu và tiến độ
- **Calendar View**: Lịch chấm công
- **Heatmaps**: Phân bố địa lý

### Dữ liệu mẫu phong phú
- **Revenue data** 12 tháng với targets và growth
- **Employee data** với performance metrics
- **Video analytics** với views, engagement
- **Team statistics** với contribution tracking

## 🎯 Tính năng nổi bật

### Sidebar Navigation
- **4 main sections**: Cuộc sống số, Trang cá nhân, Kết quả kinh doanh, Chat
- **Collapsible design** tiết kiệm không gian
- **Active state** với gradient background
- **User profile** với status online
- **Notifications** và settings tích hợp

### Dashboard System
- **Dynamic routing** giữa các dashboard
- **State management** với React hooks
- **Real-time updates** ready
- **Mobile responsive** design

## 📱 Cấu trúc dự án

```
src/
├── components/
│   ├── DashboardNavigator.jsx    # Main navigation
│   ├── InternalSocialNetwork.jsx # Cuộc sống số
│   ├── EmployeeProfile.jsx       # Trang cá nhân
│   ├── RevenueDashboard.jsx      # Kết quả kinh doanh
│   └── HRSearchChat.jsx          # Chat & HR
├── App.jsx                       # Main app component
├── main.jsx                      # Entry point
└── index.css                     # Global styles
```

## 🌐 Demo & Deployment

### Local Development
- **Port**: 3000 (configurable trong vite.config.js)
- **Hot reload**: Tự động refresh khi có thay đổi
- **Source maps**: Debug dễ dàng

### Production Ready
- **Build optimization**: Code splitting và minification
- **Static assets**: Optimized images và fonts
- **Environment variables**: Config cho production

## 🔧 Customization

### Branding
- **Color scheme**: Dễ dàng thay đổi trong Tailwind config
- **Logo**: Thay thế trong DashboardNavigator
- **Company data**: Cập nhật trong sample data

### Content Management
- **Sample data**: Có thể thay thế bằng API calls
- **Charts**: Customizable với different datasets
- **Navigation**: Dễ dàng thêm/bớt menu items

## 📈 Performance Features

- **Code Splitting**: Lazy loading components
- **Optimized Bundle**: Vite build optimization
- **SVG Charts**: Lightweight và scalable
- **CSS Optimization**: Tailwind purging unused styles

## 🚀 Deployment Options

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Vercel/Netlify
- Connect GitHub repository
- Auto-deploy on push
- Environment variables support

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create Pull Request

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

---

**VEGA Life** - Nơi nhân viên "sống" hằng ngày trong hệ thống! 🌟

*Được thiết kế đặc biệt cho các công ty truyền thông với focus vào video production và digital marketing.*