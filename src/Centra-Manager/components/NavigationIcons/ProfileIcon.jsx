// eslint-disable-next-line react/prop-types
function ProfileIcon({NavigationState, setNavigationState}) {
    var ImagePathHead = "src/Centra-Manager/assets/profile-head.svg"
    var ImagePathBody = "src/Centra-Manager/assets/profile-body.svg"
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[4][0] == true) {
      ImagePathHead = "src/Centra-Manager/assets/profile-head-pressed.svg"
      ImagePathBody = "src/Centra-Manager/assets/profile-body-pressed.svg"
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePathHead = "src/Centra-Manager/assets/profile-head.svg"
      ImagePathBody = "src/Centra-Manager/assets/profile-body.svg"
      TextColor = "#3C9284"
      BarSize = "0px"
    }
    return (
      <div>
        <div className="CentraManagerBar" style={{width: BarSize}}></div>
        <div className="ProfileIconMainContainer" onClick={() => setNavigationState(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [false, false, false, false, false], 
          [false, false, false], 
          [true, false, false]])}>
            <div className="imageContainerProfile">
              <img className="CentraManagerNavigationHeadIcon" src={ImagePathHead}></img>
              <img className="CentraManagerNavigationBodyIcon" src={ImagePathBody}></img>
            </div>
            <div style={{color: TextColor}} className="CentraManagerNavigationText">Profile</div>
        </div>
      </div>
    )
  }
  
  export default ProfileIcon