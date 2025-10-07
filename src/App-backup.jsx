import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Newsfeed from './components/Newsfeed'
import EmployeeEngagement from './components/EmployeeEngagement'
import InnovationHub from './components/InnovationHub'
import SelfServicePortal from './components/SelfServicePortal'
import CollaborationTools from './components/CollaborationTools'
import { Toaster } from 'react-hot-toast'

function App() {
  const [currentUser] = useState({
    id: 1,
    name: 'Nguyễn Văn An',
    role: 'Senior Developer',
    department: 'IT',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    isOnline: true,
    level: 'Lv. 5',
    points: 2840,
    email: 'nguyen.van.an@vega.com',
    phone: '0901234567',
    location: 'Hồ Chí Minh',
    joinDate: '15/03/2022',
    manager: 'Nguyễn Văn Giám đốc',
    team: 'Development Team',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
    certifications: ['AWS Certified Developer', 'Google Cloud Professional', 'Scrum Master'],
    emergencyContact: {
      name: 'Nguyễn Thị Vợ',
      phone: '0901234567',
      relationship: 'Vợ/Chồng'
    }
  })

  return (
    <Router>
      <div className="App">
        <Layout currentUser={currentUser}>
          <Routes>
            <Route path="/" element={<Dashboard currentUser={currentUser} />} />
            <Route path="/newsfeed" element={<Newsfeed currentUser={currentUser} />} />
            <Route path="/engagement" element={<EmployeeEngagement currentUser={currentUser} />} />
            <Route path="/innovation" element={<InnovationHub currentUser={currentUser} />} />
            <Route path="/self-service" element={<SelfServicePortal currentUser={currentUser} />} />
            <Route path="/collaboration" element={<CollaborationTools currentUser={currentUser} />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App

