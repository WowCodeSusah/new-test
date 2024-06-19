import React from 'react'
import { images } from '../constants'

function DesktopWarning() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-secondary'>
        <svg width="0" height="0">
            <filter id="redFilter" colorInterpolationFilters="sRGB">
                <feColorMatrix
                type="matrix"
                values="
                    1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
                />
                <feColorMatrix
                type="matrix"
                values="
                    0.741 0 0 0 0
                    0.847 0 0 0 0
                    0.690 0 0 0 0
                    0 0 0 1 0"
                />
            </filter>
        </svg>

        <p className='fixed top-0 right-0 mt-8 mr-8 text-3xl font-mmbold text-primary'>Moringa</p>
        <img 
        src={images.xyzLaptop}
        className='w-48 h-48'
        style={{ objectFit: 'contain', filter: "url(#redFilter)"}}
        />
        <div className='mt-10'><img src="https://readme-typing-svg.herokuapp.com?font=MuseoModerno&weight=800&size=48&duration=3000&pause=1000&color=FAF9F6&center=true&vCenter=true&random=false&width=435&lines=Sorry!" alt="Typing SVG" /></div>
        <p className='mt-3 text-center text-xl font-hnroman text-offwhite'>Please switch to a mobile device<br/>to view this page.</p>
    </div>
  )
}

export default DesktopWarning