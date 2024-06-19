import React from 'react'
import { useState, useEffect } from 'react'
import UnrescaledStorageList from './UnrescaledStorageList'
import RescaledStorageList from './RescaledStorageList'
import axios from 'axios'

function RescaleLists({searchQuery}) {

    const [isRescaledScreen, setIsRescaledScreen] = useState(false)

    const [allStorage, setAllStorage] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8000/storages')
      .then(response => {
        setAllStorage(response.data.all_storage);
      })
      .catch(error => {
        console.error('Error fetching storage data:', error);
      });
    }, []);

  return (
    <div className='mt-40 flex flex-1 flex-col'>
        <div className='fixed w-full container h-8 flex bg-offwhite'>
            <button 
            className={`flex-1 rounded-t-xl border-2 border-offwhite-200 border-b-0 ${isRescaledScreen === false ? 'bg-offwhite-100' : 'bg-offwhite'}`}
            onClick={() => setIsRescaledScreen (false)}>
                <p className={`${isRescaledScreen === false && 'underline'} font-hnmedium text-xs text-secondary`}>
                Pending Rescale
                </p>
            </button>

            <button 
            className={`flex-1 rounded-t-xl bg-offwhite border-2 border-offwhite-200 border-b-0 ${isRescaledScreen === true ? 'bg-offwhite-100' : 'bg-offwhite'}`}
            onClick={() => setIsRescaledScreen (true)}>
                <p className={`${isRescaledScreen === true && 'underline'} font-hnmedium text-xs text-secondary`}>
                Rescaled
                </p>
            </button>
        </div>
        
        <div className='mt-8 flex flex-1 flex-col items-center overflow-y-hidden bg-offwhite-100 pt-2 pb-[11vh]'>

            {isRescaledScreen === false && <UnrescaledStorageList allStorage={allStorage} searchQuery={searchQuery} />}
            {isRescaledScreen && <RescaledStorageList allStorage={allStorage} searchQuery={searchQuery}/>}
            
        </div>
    </div>
  )
}

export default RescaleLists