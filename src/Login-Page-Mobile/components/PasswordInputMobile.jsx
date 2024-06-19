import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function PasswordInputMobile({label, setData}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const style = {
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
      color: "#BDD8B0",
      borderRadius: "10px",
      borderColor: "#BDD8B0",
      "&.Mui-focused fieldset": {
        // Hard Coded Green to make my life easier sorry TT
        borderColor: "#BDD8B0",
      },
      // Class for the border around the input field
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BDD8B0",
      },
    },
    // Class for the label of the input field
    "& .MuiInputLabel-outlined": {
      color: "#BDD8B0",
    },
    "& label.Mui-focused": {
      color: "#BDD8B0",
    }
  }

  return (
    <TextField 
      size="large"
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
              sx={{
                color: "#BDD8B0"
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  )
}

export default PasswordInputMobile
