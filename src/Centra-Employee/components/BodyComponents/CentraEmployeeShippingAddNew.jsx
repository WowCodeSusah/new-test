import CentraManagerAddNewTextField from "../EditAndNewComponent/CentraEmployeeAddNewTextField";
import CentraManagerDatePicker from "../EditAndNewComponent/CentraEmployeeDatePicker";
import "../../css/ShippingCentraManager.css";

// eslint-disable-next-line react/prop-types
function CentraManagerShippingAddNew({ setNavigation, previousState }) {
    return (
        <div className="CentraManagerAddNewContainer">
            <form className="CentraManagerAddNewFormContainer">
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">
                        Shipping ID
                    </div>
                    <CentraManagerAddNewTextField label={"ID"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Provider</div>
                    <CentraManagerAddNewTextField label={"Provider"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Address</div>
                    <CentraManagerAddNewTextField label={"Jln. "} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Weight</div>
                    <CentraManagerAddNewTextField label={"10 Kg"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Batch ID</div>
                    <CentraManagerAddNewTextField label={"ID"} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div className="CentraManagerAddNewSubText">Date</div>
                    <CentraManagerDatePicker />
                </div>
            </form>
            <div className="CentraManagerAddNewButtonContainers">
                <div
                    className="CentraManagerAddNewButtonCancelContainer"
                    onClick={() => setNavigation(previousState)}
                >
                    Cancel
                </div>
                <div
                    className="CentraManagerAddNewButtonAddContainer"
                    onClick={() =>
                        setNavigation([
                            [false, false],
                            [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                            ],
                            [false, false, false, false, false],
                            [false, false, true],
                            [false, false, false],
                        ])
                    }
                >
                    Add
                </div>
            </div>
        </div>
    );
}

export default CentraManagerShippingAddNew;
