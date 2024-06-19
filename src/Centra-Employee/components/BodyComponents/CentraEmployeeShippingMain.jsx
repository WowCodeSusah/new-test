import { useState } from 'react'
import '../../css/ShippingCentraManager.css'
import ShippingDashboard from './ShippingDashboard'

// eslint-disable-next-line react/prop-types
function CentraManagerShippingMain({setNavigation}) {
  const [currentButtonPosition, setCurrentButtonPosition] = useState([true, false, false, false])
  const selectedStyle = {
    backgroundColor: "#04315B",
    color: "white"
  }
  // Data For Shipping
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
    {
      ShippingID: "1239 8628 2748 29",
      Status: "Shipping",
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
    Status: "Waiting Pickup",
    Provider: "Indonesia's Military",
    Weight: "10 kg",
    BatchID: "F24, F25",
    Date: "05/02/24"
  },
  {
      ShippingID: "1239 8628 2748 29",
      Status: "Cancelled",
      Provider: "Indonesia's Military",
      Weight: "10 kg",
      BatchID: "F24, F25",
      Date: "05/02/24"
  },
  {
    ShippingID: "1239 8628 2748 29",
    Status: "Cancelled",
    Provider: "Indonesia's Military",
    Weight: "10 kg",
    BatchID: "F24, F25",
    Date: "05/02/24"
  },
]

function dataTableCheck(Position, Table) {
  var DataTable = []
  Table.forEach((TableData, index) => {
    if (Position[0]) {
      DataTable.push(Table[index])
    } else if (TableData.Status == 'Delivered' && Position[2]) {
      DataTable.push(Table[index])
    } else if (TableData.Status == 'Shipping' && Position[1]) {
      DataTable.push(Table[index])
    } else if (TableData.Status == 'Waiting Pickup' && Position[1]) {
      DataTable.push(Table[index])
    } else if (TableData.Status == 'Cancelled' && Position[3]) {
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
            <img src='src\Centra-Manager\assets\SearchIcon.svg' className='ProductionInsideSearchBarImage'></img>
            <input className='ProductionInsideSearchBarInput' placeholder='Search'></input>
          </div>
          <div className='ProductionInsideAddNewButton'>
            <img src='src\Centra-Manager\assets\AddIcon.svg' className='ProductionInsideAddedNewImage'></img>
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
            {dataTableCheck(currentButtonPosition, testTable).map((data, index) => (
                    <div key={index}><ShippingDashboard ShippingData={data} animationStart={index * 200 + 100}/></div>
                ))}
        </div>
      </div>
      <div style={{marginBottom: "200px"}}></div>
    </div>
  )
}

export default CentraManagerShippingMain