import "../css/HeaderManager.css"

// eslint-disable-next-line react/prop-types
function ProfileTextHeader() {
  return (
    <div className="HeaderProfileContainer">
      <div className="HeaderCircleImageContainer">
        <img className="ImageHeader" src="src\Centra-Manager\assets\ProfileTest.jpg"></img>
      </div>
      <div className="HeaderTextContainer">
        <div className="HeaderProfileWelcomeText">Welcome,</div>
        <div className="HeaderProfileUserName">John Doe</div>
      </div>
    </div>
  )
}

export default ProfileTextHeader