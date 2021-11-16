import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, autherror } = useAuth();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        console.log(newData);
        setLoginData(newData);
    }

    const loginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not matched!');
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();

    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h5">
                        Register
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={loginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                onChange={handleOnchange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onChange={handleOnchange}
                                type="password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype Password"
                                name="password2"
                                onChange={handleOnchange}
                                type="password"
                                variant="standard"
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >
                                Register
                            </Button>
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <Button >Already Registered? Please Login</Button>

                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email &&
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Congratulation! Account Created Successfully
                        </Alert>
                    }
                    {
                        autherror && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {autherror}
                        </Alert>
                    }
                </Grid>
                <Grid item xs={4}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;