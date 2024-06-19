import '../../css/ProfileCentraManager.css'
import CentraManagerAddNewTextField from '../EditAndNewComponent/CentraManagerAddNewTextField'
import CentraManagerDatePicker from '../EditAndNewComponent/CentraManagerDatePicker'
import CentraManagerDropDown from '../EditAndNewComponent/CentraManagerDropDown'

// eslint-disable-next-line react/prop-types
function CentraManagerProfilePage({setNavigation, previousState}) {
  return (
    <div className='CentraManagerAddNewContainer'>
        <img src='src\Centra-Manager\assets\ProfileTest.jpg' className='ProfileCentraManagerImageContainer'></img>
        <form className='CentraManagerAddNewFormContainer'>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Fullname</div>
                <CentraManagerAddNewTextField label={"Name"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Email</div>
                <CentraManagerAddNewTextField label={"..@gmail"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Phone Number</div>
                <CentraManagerAddNewTextField label={"081293389167"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Role</div>
                <CentraManagerAddNewTextField label={"Centra 1"}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Gender</div>
                <CentraManagerDropDown listOption={["Male", "Female"]}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Birth Date</div>
                <CentraManagerDatePicker />
            </div>
        </form>
        <div className='CentraManagerAddNewButtonContainers'>
                <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
                <div className='CentraManagerAddNewButtonAddContainer'>Save</div>
        </div>
    </div>
  )
}

export default CentraManagerProfilePage