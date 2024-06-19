import React, { useState } from "react";
import "./Shipping.scss";
import Navbar from "../../Components/Navbar/NavbarManager.jsx";
import ShippingButton from "../ShipmentButton/ShipmentButton.jsx";
import ShipmentTable from "../ShipmentTable/ShipmentTable.jsx";



function Shipping({togglePage, pages}) {

  const sampleShipmentData = [
    {
      // batchId: "001",
      shippingId: "2602177051",
      trackingLocation: "New York, NY",
      shippingAddress: "123 Main St, NY 10001",
      status: "Delivered",
      estimatedArrival: "15/06/2024",
    },
    {
      // batchId: "002",
      shippingId: "2602177052",
      trackingLocation: "Los Angeles, CA",
      shippingAddress: "456 Maple Ave, CA 90001",
      status: "Delivered",
      estimatedArrival: "16/06/2024",
    },
    {
      // batchId: "003",
      shippingId: "2602177053",
      trackingLocation: "Chicago, IL",
      shippingAddress: "789 Oak St, IL 60601",
      status: "Shipping",
      estimatedArrival: "17/06/2024",
    },
    {
      // batchId: "004",
      shippingId: "2602177054",
      trackingLocation: "Houston, TX",
      shippingAddress: "321 Pine Rd, TX 77001",
      status: "Waiting Pickup",
      estimatedArrival: "18/06/2024",
    },
    {
      // batchId: "005",
      shippingId: "2602177055",
      trackingLocation: "Phoenix, AZ",
      shippingAddress: "654 Cedar Ln, AZ 85001",
      status: "Waiting Pickup",
      estimatedArrival: "19/06/2024",
    },
    {
      // batchId: "006",
      shippingId: "2602177056",
      trackingLocation: "Philadelphia, PA",
      shippingAddress: "987 Birch Blvd, PA 19101",
      status: "Cancelled",
      estimatedArrival: "20/06/2024",
    },
    {
      // batchId: "007",
      shippingId: "2602177057",
      trackingLocation: "San Antonio, TX",
      shippingAddress: "123 Elm St, TX 78201",
      status: "Cancelled",
      estimatedArrival: "21/06/2024",
    },
    {
      // batchId: "008",
      shippingId: "2602177058",
      trackingLocation: "San Diego, CA",
      shippingAddress: "456 Palm Dr, CA 92101",
      status: "Shipping",
      estimatedArrival: "22/06/2024",
    },
    {
      // batchId: "009",
      shippingId: "2602177059",
      trackingLocation: "New York, NY",
      shippingAddress: "678 Main St, NY 10001",
      status: "Shipping",
      estimatedArrival: "23/06/2024",
    },
    {
      // batchId: "010",
      shippingId: "2602177060",
      trackingLocation: "Los Angeles, CA",
      shippingAddress: "901 Maple Ave, CA 90001",
      status: "Shipping",
      estimatedArrival: "24/06/2024",
    },
    {
      // batchId: "011",
      shippingId: "2602177061",
      trackingLocation: "Chicago, IL",
      shippingAddress: "786 Oak St, IL 60601",
      status: "Cancelled",
      estimatedArrival: "25/06/2024",
    },
    {
      // batchId: "012",
      shippingId: "2602177062",
      trackingLocation: "Houston, TX",
      shippingAddress: "421 Pine Rd, TX 77001",
      status: "Cancelled",
      estimatedArrival: "26/06/2024",
    },
    {
      // batchId: "013",
      shippingId: "2602177063",
      trackingLocation: "Phoenix, AZ",
      shippingAddress: "531 Cedar Ln, AZ 85001",
      status: "Delivered",
      estimatedArrival: "27/06/2024",
    },
    {
      // batchId: "014",
      shippingId: "2602177064",
      trackingLocation: "Philadelphia, PA",
      shippingAddress: "699 Birch Blvd, PA 19101",
      status: "Delivered",
      estimatedArrival: "28/06/2024",
    },
    {
      // batchId: "015",
      shippingId: "2602177065",
      trackingLocation: "San Antonio, TX",
      shippingAddress: "701 Elm St, TX 78201",
      status: "Cancelled",
      estimatedArrival: "29/06/2024",
    },
    {
      // batchId: "016",
      shippingId: "2602177066",
      trackingLocation: "San Diego, CA",
      shippingAddress: "105 Palm Dr, CA 92101",
      status: "Shipping",
      estimatedArrival: "01/07/2024",
    },
    {
      // batchId: "017",
      shippingId: "2602177067",
      trackingLocation: "New York, NY",
      shippingAddress: "888 Main St, NY 10001",
      status: "Waiting Pickup",
      estimatedArrival: "02/07/2024",
    },
    {
      // batchId: "018",
      shippingId: "2602177068",
      trackingLocation: "Los Angeles, CA",
      shippingAddress: "698 Maple Ave, CA 90001",
      status: "Waiting Pickup",
      estimatedArrival: "03/07/2024",
    },
    {
      // batchId: "019",
      shippingId: "2602177069",
      trackingLocation: "Chicago, IL",
      shippingAddress: "565 Oak St, IL 60601",
      status: "Cancelled",
      estimatedArrival: "04/07/2024",
    },
    {
      // batchId: "020",
      shippingId: "2602177070",
      trackingLocation: "Houston, TX",
      shippingAddress: "430 Pine Rd, TX 77001",
      status: "Waiting Pickup",
      estimatedArrival: "05/07/2024",
    },
    {
      // batchId: "021",
      shippingId: "2602177071",
      trackingLocation: "Phoenix, AZ",
      shippingAddress: "971 Cedar Ln, AZ 85001",
      status: "Waiting Pickup",
      estimatedArrival: "06/07/2024",
    },
    {
      // batchId: "022",
      shippingId: "2602177072",
      trackingLocation: "Philadelphia, PA",
      shippingAddress: "808 Birch Blvd, PA 19101",
      status: "Cancelled",
      estimatedArrival: "07/07/2024",
    },
    {
      // batchId: "023",
      shippingId: "2602177073",
      trackingLocation: "San Antonio, TX",
      shippingAddress: "787 Elm St, TX 78201",
      status: "Waiting Pickup",
      estimatedArrival: "08/07/2024",
    },
    {
      // batchId: "024",
      shippingId: "2602177074",
      trackingLocation: "San Diego, CA",
      shippingAddress: "011 Palm Dr, CA 92101",
      status: "Cancelled",
      estimatedArrival: "09/07/2024",
    },
  ];


  const [activeButton, setActiveButton] = useState('viewAll');
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredData = sampleShipmentData.filter(shipment => 
    // shipment.batchId.toString().includes(query.toLowerCase()) ||
    shipment.shippingId.toString().includes(query.toLowerCase()) ||
    shipment.trackingLocation.toLowerCase().includes(query.toLowerCase()) ||
    shipment.shippingAddress.toLowerCase().includes(query.toLowerCase()) ||
    shipment.estimatedArrival.toString().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar togglePage={togglePage} pages={pages} value={query} onSearch={handleSearch}/>
        <div className="shipment">Shipments</div>
        <div className="buttonsContainer">
          <button
            className={`button ${activeButton === "viewAll" ? "active" : ""}`}
            onClick={() => handleButtonClick("viewAll")}
          >
            View All
          </button>
          <button
            className={`button ${activeButton === "inProgress" ? "active" : ""}`}
            onClick={() => handleButtonClick("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`button ${activeButton === "completed" ? "active" : ""}`}
            onClick={() => handleButtonClick("completed")}
          >
            Completed
          </button>
          <button
            className={`button ${activeButton === "cancelled" ? "active" : ""}`}
            onClick={() => handleButtonClick("cancelled")}
          >
            Cancelled
          </button>
          <ShippingButton
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="shipment-container-2">
          <div id="shipment" className="shipment-fields-2">
            {/* <div className="field">Batch ID</div> */}
            <div className="field">Shipping ID</div>
            <div className="field">Tracking Location</div>
            <div className="field">Shipping Address</div>
            <div className="field">Status Approval</div>
            <div className="field">Estimated Arrival</div>
          </div>
        </div>
        <ShipmentTable
        activeButton={activeButton} togglePage={togglePage} pages={pages}
          shipmentData={filteredData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
      </div>
      <div className="shipments">
      <div className="header">
        <h2 className="Delivered-manager">Delivered</h2>
        <button className="close-button" onClick={() => togglePage(2,1)}>×</button>
      </div>
      <div className="shipment-info">
        <div className = "shipment-info-text">
            <h2>Shipment Information</h2>
        </div>
        <p><strong>Shipment ID:</strong> 001</p>
        {/* <p><strong>Batch ID:</strong> 2602177051</p> */}
        <p><strong>Tracking Location:</strong> New York, NY</p>
        <p><strong>Shipping Address:</strong> 123 Main St, NY 10001</p>
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
}

export default Shipping;