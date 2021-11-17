import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:6008/appointments?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h2>Appointments: {bookings.length}</h2>

        </div>
    );
};

export default Appointments;