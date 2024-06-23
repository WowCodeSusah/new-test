/* eslint-disable no-unused-vars */
import '../css/LoginPage.css'
import LoginPrimary from './LoginPrimary'
import { useSpring, animated } from '@react-spring/web'
import useWindowDimensions from '/src/UseWindowDimensions.jsx';
import RegisterPrimary from './RegisterPrimary';
import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function LoginPage({setState}) {
  // eslint-disable-next-line no-unused-vars
  const {height, width} = useWindowDimensions();
  const [status, setStatus] = useState('Register');
  const [color, setColor] = useState('#04315B');
  const [textColor, setTextColor] = useState('white')
  const [userdata, setUserData] = useState('')

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  function handleClick(status) {
    if (status == 'Register') {
      setTextColor('#04315B');
      setColor('#BDD8B0');
      setStatus('Login');
      api.start({
        from: {
          x: 0,
        },
        to: {
          x: -(0.444444444 * width),
        },
      })
    } else if (status == 'Login') {
      setTextColor('white');
      setColor('#04315B');
      setStatus('Register');
      api.start({
        from: {
          x: -(0.444444444 * width),
        },
        to: {
          x: 0,
        },
      })
    }
  }

  return (
    <div>
    <animated.div className='SecondarySlot' style={{backgroundColor: color, ...springs}}>
          <h1 className='TitleText' style={{color:textColor}} >Moringa</h1>
    </animated.div>
      <div className='PrimaryContainer'>
        <div className='PrimarySlot'>
          <LoginPrimary click={handleClick} currentState={status} setState={setState}/>
        </div>
        <div>
          Empty
        </div>
        <div className='PrimarySlot'>
          <RegisterPrimary click={handleClick} currentState={status}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage