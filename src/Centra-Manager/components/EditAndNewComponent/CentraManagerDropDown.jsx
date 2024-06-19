/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CentraManagerDropDown({label, listOption}) {
    const [age, setAge] = useState('1');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <FormControl fullWidth sx={{backgroundColor: "white", '& .MuiOutlinedInput-root': {borderRadius: '10px',},}}>
        <InputLabel id="dropdownCM"></InputLabel>
        <Select
        value={age}
        labelId="dropdownCM"
        label={label}
        onChange={handleChange}
        >
          {listOption.map((data, index) => (
                    <MenuItem key={index} value={`${index + 1}`}>{data}</MenuItem>
          ))}   
        </Select>
    </FormControl>
  )
}

export default CentraManagerDropDown