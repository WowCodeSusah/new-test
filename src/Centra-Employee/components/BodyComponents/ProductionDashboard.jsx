import '../../css/ProductionCentraManager.css'
import ProductionImageContainer from './ProductionImageContainer'

// eslint-disable-next-line react/prop-types
function ProductionDashboard({setBody}) {
  return (
    <div style={{marginTop: "50px"}}>
      <ProductionImageContainer 
        label={'Wet \nLeaves'} 
        imageUrl={'url("src/Centra-Manager/assets/WetLeaves.png")'} 
        backgroundsize={"600px"} 
        animationStart={800}
        setBody={setBody}
        selection={[[false], [false, true, false, false], [false], [false], [false]]}
      />
      <ProductionImageContainer 
        label={'Dry \nLeaves'} 
        imageUrl={'url("src/Centra-Manager/assets/DryLeaves.png")'} 
        backgroundsize={"400px"} 
        animationStart={1000}
        setBody={setBody}
        selection={[[false], [false, false, true, false], [false], [false], [false]]}
      />
      <ProductionImageContainer 
        label={'Flour'} 
        imageUrl={'url("src/Centra-Manager/assets/Flour.png")'} 
        backgroundsize={"400px"} 
        animationStart={1200}
        setBody={setBody}
        selection={[[false], [false, false, false, true], [false], [false], [false]]}
      />
    </div>
  )
}

export default ProductionDashboard