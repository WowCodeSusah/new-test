import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import '../../css/ProductionCentraManager.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// eslint-disable-next-line react/prop-types
function CentraManagerDatePicker() {
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            sx={{width: '100%',
                 backgroundColor: 'white',
                 '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                "&fieldset": {
                    borderColor: '#000',
                },
                borderRadius: '10px',
                },}}
            keyboard
            slotProps={{
              textField: {
                InputLabelProps: {
                  shrink: false
                }
              }
            }}
        ></DatePicker>
    </LocalizationProvider>
  )
}

export default CentraManagerDatePicker