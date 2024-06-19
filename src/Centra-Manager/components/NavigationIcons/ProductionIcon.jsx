// eslint-disable-next-line react/prop-types
function ProductionIcon({NavigationState, setNavigationState}) {
    var ImagePath = "src/Centra-Manager/assets/production.svg"
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[1][0] == true || NavigationState[1][1] == true || NavigationState[1][2] == true || NavigationState[1][3] == true) {
      ImagePath = "src/Centra-Manager/assets/production-pressed.svg"
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePath = "src/Centra-Manager/assets/production.svg"
      TextColor = "#3C9284"
      BarSize = "0px"
    }
    return (
      <div>
        <div className="CentraManagerBar" style={{width: BarSize}}></div>
        <div className="ProductionIconMainContainer" onClick={() => setNavigationState(
          [[false, false], 
          [true, false, false, false, false, false, false, false, false, false], 
          [false, false, false, false, false], 
          [false, false, false], 
          [false, false, false]])}>
            <div className="imageContainer">
              <img src={ImagePath}></img>
            </div>
            <div style={{color: TextColor}} className="CentraManagerNavigationText">Production</div>
        </div>
      </div>
    )
  }
  
  export default ProductionIcon