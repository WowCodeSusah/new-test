import "../../css/CentraManagerBody.css"
import PropTypes from "prop-types";
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function ShippingDashboard({ShippingData, animationStart}) {
    var color = {}
    if (ShippingData.status == 'Delivered') {
        color = {
            color: "#2D756A",
            backgroundColor: "#BEDED9",
            borderColor: "#2D756A"
        }
    } else if (ShippingData.status == 'Shipping') {
        color = {
            color: "#074B8A",
            backgroundColor: "#CCDBE8",
            borderColor: "#074B8A"
        }
    } else if (ShippingData.status == 'Waiting Pickup') {
        color = {
            color: "#947710",
            backgroundColor: "#F0E9C6",
            borderColor: "#947710",
            width: "85px",
        }
    } else if (ShippingData.status == 'Cancelled') {
        color = {
            color: "#973C30",
            backgroundColor: "#EEC2BC",
            borderColor: "#973C30"
        }
    } else {
        color = {
            color: "#2D756A",
            backgroundColor: "#BEDED9",
            borderColor: "#2D756A"
        }
    }

    const springs = useSpring({
        config: {
          tension: 190, 
          friction: 60
        },
        from: { y: animationStart },
        to: { y: 0 },
      })
            
  return (
    <animated.div className="PrimaryShippingDashboardContainer" style={{...springs}}>
        <div className="TitleTextShippingDashboardContainer">
            <div className="TitleTextShippingDashboard">Shipping ID : <span className="TitleTextShippingDashboardExtra">{ShippingData.idShipment}</span></div>
            <div>
                <div className="ShippingDashboardShowStatus" style={color}>{ShippingData.status}</div>
            </div>
        </div>
        <div className="ShippingDashboardMiniTextContainer">
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Provider</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">{ShippingData.provider}</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Weight</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">{ShippingData.weight}</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Number</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">{ShippingData.orderNumber}</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Date</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">{ShippingData.timeCreated}</div>
            </div>
        </div>
    </animated.div>
  ) 
}

ShippingDashboard.propTypes = {
    ShippingData: PropTypes.arrayOf(
      PropTypes.checkPropTypes()
    )
  }

export default ShippingDashboard