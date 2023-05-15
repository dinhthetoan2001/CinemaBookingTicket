import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.scss';
<UserProfile avatarSrc="./path/to/avatar.png" />

const UserProfile = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic
    // ...
    alert('You have logged out of your account!');
    window.location.replace('http://localhost:3000');
  };

  return (
    <div className="user-profile">
      <button className="profile-toggle" onClick={handleDropdownToggle}>
        <img
          className="avatar"
          src={props.avatarSrc}
          alt="User Avatar"
        />
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="dropdown-item">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
