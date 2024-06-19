import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function CentraManagerEditPassword({label}) {
  const [showPassword, setShowPassword] = useState(false);
  const [labelCheck, setLabelCheck] = useState("");

  const handleChange = event => {
        setLabelCheck(event.target.value);
    };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const style = {
            width: "100%",
            '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            "&fieldset": {
                borderColor: '#000',
            },
            borderRadius: '10px',
            },
  }
  return (
    <TextField 
      type={showPassword ? "text" : "password"}
      label={labelCheck === "" ? label : ""}
      InputLabelProps={{shrink: false}}
      onChange={handleChange}
      sx={style}
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

export default CentraManagerEditPassword