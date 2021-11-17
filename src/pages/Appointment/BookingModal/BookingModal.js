import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';

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

const BookingModal = ({ booking, openModal, handleModalClose, date, setBookingSuccess }) => {
    const { title, timeSlot } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    //handle input
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }

    //Booking form submit
    const submitBooking = (e) => {
        e.preventDefault();
        const appointment = {
            ...bookingInfo,
            serviceName: title,
            time: timeSlot,
            date: date.toLocaleDateString()
        }
        console.log(appointment);

        fetch('http://localhost:6008/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }
            })


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
                        onBlur={handleOnBlur}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        onBlur={handleOnBlur}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField

                        id="outlined-size-small"
                        defaultValue={user.email}
                        onBlur={handleOnBlur}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField

                        id="outlined-size-small"
                        placeholder='Phone Number'
                        onBlur={handleOnBlur}
                        size="small"
                        sx={{ width: '90%', my: 1 }}
                    />
                    <TextField
                        disabled
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        onBlur={handleOnBlur}
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