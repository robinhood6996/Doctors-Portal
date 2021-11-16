import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        title: 'Teeth Orthodontics',
        timeSlot: "8:00 AM - 9:00 AM",
        price: 25,
        seats: 10
    },
    {
        id: 2,
        title: "Cosmetic Dentistry",
        timeSlot: "10:05 am - 11:05 am",
        price: 20,
        seats: 5
    },
    {
        id: 3,
        title: "Teeth Cleaning",
        timeSlot: "05:00 pm - 6:30 pm",
        price: 30,
        seats: 8
    },
    {
        id: 4,
        title: "Cavity Protection",
        timeSlot: "07:00 am - 8:00 am",
        price: 40,
        seats: 12
    },
    {
        id: 5,
        title: "Pediatric Dental",
        timeSlot: "06:30 pm - 7:30 pm",
        price: 25,
        seats: 15
    },
    {
        id: 6,
        title: "Oral Surgery",
        timeSlot: "07:30 pm - 9:30 pm",
        price: 120,
        seats: 5
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 30, color: '#34dcc4', py: 5, fontWeight: 800 }}>
                Available Appointment On {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date}></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;