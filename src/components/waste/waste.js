import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import Container from '@mui/system/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
};

export default function BasicCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen}>Click to Open</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: 22 }} color="text.primary">
              Item Name
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack direction="column">
            <Typography> Owner:</Typography>
            <Typography> City:</Typography>
            <Typography> State:</Typography>
            <Typography> Postal Code:</Typography>
            <Typography> Date Accepted:</Typography>
            <Typography> Date Returned:</Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="space-around">
            <Button size="small" variant="outlined" endIcon={<SendIcon />}>
              Return
            </Button>
            <Button size="small" variant="contained" endIcon={<EditIcon />}>
              Edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
}
