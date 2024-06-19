import React from 'react';
import SideBar from '../../Components/sidebar/SideBarManager';
import Navbar from '../../Components/Navbar/NavbarManager';

function LoadingPage({togglePage, pages, userName}) {
    return (
      <div className="home-2-manager">
          <SideBar togglePage={togglePage} pages={pages}/>
          <div className="fixdash-2-manager"></div>
          <div className="homeContainer-manager">
              <Navbar togglePage={togglePage} pages={pages} userName={userName}/>
              <div className="welcomewidget-2-manager">
                </div>
            </div>
       </div>
    );
}
export default LoadingPage