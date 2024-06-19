import { TextField } from '@mui/material'
import '../../css/ProductionCentraManager.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CentraManagerAddNewTextField({label}) {
    const [labelCheck, setLabelCheck] = useState("");

    const handleChange = event => {
        setLabelCheck(event.target.value);
    };
  return (
    <TextField 
        label={labelCheck=== "" ? label : ""}
        InputLabelProps={{shrink: false}}
        onChange={handleChange}
        fullWidth
        sx={{
            borderColor: '#000',
            '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            "&fieldset": {
                borderColor: '#000',
            },
            borderRadius: '10px',
            },
        }}
    />
  )
}

export default CentraManagerAddNewTextField