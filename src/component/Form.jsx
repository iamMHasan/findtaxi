import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Modal, Box } from '@mui/material';
import InfoModal from './InfoModal';

const PickupForm = () => {
  const formRef = React.useRef(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [additonalText, setAdditonalText] = useState('')
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pickupLocationError, setPickupLocationError] = useState(false);
  const [dropoffLocationError, setDropoffLocationError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [additonalTextError, setAdditonalTextError] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDropoffLocationChange = (event) => {
    setDropoffLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAdditionalText = (event) => {
    setAdditonalText(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form inputs
    if (!pickupLocation) {
      setPickupLocationError(true);
    } else {
      setPickupLocationError(false);
    }

    if (!dropoffLocation) {
      setDropoffLocationError(true);
    } else {
      setDropoffLocationError(false);
    }

    if (!date) {
      setDateError(true);
    } else {
      setDateError(false);
    }

    if (!time) {
      setTimeError(true);
    } else {
      setTimeError(false);
    }

    if (!additonalText) {
      setAdditonalTextError(true)
    } else {
      setAdditonalTextError(false)
    }

    if (pickupLocation && dropoffLocation && date && time && additonalText) {
      setShowModal(true)
    }

  };

  const handleClose = () => {
    setShowModal(false)
  }
  return (
     <>
      <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center', mt : 4 }}>
      Choose your destination
      </Typography>
      <hr style={{ width: '50px', height: '3px', margin: 'auto', marginTop: '16px', marginBottom: '32px', backgroundColor: '#f50057', border: 'none' }} />
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <form  id='formId' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Pickup location"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              error={pickupLocationError}
              helperText={
                pickupLocationError ? 'Please enter a pickup location' : ''
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Drop-off location"
              value={dropoffLocation}
              onChange={handleDropoffLocationChange}
              error={dropoffLocationError}
              helperText={
                dropoffLocationError ? 'Please enter a drop-off location' : ''
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="date"
              value={date}
              onChange={handleDateChange}
              error={dateError}
              helperText={dateError ? 'Please select a date' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="time"
              value={time}
              onChange={handleTimeChange}
              error={timeError}
              helperText={timeError ? 'Please select a time' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="additional text"
              fullWidth
              value={additonalText}
              onChange={handleAdditionalText}
              error={additonalTextError}
              helperText={additonalTextError ? 'Please write additional text' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* modal to show info */}
      <InfoModal 
      showModal={showModal} 
      handleClose={handleClose}
      pickupLocation={pickupLocation}
      dropoffLocation={dropoffLocation}
      date={date}
      time={time}
      additonalText={additonalText}
      />
    </Container>
     </>
  );
};

export default PickupForm;
