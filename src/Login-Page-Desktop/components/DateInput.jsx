import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// eslint-disable-next-line react/prop-types
function DateInput({color, setData}) {
  const style = {
    '& .MuiInputBase-input': {
      height: '100%'
    },
    '& .MuiOutlinedInput-root': {
      "&.Mui-focused fieldset": {
        // Hard Coded Green to make my life easier sorry TT
        borderColor: 'green',
      },
      borderRadius: '10px',
    },
    "& label.Mui-focused": {
      color: color,
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label={"Birth Date"}
        sx={style}
        onChange={(date) => setData(date.format('DD/MM/YYYY'))}
      ></DatePicker>
    </LocalizationProvider>
  )
}

export default DateInput