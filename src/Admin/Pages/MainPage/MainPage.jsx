import React from 'react';
import useTogglePages from "../PageHandler/useTogglePages";
import Dashboard from "../dashboard/Dashboard.jsx";
import Account from "../Account/Account.jsx";
import SideBar from '../../Components/sidebar/SideBar.jsx'; // Import SideBar
import Centra from "../Centra/Centra.jsx";
import { useState } from 'react';
import AdminSettings from '../Settings/AdminSettings.jsx';
import Profile from '../Profile/Profile.jsx';
import PendingAccount from '../PendingAccount/PendingAccount.jsx';


export const pageLogic = [
  [true, false, false,false, false, false], // rescale page, notification page
  [false,false,false], // account page, notifcation page , setting page
];

function MainPage() {
  const [pages, togglePage] = useTogglePages(pageLogic);

  return (
    <div>
      {pages[0][0] && <Dashboard togglePage={togglePage} pages={pages} />}
      {pages[0][1] && <Centra togglePage={togglePage}/>}
      {pages[0][2] && <Account togglePage={togglePage}/>}
      {pages[0][3] && <AdminSettings togglePage={togglePage}/>}
      {pages [0][4] && <Profile togglePage={togglePage} pages={pages}/>}
      {pages[0][5] && <PendingAccount togglePage={togglePage}/>}
      
    </div>
  );
}

export default MainPage;
