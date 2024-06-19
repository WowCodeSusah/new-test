import React from 'react'
import UseWindowThreshold from '../../UseWindowThreshold'
import MainPageHarbour from './mainPageH'
import DesktopWarning from './desktopwarning'
import { useEffect } from 'react'

function Harbour() {

    const MAX_MOBILE_WIDTH = 640
    const isMobileSize = UseWindowThreshold(MAX_MOBILE_WIDTH)

    useEffect(() => {
    //Some more code to execute when the mobile size is toggled
    }, [isMobileSize])

  return (
    <>
        { isMobileSize ? <MainPageHarbour /> : <DesktopWarning /> }
    </>
  )
}

export default Harbour