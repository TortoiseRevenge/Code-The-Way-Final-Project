import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { purple } from '@mui/material/colors';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 12,
  p: 2,
};
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#2854A1',
  '&:hover': {
    backgroundColor: '#1F365E',
  },
}));

export default function RegisterCoachModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const Register = () => {
    handleClose();
    addFunction(firstName, lastName, email, phoneNumber);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        + Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                alignItems="flex-end"
                spacing={31.5}
                justifyContent="space-between"
              >
                <Typography variant="h5" component="h2">
                  Register a Coach
                </Typography>
                <IconButton size="small" onClick={handleClose}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={firstName}
                fullWidth
                label="First Name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                value={lastName}
                fullWidth
                label="Last Name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={14}>
              <TextField
                value={email}
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phoneNumber}
                type="number"
                fullWidth
                label="Phone Number"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <ColorButton
                variant="contained"
                fullWidth
                onClick={Register}
                value={(firstName, lastName, email, phoneNumber)}
              >
                Register
              </ColorButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

RegisterCoachModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
