import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../images/login.png';
import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, autherror, isLoading } = useAuth();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    const loginSubmit = (e) => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();

    }

    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h5">
                        Login
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
                            <Button onClick={loginSubmit} sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >
                                Login
                            </Button>
                            <NavLink to="/register" style={{ textDecoration: 'none' }}>
                                <Button >New User? Please Register</Button>

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

export default Login;