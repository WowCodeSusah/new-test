import DashBoardBarChart from "../Charts/DashBoardBarChart"
import "../../css/CentraManagerBody.css"
import PieChartDashboard from "../Charts/PieChartDashboard"
import ShippingDashboard from "./ShippingDashboard"
import { useEffect, useState } from "react"
import axios from "axios"

// eslint-disable-next-line react/prop-types
function CentraManagerDashboard({setNavigation}) {
    const [shippingData, setShippingData] = useState([])
    const [totalData, setTotalData] = useState([])

    useEffect(() => {
      axios.get('https://test-backend-sfso.vercel.app/shipments')
        .then(response => {
          setShippingData(response.data.all_shipment);
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
        });

        axios.get('https://test-backend-sfso.vercel.app/wetleaves')
        .then(response => {
          var wet = response.data.all_wet
          var totalWet = 0
          wet.forEach((TableData) => {
            totalWet = totalWet + TableData.weight 
          })
                axios.get('https://test-backend-sfso.vercel.app/dryleaves')
                .then(response => {
                var dry = response.data.all_dry
                var totalDry = 0
                dry.forEach((TableData) => {
                    totalDry = totalDry + TableData.weight 
                })
                            axios.get('https://test-backend-sfso.vercel.app/flours')
                            .then(response => {
                            var flour = response.data.all_Flour
                            var totalFlour = 0
                            flour.forEach((TableData) => {
                                totalFlour = totalFlour + TableData.weight 
                            })
                            setTotalData([totalWet, totalDry, totalFlour])
                            })
                            .catch(error => {
                            console.error('Error fetching storage data:', error);
                            });
                })
                .catch(error => {
                console.error('Error fetching storage data:', error);
                });
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
        });
      }, []);
  return (
    <div>
        <div className="CentraManagerDashboardTopWrapper">
            <div className="TotalChartTextTitleDashboard">Total Amount Summary</div>
            <DashBoardBarChart dataForTable={totalData} />
            <div className="PieChartHandlerDashboard">
                <PieChartDashboard dataPie={[totalData[0], totalData[1]]} label={"Dry Ratio"}/>
                <PieChartDashboard dataPie={[totalData[1], totalData[2]]} label={"Flour Ratio"}/>
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
                {shippingData.map((testTable, index) => (
                    <div key={index}><ShippingDashboard ShippingData={testTable} animationStart={index * 200 + 100} /></div>
                ))}
            </div>
        </div>
        <div style={{height: "150px"}}></div>
    </div>
  )
}

export default CentraManagerDashboard