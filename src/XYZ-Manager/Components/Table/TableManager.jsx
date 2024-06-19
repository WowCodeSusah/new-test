import React from "react";
import "./TableManager.scss";

// eslint-disable-next-line react/prop-types
const Table = ({ togglePage, pages, shipmentData, activeButton }) => {

  const handleClick = (status) => {
    // Do something when the status is clicked
    console.log("Status clicked:", status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Cancelled":
        return "red";
      case "Shipping":
        return "blue";
      case "Waiting Pickup":
        return "yellow";
      default:
        return "black"; // default color
    }
  };

  return (
    <div className="table-container-manager">
      <table className="table-manager">
        <tbody>
          {shipmentData
          .filter((shipment) =>
            (activeButton === 'inProgress' && (shipment.status === 'Shipping' || shipment.status === 'Waiting Pickup')) ||
            (activeButton === 'cancelled' && shipment.status === 'Cancelled') ||
            (activeButton === 'completed' && shipment.status === 'Delivered') ||
            (activeButton === 'viewAll' && shipment)
          )
          .map((shipment, index) => (
            <tr className="tr-manager" key={index}>
              {/* <td className="td-manager" onClick={() => togglePage(2,0)}>
                <a href="#" className="clickable-manager">{shipment.batchId}</a>
              </td> */}
              <td className="td-manager">
                <a href="#" className="clickable-manager">{shipment.idShipment}</a>
              </td>
              <td className="td-manager">{shipment.orderDetails}</td>
              <td className="td-manager">{shipment.address}</td>
              <td className="td-manager">
                <a
                  href="#"
                  className={`clickable2-manager ${getStatusColor(shipment.status)}`}
                  onClick={() => handleClick(shipment.status)}
                >
                  {shipment.status}
                </a>
              </td>
              <td className="td-manager">{shipment.estimated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Table;