import DashBoardBarChart from "../Charts/DashBoardBarChart"
import "../../css/CentraManagerBody.css"
import PieChartDashboard from "../Charts/PieChartDashboard"
import ShippingDashboard from "./ShippingDashboard"

// eslint-disable-next-line react/prop-types
function CentraManagerDashboard({setNavigation}) {
    const testTable = [
        {
            ShippingID: "1239 8628 2748 29",
            Status: "Delivered",
            Provider: "Indonesia's Military",
            Weight: "10 kg",
            BatchID: "F24, F25",
            Date: "05/02/24"
        },
        {
            ShippingID: "1239 8628 2748 29",
            Status: "Delivered",
            Provider: "Indonesia's Military",
            Weight: "10 kg",
            BatchID: "F24, F25",
            Date: "05/02/24"
        },
        {
            ShippingID: "1239 8628 2748 29",
            Status: "Shipping",
            Provider: "Indonesia's Military",
            Weight: "10 kg",
            BatchID: "F24, F25",
            Date: "05/02/24"
        },
    ]
  return (
    <div>
        <div className="CentraManagerDashboardTopWrapper">
            <div className="TotalChartTextTitleDashboard">Total Amount Summary</div>
            <DashBoardBarChart />
            <div className="PieChartHandlerDashboard">
                <PieChartDashboard dataPie={[75, 25]}/>
                <PieChartDashboard dataPie={[84, 16]}/>
            </div>
        </div>
        <div className="GapSetterCentraManagerDashboard">
            <div className="ShippingTitleHeaderCentraManager">
                <div className="TitleRecentShipping">Recent Shipping</div>
                <div className="ViewMoreRecentShipping">
                    <div className="ViewMoreRecentShippingText" onClick={() => setNavigation(
                        [[false, false], 
                        [false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false], 
                        [true, false, false], 
                        [false, false, false]])}>View more</div>
                    <img className="ArrowRecentShipping" src="src\Centra-Manager\assets\arrow.svg"></img>
                </div>
            </div>
            <div>
                {testTable.map((testTable, index) => (
                    <div key={index}><ShippingDashboard ShippingData={testTable} animationStart={index * 200 + 100} /></div>
                ))}
            </div>
        </div>
        <div style={{height: "150px"}}></div>
    </div>
  )
}

export default CentraManagerDashboard