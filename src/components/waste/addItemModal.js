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
  return (
  <FormControl>
    <InputLabel htmlFor="input" onChange={addItemHandler}>Email address</InputLabel>
    <Input id="input" aria-describedby="text"/>
  </FormControl>);

  //   return (
  //     <div>
  //       <Button variant="outlined" onClick={handleClickOpen}>
  //         Add Item
  //       </Button>
  //       <Dialog open={open} onClose={handleClose}>
  //         <DialogTitle align="center">Add Item</DialogTitle>
  //         <DialogContent>
  //             {/* <TextField
  //               autoFocus
  //               margin="dense"
  //               id="name"
  //               label="Item"
  //               type="text"
  //               fullWidth
  //               variant="standard"
  //               InputProps={enteredItem}
  //             /> */}
  //           <div>
  //             <input
  //               type="text"
  //               onChange={addItemHandler}
  //             />
  //           </div>

  //           <TextField
  //             autoFocus
  //             margin="dense"
  //             id="owner"
  //             label="Owner"
  //             type="text"
  //             fullWidth
  //             variant="standard"
  //             input={enteredOwner}
  //           />
  //           <TextField
  //             autoFocus
  //             margin="dense"
  //             id="price"
  //             label="Price $"
  //             type="number"
  //             fullWidth
  //             variant="standard"
  //             input={enteredPrice}
  //           />
  //           <TextField
  //             autoFocus
  //             margin="dense"
  //             id="city"
  //             label="City"
  //             type="text"
  //             fullWidth
  //             variant="standard"
  //             input={enteredCity}
  //           />
  //           <TextField
  //             autoFocus
  //             margin="dense"
  //             id="state"
  //             label="State"
  //             type="text"
  //             fullWidth
  //             variant="standard"
  //             input={enteredState}
  //           />
  //           <TextField
  //             autoFocus
  //             margin="dense"
  //             id="zip"
  //             label="Zip Code"
  //             type="number"
  //             fullWidth
  //             variant="standard"
  //             input={enteredZip}
  //           />
  //         </DialogContent>
  //         <DialogActions>
  //           <Button onClick={handleClose}>Cancel</Button>
  //           <Button onClick={handleClose}>Add Item</Button>
  //         </DialogActions>
  //       </Dialog>
  //     </div>
  //   );
  // }
}
export default AddItemModal;
