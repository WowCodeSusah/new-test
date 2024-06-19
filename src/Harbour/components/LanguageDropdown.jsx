import React from 'react'
import { useState } from 'react';

function Dropdown() {
    const [language, setLanguage] = useState('English');
    const [fadeIn, setFadeIn] = useState(false);

    const toggleLanguage = () => {
        setFadeIn(true);
        setTimeout(() => {
          setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Bahasa Indonesia' : 'English'));
          setFadeIn(false);
        }, 300); // Adjust the duration according to your preference
      };

    return (
        <div className='mt-3 w-full space-y-1'>
            <p className='text-xs font-hnroman text-secondary'>
                Language (click to toggle)
            </p>
            <div className='h-12 rounded-lg px-4 border border-secondary bg-offwhite'>
                <div className={`flex w-full h-full items-center transition-opacity duration-300 ${
        fadeIn ? 'opacity-0' : 'opacity-100'}`} onClick={toggleLanguage}>
                    <div className='text-secondary text-sm font-hnroman'>
                    {language}
                    </div>

                    {/* <img 
                    src={isOpen === true ? icons.xyzUpArrow : icons.xyzDownArrow}
                    style={{ objectFit: 'contain'}}
                    className='w-3 h-3 ml-auto'
                    /> */}
                </div>
            </div>
            {/* {isOpen && (
                <div className='absolute w-[90vw]'>
                    <ul style={{boxShadow: '0 -1px 6px rgba(189, 216, 208, 1)'}} className='bg-offwhite text-md font-hnroman text-secondary'>
                    {options.map((option, index) => (
                        <li className='ml-4 mb-1 bg-offwhite hover:bg-offwhite-300 cursor-pointer' onClick={onOptionClicked(option)} key={index}>
                        {option}
                        </li>
                    ))}
                    </ul>
                </div>
            )} */}
        </div>
    )
}

export default Dropdown