import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const DeleteAccountPopup = ({ open, onClose, onDelete }) => {
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
      <DialogTitle
        sx={{
          position: 'relative',
          paddingBottom: 0,
          fontSize: 32,
          fontFamily: 'Helvetica',
          color: '#04315b',
          fontWeight: 750,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: '10px',
            color: '#04315b', // Icon color
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
        Delete Account
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
          <Grid item xs={12}>
            <p>Are you sure you want to delete this account?</p>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: '24px', paddingBottom: '24px' }}>
        <Button
          onClick={onDelete}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: '#ff7c52',
            width: '201px',
            borderRadius: '13px', // Rounded corners for the button
            height: '62px',
            fontSize: 20,
            '&:hover': {
              backgroundColor: '#ff6a3e', // Maintain the same color on hover
            },
          }}
          style={{ textTransform: 'none' }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountPopup;
