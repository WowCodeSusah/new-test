import React, { useState } from 'react';
import axios from 'axios';
import SideBar from "../../Components/sidebar/SideBarManager.jsx";
import Navbar2 from "../../Components/Navbar/NavbarManager2.jsx";
import './SettingsManager.scss';

// eslint-disable-next-line react/prop-types
const SettingsForms = ({ togglePage, pages, userName }) => {
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
    deleteSession();
  };

  async function deleteSession() {
    try {
      await axios.post('https://test-backend-k9s7.vercel.app/delete_session/', {}, { withCredentials: true });
      location.reload();
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  }

  return (
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash-2-manager"></div>
      <div className="homeContainer-manager">
        <Navbar2 togglePage={togglePage} pages={pages} userName={userName} />
        <div className="settings-container-manager">
          <h1 className="header-manager">Settings</h1>
          <form onSubmit={handleSubmit} className="form-manager">
            <div className="input-group-manager">
              <label className="label-manager">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="input-manager"
              >
                <option value="English (US)">English (US)</option>
                <option value="English (UK)">English (UK)</option>
                <option value="Indonesian">Indonesian</option>
              </select>
            </div>
            <div className="input-group-manager">
              <label className="label-manager">Notifications</label>
              <select
                name="notifications"
                value={formData.notifications}
                onChange={handleChange}
                className="input-manager"
              >
                <option value="On: Banners, Sounds">On: Banners, Sounds</option>
                <option value="Off">Off</option>
              </select>
            </div>
            <div className="input-group-manager">
              <label className="label">Time Zone</label>
              <select
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                className="input-manager"
              >
                <option value="Western Indonesia Time">Western Indonesia Time</option>
                <option value="Central Indonesia Time">Central Indonesia Time</option>
                <option value="Eastern Indonesia Time">Eastern Indonesia Time</option>
              </select>
            </div>
            <div className="input-group-manager">
              <label className="label">Time Setting</label>
              <div className="radio-group-container-manager">
                <div className="radio-group-manager">
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
            <div className="button-sizing-manager">
              <div className="button-group-manager">
                <button type="button" className="button-manager cancel-button-manager">Cancel</button>
                <button type="submit" className="button-manager save-button-manager">Save</button>
              </div>
              <button type="button" onClick={handleSignOut} className="button-manager sign-out-button-manager">Sign Out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsForms;