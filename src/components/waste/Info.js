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
function createData(
  owner,
  price,
  city,
  state,
  postalCode,
  dateAccepted,
  dateReturned
) {
  return { owner, price, city, state, postalCode, dateAccepted, dateReturned };
}
const rows = [
  createData('Jim', 3.9, 'Brookfield', 'WI', 53045, 'asdf', 'bads'),
];
console.log(rows.owner);
export default function Info() {
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="right">Owner</TableCell>
                </TableRow>
                <TableRow
                  key={rows.price}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">123</TableCell>
                </TableRow>
                <TableCell align="right">{rows.city}</TableCell>
                <TableCell align="right">{rows.state}</TableCell>
                <TableCell align="right">{rows.postalCode}</TableCell>
                <TableCell align="right">{rows.dateAccepted}</TableCell>
                <TableCell align="right">{rows.dateReturned}</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" spacing={2} justifyContent="space-around">
            <Button size="small" variant="outlined">
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
