import "../../css/ProfileCentraManager.css";
import CentraManagerDropDown from "../EditAndNewComponent/CentraEmployeeDropDown";
import CentraManagerEditPassword from "../EditAndNewComponent/CentraManagerEditPassword";

// eslint-disable-next-line react/prop-types
function CentraManagerSettingsPage({ setNavigation, previousState }) {
    return (
        <div className="CentraManagerAddNewContainer">
            <form className="CentraManagerAddNewFormContainer">
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Languange</div>
                    <CentraManagerDropDown
                        listOption={["English", "Indonesia"]}
                    />
                </div>
                <div className="CentraManagerSettingPagePasswordText">
                    Change Password
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">
                        Old Password
                    </div>
                    <CentraManagerEditPassword label={"Old Password"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">
                        New Password
                    </div>
                    <CentraManagerEditPassword label={"Enter New Password"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">
                        Repeat Password
                    </div>
                    <CentraManagerEditPassword label={"Repeat New Password"} />
                </div>
            </form>
            <div className="CentraManagerAddNewButtonContainers">
                <div
                    className="CentraManagerAddNewButtonCancelContainer"
                    onClick={() => setNavigation(previousState)}
                >
                    Cancel
                </div>
                <div className="CentraManagerAddNewButtonAddContainer">
                    Save
                </div>
            </div>
        </div>
    );
}

export default CentraManagerSettingsPage;
