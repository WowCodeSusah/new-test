import '../css/CentraManager.css'

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
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/Shipping.png)', backgroundSize: '390px'}} 
        onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Shipping</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/WetLeaves.png)', backgroundSize: '390px'}}  
        onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Wet Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/DryLeaves.png)', backgroundSize: '390px'}}
         onClick={() => setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [true, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>Dry Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/Flour.png)', backgroundSize: '390px'}}
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