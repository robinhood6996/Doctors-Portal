import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, openModal, handleModalClose, date }) => {
    const { title, timeSlot } = booking;

    //Booking form submit
    const submitBooking = (e) => {
        e.preventDefault();
        alert('Submitted your booking');
        handleModalClose();
    }
    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 2, color: '#34dcc4' }}>
                    {title}
                </Typography>
                <form onSubmit={submitBooking}>
                    <TextField
                        disabled
                        id="outlined-size-small"
                        defaultValue={timeSlot}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField
                        id="outlined-size-small"
                        placeholder="Your Name"
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField

                        id="outlined-size-small"
                        placeholder='Your Email'
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField

                        id="outlined-size-small"
                        placeholder='Phone Number'
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField
                        disabled
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <Button type='submit' sx={{ backgroundColor: '#34dcc4', color: 'white', ':hover': { backgroundColor: '#34dcc4' } }}>Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;