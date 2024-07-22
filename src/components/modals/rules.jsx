import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border: "1px solid #fff",
  borderRadius: 2,
  outline: "none",
  position: "relative",
};

export default function BasicModal({open, handleClose}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Shartlar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Batafsil shart
          </Typography>
          <div className='absolute top-3 right-3'>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
