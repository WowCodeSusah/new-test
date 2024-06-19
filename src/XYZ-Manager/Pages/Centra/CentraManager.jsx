import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './CentraManager.scss';
import SideBar from '../../Components/sidebar/SideBarManager.jsx';
import Navbar from '../../Components/Navbar/NavbarManager.jsx';
import PageButtons from '../../Components/PageButtons/PageButtons.jsx';

// Sample markers data
const markers = [
  {
    geocode: [-3, 114.121014],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 1',
  },
  // Add more markers as needed
  {
    geocode: [-4.824280, 121.763249],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 2',
  },

  {
    geocode: [-8.272657, 123.223220],
    icon: new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    }),
    popUp: 'Marker 3',
  },

  {
  geocode: [-2.345678, 120.987654],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 4',
},
{
  geocode: [-8, 140.345678],
  icon: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  popUp: 'Marker 5',
}

];

function Centra({togglePage, pages, userName}) {
  const [sampleShipmentData, setSampleShipmentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sampleShipmentData.length);
    const slicedData = sampleShipmentData.slice(startIndex, endIndex);
    return slicedData.map((item, index) => (
      <div key={index} className="shipment-item-manager">
        {/* Render your shipment item details here */}
        <div>Batch ID: {item.batchId}</div>
        <div>Shipping ID: {item.shippingId}</div>
        {/* Add other fields */}
      </div>
    ));
  };

  return (
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="fixdash-2-manager"></div>
      <div className="homeContainer-manager">
        <Navbar togglePage={togglePage} pages={pages} userName={userName}/>
        <div className="centraContainer-manager">
          <div className="centra-manager">Centra</div>
          <div className="map-container-2-manager">
            <MapContainer center={[-5.565210, 123.121014]} zoom={5.2} zoomControl={false} style={{ height: '300px', width: '1200px' }}>
              <TileLayer
                attribution="JawgLab"
                url="https://tile.jawg.io/e5d8beb2-b5e0-4ac4-bb0b-9b553e2f5acb/{z}/{x}/{y}{r}.png?access-token=DfaT20L6p2ckAELwn9yTxvLM6O6PAYil1yP7DbDPLdiZqXc8G1hhkai4HtTJCTLv"
              />
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.geocode} icon={marker.icon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        <div className="centraContainer-manager">
        <PageButtons currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          
          <div className="centra1-manager">Centra1</div>
          
          <div className="map-container1-manager">
            <div id="map1-manager">
            
              {/* Another Google Maps component or any other content goes here */}
            </div>
          </div>
        </div>
        {/* Render paginated data */}
        {/* <div className="shipment-data-manager">{renderData()}</div> */}
        {/* Render PageButtons component */}
        
        
      </div>
    </div>
  );
}

export default Centra;