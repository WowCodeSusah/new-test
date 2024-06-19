import React from 'react'
import SideBar from '../../Components/sidebar/SideBar'
import Navbar from '../../Components/Navbar/Navbar'

function AddingAccountPage() {
  return (
    <div>
        <div className="addAccountPage-admin">
            <SideBar togglePage={togglePage} pages={pages}/>
            <div className="dashboardContent-admin">
                <Navbar togglePage={togglePage} pages={pages} />
            </div>
        </div>

      
    </div>
  )
}

export default AddingAccountPage
