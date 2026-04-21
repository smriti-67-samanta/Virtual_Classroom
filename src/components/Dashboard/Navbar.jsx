import React from 'react';
import { useNavigate, Link } from 'react-router-dom';  // ADD Link import
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { FaComments, FaFileAlt, FaBell, FaVideo, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = ({ user, classrooms }) => {
  const navigate = useNavigate();

  console.log('Navbar user object:', user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const currentTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const getUsername = () => {
    if (!user) return 'User';
    return (
      user.displayName || 
      user.name || 
      user.email?.split('@')[0] || 
      'User'
    );
  };

  return (
    <header className="dashboard-navbar">
      <div className="navbar-brand">Virtual Classroom</div>
      <div className="navbar-links">
        {/* REPLACE <a> WITH <Link> */}
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/chat" className="nav-link">
          <FaComments className="nav-icon" /> Chat
        </Link>
        <Link to="/documents" className="nav-link">
          <FaFileAlt className="nav-icon" /> Notes
        </Link>
        <Link to="/notifications" className="nav-link">
          <FaBell className="nav-icon" /> Notifications
        </Link>
        <Link to="/video-conference" className="nav-link">
          <FaVideo className="nav-icon" /> Conference
        </Link>
      </div>
      <div className="navbar-user">
        <span className="user-name">
          <FaUser className="user-icon" /> {getUsername()}
        </span>
        <span className="current-time">{currentTime}</span>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </header>
  );
};

export { Navbar };