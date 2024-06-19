import useTogglePages from "../PageHandler/useTogglePages.jsx"
import { useState, useEffect } from 'react'
// import Storage from "../Storage/Storage.jsx"
// import Notifications from "../Notifications/Notifications.jsx"
import Dashboard from "../Home/DashboardManager.jsx"
import Settings from "../Settings/SettingsManager.jsx"
import Profile from "../Profile/ProfileManager.jsx"
import Shipments from "../Shipments/Shipments.jsx"
import Shipping from "../../ShippingComp/Shipping/Shipping.jsx"
import ShipmentMain from "../ShipmentMainPage/ShipmentMain.jsx"
import Centra from "../Centra/CentraManager.jsx"
import Storage from "../Storage/storageManagerPage.jsx"
import Notification from "../Notifications/NotificationsManager.jsx"
import axios from "axios"

export const pageLogic = [
  [true, false, false], // dashboard, profile, notif
  [false, false, false], // settings, shipments
  [false, false, false]
]

function ManagerPage() {

  const [pages, togglePage] = useTogglePages(pageLogic);
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState('');
  const [userId, setuserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const whoAmIResponse = await axios.post('http://localhost:8000/whoami/', {}, { withCredentials: true });
        const emailResponse = await axios.post('http://localhost:8000/users/email/', { "email": whoAmIResponse.data['username'] }, { withCredentials: true });
        const user = emailResponse.data.user;
        setUserList(prevList => [...prevList, user]);
        setUserName(user.name);
        setuserId(user.idUser);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
            <div>
                {pages[0][0] && <Dashboard togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[0][1] && <Profile togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[0][2] && <Notification togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[1][0] && <Settings togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[1][1] && <Shipments togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[1][2] && <Storage togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[2][0] && <Shipping togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[2][1] && <ShipmentMain togglePage={togglePage} pages={pages} userName={userName}/>}
                {pages[2][2] && <Centra togglePage={togglePage} pages={pages} userName={userName}/>}
            </div>
  )
}

export default ManagerPage
