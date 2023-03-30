import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SvgIcon from '@mui/material/SvgIcon';

import { Clear } from '@mui/icons-material';

import css from './dialog.module.scss';

export default function AlertDialog({ onDeleteContact, contact }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={css.delBtn} onClick={handleClickOpen}>
        <SvgIcon
          sx={{
            fontSize: 20,
            color: 'red',
          }}
        >
          <Clear />
        </SvgIcon>
      </button>
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
            Are you sure that you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={css.paper}>
          <Button onClick={handleClose}>Cansel</Button>
          <Button onClick={() => onDeleteContact(contact.id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
