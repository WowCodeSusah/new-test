import React from 'react';
import FormField from './FormField';

const ShipmentDetails = ({ shipment }) => {

    // if (!shipment) {
    //     console.log('no shipment data?????');
    //   }

//   const {
//     idShipment,
//     provider,
//     weight,
//     arrival,
//     isRescaled,
//     rescaledDate,
//     expiredDate
//   } = shipment;

  console.log('Rendering shipment details:', shipment["idShipment"]);

  return (
    <div>
      <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='ID'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        // value={shipment}
        // handleChangeText={(e) => setQRItem({ ...QRItem, id: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Provider'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        // value={provider}
        // handleChangeText={(e) => setQRItem({ ...QRItem, batchID: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Weight (in kg)'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        // value={weight}
        // handleChangeText={(e) => setQRItem({ ...QRItem, weight: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Date'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        // value={new Date(arrival).toLocaleString()}
        // handleChangeText={(e) => setQRItem({ ...QRItem, date: e.target.value})}
        type="text"
        />
    </div>
  );
};

export default ShipmentDetails;
