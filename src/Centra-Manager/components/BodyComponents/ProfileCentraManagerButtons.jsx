import '../../css/ProfileCentraManager.css'
import { useSpring, animated } from '@react-spring/web'
import arrowIcon from '../../assets/ArrowIconProfile.svg'

// eslint-disable-next-line react/prop-types
function ProfileCentraManagerButtons({label, imgSRC, animationStart, setNavigation}) {
  const springs = useSpring({
    config: {
      tension: 190, 
      friction: 60
    },
    from: { y: animationStart },
    to: { y: 0 },
  })

  var handleFunction 

  const goToProfile = () => {
    setNavigation(
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, true, false]])
  }

  const goToSetting = () => {
    setNavigation(
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, true]])
  }

  if (label == 'Edit Profile') {
    handleFunction = goToProfile
  } else if (label == 'Settings') {
    handleFunction = goToSetting
  }

  return (
    <animated.div className='ProfileCentraManagerContainerEditProfileButton' style={{...springs}} onClick={() => handleFunction()}>
        <img src={imgSRC} className='ProfileCentraManagerButtonImagePlaceHolder'></img>
        <div className='ProfileCentraManagerTextLabel'>{label}</div>
        <img src={arrowIcon} className='ProfileCentraManagerArrowImage'></img>
    </animated.div>
  )
}

export default ProfileCentraManagerButtons