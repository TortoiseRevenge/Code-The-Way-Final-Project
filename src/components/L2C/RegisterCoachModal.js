import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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

export default function RegisterCoachModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <Grid item={12}>
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
                fullWidth
                label="First Name"
                variant="outlined"
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={14}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
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
                fullWidth
                label="Phone Number"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  style={{ minWidth: '100px' }}
                >
                  Close
                </Button>
                <Button variant="contained" style={{ minWidth: '100px' }}>
                  Register
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
