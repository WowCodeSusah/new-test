import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <button
      onClick={handlePress}
      className={`justify-center flex items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <p className={`${textStyles}`}>
        {isLoading ? 'Loading...' : title}
      </p>
    </button>
  )
}

export default CustomButton