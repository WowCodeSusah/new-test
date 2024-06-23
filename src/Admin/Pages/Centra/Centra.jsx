import './Centra.scss';
import React, { useState, useEffect } from 'react';
import SideBar from '../../Components/sidebar/SideBar';
import Navbar from '../../Components/Navbar/Navbar';
import CentraTable from '../../Components/CentraTable/CentraTable';
import AddCentraPage from '../../Pages/AddCentra/AddCentraPage';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';

function Centra({ togglePage, pages }) {
  const [showAddCentra, setShowAddCentra] = useState(false);
  const [centraData, setCentraData] = useState([]);

  useEffect(() => {
    axios.get('https://test-backend-k9s7.vercel.app/centras')
      .then(response => {
        setCentraData(response.data.all_centra);
        
      })
      .catch(error => {
        console.error('Error fetching centra data:', error);
      });
  }, []);

  const handleAddCentra = () => {
    setShowAddCentra(true);
  };

  const handleBack = () => {
    setShowAddCentra(false);
  };

  const handleSaveCentra = (newCentra) => {
    // Handle saving new Centra data here (if needed)
    console.log('New Centra:', newCentra);
    setShowAddCentra(false); // Close the add Centra form
  };

  const widgetSpring = useSpring({
    config: { tension: 170, friction: 30 },
    from: { x: 500, opacity: 0 },
    to: { x: 0, opacity: 1 }
  });

  const TitleSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200
  });

  return (
    <div className='CentraPage-admin'>
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash"></div>
      <div className="CentraContent-admin">
        <Navbar togglePage={togglePage} pages={pages} />
        {showAddCentra ? (
          <div className="editCentraContainer-admin">
            <AddCentraPage onBack={handleBack} onSaveCentra={handleSaveCentra} />
          </div>
        ) : (
          <div className="CentraTableContainer-admin">
            <div className="CentraHeader-admin">
              <animated.div style={TitleSpring}>
                <h1 className="CentraTitle-admin">Centra</h1>
              </animated.div>
              <button className="createCentraButton-admin" onClick={handleAddCentra}>
                Add Centra
              </button>
            </div>
            <animated.div style={widgetSpring} className="CentraTableWrapper-admin">
              <CentraTable centraData={centraData} />
            </animated.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Centra;
