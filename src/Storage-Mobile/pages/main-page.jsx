import React from 'react'
import { useState, useEffect } from 'react'
import useTogglePages from '../hooks/useTogglePages'
import Rescale from './rescale';
import Notifications from './notifications';
import Account from './account'
import QR from './qr';
import axios from 'axios';

export const pageLogic = [
  [true, false], // rescale page, notification page
  [false, false], // account page, edit profile page
  [false], // qr page
]

function StorageMainPage() {

  const [pages, togglePage] = useTogglePages(pageLogic);

  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userDOB, setUserDOB] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const whoAmIResponse = await axios.post('http://localhost:8000/whoami/', {}, { withCredentials: true });
        const emailResponse = await axios.post('http://localhost:8000/users/email/', { "email": whoAmIResponse.data['username'] }, { withCredentials: true });
        const user = emailResponse.data.user;
        setUserList(prevList => [...prevList, user]);
        setUserName(user.name);
        setUserId(user.idUser);
        setUserEmail(user.email);
        setUserPhoneNumber(user.phoneNumber);
        setUserGender(user.gender);
        setUserDOB(user.dateOfBirth);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {pages[0][0] && <Rescale togglePage={togglePage} pages={pages} userName={userName}/>}
      {pages[0][1] && <Notifications togglePage={togglePage} pages={pages}/>}
      {pages[1][0] && <Account togglePage={togglePage} pages={pages} userName={userName} userId={userId}/>}
      {pages[1][1] && <EditProfile togglePage={togglePage} pages={pages} userName={userName} userId={userId} userEmail={userEmail} userPhoneNumber={userPhoneNumber} userGender={userGender} userDOB={userDOB} />}
      {pages[2][0] && <QR togglePage={togglePage} pages={pages}/>}
    </div>
  )
}

export default StorageMainPage