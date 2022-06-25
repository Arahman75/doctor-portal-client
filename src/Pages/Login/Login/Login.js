import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
const [loginData, setLoginData] = useState();
const {user, loginUser, isLoading, signInWithGoogle, authError} = useAuth();
const location = useLocation();
const history = useHistory();

 const handleOnChange = e =>{
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData}
newLoginData[field]=value;
setLoginData(newLoginData);
 }

    const handleLoginSubmit = e =>{
loginUser(loginData.email, loginData.password,location,history);

        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
      signInWithGoogle(location, history)
    }
    return (
<Container>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:12}}>
        <Typography variant="body1" gutterBottom>
       Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx={{width:'75%', m:1}}
      id="standard-basic" 
      label="Your Email" 
      type='email'
      variant="standard"
      onBlur={handleOnChange}
      name='email'
      />
      <TextField
       sx={{width:'75%', m:1}}
          id="standard-password-input"
          label="Your Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onBlur={handleOnChange}
          name="password"
        />
        <Button sx={{width:'75%', m:1}} type='submit' variant="contained">Login</Button>

        <a href="/register" style={{textDecoration:'none'}} ><Button  variant='text'>New User? Please Register</Button></a>

        {
            isLoading && <CircularProgress />
          }
          {
            user?.email && <Alert severity="success">User Login Successfully!</Alert>
          }
          {
            authError && <Alert severity="error">{authError}</Alert>

          }
      </form>
      <p>---------------------------------</p>
      <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
<img src={login} style={{width:'100%'}} alt="" />
        </Grid>

    </Grid>
</Container>
    );
};

export default Login;