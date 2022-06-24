import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

function AddItemModal(props) {
  const { refresh } = props;
  const [enteredOwner, setEnteredOwner] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredState, setEnteredState] = useState('');
  const [enteredPostalCode, setEnteredPostalCode] = useState('');
  const [enteredDateAccepted, setEnteredDateAccepted] = useState('');

  const addItemHandler = (event) => {
    event.preventDefault();
    const newItem = {
      name: enteredName,
      owner: enteredOwner,
      price: enteredPrice,
      city: enteredCity,
      state: enteredState,
      postalCode: enteredPostalCode,
      dateAccepted: enteredDateAccepted,
    };
    addWaste(newItem);
    refresh();
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Owner"
            onChange={(event) => setEnteredOwner(event.target.value)}
            required
            value={enteredOwner}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            onChange={(event) => setEnteredName(event.target.value)}
            required
            value={enteredName}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            onChange={(event) => setEnteredPrice(event.target.value)}
            required
            value={enteredPrice}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            onChange={(event) => setEnteredCity(event.target.value)}
            required
            value={enteredCity}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            onChange={(event) => setEnteredState(event.target.value)}
            required
            value={enteredState}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Code"
            onChange={(event) => setEnteredPostalCode(event.target.value)}
            required
            value={enteredPostalCode}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Accepted"
            onChange={(event) => setEnteredDateAccepted(event.target.value)}
            required
            type="date"
            value={enteredDateAccepted}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addItemHandler}
        variant="contained"
      >
        Add Item
      </Button>
    </Box>
  );
}
export default AddItemModal;

AddItemModal.propTypes = {
  refresh: PropTypes.func.isRequired,
};
