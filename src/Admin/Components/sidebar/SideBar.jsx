import './SideBar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';


// eslint-disable-next-line react/prop-types
function SideBar({ togglePage, pages }) { 
    return (
      <div className='sidebar-admin' >
          <div className="top-admin" onClick={() => togglePage(0, 0)}>
              <span className="logo-admin">Moringa</span>
          </div>
          <div className="center-admin">
              <ul>
                  <li onClick={() => togglePage(0, 0)}>
                      <DashboardOutlinedIcon className='icon-admin' />
                      <span>Dashboard</span>
                  </li >
                  <li onClick={() => togglePage(0, 1)}>
                      <AdjustIcon className='icon-admin' />
                      <span>Centra</span>
                  </li>
                  
                  <li onClick={() => togglePage(0, 2)}>
                      <PersonOutlineOutlinedIcon className='icon-admin'/>
                      <span>Accounts</span>
                  </li>
              </ul>
          </div>
      </div>
    );
  }
  
export default SideBar;
  