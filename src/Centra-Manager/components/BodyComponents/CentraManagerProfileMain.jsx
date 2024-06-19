import axios from 'axios';
import '../../css/ProfileCentraManager.css'
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
            <img src='src\Centra-Manager\assets\ProfileTest.jpg' className='ProfileCentraManagerImageContainer'></img>
            <div className='ProfileCentraManagerContainerTextUsername'>John Doe</div>
            <div className='ProfileCentraManagerContainerSubText'>Centra Manager</div>
            <div className='ProfileCentraManagerContainerIDText'>ID: U108</div>
        </animated.div>
        <div style={{paddingTop: "258px"}}>
            <ProfileCentraManagerButtons label={"Edit Profile"} imgSRC={'src/Centra-Manager/assets/EditIcon.svg'} animationStart={200} setNavigation={setNavigation}/>
            <ProfileCentraManagerButtons label={"Settings"} imgSRC={'src/Centra-Manager/assets/SettingsIcon.svg'} animationStart={400} setNavigation={setNavigation}/>
            <div onClick={() => deleteSession()}>
            <ProfileCentraManagerButtons label={"Logout"} imgSRC={'src/Centra-Manager/assets/LogOutIcon.svg'} animationStart={600} setNavigation={setNavigation}/>
            </div>
        </div>
    </div>
  )
}

export default CentraManagerProfileMain