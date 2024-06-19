import React, { useState } from 'react';
import { icons } from '../constants';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.css'

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='space-y-1 w-[90vw] mt-3'>
        <p className='text-xs text-secondary font-hnroman'>Birth Date</p>
        <div className="h-12 rounded-lg border border-secondary bg-offwhite flex items-center px-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="h-full w-[70vw] bg-transparent border-none outline-none text-sm font-hnroman text-secondary"
            placeholderText="Select a date"
          />
          <img 
          src={icons.xyzCalendar}
          alt='Calendar'
          className='ml-auto w-3 h-3'
          style={{ objectFit: 'contain'}}
          />
        </div>
    </div>
  );
}

export default MyDatePicker;
