import '../../css/ProductionCentraManager.css'

// eslint-disable-next-line react/prop-types
function DeleteProductionInside({CloseDeleteScreen}) {
  return (
    <div className='DeleteContainerProductionInside'>
        <div className='DeleteProductionInsideTextContainer'>
            <img src='src\Centra-Manager\assets\DeleteIcon-2.svg' className='ImageDeleteIconProductionInside'></img>
            <div className='DeleteProductionInsideContainerText1'>Are you sure you want to delete ID W23?</div>
            <div className='DeleteProductionInsideContainerText2'>You will not be able to recover it afterwards</div>
            <div className='DeleteProductionInsideButtonContainers'>
                <div className='DeleteProductionInsideButtonCancelContainer' onClick={() => CloseDeleteScreen(false)}>Cancel</div>
                <div className='DeleteProductionInsideButtonDeleteContainer'>Delete</div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProductionInside