import { useState } from "react"
import '../css/CentraManager.css'
import CentraManagerHeader from "./CentraManagerHeader"
import CentraManagerNavigation from "./CentraManagerNavigation"
import CentraManagerDashboard from "./BodyComponents/CentraManagerDashboard"
import CentraManagerProductionMain from "./BodyComponents/CentraManagerProductionMain"
import CentraManagerShippingMain from "./BodyComponents/CentraManagerShippingMain"
import CentraManagerProfileMain from "./BodyComponents/CentraManagerProfileMain"
import { useSpring, animated } from '@react-spring/web'
import CentraManagerHeaderBackButton from "./CentraManagerHeaderBackButton"
import CentraManagerNotificationPageCentral from "./CentraManagerNotificationPageCentral"
import CentraManagerAddNewWet from "./EditAndNewComponent/CentraManagerAddNewWet"
import CentraManagerAddNewDry from "./EditAndNewComponent/CentraManagerAddNewDry"
import CentraManagerAddFlour from "./EditAndNewComponent/CentraManagerAddFlour"
import QRNavigationPopUpCM from "./QRNavigationPopUpCM"
import QRCodeScanningPageCentraManager from "./QRCodeScanningPageCentraManager"
import CentraManagerShippingAddNew from "./BodyComponents/CentraManagerShippingAddNew"
import CentraManagerShippingTrackOrder from "./BodyComponents/CentraManagerShippingTrackOrder"
import CentraManagerEditWet from "./EditAndNewComponent/CentraManagerEditWet"
import CentraManagerEditDry from "./EditAndNewComponent/CentraManagerEditDry"
import CentraManagerEditFlour from "./EditAndNewComponent/CentraManagerEditFlour"
import CentraManagerProfilePage from "./BodyComponents/CentraManagerProfilePage"
import CentraManagerSettingsPage from "./BodyComponents/CentraManagerSettingsPage"
import CentraManagerAddManuallyItem from "./BodyComponents/CentraManagerAddManuallyItem"
import CentraManagerQRConfirmation from "./CentraManagerQRConfirmation"

var PreviousSlot = 
[[true, false], 
[false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false], 
[false, false, false], 
[false, false, false]];

// eslint-disable-next-line react/prop-types
function CentraManagerCentral() {
  const [NavigationSlot, setNavigationSlot] = useState(
    [[true, false], 
    [false, false, false, false, false, false, false, false, false, false], 
    [false, false, false, false, false], 
    [false, false, false], 
    [false, false, false]]);  

  const [scanningFor, setScanningFor] = useState('')

    const [springs, api] = useSpring(() => ({
      config: {
        tension: 150, 
        friction: 60
      },
      from: { y: 0 },
    })) 
    
    const [QRCode, QRCodeAnimation] = useSpring(() => ({
      config: {
        tension: 100, 
        friction: 60
      },
      from: { y: 0, x: 0},
      to: { y: 0, x: 0 },
    }))

    const vhToPixel = value => (window.innerHeight * value) / 100;
    const [QRCover, QRCoverAnimation] = useSpring(() => ({
      config: {
        tension: 10000, 
        friction: 10,
        clamp: true
      },
      from: { y: 0, x: 0,},
      to: { y: 0, x: 0 },
    }))

    function QRCodeOpen() {
        QRCodeAnimation.start({to: {y: -621}})
        QRCoverAnimation.start({to: {y: vhToPixel(-150)}})
        document.body.style.overflow = "hidden";
    }

    function QRCodeClose() {
        QRCodeAnimation.start({to: {y: 621}})
        QRCoverAnimation.start({to: {y: vhToPixel(150)}})
        document.body.style.overflow = "scroll";
    }

  var HeaderLabel = 'Home'
  var currentPosition  = <CentraManagerDashboard setNavigation={setNavigationSlot} />
  var headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
  var changeColor = {}

  if (NavigationSlot[0][0] == true) {
    HeaderLabel = 'Home'
    currentPosition  = <CentraManagerDashboard setNavigation={setNavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[true, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][0] == true) {
    HeaderLabel = 'Production'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [true, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[3][0] == true) {
    HeaderLabel = 'Shipping'
    currentPosition = <CentraManagerShippingMain setNavigation={setNavigationSlot}/>
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [true, false, false], 
      [false, false, false]]
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[4][0] == true) {
    HeaderLabel = 'Profile'
    currentPosition = <CentraManagerProfileMain setNavigation={setNavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [true, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][1] == true) {
    HeaderLabel = 'Wet Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, true, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
    api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][2] == true) {
    HeaderLabel = 'Dry Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, true, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][3] == true) {
    HeaderLabel = 'Flour'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, true, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[0][1] == true) {
    HeaderLabel = 'Notification'
    currentPosition = <CentraManagerNotificationPageCentral setNavigation={setNavigationSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"24px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][4] == true) {
    HeaderLabel = 'Add New - Wet Leaves'
    currentPosition = <CentraManagerAddNewWet setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"} />
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][5] == true) {
    HeaderLabel = 'Add New - Dry Leaves'
    currentPosition = <CentraManagerAddNewDry setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][6] == true) {
    HeaderLabel = 'Add New - Flour'
    currentPosition = <CentraManagerAddFlour setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[2][0] == true) {
    QRCodeClose()
    HeaderLabel = 'Scanning QR'
    currentPosition = <QRCodeScanningPageCentraManager setData={setScanningFor} setNavigation={setNavigationSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[3][1] == true) {
    HeaderLabel = 'Add New Shipping ID'
    currentPosition = <CentraManagerShippingAddNew setNavigation={setNavigationSlot} previousState={PreviousSlot} />
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[3][2] == true) {
    HeaderLabel = 'Track Order'
    currentPosition = <CentraManagerShippingTrackOrder />
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][7] == true) {
    HeaderLabel = 'Edit - Wet Leaves'
    currentPosition = <CentraManagerEditWet setNavigation={setNavigationSlot} previousState={PreviousSlot} />
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][8] == true) {
    HeaderLabel = 'Edit - Dry Leaves'
    currentPosition = <CentraManagerEditDry setNavigation={setNavigationSlot} previousState={PreviousSlot} />
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][9] == true) {
    HeaderLabel = 'Edit - Flour'
    currentPosition = <CentraManagerEditFlour setNavigation={setNavigationSlot} previousState={PreviousSlot} />
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[4][1] == true) {
    HeaderLabel = 'Edit Profile'
    currentPosition = <CentraManagerProfilePage setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
    changeColor = {backgroundColor: "#EBEBEB"}
  } else if (NavigationSlot[4][2] == true) {
    HeaderLabel = 'Settings'
    currentPosition = <CentraManagerSettingsPage setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
    changeColor = {backgroundColor: "#EBEBEB"}
  } else if (NavigationSlot[2][2] == true) {
    HeaderLabel = 'Add Manually'
    currentPosition = <CentraManagerAddManuallyItem setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[2][3] == true) {
    HeaderLabel = 'QR Confirmation'
    currentPosition = <CentraManagerQRConfirmation data={scanningFor} setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  }

  return (
    <div>
        <div className="HeaderCentraManager" style={changeColor}>
          {headerPosition}
        </div>
        <div className="BodyCentraManager">{currentPosition}</div>
        <animated.div className="NavigationCentraManager" style={{...springs}}>
          <CentraManagerNavigation setNavigationSlot={setNavigationSlot} NavigationSlot={NavigationSlot} setQRCode={QRCodeOpen}/>
        </animated.div>
        <animated.div className='CentraManagerQRCodePopUpPage' style={{...QRCode}}>
          <QRNavigationPopUpCM setNavigation={setNavigationSlot} closePopUp={QRCodeClose}/>
        </animated.div>
        <animated.div className="CentraManagerQRCodePopUpCover" style={{...QRCover}} onClick={() => QRCodeClose()}></animated.div>
    </div>
  )
}

export default CentraManagerCentral