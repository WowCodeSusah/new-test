import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function PasswordInput({label, color = color, setData}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const style = {
    '& .MuiInputBase-input': {
      height: '100%'
    },
    '& .MuiOutlinedInput-root': {
      "&.Mui-focused fieldset": {
        borderColor: color,
      },
      borderRadius: '10px',
    },
    "& label.Mui-focused": {
      color: color,
    }
  }
  return (
    <TextField 
      type={showPassword ? "text" : "password"}
      label={label}
      sx={style}
      onChange={(e) => setData(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  )
}

export default PasswordInput
