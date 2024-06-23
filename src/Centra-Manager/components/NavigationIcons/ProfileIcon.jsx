import profileHead from '../../assets/profile-head.svg'
import profileBody from '../../assets/profile-body.svg'
import profileHeadPressed from '../../assets/profile-head-pressed.svg'
import profileBodyPressed from '../../assets/profile-body-pressed.svg'

// eslint-disable-next-line react/prop-types
function ProfileIcon({NavigationState, setNavigationState}) {
    var ImagePathHead = profileHead
    var ImagePathBody = profileBody
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[4][0] == true) {
      ImagePathHead = profileHeadPressed
      ImagePathBody = profileBodyPressed
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePathHead = profileHead
      ImagePathBody = profileBody
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