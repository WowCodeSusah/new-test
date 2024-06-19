import { useState } from 'react'
import '../../css/ProductionCentraManager.css'
import ProductionInsideChart from '../Charts/ProductionInsideChart'
import BatchContainerProduction from './BatchContainerProduction'

// eslint-disable-next-line react/prop-types
function FlourLeaves({setNavigation}) {
  // eslint-disable-next-line no-unused-vars
  const [DataLeaves, setDataLeaves] = useState([{
    ID: "ID W23",
    SecondSlot: "M14",
    Weight: "10 kg",
    date: "14/02/2024",
    status: "exp. 14/05/2024" 
  }, {
    ID: "ID W33",
    SecondSlot: "M15",
    Weight: "10 kg",
    date: "14/02/2024",
    status: "exp. 14/05/2024" 
  }, {
    ID: "ID W43",
    SecondSlot: "M16",
    Weight: "10 kg",
    date: "14/02/2024",
    status: "exp. 14/05/2024" 
  },
])
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
            <div className='ProductionInsideAddedNewText' onClick={
              () => setNavigation([[false, false], 
              [false, false, false, false, false, false, true, false, false, false], 
              [false, false, false, false, false], 
              [false, false, false], 
              [false, false, false]])}>Add New</div>
          </div>
        </div>
        <div className='ProductionInsideChartContainer'>
          <ProductionInsideChart />
        </div>
        <div>
          {DataLeaves.map((dataLeaves, index) => (
                    <div key={index}><BatchContainerProduction part={'Flour'} data={dataLeaves} animationStart={index * 200 + 100} setNavigation={setNavigation}/></div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default FlourLeaves