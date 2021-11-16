import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`
}

const verticalyCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={verticalyCenter} item xs={12} md={5} sx={{ textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h4">
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem beatae vel molestias, quibusdam, ducimus cumque numquam quam eius illum nobis, consectetur in doloribus ea.
                        </Typography>
                        <Button sx={{ backgroundColor: '#34DCC4', color: 'black' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item style={verticalyCenter} xs={12} md={7} >
                    <img src={chair} alt="" style={{ width: 500 }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;