import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { PropaneSharp } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function AddItemModal() {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  // };
  const [enteredItem, setEnteredItem] = useState('');
  const [enteredOwner, setEnteredOwner] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredState, setEnteredState] = useState('');
  const [enteredZip, setEnteredZip] = useState('');
  function addItemHandler(event) {
    setEnteredItem(event.target.value);
    console.log(enteredItem);
  }
  return <div>Test</div>;
}
export default AddItemModal;
