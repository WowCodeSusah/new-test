/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SwitchLogin from './Login-Page-Desktop/SwitchLogin';
import CentraManagerMain from './Centra-Manager/components/CentraManagerMain';
import '../src/index.css'
import XYZStorage from './Storage-Mobile/pages/real-main-page';
import Harbour from './Harbour/pages/firstPageH';
import ManagerPage from './XYZ-Manager/Pages/MainPage/ManagerPage';
import AdminPage from './Admin/Pages/MainPage/MainPage'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState('Login')
  var stateVariable = <SwitchLogin  setState={setState}/>

  useEffect(() => {
    axios.post('https://test-backend-k9s7.vercel.app/whoami', {}, {withCredentials: true})
    .then(response => {
        axios.post('https://test-backend-k9s7.vercel.app/users/email/', {"email": response.data['username']}, {withCredentials: true})
        .then(response => {
          setState(response.data['user']['role']);
        })
        .catch(error => {
          console.error('Error fetching session data:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching session data:', error);
    });
  }, [])

  if (state == 'Centra Manager') {
    stateVariable = <CentraManagerMain />
  } else if (state == 'Admin') {
    stateVariable = <AdminPage />
  } else if (state == 'XYZ Employee') {
    stateVariable = <XYZStorage />
  } else if (state == 'XYZ Manager') {
    stateVariable = <ManagerPage />
  } else if (state == 'Harbour') {
    stateVariable = <Harbour />
  }
  
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={stateVariable} />
                <Route exact path="/CentraManager" element={<CentraManagerMain />} />
                <Route exact path="/Harbour" element={<Harbour />} />                
                <Route exact path="/XYZstorage" element={<XYZStorage />} />
                <Route exact path="/XYZManager" element={<ManagerPage />} />
                <Route exact path="/Admin" element={<AdminPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App