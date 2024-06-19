import { useState } from 'react'
import '../../css/ProductionCentraManager.css'
import ProductionInsideChart from '../Charts/ProductionInsideChart'
import BatchContainerProduction from './BatchContainerProduction'
import DeleteProductionInside from './DeleteProductionInside'

// eslint-disable-next-line react/prop-types
function WetLeaves({setNavigation}) {
  // eslint-disable-next-line no-unused-vars
  const [DeleteShow, setDeleteShow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [DataLeaves, setDataLeaves] = useState([{
    ID: "ID W23",
    SecondSlot: "John Doe",
    Weight: "14 kg",
    date: "14/02/2024",
    status: "Usable" 
  }, {
    ID: "ID W33",
    SecondSlot: "John Doe",
    Weight: "14 kg",
    date: "14/02/2024",
    status: "Usable" 
  }, {
    ID: "ID W43",
    SecondSlot: "John Doe",
    Weight: "14 kg",
    date: "14/02/2024",
    status: "Expired" 
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
              [false, false, false, false, true, false, false, false, false, false], 
              [false, false, false, false, false], 
              [false, false, false], 
              [false, false, false]])}
              >Add New</div>
          </div>
        </div>
        <div className='ProductionInsideChartContainer'>
          <ProductionInsideChart />
        </div>
        <div>
          {DataLeaves.map((dataLeaves, index) => (
                    <div key={index}><BatchContainerProduction part={'Wet'} data={dataLeaves} setDeleteUpdate={setDeleteShow} animationStart={index * 200 + 100} setNavigation={setNavigation}/></div>
                ))}
        </div>
      </div>
      <div>
        {DeleteShow ? <DeleteProductionInside CloseDeleteScreen={setDeleteShow}/> : <></>}
      </div>
    </div>
  )
}

export default WetLeaves