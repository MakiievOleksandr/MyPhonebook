import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// import ContactForm from 'components/modules/ContactForm/ContactForm';

import css from './modal.module.scss';

const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const BasicModal = ({ onToggle, setHandler, children, ...props }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = useCallback(() => {
    setOpen(false);
    setHandler(false);
  }, [setHandler]);

  useEffect(() => {
    if (!onToggle) {
      handleClose();
      return;
    }
    handleOpen();
  }, [handleClose, onToggle]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.modal} sx={style}>
          <h3 className={css.modalTitle}>{props.title}</h3>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
