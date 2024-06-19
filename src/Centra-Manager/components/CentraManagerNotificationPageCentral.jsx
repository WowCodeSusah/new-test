import NotificationCentraManagerPage from "./NotificationCentraManagerPage"

// eslint-disable-next-line react/prop-types
function CentraManagerNotificationPageCentral() {
    var today = [
        {
            title: "Package Arrived at Harbour",
            description: "Package of flour has reached harbour in Poto Tano.",
            time: "18:35",
            new: true
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: true
        }
    ]
    var yesterday = [
        {
            title: "Package Arrived at Harbour",
            description: "Package of flour has reached harbour in Poto Tano.",
            time: "18:35",
            new: false
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: false
        }
    ]
    var sevenDays = [
        {
            title: "Package Arrived at Harbour",
            description: "Package of flour has reached harbour in Poto Tano.",
            time: "18:35",
            new: false
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: false
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: false
        }
    ]
    var later = [
        {
            title: "Package Arrived at Harbour",
            description: "Package of flour has reached harbour in Poto Tano.",
            time: "18:35",
            new: false
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: false
        },{
            title: "Package Arrived at XYZ",
            description: "Package of flour has reached XYZ in Soerelage.",
            time: "13:35",
            new: false
        }
    ]
  return (
    <div style={{marginTop: '30px'}}>
        <NotificationCentraManagerPage today={today} yesterday={yesterday} last7days={sevenDays} later={later}/>
    </div>
  )
}

export default CentraManagerNotificationPageCentral