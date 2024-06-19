import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { icons, images } from '../constants';
import { useState, useEffect } from 'react';
import FormField from '../components/FormField';
import QrScanner from 'qr-scanner';
import CustomButton from '../components/CustomButton';
import CircularProgressBar from '../components/CircularProgressBar';

let stopScan = false
let scanResult = ''

function QR({ togglePage, pages }) {

  const appear = useSpring({ 
    config: {
      duration: 700,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const [QRItem, setQRItem] = useState({
    id: 'S39',
    batchID: 'C67',
    weight: '5.1',
    date: '05/02/2024',
  })

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  const [confirmedScreen, setconfirmedScreen] = useState(false)
  const [scanBtn, setScanBtn] = useState(true)
  const [resultsPage, setResultsPage] = useState(false)

  const startScan = async(isScan) => {
    setScanBtn(isScan)
    stopScan = isScan
    if (scanBtn === false) return
    await new Promise(r => setTimeout(r, 100))
    const videoElement = document.getElementById('scanView')
    const scanner = new QrScanner(
      videoElement,
      result => {
        scanResult = result.data
        setResultsPage(true)
        stopScan=true
      },{
        onDecodeError: err => {
          console.error(err)
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        returnDetailedScanResult: true,
      }
    )
    await scanner.start()
    while (stopScan === false) {
      await new Promise(r => setTimeout(r, 100))
    }
    scanner.stop()
    scanner.destroy()
  }

  const goBack = () => {
    setScanBtn(true);
    stopScan=true;
    togglePage(0, 0);
  }
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, 1000);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [threeVisible, setThreeVisible] = useState(true);
  const [twoVisible, setTwoVisible] = useState(false);
  const [oneVisible, setOneVisible] = useState(false);

  const cancel = () => {
    setIsSubmitting(true);
    togglePage(0, 0);
    setResultsPage(false);
    setIsSubmitting(false);
  };

  const [isSaving, setIsSaving] = useState(false);

  const save = async () => {
    if (!QRItem.id || !QRItem.batchID || !QRItem.weight || !QRItem.date) {
      alert('Error: Please fill in all fields');
      return;
    }
    
    setIsSaving(true);

    try {
      // backend await code here
      toggleExpand();

      setTimeout(() => {
        setconfirmedScreen(true);
      }, 500);

      setTimeout(() => {
        setIsVisible(true);
      }, 2200);

      setTimeout(() => {
        setThreeVisible(false);
        setTwoVisible(true);
      }, 3200);

      setTimeout(() => {
        setTwoVisible(false);
        setOneVisible(true);
      }, 4200);

      setTimeout(() => {
        togglePage(0, 0);
        setconfirmedScreen(false);
        setOneVisible(false);
      }, 5200);

    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (<>
    {(confirmedScreen === false) && <div className={`${resultsPage ? 'bg-offwhite-400' : 'bg-secondary'} container flex flex-col min-h-screen`}>

      {scanBtn === false && <div className='items-start flex w-full items-center py-3 px-4 bg-secondary h-16'>
        {(resultsPage === false) && <img 
          src={icons.xyzBack}
          alt="Back"
          className='absolute mt-4 w-7 h-7'
          style={{ objectFit: 'contain'}}
          onClick={() => goBack()}
        />}

        <animated.div style={{...spring}} className='px-4 pt-4 flex w-full h-12 justify-center items-center'>
          <p className='text-md text-offwhite font-hnmedium'>
            Scanning QR
          </p>
        </animated.div>
      </div>}

      <div className='flex flex-col flex-1 w-full items-center'>
        {(scanBtn === false && resultsPage === false) && <video id='scanView' className='mb-auto mt-auto flex-1 w-full max-w-[400px] border border-dotted border-secondary'>
          </video>}
        
        {(scanBtn === false && resultsPage === true ) && <div className='flex flex-col flex-1 w-full items-center'>
        <img 
        src={images.xyzQRCode}
        className='w-24 h-24 mt-6'
        style={{objectFit: 'contain'}}
        />

        <div className='flex flex-col justify-center items-center w-28 h-6 mt-4 rounded-full bg-secondary'>
          <p className='text-xxs text-offwhite font-hnroman'>7XVFBBMGKLDMF</p>
        </div>

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='ID'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        value={QRItem.id}
        handleChangeText={(e) => setQRItem({ ...QRItem, id: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Batch ID'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        value={QRItem.batchID}
        handleChangeText={(e) => setQRItem({ ...QRItem, batchID: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Weight (in kg)'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        value={QRItem.weight}
        handleChangeText={(e) => setQRItem({ ...QRItem, weight: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-2 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Date'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        value={QRItem.date}
        handleChangeText={(e) => setQRItem({ ...QRItem, date: e.target.value})}
        type="text"
        />

        <div className='mt-6 flex h-12 w-[90vw] items-center justify-center'>
          <CustomButton 
            containerStyles='h-12 w-[60vw] mr-2 bg-offwhite-400 rounded-3xl border border-secondary'
            title='Cancel'
            textStyles='text-secondary text-sm font-hnmedium'
            handlePress={cancel}
            isLoading={isSubmitting}
          />

          <CustomButton 
            containerStyles={`transition-all ease-in duration-300 ${isExpanded ? 'absolute z-100 h-[250vh] w-[250vw] rounded-full' : 'h-12 w-full rounded-3xl'} bg-secondary`}
            title='Confirm'
            textStyles={`${isExpanded ? 'opacity-0' : 'opacity-1'} text-offwhite text-sm font-hnmedium`}
            handlePress={save}
            isLoading={isSaving}
          />

        </div>
        </div>
        }

        {scanBtn === true && <div onClick={() => startScan(!scanBtn)} className='flex flex-col flex-1 items-center justify-center w-full bg-secondary'>          
            <animated.p style={{...appear}} className='text-sm font-hnmedium text-offwhite'>Tap to Start Scanning</animated.p>
        </div>}
      </div>
    </div>
    }

    {confirmedScreen === true &&
      <div className='bg-secondary container flex flex-col items-center min-h-screen'>
        <div className='mb-auto mt-auto flex flex-col items-center justify-center'>
          <CircularProgressBar />

          <p className={`mt-20 text-sm font-hnbold text-primary transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            ORDER CONFIRMED
          </p>

          <div className={`flex flex-col justify-center items-center w-32 h-5 mt-4 rounded-full bg-primary transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className='text-xxs text-secondary font-hnmedium'>7XVFBBMGKLDMF</p>
          </div>
 
          <p className={`mt-6 text-xs font-hnmedium text-offwhite transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Redirecting back in {threeVisible === true && '3'}{twoVisible === true && '2'}{oneVisible === true && '1'}...
          </p>
        </div>
      </div>
    }
  </>
  )
}

export default QR