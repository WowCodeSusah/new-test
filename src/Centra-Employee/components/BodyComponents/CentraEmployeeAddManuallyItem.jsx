import { useState } from 'react'
import '../../css/ProfileCentraManager.css'

// eslint-disable-next-line react/prop-types
function CentraManagerAddManuallyItem({setNavigation, previousState}) {
    const [state, setState] = useState([true, false, false, false])

  return (
    <div className='CentraManagerAddNewContainer'>
        <div>
            <div>Shipping</div>
            <div>Wet Leaves</div>
            <div>Dry Leaves</div>
            <div>Flour</div>
        </div>

        <div className='CentraManagerAddNewButtonContainers'>
                <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
                <div className='CentraManagerAddNewButtonAddContainer'>Save</div>
        </div>
    </div>
  )
}

export default CentraManagerAddManuallyItem