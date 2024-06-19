import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AccountForm from "../../Components/AddAccount/AccountForm";
import './AddAccountPage.scss';

const AddAccountPage = ({ onBack }) => {
  return (
    <div className="addAccountPage-admin">
      <div className="header-admin">
        <IconButton className="backButton-admin" onClick={onBack}>
          <ArrowBack style={{color: '#04315b'}}/>
        </IconButton>
        <h1 className="pageTitle-admin">Add Account</h1>
      </div>
      <AccountForm />
    </div>
  );
};

export default AddAccountPage;
