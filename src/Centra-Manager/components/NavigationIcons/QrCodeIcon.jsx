// eslint-disable-next-line react/prop-types
function QrCodeIcon({setNavigation}) {
    return (
      <div className="QrCodeIconMainContainer" onClick={() => setNavigation()}>
          <img src="src/Centra-Manager/assets/qrcodecontainer.svg" className="QrCodeItems"></img>
          <img src="src/Centra-Manager/assets/qrcodeouter.svg" className="QrCodeItems"></img>
          <img src="src/Centra-Manager/assets/qrcodeinner.svg" className="QrCodeItems"></img>
      </div>
    )
  }
  
  export default QrCodeIcon