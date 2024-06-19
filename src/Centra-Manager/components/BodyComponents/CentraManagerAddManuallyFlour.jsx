import CentraManagerAddNewTextField from '../EditAndNewComponent/CentraManagerAddNewTextField'
import CentraManagerDatePicker from '../EditAndNewComponent/CentraManagerDatePicker'
import CentraManagerDropDown from '../EditAndNewComponent/CentraManagerDropDown'
import '../../css/ProfileCentraManager.css'

function CentraManagerAddManuallyFlour() {
  return (
    <form className='CentraManagerAddNewFormContainer' style={{marginTop: '10px'}}>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Shipping ID</div>
                <CentraManagerAddNewTextField label={"ID"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Provider</div>
                <CentraManagerAddNewTextField label={"..@gmail"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Address</div>
                <CentraManagerAddNewTextField label={"081293389167"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Total Weight</div>
                <CentraManagerAddNewTextField label={"Centra 1"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Batch ID</div>
                <CentraManagerDropDown listOption={["Male", "Female"]}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Exp. Date</div>
                <CentraManagerDatePicker />
            </div>
        </form>
  )
}

export default CentraManagerAddManuallyFlour