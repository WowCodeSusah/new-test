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
import axios from 'axios';

const EditAccountPopup = ({ open, onClose, accountDetails, onSave }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (accountDetails) {
      setId(accountDetails.idUser);
      setName(accountDetails.name);
      setEmail(accountDetails.email);
      setBirthDate(accountDetails.birthDate);
      setRole(accountDetails.role);
    }
  }, [accountDetails]);

  const handleSave = () => {
    const updatedDetails = {
      name: name,
      email: email,
      dateOfBirth: birthDate,
      role: role,
    };

    axios.put(`http://localhost:8000/users/${accountDetails.idUser}`, updatedDetails)
      .then(response => {
        console.log('Data saved successfully:', response);
        onSave(updatedDetails);  // Notify parent of the changes
        onClose();  // Close the dialog
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '900px',
          height: '607px',
          borderRadius: '20px',
          backgroundColor: '#fffdfd',
          padding: '20px',
        },
      }}
    >
      <DialogTitle sx={{ position: 'relative', paddingBottom: 0, fontSize: 32, fontFamily: 'Helvetica', color: '#04315b', fontWeight: 750, display: 'flex', alignItems: 'center' }}>
        <IconButton
          aria-label="edit"
          sx={{
            marginRight: '10px',
            color: '#04315b',
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
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="ID"
              type="text"
              fullWidth
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Birthdate"
              type="text"
              fullWidth
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
                sx: { color: '#04315b' },
              }}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel sx={{ color: '#04315b' }}>Role</InputLabel>
              <Select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                sx={{ borderRadius: '16px', borderColor: '#04315b' }}
                inputProps={{
                  sx: { color: '#04315b' },
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="XYZ Employee">XYZ Employee</MenuItem>
                <MenuItem value="XYZ Manager">XYZ Manager</MenuItem>
                <MenuItem value="Harbour">Harbour</MenuItem> 
                <MenuItem value="Centra Employee 1">Centra Employee </MenuItem>
                <MenuItem value="Centra Manager 1">Centra Manager </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: '24px', paddingBottom: '24px' }}>
        <Button 
          onClick={handleSave}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: '#04315b',
            width: '201px',
            borderRadius: '13px',
            height: '62px',
            fontSize: 20,
            '&:hover': {
              backgroundColor: '#04315b',
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

export default EditAccountPopup;
