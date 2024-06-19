import React from 'react';
import './NotificationWidget.scss';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const NotificationWidget = () => {
  return (
    <div className="notificationWidget-admin">
      <div className="notificationHeader-admin">
        <span className="notificationIcon-admin"><NotificationsNoneOutlinedIcon/></span>
        <span className="notificationTitle-admin">Notification</span>
      </div>
      <ul className="notificationList-admin">
        <li>you have three new pending accounts !</li>
        <li>Mas Budi requests manager role</li>
        <li>John Doe is now active !</li>
        <li>Mas Budi is now active !</li>
      </ul>
    </div>
  );
};

export default NotificationWidget;
