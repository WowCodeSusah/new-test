import React from 'react'
import UseWindowThreshold from '../../UseWindowThreshold'
import StorageMainPage from './main-page'
import DesktopWarning from './desktopwarning'
import { useEffect } from 'react'

function RealMainPage() {

    const MAX_MOBILE_WIDTH = 640
    const isMobileSize = UseWindowThreshold(MAX_MOBILE_WIDTH)

    useEffect(() => {
    //Some more code to execute when the mobile size is toggled
    }, [isMobileSize])

  return (
    <>
        { isMobileSize ? <StorageMainPage /> : <DesktopWarning /> }
    </>
  )
}

export default RealMainPage