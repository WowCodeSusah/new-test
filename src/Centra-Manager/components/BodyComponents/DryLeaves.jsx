import { useEffect, useState } from 'react'
import '../../css/ProductionCentraManager.css'
import ProductionInsideChart from '../Charts/ProductionInsideChart'
import BatchContainerProduction from './BatchContainerProduction'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function DryLeaves({setNavigation}) {
  // eslint-disable-next-line no-unused-vars
  const [dryData, setDryData] = useState([])
    useEffect(() => {
      axios.get('https://test-backend-sfso.vercel.app/dryleaves')
        .then(response => {
          setDryData(response.data.all_dry);
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
              [false, false, false, false, false, true, false, false, false, false], 
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
          {dryData.map((dataLeaves, index) => (
                    <div key={index}><BatchContainerProduction part={'Dry'} data={dataLeaves} animationStart={index * 200 + 100} setNavigation={setNavigation} id={dataLeaves.idDry}/></div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default DryLeaves