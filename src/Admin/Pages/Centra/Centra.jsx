import './Centra.scss';
import SideBar from '../../Components/sidebar/SideBar'
import Navbar from '../../Components/Navbar/Navbar';
import CentraTable from '../../Components/CentraTable/CentraTable';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';


function Centra({togglePage, pages}) {
  const [showAddCentra, setShowAddCentra] = useState(false);

  const handleAddCentra = () => {
    setShowAddCentra(true);
  };

  const handleBack = () => {
    setShowAddCentra(false);
  };

  const widgetSpring = useSpring({ config: {tension: 170, friction: 30}, from: { x: 500, opacity: 0 }, to: { x: 0, opacity: 1 }});
  const TitletSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200});

  return (
    <div className='CentraPage-admin'>
      <SideBar togglePage={togglePage} pages />
      <div className="fixdash"></div>
      <div className="CentraContent-admin">
      <Navbar togglePage={togglePage} pages />
      {showAddCentra ? (
          <div className="editCentraContainer-admin">
            <AddCentraPage onBack={handleBack} />
          </div>  
        ) : (
          <div className="CentraTableContainer-admin">
          <div className="CentraHeader-admin">
            <animated.div style={TitletSpring}>
              <h1 className="CentraTitle-admin">Centra</h1>
            </animated.div>
            {/* <CreateCentraButton onClick={handleAddCentra} /> */}
          </div>
          <animated.div style={widgetSpring}>
         <CentraTable />
          </animated.div>
         </div>
        )}
      </div>
  </div>
  )
}

export default Centra;
