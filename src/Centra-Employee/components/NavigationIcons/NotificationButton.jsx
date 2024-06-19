import '../css/NotificationButton.css'

// eslint-disable-next-line react/prop-types
function NotificationButton({setNavigation}) {
  return (
    <div className="NotificationButtonContainer">
        <span className='NotificationText'>1</span>
        <img src="src/Centra-Manager/assets/notification.svg" className="NotificationButton" onClick={() => setNavigation(
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