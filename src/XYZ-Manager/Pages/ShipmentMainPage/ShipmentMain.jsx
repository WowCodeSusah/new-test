import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShipmentMain.scss";
import SideBar from "../../Components/sidebar/SideBarManager.jsx";
import Navbar from "../../Components/Navbar/NavbarManager.jsx";
import Table from "../../Components/Table/TableManager.jsx";
import PageButtonsShipment from "../../Components/PageButtonsShipment/PageButtonsShipment.jsx";
import LoadingPage from "../LoadingPage/LoadingPageManager.jsx";

function ShipmentMain({ togglePage, pages, userName }) {
  const [activeButton, setActiveButton] = useState('viewAll');
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const [shipmentData, setShipmentData] = useState([]); // State to hold shipment data
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchShipmentData = async () => {
      try {
        const response = await axios.get('https://test-backend-k9s7.vercel.app/shipments');
        setShipmentData(response.data.all_shipment);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching shipment data:", error);
        setIsLoading(false);
      }
    };

    fetchShipmentData();
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredData = shipmentData.filter(shipment =>
    shipment.idShipment.toString().includes(query.toLowerCase()) ||
    shipment.orderDetails.toLowerCase().includes(query.toLowerCase()) ||
    shipment.address.toLowerCase().includes(query.toLowerCase()) ||
    shipment.estimated.toString().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Calculate total pages

  if (isLoading) {
    return <div>
      <div className="home-2-manager">
      <SideBar/>
      <div className="fixdash-2-manager"></div>
      <div className="homeContainer-manager">
      <Navbar userName={userName}/>
    <div className="loading-manager">
      Loading Page...
      </div>
      </div>
      </div> 
      </div>
  }

  return (
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash-2-manager"></div>
      <div className="homeContainer-manager">
        <Navbar togglePage={togglePage} pages={pages} value={query} onSearch={handleSearch} userName={userName}/>
        <div className="shipment-manager">Shipments</div>
        <div className="buttonsContainer-manager">
          <button
            className={`button-manager ${activeButton === "viewAll" ? "active" : ""}`}
            onClick={() => handleButtonClick("viewAll")}
          >
            View All
          </button>
          <button
            className={`button-manager ${activeButton === "inProgress" ? "active" : ""}`}
            onClick={() => handleButtonClick("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`button-manager ${activeButton === "completed" ? "active" : ""}`}
            onClick={() => handleButtonClick("completed")}
          >
            Completed
          </button>
          <button
            className={`button-manager ${activeButton === "cancelled" ? "active" : ""}`}
            onClick={() => handleButtonClick("cancelled")}
          >
            Cancelled
          </button>
          <PageButtonsShipment
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        
        <div className="shipment-container-manager">
          <div id="shipment" className="shipment-fields-manager">
            <div className="field-manager">Shipping ID</div>
            <div className="field-manager">Tracking Location</div>
            <div className="field-manager">Shipping Address</div>
            <div className="field-manager">Status Approval</div>
            <div className="field-manager">Estimated Arrival</div>
          </div>
        </div>
        <Table activeButton={activeButton} togglePage={togglePage} pages={pages}
          shipmentData={filteredData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
      </div>
    </div>
  );
}

export default ShipmentMain;
