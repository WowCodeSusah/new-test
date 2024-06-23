import Shipping from '../../assets/shipping.svg'
import ShippingPressed from '../../assets/shipping-pressed.svg'

// eslint-disable-next-line react/prop-types
function ShippingIcon({NavigationState, setNavigationState}) {
    var ImagePath = Shipping
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[3][0] == true) {
      ImagePath = ShippingPressed
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePath = Shipping
      TextColor = "#3C9284"
      BarSize = "0px"
    }
    return (
      <div>
        <div className="CentraManagerBar" style={{width: BarSize}}></div>
        <div className="ShippingIconMainContainer" onClick={() => setNavigationState(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [false, false, false, false, false], 
          [true, false, false], 
          [false, false, false]])}>
            <div className="imageContainer">
              <img src={ImagePath} className="NavigationCentraManagerImage"></img>
            </div>
            <div style={{color: TextColor}} className="CentraManagerNavigationText">Shipping</div>
        </div>
      </div>
    )
  }
  
  export default ShippingIcon