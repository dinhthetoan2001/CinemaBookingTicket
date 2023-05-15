import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import avatar from './avatar.jpg'

const Header = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleLogout() {
    fetch({
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => {
        alert("You have logged out of your account!");
        window.location.replace("http://localhost:3000");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='header'>
      <div className='container logo-container'>
        <Link to='/' className='logo'>MovieGo</Link>
      </div>
      <div className='container options'>
        <Link to='/nowshowing' className='option'>Now Showing</Link>
        <Link to='/upcoming' className='option'>Upcoming</Link>
        <Link to='/popular' className='option'>Popular</Link>
      </div>
      <div className='container sign-in-container'>
        {
          (props.isLoggedIn === 'true') ? (
            <div className='user-profile'>
              <div className='avatar-container'>
              <img src={avatar} alt={"avatar"} className='avatar' onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
              </div>
              <div className='dropdown-menu' style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <div className='dropdown-item'>
                  <Link to='/ProfileUser'>Profile</Link>
                </div>
                <div className='dropdown-item'>
                  <Link to='/purchasehistory'>History Purchased</Link>
                </div>
                <div className='dropdown-item1'>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <Link to='/signin' className='sign-in'>Sign In / Register</Link>
          )
        }
      </div>
    </div>
  );
}

export default Header;
