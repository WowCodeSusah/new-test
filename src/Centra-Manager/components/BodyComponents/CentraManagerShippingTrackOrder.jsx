import '../../css/ShippingCentraManager.css'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

function CentraManagerShippingTrackOrder() {
  const customIcon1 = new Icon({
    iconUrl: 'src/Centra-Manager/assets/DeliveryStart.svg',
    iconSize: [18, 18]
  })

  const customIcon2 = new Icon({
    iconUrl: 'src/Centra-Manager/assets/MarkerCentra.svg',
    iconSize: [30, 30]
  })

  const markers = [
    {
      geocode: [-1.824280, 121.763249],
      popUp: 'Centra 3',
      icon: customIcon1
    },
    {
      geocode: [-8.272657, 123.223220],
      popUp: 'Harbour Sutra',
      icon: customIcon2
    }
  ]

  return (
    <div style={{marginTop: '40px'}}>
      <MapContainer center={[-5.565210, 123.121014]} zoom={5.2} zoomControl={false}>
          <TileLayer 
              attribution='JawgLab'
              url='https://tile.jawg.io/e5d8beb2-b5e0-4ac4-bb0b-9b553e2f5acb/{z}/{x}/{y}{r}.png?access-token=DfaT20L6p2ckAELwn9yTxvLM6O6PAYil1yP7DbDPLdiZqXc8G1hhkai4HtTJCTLv'
          />
          {markers.map(marker => (
              // eslint-disable-next-line react/jsx-key
              <Marker position={marker.geocode} icon={marker.icon}>
                  <Popup><>{marker.popUp}</></Popup>
              </Marker>
          ))
          }
          <Polyline positions={[[-1.824280, 121.763249],[-8.272657, 123.223220]]} pathOptions={{color: '#3C9284'}} dashOffset='10px' dashArray={10}></Polyline>
      </MapContainer>
      <div className='CentraManagerTrackOrderSubContainer'>
          <div className='CentraManagerTrackOrderSubContainerContainer'>
              <img src='src/Centra-Manager/assets/DeliveryStart.svg' className='CentraManagerTrackOrderSubContainerImage'></img>
              <div className='CentraManagerTrackOrderSubContainerText'>jl Rungkut Menanggal No 9 A, 60293, Surabaya, Indonesia</div>
          </div>
          <div className='CentraManagerTrackOrderSubContainerContainer' style={{marginTop: '15px'}}>
              <img src='src/Centra-Manager/assets/MarkerCentra.svg' className='CentraManagerTrackOrderSubContainerImage'></img>
              <div className='CentraManagerTrackOrderSubContainerText'>Harbour Sutra</div>
          </div>
          <div className='CentraManagerTrackOrderSubContainerDashedLine'></div>
      </div>
      <div className='CentraManagerTrackOrderCheckListContainer'>
          <div className='CentraManagerTrackOrderCheckListTextContainer' style={{marginTop: '18px'}}>
              <div className='CentraManagerTrackOrderCheckListText'>24 Mar 23:42</div>
              <img src='src\Centra-Manager\assets\check.svg' className='CentraManagerTrackOrderCheckListImage'></img>
              <div className='CentraManagerTrackOrderCheckListTextOrder'>The order has delivered to the destination.</div>
          </div>
          <div className='CentraManagerTrackOrderCheckListTextContainer' style={{marginTop: '18px'}}>
              <div className='CentraManagerTrackOrderCheckListText'>24 Mar 23:42</div>
              <img src='src\Centra-Manager\assets\check.svg' className='CentraManagerTrackOrderCheckListImage'></img>
              <div className='CentraManagerTrackOrderCheckListTextOrder'>Order has been shipped.</div>
          </div>
          <div className='CentraManagerTrackOrderCheckListTextContainer' style={{marginTop: '18px'}}>
              <div className='CentraManagerTrackOrderCheckListText'>24 Mar 23:42</div>
              <img src='src\Centra-Manager\assets\check.svg' className='CentraManagerTrackOrderCheckListImage'></img>
              <div className='CentraManagerTrackOrderCheckListTextOrder'>Order has been picked up.</div>
          </div>
          <div className='CentraManagerTrackOrderCheckListTextContainer' style={{marginTop: '18px'}}>
              <div className='CentraManagerTrackOrderCheckListText'>24 Mar 23:42</div>
              <img src='src\Centra-Manager\assets\check.svg' className='CentraManagerTrackOrderCheckListImage'></img>
              <div className='CentraManagerTrackOrderCheckListTextOrder'>Order is being packaged.</div>
          </div>
          <div className='CentraManagerTrackOrderCheckListTextContainer' style={{marginTop: '18px'}}>
              <div className='CentraManagerTrackOrderCheckListText'>24 Mar 23:42</div>
              <img src='src\Centra-Manager\assets\check.svg' className='CentraManagerTrackOrderCheckListImage'></img>
              <div className='CentraManagerTrackOrderCheckListTextOrder'>Order has been placed.</div>
          </div>
          <div className='CentraManagerTrackOrderSubContainerOrderLine'></div>
      </div>
    </div>
  )
}

export default CentraManagerShippingTrackOrder