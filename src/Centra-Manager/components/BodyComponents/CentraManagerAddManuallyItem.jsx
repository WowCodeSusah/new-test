import { useState } from 'react'
import '../../css/ProfileCentraManager.css'
import CentraManagerAddManuallyShipping from './CentraManagerAddManuallyShipping'
import CentraManagerAddManuallyWet from './CentraManagerAddManuallyWet'
import CentraManagerAddManuallyDry from './CentraManagerAddManuallyDry'
import CentraManagerAddManuallyFlour from './CentraManagerAddManuallyFlour'

// eslint-disable-next-line react/prop-types
function CentraManagerAddManuallyItem({setNavigation, previousState}) {
    const [state, setState] = useState([true, false, false, false])
    var currentState = <CentraManagerAddManuallyShipping />

    if (state[0]) {
        currentState = <CentraManagerAddManuallyShipping />
    } else if (state[1]) {
        currentState = <CentraManagerAddManuallyWet />
    } else if (state[2]) {
        currentState = <CentraManagerAddManuallyDry />
    } else if (state[3]) {
        currentState = <CentraManagerAddManuallyFlour />
    }

  return (
    <div className='CentraManagerAddNewContainer'>
        <div className='CentraManagerSelectionContainer'>
            <div className='CentraManagerSelectionText' style={state[0] ? {color: "white", backgroundColor: "#04315B"} : {}} onClick={() => setState([true, false, false, false])}>Shipping</div>
            <div className='CentraManagerSelectionText' style={state[1] ? {color: "white", backgroundColor: "#04315B"} : {}} onClick={() => setState([false, true, false, false])}>Wet Leaves</div>
            <div className='CentraManagerSelectionText' style={state[2] ? {color: "white", backgroundColor: "#04315B"} : {}} onClick={() => setState([false, false, true, false])}>Dry Leaves</div>
            <div className='CentraManagerSelectionText' style={state[3] ? {color: "white", backgroundColor: "#04315B"} : {}} onClick={() => setState([false, false, false, true])}>Flour</div>
        </div>
        {currentState}
        <div className='CentraManagerAddNewButtonContainers'>
                <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
                <div className='CentraManagerAddNewButtonAddContainer'>Save</div>
        </div>
    </div>
  )
}

export default CentraManagerAddManuallyItem