import React, { useState } from 'react';
import './Profile.scss';
import SideBar from '../../Components/sidebar/SideBar';
import Navbar from '../../Components/Navbar/Navbar';
import MySVG from '../../assets/choose_file_image.svg';

const Profile = ({togglePage, pages}) => {
  const [formData, setFormData] = useState({
    fullName: 'Mas Budi',
    birthDate: '1988-08-08',
    email: 'masbudi@gmail.com',
    password: '',
    role: 'Manager',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: 'Mas Budi',
      birthDate: '1988-08-08',
      email: 'masbudi@gmail.com',
      password: '',
      role: '',
      image: null,
    });
  };

  return (
    <div className="home-admin">
      <div className="fixdash"></div>
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="homeContainer-admin">
        <Navbar togglePage={togglePage} pages={pages}/>
        <div className="container-admin">
          <h1 className="header-admin">Profile</h1>
          <div className="image-container-admin">
  <label htmlFor="fileInput" className="file-input-admin">
    <img src={MySVG} alt="Choose file" />
  </label>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    style={{ display: 'none' }}
  />
   <div className="container-text-below-buttons-admin">
    <div className="buttons-vertical-admin">
    <button type="button" onClick={handleSubmit} className="button-admin button-upload-admin">Upload</button>
    <button type="button" onClick={handleReset} className="button-admin">Reset</button>
    </div>
    <div className = "h3-style-admin">
      <h3>Allowed JPG, GIF, or PNG. Max size of 1MB.</h3>
    </div>
    </div>
    
    
</div>

    
    
  
          <form onSubmit={handleSubmit} className="form-admin">
            <div className ="left-section-editor-admin">
            <div className="left-section-admin">
              <div className="input-group-admin">
                <label className="label-admin">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-admin"
                />
              </div>
              <div className="input-group-admin">
                <label className="label-admin">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-admin"
                />
              </div>
              <div className="input-group-admin">
                <label className="label">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="select-admin"
                >
                  <option value="admin">Manager</option>
                  <option value="Employee">Employee</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            </div>
            <div className="right-section-admin">
              <div className="input-group-admin">
                <label className="label-admin">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="input-admin"
                />
              </div>
              <div className="input-group-password-admin">
                <div className="input-group-admin">
                  <label className="label-admin">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-pw-admin"
                  />
                </div>
                <div className="change-button-admin">
                <button type="button" className="button-admin">Change</button>
                </div>
                
              </div>
              <div className="button-group-admin">
                <button type="submit" className="button-admin">Save Changes</button>
                <button type="button" onClick={handleReset} className="button-admin">Cancel</button>
              </div>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;