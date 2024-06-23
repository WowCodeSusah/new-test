import "../css/HeaderManager.css"
import ProfileTest from '../assets/ProfileTest.jpg'

// eslint-disable-next-line react/prop-types
function ProfileTextHeader() {
  return (
    <div className="HeaderProfileContainer">
      <div className="HeaderCircleImageContainer">
        <img className="ImageHeader" src={ProfileTest}></img>
      </div>
      <div className="HeaderTextContainer">
        <div className="HeaderProfileWelcomeText">Welcome,</div>
        <div className="HeaderProfileUserName">John Doe</div>
      </div>
    </div>
  )
}

export default ProfileTextHeader