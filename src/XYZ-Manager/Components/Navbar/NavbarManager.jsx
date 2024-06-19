import React from 'react';
import './NavbarManager.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Search from './Search/SearchManager';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Navbar({togglePage, pages, onSearch, value, userName}) {
  // const userName = userName; // This will come from your backend
  const userRole = "Manager"; // This will come from your backend

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className='navbar-manager'>
      <div className="wrapper-manager">
        <Search
        value={value}
        handleTextChange={handleInputChange} 
        />
        <div className='ProfileNotifSettingPosistion-Manager'>
          <div className="items-manager">
            <div className="profile-manager">
              <div className="name-manager">{userName}</div>
              <div className="role-manager">{userRole}</div>
            </div>
            <div className="item-manager" onClick={() => togglePage(0,1)}>
              <img src="src/assets/pexels-lum3n-44775-406014.jpg" alt="" className='avatar-manager' />
            </div>
            <div className="separator-manager"></div>
            <div className="item-manager" onClick={() => togglePage(0,2)}>
              <NotificationsNoneOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
              <div className="counter-manager">1</div>
            </div>
            <button className="item-manager" onClick = {() => togglePage(1,0)}>
              <SettingsOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
