/* eslint-disable react/prop-types */

import axios from "axios";

// eslint-disable-next-line react/prop-types
function CentraManagerQRConfirmation({data, setNavigation, previousState}) {
    console.log(data)
    async function add(data) {
      axios.post(`https://test-backend-k9s7.vercel.app/shipments/`, {data}, {withCredentials: true})
      .then(response => {
          console.log(response.data)          
      })
      .catch(error => {
        console.error('Error fetching session data:', error);
      });
      axios.post(`https://test-backend-k9s7.vercel.app/wetleaves/`, {data}, {withCredentials: true})
      .then(response => {
          console.log(response.data)          
      })
      .catch(error => {
        console.error('Error fetching session data:', error);
      });
      axios.post(`https://test-backend-k9s7.vercel.app/dryleaves/`, {data}, {withCredentials: true})
      .then(response => {
          console.log(response.data)          
      })
      .catch(error => {
        console.error('Error fetching session data:', error);
      });
      axios.post(`https://test-backend-k9s7.vercel.app/flours/`, {data}, {withCredentials: true})
      .then(response => {
          console.log(response.data)          
      })
      .catch(error => {
        console.error('Error fetching session data:', error);
      });
    }

  return (
    <div className='CentraManagerAddNewContainer'>
        <div>
            {data}
        </div>
        <div className='CentraManagerAddNewButtonContainers'>
            <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
            <div className='CentraManagerAddNewButtonAddContainer' onClick={() => add()}>Add</div>
        </div>
    </div>
  )
}

export default CentraManagerQRConfirmation