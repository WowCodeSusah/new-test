import "./DashboardManager.scss"
import SideBar from "../../Components/sidebar/SideBarManager.jsx"
import Navbar2 from "../../Components/Navbar/NavbarManager2.jsx"
import WelcomeWidget from "../../Components/widget/WelcomewidgetManager.jsx"
import BarGraph from "../../Components/graphs/Bargraphs.jsx"
import DonutChart from "../../Components/graphs/Donutchart.jsx"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


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


function Dashboard({togglePage, pages, userName}) {
  return (
    <div className="home-2-manager">
        <SideBar togglePage={togglePage} pages={pages}/>
        <div className="fixdash-2-manager"></div>
        <div className="homeContainer-manager">
            <Navbar2 togglePage={togglePage} pages={pages} userName={userName}/>
            <div className="welcomewidget-2-manager">
              <WelcomeWidget togglePage={togglePage} pages={pages}/>
            </div>
            <div className="centra-2-manager">Centra</div>
            <div className="map-container-manager">
            <MapContainer center={[-5.565210, 123.121014]} zoom={5.2} zoomControl={false} style={{ height: '210px', width: '1200px' }}>
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
              <div id="map-manager">
                {/* Google Maps component goes here */}
              </div>
            </div>
            <div className="charts-container-manager">
              <div className="bar-graph-container-manager">
                <BarGraph/>
              </div>
              <div className="donut-chart-container-manager">
                <DonutChart percentage={50} />
                <DonutChart percentage={75} />
              </div>
              <div className="donut-chart-container-manager">
                <DonutChart percentage={90} />
                <DonutChart percentage={43} />
              </div>
              <div className="donut-chart-container-manager">
                <DonutChart percentage={80} />
                <DonutChart percentage={23} />
              </div>
            </div>
            <div className="charts-manager">
            </div>
        </div>
    </div>
  )
}

export default Dashboard