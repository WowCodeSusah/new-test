import HeaderTextSlot from "./HeaderTextSlot"
import NotificationButton from "./NotificationButton"

// eslint-disable-next-line react/prop-types
function CentraManagerHeader({Label, setNavigation}) {
    return (
      <div className="HeaderManagerContainer">
          <HeaderTextSlot label={Label}/>
          <NotificationButton setNavigation={setNavigation}/>
      </div>
    )
  }
  
  export default CentraManagerHeader