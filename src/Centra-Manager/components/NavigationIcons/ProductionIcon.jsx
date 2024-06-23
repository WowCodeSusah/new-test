import productionPressed from '../../assets/production-pressed.svg'
import Production from '../../assets/production.svg'

// eslint-disable-next-line react/prop-types
function ProductionIcon({NavigationState, setNavigationState}) {
    var ImagePath = Production
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[1][0] == true || NavigationState[1][1] == true || NavigationState[1][2] == true || NavigationState[1][3] == true) {
      ImagePath = productionPressed
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePath = Production
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