import '../css/NotificationButton.css'
import notification from '../assets/notification.svg'

// eslint-disable-next-line react/prop-types
function NotificationButton({setNavigation}) {
  return (
    <div className="NotificationButtonContainer">
        <span className='NotificationText'>1</span>
        <img src={notification} className="NotificationButton" onClick={() => setNavigation(
      [[false, true], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]])}></img>
        <div className="NotificationBubble"></div>
    </div>
  )
}

export default NotificationButton