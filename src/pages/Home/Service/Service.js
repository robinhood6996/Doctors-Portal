import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';



const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 300, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '5px auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 25 }} color="text">
                        {name}
                    </Typography>
                    <Typography variant="body2" >
                        {description}
                    </Typography>
                </CardContent>
                {/* <CardActions sx={{ textAlign: 'center' }}>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Grid>
    );
};

export default Service;