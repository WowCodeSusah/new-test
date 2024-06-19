import { useEffect, useState } from 'react'
import '../../css/ProductionCentraManager.css'
import ProductionInsideChart from '../Charts/ProductionInsideChart'
import BatchContainerProduction from './BatchContainerProduction'
import DeleteProductionInside from './DeleteProductionInside'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function WetLeaves({setNavigation}) {
  // eslint-disable-next-line no-unused-vars
  const [DeleteShow, setDeleteShow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [wetData, setWetData] = useState([])
    useEffect(() => {
      axios.get('https://test-backend-sfso.vercel.app/wetleaves')
        .then(response => {
          setWetData(response.data.all_wet);
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
        });
      }, []); 

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
          {wetData.map((dataLeaves, index) => (
                    <div key={index}><BatchContainerProduction part={'Wet'} data={dataLeaves} setDeleteUpdate={setDeleteShow} animationStart={index * 200 + 100} setNavigation={setNavigation} id={dataLeaves.idWet}/></div>
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