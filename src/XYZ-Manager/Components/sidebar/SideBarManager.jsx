import React from 'react'
import './SideBarManager.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';


// eslint-disable-next-line react/prop-types
function SideBar({togglePage, pages}) {
  return (
    <div className='sidebar-manager'>
        <div className="top-manager" onClick={() => togglePage(0,0)}>
            <span className="logo-manager">Moringa</span>
        </div>
        <div className="center-manager">
            <ul>
                <li onClick={() => togglePage(0,0)}>
                    < DashboardOutlinedIcon className='icon-manager' />
                    <span>Dashboard</span>
                </li>
                <li onClick={() => togglePage(2,2)}>
                    < AdjustIcon className='icon-manager' />
                    <span>Centra</span>
                </li>
                
                <li onClick={() => togglePage(2,1)}>
                    < LocalShippingOutlinedIcon className='icon-manager'/>
                    <span>Shipping</span>
                </li>
                <li onClick={() => togglePage(1,2)}>
                < WarehouseOutlinedIcon className='icon-manager'/>
                    <span>Storage</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
