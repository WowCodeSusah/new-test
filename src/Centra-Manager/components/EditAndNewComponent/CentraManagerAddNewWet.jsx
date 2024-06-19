import '../../css/ProductionCentraManager.css'
import CentraManagerAddNewTextField from './CentraManagerAddNewTextField'
import CentraManagerDatePicker from './CentraManagerDatePicker'
import CentraManagerDropDown from './CentraManagerDropDown'

// eslint-disable-next-line react/prop-types
function CentraManagerAddNewWet({setNavigation, previousState}) {
  return (
    <div className='CentraManagerAddNewContainer'>
        <form className='CentraManagerAddNewFormContainer'>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>ID</div>
                <CentraManagerAddNewTextField label={"ID"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Provider</div>
                <CentraManagerAddNewTextField label={"Provider"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Weight</div>
                <CentraManagerAddNewTextField label={"Weight"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Status</div>
                <CentraManagerDropDown listOption={["Usable", "Expired"]}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Exp. Date</div>
                <CentraManagerDatePicker />
            </div>
        </form>
        <div className='CentraManagerAddNewButtonContainers'>
                <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
                <div className='CentraManagerAddNewButtonAddContainer'>Add</div>
        </div>
    </div>
  )
}

export default CentraManagerAddNewWet