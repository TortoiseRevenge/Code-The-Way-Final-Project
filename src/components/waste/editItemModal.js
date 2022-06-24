import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';
import { updateWaste } from '../../services/services';

export default function EditItemModal(props) {
  const { item, refresh } = props;
  const [enteredOwner, setEnteredOwner] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredState, setEnteredState] = useState('');
  const [enteredPostalCode, setEnteredPostalCode] = useState('');
  const [enteredDateAccepted, setEnteredDateAccepted] = useState('');
  const [enteredDateReturned, setEnteredDateReturned] = useState('');

  useEffect(() => {
    initializeForm();
  });

  const initializeForm = () => {
    if (item.itemOwner != null) {
      setEnteredOwner(item.itemOwner);
    }
    if (item.itemName != null) {
      setEnteredName(item.itemName);
    }
    if (item.itemPrice != null) {
      setEnteredPrice(item.itemPrice);
    }
    if (item.itemCity != null) {
      setEnteredCity(item.itemCity);
    }
    if (item.itemState != null) {
      setEnteredState(item.itemState);
    }
    if (item.itemPostalCode != null) {
      setEnteredPostalCode(item.itemPostalCode);
    }
    if (item.itemDateAccepted != null) {
      setEnteredDateAccepted(item.itemDateAccepted);
    }
    if (item.itemDateReturned != null) {
      setEnteredDateReturned(item.itemDateReturned);
    }
  };

  const updateItemHandler = (event) => {
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
    updateWaste(newItem);
    refresh();
  };

  const ownerChangeHandler = (event) => {
    setEnteredOwner(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };
  const postalCodeChangeHandler = (event) => {
    setEnteredPostalCode(event.target.value);
  };
  const dateAcceptedChangeHandler = (event) => {
    setEnteredDateAccepted(event.target.value);
  };
  const dateReturnedChangeHandler = (event) => {
    setEnteredDateReturned(event.target.value);
  };

  return (
    <Dialog open>
      <DialogTitle>Edit Item</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Owner Name"
              onChange={ownerChangeHandler}
              value={enteredOwner}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Item Name"
              onChange={nameChangeHandler}
              value={enteredName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Item Price"
              onChange={priceChangeHandler}
              value={enteredPrice}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              onChange={cityChangeHandler}
              value={enteredCity}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              onChange={stateChangeHandler}
              value={enteredState}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Postal Code"
              onChange={postalCodeChangeHandler}
              value={enteredPostalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Accepted"
              onChange={dateAcceptedChangeHandler}
              value={enteredDateAccepted}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Returned"
              onChange={dateReturnedChangeHandler}
              value={enteredDateReturned}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          onClick={updateItemHandler}
          variant="contained"
        >
          Update Item
        </Button>
      </Box>
    </Dialog>
  );
}

EditItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired,
};
