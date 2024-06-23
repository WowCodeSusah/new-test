import React, { useState, useEffect } from 'react';
import './widget.scss';
import axios from 'axios';

function Widget({ type }) {
  const [countCen, setCountCen] = useState(0);
  const [countAcc, setCountAcc] = useState(0);
  let title, count, unit;

  switch (type) {
    case 'PendAccount':
      title = 'Pending Accounts';
      count = countCen;
      unit = 'Account(s)';
      break;
    case 'ActiveAccount':
      title = 'Active Accounts';
      count = countAcc;
      unit = 'Account(s)';
      break;
    case 'ActiveCentra':
      title = 'Active Centras';
      count = countCen;
      unit = 'Facility(s)';
      break;
    default:
      title = '';
      count = 0;
      unit = '';
      break;
  }

  useEffect(() => {
    if (type === 'PendAccount' || type === 'ActiveAccount') {
      axios.get('https://test-backend-sfso.vercel.app/users')
        .then(response => {
          setCountAcc(response.data.all_user.length);
          console.log(response.data.all_user);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }

    if (type === 'ActiveCentra') {
      axios.get('https://test-backend-sfso.vercel.app/centras')
        .then(response => {
          setCountCen(response.data.all_centra.length);
          console.log(response.data.all_centra);
        })
        .catch(error => {
          console.error('Error fetching centra data:', error);
        });
    }
  }, [type]);

  return (
    <div className="widget-admin">
      <div className="left-admin">
        <span className="title-admin">{title}</span>
        <div className="bottom-admin">
          <span className="counter-admin">{count}</span>
          <span className="type-admin">{unit}</span>
        </div>
      </div>
    </div>
  );
}

export default Widget;
