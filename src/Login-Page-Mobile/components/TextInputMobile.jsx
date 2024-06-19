import { TextField } from '@mui/material'

// eslint-disable-next-line react/prop-types
function TextInputMobile({label, setData}) {
  const style = {
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
      color: "#BDD8B0",
      borderRadius: "10px",
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
        size='large'
        label={label}
        variant="outlined"
        sx={style}
        onChange={(e) => setData(e.target.value)}
    ></TextField>
  )
}

export default TextInputMobile