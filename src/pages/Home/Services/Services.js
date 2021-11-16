import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Flouride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teath from '../../../images/whitening.png';
import Service from '../Service/Service';



const services = [
    {
        name: "Flouride Treatment",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: Flouride
    },
    {
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: Cavity
    },
    {
        name: "Teath Whitening",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: Teath
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h6" sx={{ fontWeight: 500, mt: 2, color: 'info.main' }} >
                        Our Services
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, m: 5 }} >
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3, lg: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {

                            services.map((service, index) => (
                                <Service
                                    key={index}
                                    service={service}
                                ></Service>
                            ))

                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;