import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import './AccountForm.scss';

const AccountForm = ({ onSave }) => {
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!accountData.name) newErrors.name = 'Name is required';
    if (!accountData.email) newErrors.email = 'Email is required';
    if (!accountData.password) newErrors.password = 'Password is required';
    if (!accountData.birthDate) newErrors.birthDate = 'Birth Date is required';
    if (!accountData.role) newErrors.role = 'Role is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSave(accountData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer-admin">
      <div className="formBox-admin">
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Name:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="name"
              value={accountData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </div>
          <div className="formInput-admin">
            <label>Email:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              type="email"
              value={accountData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>
        </div>
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Password:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="password"
              type="password"
              value={accountData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>
          <div className="formInput-admin">
            <label>Birth Date:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="birthDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={accountData.birthDate}
              onChange={handleChange}
              error={!!errors.birthDate}
              helperText={errors.birthDate}
            />
          </div>
        </div>
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Role:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="role"
              value={accountData.role}
              onChange={handleChange}
              error={!!errors.role}
              helperText={errors.role}
            />
          </div>
        </div>
        <Box mt={2}  style={{ textAlign: 'right' }}>
          <Button type="submit" variant="contained" color="primary" >
            Save Account
          </Button>
        </Box>
      </div>
    </form>
  );
};

export default AccountForm;
