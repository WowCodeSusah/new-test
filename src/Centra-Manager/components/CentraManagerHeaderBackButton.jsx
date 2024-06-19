import '../css/NotificationCentraManager.css'

// eslint-disable-next-line react/prop-types
function CentraManagerHeaderBackButton({label, setNavigation, previousState, size}) {
  return (
    <div className='CentraManagerHeaderBackContainer'>
      <div className='CentraManagerHeaderBackButtonImageContainer' onClick={() => setNavigation(previousState)}>
          <img src='src\Centra-Manager\assets\arrow.svg' className='CentraManagerHeaderBackButtonImage'></img>
      </div>
      <div className='CentraManagerHeaderBackText' style={{fontSize: size}}>{label}</div>
    </div>
  )
}

export default CentraManagerHeaderBackButton