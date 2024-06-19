import { TextField } from '@mui/material'

// eslint-disable-next-line react/prop-types
function TextInput({label, color = color, setData}) {
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
        label={label}
        variant="outlined"
        sx={style}
        onChange={(e) => setData(e.target.value)}
    ></TextField>
  )
}

export default TextInput