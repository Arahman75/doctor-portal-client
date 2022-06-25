import { Button, Container, Grid, TextField, Typography,CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from './../../../hooks/useAuth';


const Register = () => {
  const [loginData, setLoginData] = useState();
const history = useHistory();

  const {user, registerUser, isLoading, authError} =useAuth();

   const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        // console.log(newLoginData)
        newLoginData[field]=value;
       
        setLoginData(newLoginData);
         }
        const handleLoginSubmit = e =>{
       if(loginData.password !==loginData.password2){
        alert('Your password did not match')
        return
       }
       registerUser(loginData.email, loginData.password, loginData.name, history)
                e.preventDefault();
            }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt:12}}>
            <Typography variant="body1" gutterBottom>
          Register
          </Typography>
          { !isLoading && 
          <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width:'75%', m:1}}
          id="standard-basic" 
          label="Your Name" 
        variant="standard"
          onBlur={handleOnBlur}
          name='name'
          />
          <TextField 
          sx={{width:'75%', m:1}}
          id="standard-basic" 
          label="Your Email" 
          type='email'
          variant="standard"
          onBlur={handleOnBlur}
          name='email'
          />
          <TextField
           sx={{width:'75%', m:1}}
              id="standard-password-input"
              label="Your Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onBlur={handleOnBlur}
              name="password"
            />
          <TextField
           sx={{width:'75%', m:1}}
              id="standard-password-input"
              label="ReType Your Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onBlur={handleOnBlur}
              name="password2"
            />
            <Button sx={{width:'75%', m:1}} type='submit' variant="contained">Register</Button>
    
            <a href="/register" style={{textDecoration:'none'}} ><Button  variant='text'>Already Register? Please Login</Button></a>
          </form>}
          {
            isLoading && <CircularProgress />
          }
          {
            user?.email && <Alert severity="success">User Create Successfully!</Alert>
          }
          {
            authError && <Alert severity="error">{authError}</Alert>

          }
            </Grid>
            <Grid item xs={12} md={6}>
    <img src={login} style={{width:'100%'}} alt="" />
            </Grid>
    
        </Grid>
    </Container>
    );
};

export default Register;