import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { title, timeSlot, seats } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" sx={{ color: '#34dcc4', fontWeight: 700, }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {timeSlot}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, fontSize: 16 }}>
                        {seats} SEATS AVAILABLE
                    </Typography>
                    <Button onClick={handleModalOpen} sx={{ backgroundColor: '#34dcc4', color: 'black', mt: 2 }}>
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <BookingModal booking={booking} openModal={openModal} handleModalClose={handleModalClose} date={date}></BookingModal>
        </>

    );
};

export default Booking;