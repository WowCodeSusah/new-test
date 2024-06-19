import React from 'react'
import BottomTab from '../components/BottomTab'
import { images, icons } from '../constants' 
import LongButton from '../components/LongButton'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

function Account({ togglePage, pages }) {

  const springs = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -500, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })

  const appear = useSpring({ 
    config: {
      duration: 1000,
    },
    from: { opacity: 0 },
    delay: 500,
    to: { opacity: 1 },
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = () => {
    setIsSubmitting(true);
    togglePage(1, 1);
    setIsSubmitting(false);
  };

  const submit2 = () => {
    setIsSubmitting(true);
    togglePage(1, 2);
    setIsSubmitting(false);
  };

  const logout = () => {
    setIsSubmitting(true);

    try {
      // backend await code here

      navigate('/');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-offwhite-400 container flex flex-col min-h-screen'>
      <animated.div style={{...springs}} className='w-full h-[44vh] mb-2 flex flex-col items-center bg-primary rounded-b-4xl'>
        <animated.div style={{...appear}}>
          <p className='mt-6 text-base text-secondary font-hnbold'>
            Account
          </p>
        </animated.div>

        <animated.div style={{...appear}}>
          <img
            src={images.xyzPfp}
            alt="Profile Picture"
            className='mt-3 w-24 h-24'
            style={{ objectFit: 'contain'}}
          />
        </animated.div>

        <animated.div style={{...appear}}>
          <p className='mt-2 text-lg text-secondary font-hnbold'>
            John Doeee
          </p>
        </animated.div>

        <animated.div style={{...appear}}>
          <p className='text-sm text-secondary font-hnroman'>
            Harbour
          </p>
        </animated.div>

        <animated.div style={{...appear}}>
          <div className='flex items-center justify-center mt-2 w-16 h-5 bg-primary-100 rounded-2xl'>
            <p className='text-xxs text-offwhite font-hnlight'>
              ID: U108
            </p>
          </div>
        </animated.div>
      </animated.div>

      <LongButton 
      title='Edit Profile'
      icon={icons.xyzEdit}
      handlePress={submit}
      isLoading={isSubmitting}
      delay={0}
      />

      <LongButton 
      title='Settings'
      icon={icons.xyzSettings}
      handlePress={submit2}
      isLoading={isSubmitting}
      delay={100}
      />

      <LongButton 
      title='Logout'
      icon={icons.xyzLogout}
      handlePress={logout}
      isLoading={isSubmitting}
      delay={200}
      />

      <BottomTab togglePage={togglePage} pages={pages}/>
    </div>
  )
}

export default Account