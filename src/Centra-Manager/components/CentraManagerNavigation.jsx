import '../css/CentraManager.css'
import HomeIcon from "./NavigationIcons/HomeIcon"
import ProductionIcon from "./NavigationIcons/ProductionIcon"
import ProfileIcon from "./NavigationIcons/ProfileIcon"
import QrCodeIcon from "./NavigationIcons/QrCodeIcon"
import ShippingIcon from "./NavigationIcons/ShippingIcon"
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function CentraManagerNavigation({NavigationSlot, setNavigationSlot, setQRCode}) {
    const springs = useSpring({
      config: {
        tension: 150, 
        friction: 60
      },
      from: { y: 100 },
      to: { y: 0 },
    })
    return (
      <animated.div className="NavigationCentraManagerPrimary" style={{...springs}}>
        <QrCodeIcon setNavigation={setQRCode}/>
        <div className="NavigationManagerContainer">
            <div><HomeIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
            <div><ProductionIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
            <div></div>
            <div><ShippingIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
            <div><ProfileIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
        </div>
      </animated.div>
    )
  }
  
  export default CentraManagerNavigation