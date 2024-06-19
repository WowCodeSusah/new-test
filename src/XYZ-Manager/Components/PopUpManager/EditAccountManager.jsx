import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const EditAccountManager = ({ togglePage, pages, open, onClose, accountDetails, onSave }) => {
  const [formValues, setFormValues] = useState({
    // batchid: '',
    idShipment: '',
    provider: '',
    weight: '',
    arrival: '',
    // storagelocation: '',
  });

  useEffect(() => {
    if (accountDetails) {
      setFormValues(accountDetails);
    }
  }, [accountDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Saving:', formValues); // Debugging line
    onSave(formValues);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '900px', // Set a max width for larger screens
          height: '607px', // Match the height of the rectangleDiv
          borderRadius: '20px',
          backgroundColor: '#fffdfd',
          padding: '20px', // Optional: Add some padding for content
        },
      }}
    >
      <DialogTitle sx={{ position: 'relative', paddingBottom: 0, fontSize: 32, fontFamily: 'Helvetica', color: '#04315b', fontWeight: 750, display: 'flex', alignItems: 'center' }}>
        <IconButton
          aria-label="edit"
          sx={{
            marginRight: '10px',
            color: '#04315b', // Icon color
          }}
        >
          <EditOutlinedIcon />
        </IconButton>
        Edit Account
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent> {/* the grid  */}
        <Grid container spacing={2}>
          {/* <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Batch ID" //ID
              type="text"
              fullWidth
              name="batchid"
              value={formValues.batchid}
              onChange={handleChange}
              disabled
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' }, // Rounded corners, border color, and text color
              }}
              InputLabelProps={{
                sx: { color: '#04315b' }, // Text color
              }}
            />
          </Grid> */}
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Shipping ID" // Name
              type="text"
              fullWidth
              name="Shipment ID"
              value={formValues.idShipment}
              onChange={handleChange}
              disabled
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' }, // Rounded corners, border color, and text color
              }}
              InputLabelProps={{
                sx: { color: '#04315b' }, // Text color
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Provider" // Email
              type="text"
              fullWidth
              name="provider"
              value={formValues.provider}
              onChange={handleChange}
              disabled
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' }, // Rounded corners, border color, and text color
              }}
              InputLabelProps={{
                sx: { color: '#04315b' }, // Text color
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Weight" 
              type="text"
              fullWidth
              name="weight"
              value={formValues.weight}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' }, // Rounded corners, border color, and text color
              }}
              InputLabelProps={{
                sx: { color: '#04315b' }, // Text color
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Date Received" // Birthdate
              type="date"
              fullWidth
              name="arrival"
              value={formValues.arrival}
              onChange={handleChange}
              disabled
              InputLabelProps={{
                shrink: true,
                sx: { color: '#04315b' }, // Text color
              }}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' }, // Rounded corners, border color, and text color
              }}
            />
          </Grid>
          {/* <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel sx={{ color: '#04315b' }}>Warehouse Locs</InputLabel>
              <Select
                name="storagelocation" // Role 
                value={formValues.storagelocation}
                onChange={handleChange}
                label="Storage Location" 
                sx={{ borderRadius: '16px', borderColor: '#04315b' }} // Rounded corners and border color
                inputProps={{
                  sx: { color: '#04315b' }, // Text color
                }}
              >
                <MenuItem value="Warehouse 1">Warehouse 1</MenuItem>
                <MenuItem value="Warehouse 2">Warehouse 2</MenuItem>
                <MenuItem value="Warehouse 3">Warehouse 3</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: '24px', paddingBottom: '24px' }}> {/* confirm button */}
        <Button 
          onClick={handleSave}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: '#04315b',
            width: '201px',
            borderRadius: '13px', // Rounded corners for the button
            height: '62px',
            fontSize: 20,
            '&:hover': {
              backgroundColor: '#04315b', // Maintain the same color on hover
            },
          }}
          style={{ textTransform: 'none' }} 
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAccountManager;
