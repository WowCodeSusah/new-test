import qrCodeContainer from '../../assets/qrcodecontainer.svg'
import qrCodeOuter from '../../assets/qrcodeouter.svg'
import qrCodeInner from '../../assets/qrcodeinner.svg'

// eslint-disable-next-line react/prop-types
function QrCodeIcon({setNavigation}) {
    return (
      <div className="QrCodeIconMainContainer" onClick={() => setNavigation()}>
          <img src={qrCodeContainer} className="QrCodeItems"></img>
          <img src={qrCodeOuter} className="QrCodeItems"></img>
          <img src={qrCodeInner} className="QrCodeItems"></img>
      </div>
    )
  }
  
  export default QrCodeIcon