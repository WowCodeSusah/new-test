import '../../css/ProductionCentraManager.css'
import backgroundWet from '../../assets/WetLeaves.png'
import backgroundDry from '../../assets/DryLeaves.png'
import backgroundFlour from '../../assets/Flour.png'
import ProductionImageContainer from './ProductionImageContainer'

// eslint-disable-next-line react/prop-types
function ProductionDashboard({setBody}) {
  return (
    <div style={{marginTop: "50px"}}>
      <ProductionImageContainer 
        label={'Wet \nLeaves'} 
        imageUrl={`url(${backgroundWet})`} 
        backgroundsize={"600px"} 
        animationStart={800}
        setBody={setBody}
        selection={[[false], [false, true, false, false], [false], [false], [false]]}
      />
      <ProductionImageContainer 
        label={'Dry \nLeaves'} 
        imageUrl={`url(${backgroundDry})`} 
        backgroundsize={"400px"} 
        animationStart={1000}
        setBody={setBody}
        selection={[[false], [false, false, true, false], [false], [false], [false]]}
      />
      <ProductionImageContainer 
        label={'Flour'} 
        imageUrl={`url(${backgroundFlour})`} 
        backgroundsize={"400px"} 
        animationStart={1200}
        setBody={setBody}
        selection={[[false], [false, false, false, true], [false], [false], [false]]}
      />
    </div>
  )
}

export default ProductionDashboard