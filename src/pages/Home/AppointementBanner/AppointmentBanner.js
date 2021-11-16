import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';
import bgImg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bgImg})`,
    backgroundColor: 'rgb(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 155,
    backgroundPosition: 'center'
}

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBg} sx={{ flexGrow: 1, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor}
                            style={{ width: 500, marginTop: '-130px', }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h6" sx={{ color: '#34DCC4', fontSize: 25, mb: 5 }}>
                                Appointment
                            </Typography>
                            <Typography variant="h3" sx={{ color: 'white', fontSize: 35, my: 5 }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 300, color: 'white', my: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et, cumque optio nisi consequuntur voluptatum facilis dolorum ex aspernatur quo.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                            <Button variant={'contained'} sx={{ backgroundColor: '#34DCC4' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;