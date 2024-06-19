import React from 'react'
import { icons } from '../constants'
import { animated, useSpring } from '@react-spring/web'

const LongButton = ({ title, icon, handlePress, isLoading, delay }) => {

    const spring = useSpring({
        config: {
            tension: 170,
            friction: 60
        },
        from: { x: -20, opacity: 0 },
        delay: delay,
        to: { x: 0, opacity: 1 },
      })

  return (
    <button
      onClick={handlePress}
      className={`bg-offwhite rounded-lg border border-secondary h-12 mx-4 w-[90vw] mt-4 flex items-center ${isLoading && 'opacity-50'}`}
      disabled={isLoading}
    >
        <img 
            src={icon}
            alt='Icon'
            className="w-4 h-4 ml-2 mr-4"
            style={{ objectFit: 'contain'}}
        />

        <p className='text-sm text-secondary font-hnmedium'>
            {isLoading ? 'Loading...' : title}
        </p>

        <animated.div style={{...spring}} className='ml-auto mr-2'>
            <img
                src={icons.xyzRightArrow}
                alt='Arrow'
                className='w-3 h-3'
                style={{ objectFit: 'contain'}}
            />
        </animated.div>
    </button>
  )
}

export default LongButton