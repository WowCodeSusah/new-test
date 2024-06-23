import axios from 'axios';
import '../../css/ProfileCentraManager.css'
import ProfileTest from '../../assets/ProfileTest.jpg'
import Edit from '../../assets/EditIcon.svg'
import Settings from '../../assets/SettingsIcon.svg'
import LogOut from '../../assets/LogOutIcon.svg'
import ProfileCentraManagerButtons from './ProfileCentraManagerButtons'
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function CentraManagerProfileMain({setNavigation}) {

  async function deleteSession() {
      axios.post('https://test-backend-k9s7.vercel.app/delete_session/', {}, {withCredentials: true})
        .then(() => {
            location.reload()
        })
        .catch(error => {
          console.error('Error fetching session data:', error);
        });
  }

  const springs = useSpring({
    config: {
      tension: 190, 
      friction: 60
    },
    from: { y: -200 },
    to: { y: 0 },
  })

  return (
    <div className='ProfileColorContainer'>
        <animated.div className='ProfileCentraManagerContainerTopHalf' style={{...springs}}>
            <div className='ProfileCentraManagerContainerTitle'>Account</div>
            <img src={ProfileTest} className='ProfileCentraManagerImageContainer'></img>
            <div className='ProfileCentraManagerContainerTextUsername'>John Doe</div>
            <div className='ProfileCentraManagerContainerSubText'>Centra Manager</div>
            <div className='ProfileCentraManagerContainerIDText'>ID: U108</div>
        </animated.div>
        <div style={{paddingTop: "258px"}}>
            <ProfileCentraManagerButtons label={"Edit Profile"} imgSRC={Edit} animationStart={200} setNavigation={setNavigation}/>
            <ProfileCentraManagerButtons label={"Settings"} imgSRC={Settings} animationStart={400} setNavigation={setNavigation}/>
            <div onClick={() => deleteSession()}>
            <ProfileCentraManagerButtons label={"Logout"} imgSRC={LogOut} animationStart={600} setNavigation={setNavigation}/>
            </div>
        </div>
    </div>
  )
}

export default CentraManagerProfileMain