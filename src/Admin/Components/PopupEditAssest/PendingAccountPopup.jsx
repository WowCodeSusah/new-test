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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import axios from 'axios';

const PendingAccountPopup = ({ open, onClose, accountDetails, onConfirm, onReject }) => {
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    birthDate: '',
    role: '',
  });

  useEffect(() => {
    if (accountDetails) {
      setFormValues(accountDetails);
    }
  }, [accountDetails]);

  const handleConfirmClick = () => {
    onConfirm(formValues);
  };

  const handleRejectClick = () => {
    onReject(formValues);
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
          aria-label="confirm"
          onClick={handleConfirmClick}
          sx={{
            marginRight: '10px',
            color: '#04315b',
          }}
        >
          <CheckCircleOutlineIcon />
        </IconButton>
        Confirm Account
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
              value={formValues.id}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              name="name"
              value={formValues.name}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={formValues.email}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              name="password"
              value={formValues.password}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Birthdate"
              type="date"
              fullWidth
              name="birthDate"
              value={formValues.birthDate}
              InputLabelProps={{
                shrink: true,
                sx: { color: '#04315b' },
              }}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Role"
              type="text"
              fullWidth
              name="role"
              value={formValues.role}
              InputProps={{
                sx: { borderRadius: '16px', borderColor: '#04315b', color: '#04315b' },
              }}
              InputLabelProps={{
                sx: { color: '#04315b' },
              }}
              disabled
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: '24px', paddingBottom: '24px' }}>
        <Button 
          color="primary"
          variant="contained"
          onClick={handleConfirmClick}
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
        <Button 
          color="secondary"
          variant="contained"
          onClick={handleRejectClick}
          sx={{
            backgroundColor: '#d32f2f',
            width: '201px',
            borderRadius: '13px',
            height: '62px',
            fontSize: 20,
            '&:hover': {
              backgroundColor: '#c62828',
            },
          }}
          style={{ textTransform: 'none' }} 
        >
          Reject
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PendingAccountPopup;
