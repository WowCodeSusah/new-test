import React from 'react'
import { useState } from 'react'
import useTogglePages from '../hooks/useTogglePages'
import History from './history';
import Notifications from './notifications';
import Account from './account'
import EditProfile from './editprofile'
import Settings from './settings'
import QR from './qr';

export const pageLogic = [
  [true, false], // rescale page, notification page
  [false, false, false], // account page, edit profile page, settings page
  [false], // qr page
]

function MainPageHarbour() {

  const [pages, togglePage] = useTogglePages(pageLogic);

  return (
    <div>
      {pages[0][0] && <History togglePage={togglePage} pages={pages}/>}
      {pages[0][1] && <Notifications togglePage={togglePage} pages={pages}/>}
      {pages[1][0] && <Account togglePage={togglePage} pages={pages}/>}
      {pages[1][1] && <EditProfile togglePage={togglePage} pages={pages}/>}
      {pages[1][2] && <Settings togglePage={togglePage} pages={pages}/>}
      {pages[2][0] && <QR togglePage={togglePage} pages={pages}/>}

    </div>
  )
}

export default MainPageHarbour