import React from 'react'
import { icons } from '../constants'
import { useState } from 'react'

const FormField = ({ title, type, titleStyles, showTitle, value, handleChangeText, textStyles, containerStyles, showIcon, icon, otherStyles, placeholder, filter }) => {
  const [showPassword, setShowPassword] = useState(false)

  const greenFilter = {
    objectFit: 'contain',
    filter: 'brightness(0) saturate(100%) invert(89%) sepia(24%) saturate(285%) hue-rotate(53deg) brightness(93%) contrast(87%)'
  };

  const defaultFilter = {
    objectFit: 'contain',
    filter: 'brightness(0) saturate(100%) invert(13%) sepia(87%) saturate(1267%) hue-rotate(187deg) brightness(100%) contrast(101%)'
  };
  return (
    <div className={`space-y-1 ${otherStyles}`}>
      {showTitle === 'true' && 
      <p className={`text-xs ${titleStyles}`}>
        {title}
      </p>
      }
      <div className={`w-full h-12 ${containerStyles}
      flex items-center flex-row`}>
        {showIcon === 'True' && (
        <img
        src={icon}
        alt="icon"
        className="w-5 h-5 mr-4"
        style={{ objectFit: 'contain'}}
        />
        )}

        <input
          className={`${textStyles}`}
          type={(title === 'Password' || title === 'Current Password' || title === 'New Password' || title === 'Repeat New Password') && !showPassword ? 'password' : type}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeText}
        />

        {(title === 'Password' || title === 'Current Password' || title === 'New Password' || title === 'Repeat New Password') && (
          <button onClick={() => setShowPassword(!showPassword)}>
            <img 
              src={!showPassword ? icons.eyeHide : icons.eye}
              alt={!showPassword ? "Hide Password" : "Show Password"}
              className="w-6 h-6"
              style={filter === 'green' ? greenFilter : defaultFilter}
            />
          </button>
        )}


      </div>
    </div>
  )
}

export default FormField