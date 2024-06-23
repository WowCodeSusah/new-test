import '../css/CentraManager.css'
import backgroundShipping from '../assets/Shipping.png'
import backgroundWet from '../assets/WetLeaves.png'
import backgroundDry from '../assets/DryLeaves.png'
import backgroundFlour from '../assets/Flour.png'

// eslint-disable-next-line react/prop-types
function QRNavigationPopUpCM({setNavigation, closePopUp}) {
  function handleFunction() {
    setNavigation(
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, true, false, false], 
      [false, false, false], 
      [false, false, false]])
    closePopUp()
  }
  return (
    <div className='ContainerQRNavigationPopUp'>
      <div className='ContainerQRNavigationPopUpContainer'>
        <div className='ContainerQRNavigationPopupSubText'>Scanning for...</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: `url(${backgroundShipping})`, backgroundSize: '390px'}} 
        onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Shipping</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: `url(${backgroundWet})`, backgroundSize: '390px'}}  
        onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Wet Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: `url(${backgroundDry})`, backgroundSize: '390px'}}
         onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Dry Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: `url(${backgroundFlour})`, backgroundSize: '390px'}}
         onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Flour</div>
        <div className='QROROptionNavigationContainer'>
          <div className='QROROptionNavigationLine'></div>
          <div className='QROROptionNavigationText'>or</div>
          <div className='QROROptionNavigationLine'></div>
        </div>
        <div className='QRAddManuallyButton'>
            <div className='QRAddManuallyButtonContainer'>
              <span className='QRAddManuallyText' onClick={() => handleFunction()}><span className='PlusCentraManager'>+</span> Add Manually</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QRNavigationPopUpCM