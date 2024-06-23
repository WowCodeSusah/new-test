import React from 'react';
import Popup from 'reactjs-popup';
import PopUpForm from './PopUpForm';
import { icons } from '../constants';
import { useState } from 'react';
import axios from 'axios';

function RescaledStorageList({ allStorage, searchQuery }) {
    const [newWeight, setNewWeight] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  const onWeightChange = (newWeight) => {
    setNewWeight(newWeight);
  };

  const updateWeight = (selectedStorage) => {
    const weightInt = parseInt(newWeight.value, 10); // Parse weight into an integer
    console.log(weightInt);
    axios.put(`https://test-backend-k9s7.vercel.app/storages/put/${selectedStorage.idStorage}`, 
        { weight: weightInt }
    )
      .then((response) => {
        // Handle success, if needed
        console.log('Weight updated successfully:', response.data);
        window.location.reload();
        // You can also update the state or perform any other actions after successful update
      })
      .catch((error) => {
        // Handle error, if needed
        console.error('Error updating weight:', error);
      });
  };

  return (
    <>
        {allStorage
        .filter((storage) => storage.isRescaled === true)
        .filter(storage =>
          storage.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
          storage.weight.toString().includes(searchQuery.toLowerCase()) ||
          storage.idStorage.toString().includes(searchQuery.toLowerCase()) ||
          storage.idShipment.toString().includes(searchQuery.toLowerCase()) ||
          storage.arrival.toString().includes(searchQuery.toLowerCase()) ||
          storage.expiredDate.toString().includes(searchQuery.toLowerCase())
        )
        .length === 0 ? (<div className='flex flex-col justify-center items-center'>
          <img 
          src={icons.xyzBox}
          className='mt-12 w-28 h-28'
          style={{objectFit: 'contain',
            filter: 'grayscale(100%)'
          }}
          />
          <p className='mt-4 ml-16 mr-16 text-offwhite-500 text-center font-hnmedium text-md'>No storage item found...</p>
          </div>
        ) : (
        allStorage
        .filter(storage => storage.isRescaled === true)
        .filter(storage => 
            storage.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
            storage.weight.toString().includes(searchQuery.toLowerCase()) ||
            storage.idStorage.toString().includes(searchQuery.toLowerCase()) ||
            storage.idShipment.toString().includes(searchQuery.toLowerCase()) ||
            storage.rescaledDate.toString().includes(searchQuery.toLowerCase()) ||
            storage.expiredDate.toString().includes(searchQuery.toLowerCase()))
        .map(storage => (
          <div className='my-1 w-[90vw] h-32 bg-primary-100 overflow-hidden border-offwhite-300 border-2 rounded-lg flex flex-col items-center' key={storage.idShipment}>
            <p className='my-1 text-offwhite font-hnmedium text-xs'>Package {storage.idShipment}</p>

            <div className='bg-offwhite w-full h-full flex flex-col justify-evenly px-2 py-1'>
              <div className='flex'>
                  <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Provider</p></div>
                  <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                  <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{storage.provider}</p></div>
              </div>

              <div className='flex'>
                  <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Weight</p></div>
                  <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                  <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{storage.weight} kg</p></div>
              </div>

              <div className='flex'>
                  <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Storage ID</p></div>
                  <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                  <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{storage.idStorage}</p></div>
              </div>

              <div className='flex'>
                <div>
                  <div className='flex'>
                      <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Rescaled On</p></div>
                      <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                      <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{formatDate(storage.rescaledDate)}</p></div>
                  </div>

                  <div className='flex'>
                      <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Expiry Date</p></div>
                      <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                      <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{formatDate(storage.expiredDate)}</p></div>
                  </div>
                </div>

                <Popup trigger=
                {<button className='ml-auto rounded-lg w-14 h-7 bg-ornge flex justify-evenly items-center'>
                    <p className='font-hnmedium text-xs text-offwhite'>Edit</p>
                    <img 
                    src={icons.xyzHG}
                    className='w-3 h-3'
                    style={{objectFit: 'contain'}}
                    />
                </button>}
                modal nested
                onOpen={() => {
                    setSelectedStorage(storage);
                  }}
                  >
                    {
                        close => (
                            <div className='fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-50'>
                                <div className='flex flex-col h-[45vh] w-[80vw] border-2 border-offwhite-100 rounded-xl bg-offwhite'>
                                    <p className='mx-5 font-hnbold text-xl text-secondary my-4'>
                                        Edit Rescale
                                    </p>

                                    <div className='mt-1 flex'>
                                        <p className='ml-5 font-hnroman text-md text-secondary'>
                                            Current Weight :
                                        </p>
                                        <p className='ml-2 font-hnbold text-md text-secondary'>
                                            {storage.weight} kg
                                        </p>
                                    </div>

                                    <p className='ml-5 mt-3 font-hnroman text-md text-secondary'>
                                        Rescale Weight :
                                    </p>

                                    <PopUpForm 
                                    onChange={(e) => onWeightChange({ value: e.target.value })}
                                    placeholder={storage.weight}
                                    />

                                    <div className='mx-4 flex items-center justify-evenly mt-auto mb-4'>
                                        <button 
                                        onClick={() => close()}
                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-offwhite flex items-center justify-center'>
                                            <p className='text-base font-hnmedium text-secondary'>Cancel</p>
                                        </button>

                                        <button
                                        onClick={() => {
                                            console.log(selectedStorage)
                                          updateWeight(selectedStorage);
                                          close();
                                        }}
                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-secondary flex items-center justify-center'>
                                            <p className='text-base font-hnmedium text-offwhite'>Confirm</p>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        )
                    }
                </Popup>

              </div>
            </div>
            
          </div>
        )))}
    </>
  );
}

function formatDate(dateTimeString) {
    return dateTimeString.split('T')[0];
};

export default RescaledStorageList;