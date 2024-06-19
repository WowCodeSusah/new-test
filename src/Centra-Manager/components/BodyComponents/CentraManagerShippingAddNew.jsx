/* eslint-disable no-unused-vars */
import CentraManagerAddNewTextField from '../EditAndNewComponent/CentraManagerAddNewTextField'
import CentraManagerDatePicker from '../EditAndNewComponent/CentraManagerDatePicker'
import '../../css/ShippingCentraManager.css'
import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function CentraManagerShippingAddNew({setNavigation, previousState}) {
    const [idCentra, setIdCentra] = useState('')
    const [provider, setProvider] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')
    const [weight, setWeight] = useState(0)
    const [estimated, setEstimated] = useState('')

    async function addShipping(centra, provider, address, status, weight, estimated) {
        axios.post(`https://test-backend-k9s7.vercel.app/shipments/`, {
            "idCentra": centra,
            "orderNumber": "787629dnHKWIH",
            "address": address,
            "status": status,
            "weight": weight,
            "provider": provider,
            "estimated": estimated,
            "orderDetails": "Started Shipment",
            "stage": 0
        }, {withCredentials: true})
        .then(response => {
            console.log(response.data)          
        })
        .catch(error => {
          console.error('Error fetching session data:', error);
        });
      }

  return (
    <div className='CentraManagerAddNewContainer'>
        <form className='CentraManagerAddNewFormContainer'>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Centra ID</div>
                <CentraManagerAddNewTextField label={"ID"} setData={setIdCentra}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Provider</div>
                <CentraManagerAddNewTextField label={"Provider"} setData={setProvider}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Address</div>
                <CentraManagerAddNewTextField label={"Jln. "} setData={setAddress}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Weight</div>
                <CentraManagerAddNewTextField label={"10 Kg"} setData={setWeight}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Status</div>
                <CentraManagerAddNewTextField label={"Status"} setData={setStatus}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <div className='CentraManagerAddNewSubText'>Estimated</div>
                <CentraManagerDatePicker setData={setEstimated}/>
            </div>
        </form>
        <div className='CentraManagerAddNewButtonContainers'>
                <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
                <div className='CentraManagerAddNewButtonAddContainer' onClick={() => addShipping(idCentra, provider, address, status, weight, estimated)}>Add</div>
        </div>
    </div>
  )
}

export default CentraManagerShippingAddNew