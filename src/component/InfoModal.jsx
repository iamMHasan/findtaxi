import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const InfoModal = ({showModal, handleClose, pickupLocation, dropoffLocation, date, time, additonalText}) => {
  return (
    <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ bgcolor: "white", textAlign: "center", p: 5 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pickup Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Pickup Location:</strong> {pickupLocation} <br />
            <strong>Drop-off Location:</strong> {dropoffLocation} <br />
            <strong>Date:</strong> {date} <br />
            <strong>Time:</strong> {time} <br />
            <strong>Additional Text:</strong> {additonalText} <br />
          </Typography>
        </Box>
      </Modal>
  )
}

export default InfoModal
