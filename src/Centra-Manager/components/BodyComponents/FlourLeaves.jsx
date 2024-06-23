import { useEffect, useState } from 'react'
import '../../css/ProductionCentraManager.css'
import Search from '../../assets/SearchIcon.svg'
import Add from '../../assets/AddIcon.svg'
import ProductionInsideChart from '../Charts/ProductionInsideChart'
import BatchContainerProduction from './BatchContainerProduction'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function FlourLeaves({setNavigation}) {
  // eslint-disable-next-line no-unused-vars
  const [flourData, setFlourData] = useState([])
    useEffect(() => {
      axios.get('https://test-backend-sfso.vercel.app/flours')
        .then(response => {
          setFlourData(response.data.all_Flour);
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
            <img src={Search} className='ProductionInsideSearchBarImage'></img>
            <input className='ProductionInsideSearchBarInput' placeholder='Search'></input>
          </div>
          <div className='ProductionInsideAddNewButton'>
            <img src={Add} className='ProductionInsideAddedNewImage'></img>
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
          {flourData.map((dataLeaves, index) => (
                    <div key={index}><BatchContainerProduction part={'Flour'} data={dataLeaves} animationStart={index * 200 + 100} setNavigation={setNavigation} id={dataLeaves.idFlour}/></div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default FlourLeaves