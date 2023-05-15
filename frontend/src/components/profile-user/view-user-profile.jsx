import React from 'react';
import './view-user-profile.scss';
import profileImage from './avatar.jpg';

function ProfileUser() {
  const user = {
    name: 'Đinh Thế Toàn',
    email: 'dinhthetoan6301@gmail.com',
    rank: 'Bronze',
    totalamountaccumulated: '79.000',
    phonenumber: '0909123521'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>{user.name}'s Profile</h1>
      </div>
      <div className="user-info">
        <div>
          <strong>Full Name:</strong><span>{user.name}</span>
        </div>
        <div>
          <strong>Email:</strong><span>{user.email}</span>
        </div>
        <div>
          <strong>Phone Number:</strong><span>{user.phonenumber}</span>
        </div>
        <div>
          <strong>Rank:</strong><span>{user.rank}</span>
        </div>
        <div>
          <strong>Total Amount Accumulated:</strong><span>{user.totalamountaccumulated}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
