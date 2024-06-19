import React from 'react'
import { icons, images } from '../constants'
import BottomTab from '../components/BottomTab'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import RescaleLists from '../components/RescaleLists'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function Rescale({ togglePage, pages, userName }) {

  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const springs = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const appear = useSpring({ 
    config: {
      duration: 1200,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    delay: 100,
    to: { y: 0, opacity: 1 },
  })  

  const spring2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    // console.log(searchQuery);
    setSearchQuery(event.target.value);
  };

  return (
    <div className='container flex flex-col min-h-screen'>
      <div className='items-start flex w-full items-center py-3 px-4 bg-primary h-16 fixed overflow-auto'>
          <animated.div style={{...appear}}>
            <img
                src={images.xyzPfp}
                alt="Profile Picture"
                className='w-10 h-10'
                style={{ objectFit: 'contain'}}
            />
          </animated.div>

          <div className="ml-2">
              <animated.div style={{...spring}}>
                <p className="font-hnroman text-xs text-secondary">
                  Welcome,
                </p>
              </animated.div>

              <animated.div style={{...spring2}}>
                <p className="text-base font-hnbold text-secondary">
                  {userName}
                </p>
              </animated.div>
          </div>

          <img 
              src={icons.xyzNotifications}
              alt="Notifications"
              className="ml-auto w-7 h-7"
              style={{ objectFit: 'contain'}}
              onClick={() => togglePage(0, 1)}
          />
      </div>

      <div className='fixed h-12 w-full py-2 px-4 bg-offwhite mt-16'>
        <animated.p style={{...springs}} className='text-secondary text-2xl font-hnbold'>
            Rescaling Packages
        </animated.p>
      </div>

      <SearchBar 
      otherStyles="fixed h-12 w-full mt-28 bg-offwhite"
      handleSearchText={handleSearch}
      value={searchQuery}
      />
     
      <RescaleLists searchQuery={searchQuery} />
      
      <BottomTab scrollPercent={scrollPercent} togglePage={togglePage} pages={pages}/>
    </div>   
  )
}

export default Rescale