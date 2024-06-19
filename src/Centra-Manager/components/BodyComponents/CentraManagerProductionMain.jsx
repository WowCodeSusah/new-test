import '../../css/ProductionCentraManager.css'
import ProductionDashboard from './ProductionDashboard'
import WetLeaves from './WetLeaves'
import DryLeaves from './DryLeaves'
import FlourLeaves from './FlourLeaves'

// eslint-disable-next-line react/prop-types
function CentraManagerProductionMain({ProductionPosition, setProductionPosition}) {
  // eslint-disable-next-line no-unused-vars
  var currentPosition = <ProductionDashboard setBody={setProductionPosition}/>
  
  if (ProductionPosition[1][0] == true) {
    () => setProductionPosition(
      [[false, false], 
      [true, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]])
    currentPosition = <ProductionDashboard setBody={setProductionPosition}/>
  } else if (ProductionPosition[1][1] == true) {
    () => setProductionPosition(
      [[false, false], 
      [false, true, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]])
    currentPosition = <WetLeaves setNavigation={setProductionPosition}/>
  } else if (ProductionPosition[1][2] == true) {
    () => setProductionPosition(
      [[false, false], 
      [false, false, true, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]])
    currentPosition = <DryLeaves setNavigation={setProductionPosition}/>
  } else if (ProductionPosition[1][3] == true) {
    () => setProductionPosition(
      [[false, false], 
      [false, false, false, true, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]])
    currentPosition = <FlourLeaves setNavigation={setProductionPosition}/>
  }

  return (
    <div>
      <div>{currentPosition}</div>
      <div style={{marginBottom: "200px"}}></div>
    </div>
  )
}

export default CentraManagerProductionMain