import React from "react";
import "./ShipmentTable.scss";

// eslint-disable-next-line react/prop-types
const ShipmentTable = ({ togglePage, pages, shipmentData, activeButton }) => {

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
    <div className="table-container-shipp">
      <table className = "table-manager">
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
              {/* <td className="td-manager">
                <a href="#" className="clickable">{shipment.batchId}</a>
              </td> */}
              <td className="td-manager">
                <a href="#" className="clickable">{shipment.shippingId}</a>
              </td>
              <td className="td-manager">{shipment.trackingLocation}</td>
              <td className="td-manager">{shipment.shippingAddress}</td>
              <td className="td-manager">
                <a
                  href="#"
                  className={`clickable2 ${getStatusColor(shipment.status)}`}
                  onClick={() => handleClick(shipment.status)}
                >
                  {shipment.status}
                </a>
              </td>
              <td className="td-manager">{shipment.estimatedArrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentTable;