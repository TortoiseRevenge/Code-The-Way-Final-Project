import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
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

export default function CoachDeletionModal(props) {
  const { deleteFunction, id } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Delete = () => {
    handleClose();
    deleteFunction(id);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Are you sure you want to delete this inactive User?
            </Grid>
            <Grid item xs={12}>
              <ColorButton variant="contained" fullWidth onClick={Delete}>
                Delete
              </ColorButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

CoachDeletionModal.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
