import '../../css/ProductionCentraManager.css'
import PropTypes from "prop-types";
import { useSpring, animated } from '@react-spring/web'
import pencil from '../../assets/PencilIcon.svg'
import Delete from '../../assets/DeleteIcon.svg'

// eslint-disable-next-line react/prop-types
function BatchContainerProduction({part, data , setDeleteUpdate, animationStart, setNavigation, id}) {
  const springs = useSpring({
    config: {
      tension: 190, 
      friction: 60
    },
    from: { y: animationStart },
    to: { y: 0 },
  })

  var styleStatus = {
    border: "1px solid #2D756A",
    background: "#BEDED9",
    color: "#2D756A"
  }
  if (data.expired == false) {
    styleStatus = {
      border: "1px solid #2D756A",
      background: "#BEDED9",
      color: "#2D756A"
    }
  } else if (data.expired == true) {
    styleStatus = {
      border: "1px solid #973C30",
      background: "#FFBDB4",
      color: "#973C30"
    }
  } else {
    styleStatus = {
      border: "1px solid #2D756A",
      background: "transparent",
      color: "#2D756A"
    }
  }

  var movementSlot = []
  if (part == 'Wet') {
    movementSlot = 
    [[false, false], 
    [false, false, false, false, false, false, false, true, false, false], 
    [false, false, false, false, false], 
    [false, false, false], 
    [false, false, false]]
  } else if (part == 'Dry') {
    movementSlot = 
    [[false, false], 
    [false, false, false, false, false, false, false, false, true, false], 
    [false, false, false, false, false], 
    [false, false, false], 
    [false, false, false]]
  } else if (part == 'Flour') {
    movementSlot = 
    [[false, false], 
    [false, false, false, false, false, false, false, false, false, true], 
    [false, false, false, false, false], 
    [false, false, false], 
    [false, false, false]]
  }

  return (
    <animated.div className='BatchProductionContainerContainer' style={{...springs}}>
      <div>
        <div className='BatchProductionContainerTopText'>
          <div>{id + 1000}</div>
          <div>|</div>
          <div>{data.idCentra}</div>
          <div className='BatchProductionContainerDateText'>{data.timeCreated}</div>
        </div>
        <div className='BatchProductionContainerTopTextTwo'>
          <div>weight</div>
          <div>:</div>
          <div className='BatchProductionContainerTopWeightText'>{data.weight}</div>
          <div className='BatchProductionContainerStatusText'><span className='BatchProductionContainerStatusTextIn' style={styleStatus}>{data.expired ? "Expired": "Usuable"}</span></div>
        </div>
      </div>
      <div className='BatchProductionCotainerBottomText'>
        <div className='BatchProductionContainerBottomTextEdit'>
          <div className='BatchProductionContainerDeleteButton' onClick={() => setDeleteUpdate(true)}>
            <div style={{margin: "auto"}} >Delete</div>
            <img src={Delete} style={{margin: "auto", maxWidth: "none"}}></img>
          </div>
          <div className='BatchProductionContainerEditButton' onClick={() => setNavigation(movementSlot)}>
            <div style={{margin: "auto"}}>Input</div>
            <img src={pencil} style={{margin: "auto", maxWidth: "none"}}></img>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

BatchContainerProduction.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.checkPropTypes()
  )
}

export default BatchContainerProduction