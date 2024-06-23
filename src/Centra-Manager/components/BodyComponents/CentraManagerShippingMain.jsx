import { useEffect, useState } from "react"
import '../../css/ShippingCentraManager.css'
import Search from '../../assets/SearchIcon.svg'
import Add from '../../assets/AddIcon.svg'
import ShippingDashboard from './ShippingDashboard'
import axios from "axios"

// eslint-disable-next-line react/prop-types
function CentraManagerShippingMain({setNavigation}) {
  const [currentButtonPosition, setCurrentButtonPosition] = useState([true, false, false, false])
  const selectedStyle = {
    backgroundColor: "#04315B",
    color: "white"
  }

  // Data For Shipping
  const [shippingData, setShippingData] = useState([])
    useEffect(() => {
      axios.get('https://test-backend-sfso.vercel.app/shipments')
        .then(response => {
          setShippingData(response.data.all_shipment);
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
        });
      }, []);  

function dataTableCheck(Position, Table) {
  var DataTable = []
  console.log(Table)
  Table.forEach((TableData, index) => {
    if (Position[0]) {
      DataTable.push(Table[index])
    } else if (TableData.status == 'Delivered' && Position[2]) {
      DataTable.push(Table[index])
    } else if (TableData.status == 'Shipping' && Position[1]) {
      DataTable.push(Table[index])
    } else if (TableData.status == 'Waiting Pickup' && Position[1]) {
      DataTable.push(Table[index])
    } else if (TableData.status == 'Cancelled' && Position[3]) {
      DataTable.push(Table[index])
    }
  });
  return DataTable
}

  return (
    <div style={{marginTop: "36px"}}>
      <div className="ProductionInsideContainer">
        <div className='ProductionInsideSearchBarAndAddNewContainer'>
          <div className='ProductionInsideSearchBar'>
            <img src={Search} className='ProductionInsideSearchBarImage'></img>
            <input className='ProductionInsideSearchBarInput' placeholder='Search'></input>
          </div>
          <div className='ProductionInsideAddNewButton'>
            <img src={Add} className='ProductionInsideAddedNewImage'></img>
            <div className='ProductionInsideAddedNewText' onClick={() => setNavigation(
              [[false, false], 
              [false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false], 
              [false, true, false], 
              [false, false, false]])}>Add New</div>
          </div>
        </div>
        <div className='ShippingViewButtonsContainer'>
            <div className='ShippingViewButtonContainerText' style={currentButtonPosition[0] ? selectedStyle : {}} onClick={() => setCurrentButtonPosition([true, false, false, false])}>View All</div>
            <div className='ShippingViewButtonContainerText' style={currentButtonPosition[1] ? selectedStyle : {}} onClick={() => setCurrentButtonPosition([false, true, false, false])}>In Progresss</div>
            <div className='ShippingViewButtonContainerText' style={currentButtonPosition[2] ? selectedStyle : {}} onClick={() => setCurrentButtonPosition([false, false, true, false])}>Completed</div>
            <div className='ShippingViewButtonContainerText' style={currentButtonPosition[3] ? selectedStyle : {}} onClick={() => setCurrentButtonPosition([false, false, false, true])}>Cancelled</div>
        </div>
        <div style={{width: "99vw", marginLeft: "-4%"}}>
            {dataTableCheck(currentButtonPosition, shippingData).map((data, index) => (
                    <div key={index}><ShippingDashboard ShippingData={data} animationStart={index * 200 + 100}/></div>
                ))}
        </div>
      </div>
      <div style={{marginBottom: "200px"}}></div>
    </div>
  )
}

export default CentraManagerShippingMain