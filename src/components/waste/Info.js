import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/system/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Info(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
  };

  const person = {
    owner: 'Jim',
    price: 6.5,
    city: 'brookfield',
    state: 'WI',
    postalCode: '567890',
    dateAccepted: 'text',
    dateReturned: 'text',
  };
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
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Stack>
          <br />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 200 }}
              size="small"
              aria-label="simple table"
            >
              <TableBody>
                <TableRow>
                  <TableCell align="left">Owner</TableCell>
                  <TableCell align="left">{person.owner}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">{person.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">{person.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">State</TableCell>
                  <TableCell align="left">{person.state}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Postal Code</TableCell>
                  <TableCell align="left">{person.postalCode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Date Accepted</TableCell>
                  <TableCell align="left">{person.dateAccepted}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Date Returned</TableCell>
                  <TableCell align="left">{person.dateReturned}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <Stack direction="row" spacing={2.5} justifyContent="center">
            <Button size="medium" variant="outlined">
              Return
            </Button>
            <Button size="medium" variant="contained" endIcon={<EditIcon />}>
              Edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
}
