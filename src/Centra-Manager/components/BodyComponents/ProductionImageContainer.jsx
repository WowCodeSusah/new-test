import { useSpring, animated } from '@react-spring/web'
import '../../css/ProductionCentraManager.css'
import arrowForward from '../../assets/arrow-forward.svg'

// eslint-disable-next-line react/prop-types
function ProductionImageContainer({label, imageUrl, backgroundsize, animationStart, setBody, selection}) {
  const springs = useSpring({
    config: {
      tension: 170, 
      friction: 60
    },
    from: { y: animationStart },
    to: { y: 0 },
  })

  return (
    <animated.div style={{...springs}} onClick={() => setBody(selection)}>
      <div className='ProductionImageContainerContainer' style={{ backgroundImage: imageUrl, backgroundSize: backgroundsize}}>
          <div className='ProductionImageContainerCover'>
              <pre className='ProductionImageContainerLabel'>{label}</pre>
              <div className='ProductionImageContainerArrowContainer'>
                <img className='ProductionImageContainerArrow' src={arrowForward}></img>
              </div>
          </div>
      </div>
    </animated.div>
  )
}

export default ProductionImageContainer