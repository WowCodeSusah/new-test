// eslint-disable-next-line react/prop-types
function HomeIcon({NavigationState, setNavigationState}) {
    var ImagePath = "src/Centra-Manager/assets/home.svg"
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[0][0] == true) {
      ImagePath = "src/Centra-Manager/assets/home-pressed.svg"
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePath = "src/Centra-Manager/assets/home.svg"
      TextColor = "#3C9284"
      BarSize = "0px"
    }
    return (
      <div>
        <div className="CentraManagerBar" style={{width: BarSize}}></div>
        <div className="HomeIconMainContainer" onClick={() => setNavigationState(
          [[true, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [false, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>
            <div className="imageContainer">
              <img src={ImagePath}></img>
            </div>
            <div style={{color: TextColor}} className="CentraManagerNavigationText">Home</div>
        </div>
      </div>
    )
  }
  
  export default HomeIcon