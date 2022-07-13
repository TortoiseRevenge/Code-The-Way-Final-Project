import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './InactivationModal.css';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    setOpen(false);
    // TODO: API Integration
  };

  return (
    <div>
      <style>.button</style>
      <Button variant="outlined" onClick={handleClickOpen}>
        Deactivate
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          Are you sure you want to deactivate this coach?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            align="center"
            color="red"
            id="alert-dialog-description"
          >
            This will remove all assigned students.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="buttons-deactivate" onClick={handleAgree}>
            Deactivate
          </Button>
          <Button className="buttons-cancel" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
