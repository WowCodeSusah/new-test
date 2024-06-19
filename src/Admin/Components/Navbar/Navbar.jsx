import React from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Search from "./NavbarComponents/Search.jsx"
import ProfileNotifSetting from './NavbarComponents/ProfileNotifSetting.jsx';

// eslint-disable-next-line react/prop-types
function Navbar({togglePage, pages}) {
  const userName = "John D"; // This will come from your backend
  const userRole = "Admin"; // This will come from your backend

  return (
    <div className='navbar-admin'>
      <div className="wrapper-admin">
        <Search/>
        <div className='ProfileNotifSettingPosistion-Admin'>
        <ProfileNotifSetting userName={userName} userRole={userRole} togglePage={togglePage} pages={pages} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
