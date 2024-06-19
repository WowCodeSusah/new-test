import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// eslint-disable-next-line react/prop-types
function DropDown({label, data, setData}) {
  const styleForm = {
    '& .MuiInputBase-root': {
      // some cringe number work difference of 0.157 barely noticeable
      height: '78.5%'
    },
    '& .MuiOutlinedInput-root': {
      "&.Mui-focused fieldset": {
        borderColor: 'green'
      },
      borderRadius: '10px',
    },
    "& label.Mui-focused": {
      color: 'green'
    }
  }

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <FormControl sx={styleForm}>
        <InputLabel id="dropdown" >Role</InputLabel>
        <Select
        value={data}
        labelId="dropdown"
        label={label}
        onChange={handleChange}
        >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="XYZ Employee">XYZ Employee</MenuItem>
            <MenuItem value="XYZ Manager">XYZ Manager</MenuItem>
            <MenuItem value="Harbour">Harbour</MenuItem> 
            <MenuItem value="Centra Employee 1">Centra Employee 1</MenuItem>
            <MenuItem value="Centra Manager 1">Centra Manager 1</MenuItem>
            <MenuItem value="Centra Employee 2">Centra Employee 2</MenuItem>
            <MenuItem value="Centra Manager 2">Centra Manager 2</MenuItem>   
            <MenuItem value="Centra Employee 3">Centra Employee 3</MenuItem>
            <MenuItem value="Centra Manager 3">Centra Manager 3</MenuItem>   
            <MenuItem value="Centra Employee 4">Centra Employee 4</MenuItem>
            <MenuItem value="Centra Manager 4">Centra Manager 4</MenuItem>
            <MenuItem value="Centra Employee 5">Centra Employee 5</MenuItem>
            <MenuItem value="Centra Manager 5">Centra Manager 5</MenuItem>
            <MenuItem value="Centra Employee 6">Centra Employee 6</MenuItem>
            <MenuItem value="Centra Manager 6">Centra Manager 6</MenuItem>   
            <MenuItem value="Centra Employee 7">Centra Employee 7</MenuItem>
            <MenuItem value="Centra Manager 7">Centra Manager 7</MenuItem>   
            <MenuItem value="Centra Employee 8">Centra Employee 8</MenuItem>
            <MenuItem value="Centra Manager 8">Centra Manager 8</MenuItem>      
        </Select>
    </FormControl>
  )
}

export default DropDown