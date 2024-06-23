import React from 'react'
import axios from 'axios'
import { icons, images } from '../constants'
import BottomTab from '../components/BottomTab'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function History({ togglePage, pages, userName, userId }) {

  const [scrollPercent, setScrollPercent] = useState(0);
  const [allShipments, setAllShipments] = useState([]);
  const [timeFilter, setTimeFilter] = useState('all');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const fetchAllShipments = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/shipments');
  //       setShipments(response.data.all_shipment);
  //     } catch (error) {
  //       console.error('Error fetching shipments:', error);
  //     }
  //   };

  //   fetchAllShipments();
  // }, []);

  const springs = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { x: -100, opacity: 0 },
    delay: 200,
    to: { x: 0, opacity: 1 },
  })

  const appear = useSpring({ 
    config: {
      duration: 1200,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    delay: 100,
    to: { y: 0, opacity: 1 },
  })  

  const spring2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })

  useEffect(() => {
    axios.get('https://test-backend-k9s7.vercel.app/shipments')
      .then(response => {
        setAllShipments(response.data.all_shipment);
      })
      .catch(error => {
        console.error('Error fetching storage data:', error);
      });
    }, []);

  // Function to handle time filter change
  const handleTimeFilterChange = (filterValue) => {
    setTimeFilter(filterValue);
  };

  // Function to filter data based on time
  const filteredData = allShipments.filter(item => {
    const itemDate = new Date(item.estimated);

    if (timeFilter === 'all') {
      return true; // Return true for all items if time filter is set to 'all'
    } else if (timeFilter === 'today') {
      // Filter items with date equal to today's date
      const today = new Date();
      return itemDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];
    } else if (timeFilter === 'last7days') {
      // Filter items within the last 7 days
      const last7days = new Date();
      last7days.setDate(last7days.getDate() - 6); // 7 days ago from today
      return itemDate >= last7days;
    } else if (timeFilter === 'thisMonth') {
      // Filter items within the current month
      const today = new Date();
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return itemDate >= firstDayOfMonth;
    } else {
      return true; // Add more filtering options if needed
    }
  });

  // Function to format date from the database
  const formatDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = String(dateObj.getFullYear()).slice(-2); // Extracting last 2 digits of the year
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='container flex flex-col min-h-screen'>
      <div className='items-start flex w-full items-center py-3 px-4 bg-primary h-16 fixed overflow-auto'>
          <animated.div style={{...appear}}>
            <img
                src={images.xyzPfp}
                alt="Profile Picture"
                className='w-10 h-10'
                style={{ objectFit: 'contain'}}
            />
          </animated.div>

          <div className="ml-2">
              <animated.div style={{...spring}}>
                <p className="font-hnroman text-xs text-secondary">
                  Welcome,
                </p>
              </animated.div>

              <animated.div style={{...spring2}}>
                <p className="text-base font-hnbold text-secondary">
                  {userName}
                </p>
              </animated.div>
          </div>

          <img 
              src={icons.xyzNotifications}
              alt="Notifications"
              className="ml-auto w-7 h-7"
              style={{ objectFit: 'contain'}}
              onClick={() => togglePage(0, 1)}
          />
      </div>

      <div className='flex items-center bg-white fixed h-12 w-full pt-2 pb-5 px-4 mt-14'>
        <animated.p style={{...springs}} className='text-secondary mt-4 text-2xl font-hnbold'>
            Scanning History
        </animated.p>
      </div>

      <div className='mx-4 mt-28 space-x-1 flex items-center overflow-x-scroll overflow-y-hidden'>
        <div className={`${timeFilter === 'all' ? 'bg-secondary text-white' : 'bg-white'} flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl flex-shrink-0`}
        onClick={() => handleTimeFilterChange('all')}>
          <p className={`${timeFilter === 'all' ? 'text-white font-hnmedium' : 'text-secondary font-hnroman'} text-xs`}>View All</p>
        </div>

        <div className={`${timeFilter === 'today' ? 'bg-secondary text-white' : 'bg-white'} flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl flex-shrink-0`}
        onClick={() => handleTimeFilterChange('today')}>
          <p className={`${timeFilter === 'today' ? 'text-white font-hnmedium' : 'text-secondary font-hnroman'} text-xs`}>Today</p>
        </div>

        <div className={`${timeFilter === 'last7days' ? 'bg-secondary text-white' : 'bg-white'} flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl flex-shrink-0`}
        onClick={() => handleTimeFilterChange('last7days')}>
          <p className={`${timeFilter === 'last7days' ? 'text-white font-hnmedium' : 'text-secondary font-hnroman'} text-xs`}>Last 7 Days</p>
        </div>

        <div className={`${timeFilter === 'thisMonth' ? 'bg-secondary text-white' : 'bg-white'} flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl flex-shrink-0`}
        onClick={() => handleTimeFilterChange('thisMonth')}>
          <p className={`${timeFilter === 'thisMonth' ? 'text-white font-hnmedium' : 'text-secondary font-hnroman'} text-xs`}>This Month</p>
        </div>
      </div>

      <div className='flex flex-1 flex-col'> 
        <div className='flex flex-1 flex-col items-center overflow-y-hidden bg-white pt-2 pb-[11vh]'>
            {filteredData.map(item => (
              <div className='my-1 w-[90vw] h-20 bg-primary-100 overflow-hidden rounded-lg flex flex-col items-center' key={item.idShipment}>
                <div className='flex container'>
                  <p className='flex-grow ml-2 my-1 text-white font-hnmedium text-xs text-left'>Order:</p>
                  <p className='flex-grow mr-2 my-1 text-white font-hnmedium text-xs text-right underline'>{item.orderNumber}</p>
                </div>

                <div className='bg-offwhite-400 w-full h-full flex flex-col justify-evenly px-2 py-1'>
                  <div className='flex'>
                    <div className='flex flex-grow'>
                      <div className='w-16 h-4'><p className='text-secondary font-hnroman text-xs'>Centra ID</p></div>
                      <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                      <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.idCentra}</p></div>
                    </div>
                    <div className='flex flex-grow'>
                      <div className='w-12 h-4'><p className='text-secondary font-hnroman text-xs'>Weight</p></div>
                      <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                      <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.weight} kg</p></div>
                    </div>
                  </div>

                  <div className='flex'>
                      <div className='w-16 h-4'><p className='text-secondary font-hnroman text-xs'>Date</p></div>
                      <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                      <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{formatDate(item.estimated)}</p></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <BottomTab scrollPercent={scrollPercent} togglePage={togglePage} pages={pages}/>
    </div>   
  )
}

export default History
