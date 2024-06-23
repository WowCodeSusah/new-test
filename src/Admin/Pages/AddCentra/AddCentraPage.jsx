import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import CentraForm from '../../Components/AddingCentra/CentraForm';
import './AddCentraPage.scss';

const AddCentraPage = ({ onBack, onSaveCentra }) => {
  const handleSave = (centraData) => {
    onSaveCentra(centraData);
  };

  return (
    <div className="addCentraPage-admin">
      <div className="header-admin">
        <IconButton className="backButton-admin" onClick={onBack}>
          <ArrowBack style={{ color: '#04315b' }} />
        </IconButton>
        <h1 className="pageTitle-admin">Add Centra</h1>
      </div>
      <CentraForm onSave={handleSave} />
    </div>
  );
};

export default AddCentraPage;
