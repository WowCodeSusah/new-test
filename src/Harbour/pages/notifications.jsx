import React from 'react'
import { icons } from '../constants'
import { useSpring, animated } from '@react-spring/web'

function Notifications({ togglePage, pages }) {

  const springs = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const spring2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  const notifs = [
    {id: 1, section: 'XYZ', location: 'Poto Tano', packageType:'flour', time:'18:35', date:'04-07-2004'},
    {id: 2, section: 'harbour', location: 'Soerelage', packageType:'dry leaves', time:'13:35', date:'04-07-2004'},
  ]
  return (
    <div className='bg-offwhite container flex flex-col min-h-screen'>
      <div className='items-start flex w-full items-center py-3 px-4 bg-primary h-16 fixed overflow-auto'>
        <img 
          src={icons.xyzBack}
          alt="Back"
          className='absolute mt-4 w-7 h-7'
          style={{ objectFit: 'contain'}}
          onClick={() => togglePage(0, 0)}
        />

        <animated.div style={{...spring2}} className='px-4 pt-4 flex w-full h-12 justify-center items-center'>
          <p className='text-md text-secondary font-hnbold'>
            Notifications
          </p>
        </animated.div>
      </div>

      <div className='mt-20 flex flex-col flex-1 pt-2 items-center overflow-y-hidden'>
        {notifs.map((notif) => (
            <animated.div style={{...springs}} className='my-1 px-4 py-3 w-[90vw] h-20 bg-offwhite-400 rounded-lg border border-offwhite-600' key={notif.id}>
              <div className='flex items-center'>
                <p className='text-xs font-hnmedium text-secondary'>
                  Package arrived at {notif.section}
                </p>

                <p className='text-xs ml-auto text-secondary font-hnmedium opacity-30'>
                  {notif.time}
                </p>
              </div>

              <p className='mt-2 text-xs text-offwhite-700 font-hnmedium'>
                Package of {notif.packageType} has reached {notif.section}<br />at {notif.location}.
              </p>
            </animated.div>
          )) 
        }
      </div>
    </div>
  )
}

export default Notifications