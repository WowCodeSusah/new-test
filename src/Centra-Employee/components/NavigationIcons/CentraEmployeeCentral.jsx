import { useState } from "react";
import "../css/CentraEmployee.css";
import CentraEmployeeHeader from "./CentraEmployeeHeader";
import CentraEmployeeNavigation from "./CentraEmployeeNavigation";
import CentraEmployeeDashboard from "./BodyComponents/CentraEmployeeDashboard";
import CentraEmployeeProductionMain from "./BodyComponents/CentraEmployeeProductionMain";
import CentraEmployeeShippingMain from "./BodyComponents/CentraEmployeeShippingMain";
import CentraEmployeeProfileMain from "./BodyComponents/CentraEmployeeProfileMain";
import { useSpring, animated } from "@react-spring/web";
import CentraEmployeeHeaderBackButton from "./CentraEmployeeHeaderBackButton";
import CentraEmployeeNotificationPageCentral from "./CentraEmployeeNotificationPageCentral";
import CentraEmployeeAddNewWet from "./EditAndNewComponent/CentraEmployeeAddNewWet";
import CentraEmployeeAddNewDry from "./EditAndNewComponent/CentraEmployeeAddNewDry";
import CentraEmployeeAddFlour from "./EditAndNewComponent/CentraEmployeeAddFlour";
import QRNavigationPopUpCM from "./QRNavigationPopUpCM";
import QRCodeScanningPageCentraEmployee from "./QRCodeScanningPageCentraEmployee";
import CentraEmployeeShippingAddNew from "./BodyComponents/CentraEmployeeShippingAddNew";
import CentraEmployeeShippingTrackOrder from "./BodyComponents/CentraEmployeeShippingTrackOrder";
import CentraEmployeeEditWet from "./EditAndNewComponent/CentraEmployeeEditWet";
import CentraEmployeeEditDry from "./EditAndNewComponent/CentraEmployeeEditDry";
import CentraEmployeeEditFlour from "./EditAndNewComponent/CentraEmployeeEditFlour";
import CentraEmployeeProfilePage from "./BodyComponents/CentraEmployeeProfilePage";
import CentraEmployeeSettingsPage from "./BodyComponents/CentraEmployeeSettingsPage";
import CentraEmployeeAddManuallyItem from "./BodyComponents/CentraEmployeeAddManuallyItem";

var PreviousSlot = [
    [true, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false],
    [false, false, false],
];

// eslint-disable-next-line react/prop-types
function CentraEmployeeCentral() {
    const [NavigationSlot, setNavigationSlot] = useState([
        [true, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false],
        [false, false, false],
    ]);

    const [springs, api] = useSpring(() => ({
        config: {
            tension: 150,
            friction: 60,
        },
        from: { y: 0 },
    }));

    const [QRCode, QRCodeAnimation] = useSpring(() => ({
        config: {
            tension: 100,
            friction: 60,
        },
        from: { y: 0, x: 0 },
        to: { y: 0, x: 0 },
    }));

    const vhToPixel = (value) => (window.innerHeight * value) / 100;
    const [QRCover, QRCoverAnimation] = useSpring(() => ({
        config: {
            tension: 10000,
            friction: 10,
            clamp: true,
        },
        from: { y: 0, x: 0 },
        to: { y: 0, x: 0 },
    }));

    function QRCodeOpen() {
        QRCodeAnimation.start({ to: { y: -621 } });
        QRCoverAnimation.start({ to: { y: vhToPixel(-150) } });
        document.body.style.overflow = "hidden";
    }

    function QRCodeClose() {
        QRCodeAnimation.start({ to: { y: 621 } });
        QRCoverAnimation.start({ to: { y: vhToPixel(150) } });
        document.body.style.overflow = "scroll";
    }

    var HeaderLabel = "Home";
    var currentPosition = (
        <CentraEmployeeDashboard setNavigation={setNavigationSlot} />
    );
    var headerPosition = (
        <CentraEmployeeHeader
            Label={HeaderLabel}
            setNavigation={setNavigationSlot}
        />
    );
    var changeColor = {};

    if (NavigationSlot[0][0] == true) {
        HeaderLabel = "Home";
        currentPosition = (
            <CentraEmployeeDashboard setNavigation={setNavigationSlot} />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
            [true, false],
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
            [false, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[1][0] == true) {
        HeaderLabel = "Production";
        currentPosition = (
            <CentraEmployeeProductionMain
                setProductionPosition={setNavigationSlot}
                ProductionPosition={NavigationSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
            [false, false],
            [
                true,
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
            [false, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[3][0] == true) {
        HeaderLabel = "Shipping";
        currentPosition = (
            <CentraEmployeeShippingMain setNavigation={setNavigationSlot} />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
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
            [true, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[4][0] == true) {
        HeaderLabel = "Profile";
        currentPosition = (
            <CentraEmployeeProfileMain setNavigation={setNavigationSlot} />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
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
            [false, false, false],
            [true, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[1][1] == true) {
        HeaderLabel = "Wet Leaves";
        currentPosition = (
            <CentraEmployeeProductionMain
                setProductionPosition={setNavigationSlot}
                ProductionPosition={NavigationSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
            [false, false],
            [
                false,
                true,
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
            [false, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[1][2] == true) {
        HeaderLabel = "Dry Leaves";
        currentPosition = (
            <CentraEmployeeProductionMain
                setProductionPosition={setNavigationSlot}
                ProductionPosition={NavigationSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
            [false, false],
            [
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
            [false, false, false, false, false],
            [false, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[1][3] == true) {
        HeaderLabel = "Flour";
        currentPosition = (
            <CentraEmployeeProductionMain
                setProductionPosition={setNavigationSlot}
                ProductionPosition={NavigationSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeader
                Label={HeaderLabel}
                setNavigation={setNavigationSlot}
            />
        );
        PreviousSlot = [
            [false, false],
            [
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
            [false, false, false, false, false],
            [false, false, false],
            [false, false, false],
        ];
        api.start({ to: { y: 0 } });
    } else if (NavigationSlot[0][1] == true) {
        HeaderLabel = "Notification";
        currentPosition = (
            <CentraEmployeeNotificationPageCentral
                setNavigation={setNavigationSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"24px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][4] == true) {
        HeaderLabel = "Add New - Wet Leaves";
        currentPosition = (
            <CentraEmployeeAddNewWet
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][5] == true) {
        HeaderLabel = "Add New - Dry Leaves";
        currentPosition = (
            <CentraEmployeeAddNewDry
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][6] == true) {
        HeaderLabel = "Add New - Flour";
        currentPosition = (
            <CentraEmployeeAddFlour
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[2][0] == true) {
        QRCodeClose();
        HeaderLabel = "Scanning QR";
        currentPosition = <QRCodeScanningPageCentraEmployee />;
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[3][1] == true) {
        HeaderLabel = "Add New Shipping ID";
        currentPosition = (
            <CentraEmployeeShippingAddNew
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[3][2] == true) {
        HeaderLabel = "Track Order";
        currentPosition = <CentraEmployeeShippingTrackOrder />;
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][7] == true) {
        HeaderLabel = "Edit - Wet Leaves";
        currentPosition = (
            <CentraEmployeeEditWet
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][8] == true) {
        HeaderLabel = "Edit - Dry Leaves";
        currentPosition = (
            <CentraEmployeeEditDry
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[1][9] == true) {
        HeaderLabel = "Edit - Flour";
        currentPosition = (
            <CentraEmployeeEditFlour
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    } else if (NavigationSlot[4][1] == true) {
        HeaderLabel = "Edit Profile";
        currentPosition = (
            <CentraEmployeeProfilePage
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
        changeColor = { backgroundColor: "#EBEBEB" };
    } else if (NavigationSlot[4][2] == true) {
        HeaderLabel = "Settings";
        currentPosition = (
            <CentraEmployeeSettingsPage
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
        changeColor = { backgroundColor: "#EBEBEB" };
    } else if (NavigationSlot[2][2] == true) {
        HeaderLabel = "Add Manually";
        currentPosition = (
            <CentraEmployeeAddManuallyItem
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
            />
        );
        headerPosition = (
            <CentraEmployeeHeaderBackButton
                label={HeaderLabel}
                setNavigation={setNavigationSlot}
                previousState={PreviousSlot}
                size={"20px"}
            />
        );
        api.start({ to: { y: 200 } });
    }

    return (
        <div>
            <div className="HeaderCentraEmployee" style={changeColor}>
                {headerPosition}
            </div>
            <div className="BodyCentraEmployee">{currentPosition}</div>
            <animated.div
                className="NavigationCentraEmployee"
                style={{ ...springs }}
            >
                <CentraEmployeeNavigation
                    setNavigationSlot={setNavigationSlot}
                    NavigationSlot={NavigationSlot}
                    setQRCode={QRCodeOpen}
                />
            </animated.div>
            <animated.div
                className="CentraEmployeeQRCodePopUpPage"
                style={{ ...QRCode }}
            >
                <QRNavigationPopUpCM
                    setNavigation={setNavigationSlot}
                    closePopUp={QRCodeClose}
                />
            </animated.div>
            <animated.div
                className="CentraEmployeeQRCodePopUpCover"
                style={{ ...QRCover }}
                onClick={() => QRCodeClose()}
            ></animated.div>
        </div>
    );
}

export default CentraEmployeeCentral;
