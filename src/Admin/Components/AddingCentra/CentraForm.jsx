import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import './CentraForm.scss';

const CentraForm = ({ onSave }) => {
  const [centraData, setCentraData] = useState({
    name: '',
    location: '',
    capacity: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCentraData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!centraData.name) newErrors.name = 'Name is required';
    if (!centraData.location) newErrors.location = 'Location is required';
    if (!centraData.capacity) newErrors.capacity = 'Capacity is required';
    if (!centraData.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSave(centraData);
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
              value={centraData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </div>
          <div className="formInput-admin">
            <label>Location:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="location"
              value={centraData.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
            />
          </div>
        </div>
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Capacity:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="capacity"
              type="number"
              value={centraData.capacity}
              onChange={handleChange}
              error={!!errors.capacity}
              helperText={errors.capacity}
            />
          </div>
          <div className="formInput-admin">
            <label>Description:</label>
            <TextField
              fullWidth
              variant="outlined"
              name="description"
              multiline
              rows={4}
              value={centraData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </div>
        </div>
        <Box mt={2} style={{ textAlign: 'right' }}>
          <Button type="submit" variant="contained" color="primary">
            Save Centra
          </Button>
        </Box>
      </div>
    </form>
  );
};

export default CentraForm;
