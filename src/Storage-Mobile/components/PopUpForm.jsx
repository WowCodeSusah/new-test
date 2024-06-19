import { number } from 'prop-types'
import React from 'react'

const PopUpForm = ({ value, onChange, placeholder }) => {

  return (
      <div style={{ boxShadow: "0 -1px 6px rgba(189, 216, 208, 1)" }} className='mt-2 px-2 mx-5 h-10 bg-offwhite-100 rounded-xl
      border-2 border-secondary border-opacity-50 flex justify-center items-center'>

        <input
          className='bg-offwhite-100 text-secondary text-md font-hnroman overflow-hidden ml-2'
          placeholder={placeholder}
          onChange={onChange}
          type='number'
        />

        <p className='ml-auto mr-2 text-secondary font-hnbold text-md'>
            kg
        </p>

      </div>
  )
}

export default PopUpForm