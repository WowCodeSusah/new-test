import '../css/NotificationCentraManager.css'
import PropTypes from "prop-types";
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function CentraManagerNotificationBlock({data, animationStart}) {
    const springs = useSpring({
        config: {
          tension: 190, 
          friction: 60
        },
        from: { y: animationStart },
        to: { y: 0 },
      })
  return (
    <animated.div className='CentraManagerNotificationBlockContainerPrimary' style={{...springs}}>
        <div className='CentraManagerNotificationBlockContainer'>
            <div>{data.title}</div>
            <div className='CentraManagerNotificationBlockContainerTimeContainer'>
                <div className='CentraManagerNotificationBlockContainerTimeText'>
                    {data.time}
                </div>
                <div className='NotificationDotCentraManager'></div>
            </div>
        </div>
        <div className='NotificationCentraManagerBlockDescription'>
            {data.description}
        </div>
    </animated.div>
  )
}

CentraManagerNotificationBlock.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.checkPropTypes()
    )
  }

export default CentraManagerNotificationBlock