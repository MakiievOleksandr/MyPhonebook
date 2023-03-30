import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import css from './edit-dialog.module.scss';

export default function EditDialog({ onSubmit }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} fullWidth>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          className={css.paper}
          id="alert-dialog-title"
        ></DialogTitle>
        <DialogContent className={css.paper}>
          <DialogContentText id="alert-dialog-description">
            Save changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={css.paper}>
          <Button onClick={handleClose}>Cansel</Button>
          <Button onClick={onSubmit} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
