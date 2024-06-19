import React from "react";
import './Shipments.scss';
import Navbar from '../../Components/Navbar/NavbarManager';


  
const Shipments = (togglePage, pages) => {
  
  return (
    
    <div>
        <Navbar togglePage={togglePage} pages={pages}/>
    <div className="shipments">
      <div className="header">
        <h2>Delivered</h2>
        <button className="close-button" onClick={() => togglePage(2,1)}>×</button>
      </div>
      <div className="shipment-info">
        <div className = "shipment-info-text">
            <h2>Shipment Information</h2>
        </div>
        <p><strong>Shipment ID:</strong> xxxxxxxx</p>
        <p><strong>Batch ID:</strong> xxxxxxxx</p>
        <p><strong>Order Details:</strong> xx Kg Flour Leaves</p>
        <p><strong>Address:</strong> xxxxxxxxxxx xx xxxxxxxx x xxxxxxx xx xxxxxxxx</p>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">24 Mar 23.42</div>
          <div className="timeline-content">The order has delivered to the destination.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">23 Mar 23.42</div>
          <div className="timeline-content">Order has shipped.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">22 Mar 23.42</div>
          <div className="timeline-content">Order has been picked up.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">21 Mar 23.42</div>
          <div className="timeline-content">Order is being packaged.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">21 Mar 23.42</div>
          <div className="timeline-content">Order has been placed.</div>
        </div>
      </div>
      <button className="confirm-button">Confirm Order</button>
    </div>
    
    </div>
  
    );
  };


export default Shipments;
