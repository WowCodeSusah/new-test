import React, { useState } from 'react';
import SideBar from "../../Components/sidebar/SideBar.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import './Settingsadmin.scss';

// eslint-disable-next-line react/prop-types
const SettingsForms = ({togglePage, pages}) => {
  const [formData, setFormData] = useState({
    language: 'English (US)',
    notifications: 'On: Banners, Sounds',
    timeZone: 'Western Indonesia Time',
    timeSetting: '24-Hour Time',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  const handleSignOut = () => {
    // Handle sign out logic
    console.log('Sign Out clicked');
  };

  return (
    <div className="home-admin">
    <SideBar togglePage={togglePage} pages={pages}/>
    <div className="fixdash"></div>
    <div className="homeContainer-admin">
        <Navbar togglePage={togglePage} pages={pages}/>
        <div className="settings-container-admin">
      <h1 className="header-admin">Settings</h1>
      <form onSubmit={handleSubmit} className="form-admin">
        <div className="input-group-admin">
          <label className="label-admin">Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="input-admin"
          >
            <option value="English (US)">English (US)</option>
            <option value="English (UK)">English (UK)</option>
            <option value="Indonesian">Indonesian</option>
          </select>
        </div>
        <div className="input-group-admin">
          <label className="label-admin">Notifications</label>
          <select
            name="notifications"
            value={formData.notifications}
            onChange={handleChange}
            className="input-admin"
          >
            <option value="On: Banners, Sounds">On: Banners, Sounds</option>
            <option value="Off">Off</option>
          </select>
        </div>
        <div className="input-group-admin">
          <label className="label">Time Zone</label>
          <select
            name="timeZone"
            value={formData.timeZone}
            onChange={handleChange}
            className="input-admin"
          >
            <option value="Western Indonesia Time">Western Indonesia Time</option>
            <option value="Central Indonesia Time">Central Indonesia Time</option>
            <option value="Eastern Indonesia Time">Eastern Indonesia Time</option>
          </select>
        </div>
        <div className="input-group-admin">
          <label className="label">Time Setting</label>
          <div className="radio-group-container-admin">
            <div className="radio-group-admin">
              <label>
                <input
                  type="radio"
                  name="timeSetting"
                  value="24-Hour Time"
                  checked={formData.timeSetting === '24-Hour Time'}
                  onChange={handleChange}
                />
                24-Hour Time
              </label>
              <label>
                <input
                  type="radio"
                  name="timeSetting"
                  value="AM/PM"
                  checked={formData.timeSetting === 'AM/PM'}
                  onChange={handleChange}
                />
                AM/ PM
              </label>
            </div>
          </div>
        </div>
        <div className = "button-sizing-admin">
        <div className="button-group-admin">
          <button type="button" className="button-admin cancel-button-admin">Cancel</button>
          <button type="submit" className="button-admin save-button-admin">Save</button>
        </div>
        <button type="button-admin" onClick={handleSignOut} className="button-admin sign-out-button-admin">Sign Out</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SettingsForms;