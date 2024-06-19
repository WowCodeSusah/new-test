import { useEffect } from "react"
import LoginPage from "./components/LoginPage"
import LoginPageMobile from "../Login-Page-Mobile/components/LoginPageMobile"
import UseWindowThreshold from "../UseWindowThreshold"

// eslint-disable-next-line react/prop-types
function SwitchLogin() {
  const MAX_MOBILE_WIDTH = 950
  const isMobileSize = UseWindowThreshold(MAX_MOBILE_WIDTH)

  useEffect(() => {
    //Some more code to execute when the mobile size is toggled
  }, [isMobileSize])

  return (
    <>
      { isMobileSize ? <LoginPageMobile /> : <LoginPage /> }
    </>
  )
}
export default SwitchLogin