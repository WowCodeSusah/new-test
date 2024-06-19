import React from 'react';
import './NotificationsManager.scss';
import SideBar from '../../Components/sidebar/SideBarManager';
import Navbar2 from '../../Components/Navbar/NavbarManager2';

function NotificationManager({togglePage, pages, userName}) {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const weekday = currentDate.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = `${weekday}, ${currentDate.toLocaleDateString('en-GB', options)}`;

  return (
    <div className="home-2-manager">
        <SideBar togglePage={togglePage} pages={pages}/>
        <div className="fixdash-2-manager"></div>
        <div className="homeContainer-manager">
            <Navbar2 togglePage={togglePage} pages={pages} userName={userName}/>
            <h1 className="NotificationTitle-manager">Notifications </h1>
            <div className="NotificationContainer-manager">
            <div className="notification-manager">
                  <div className="notification-date-manager">{formattedDate}</div>
                    <h1>Shipping Notification!</h1>
                    <p>A shipment status has been renewed! Refer to the Shipment Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Centra Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Centra Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
            </div>
                {/* <div className="notification-manager">
                  <div className="notification-date-manager">{formattedDate}</div>
                    <h1>Shipping Notification!</h1>
                    <p>A shipment status has been renewed! Refer to the Shipment Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Centra Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Centra Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div>
                <div className="notification-manager">
                <div className="notification-date-manager">{formattedDate}</div>
                  <h1>Storage Notification!</h1>
                  <p>A shipment status has been renewed! Refer to the Storage Section for a better look.</p>
                </div> */}
            </div>
        </div>
      
  );
}

export default NotificationManager;