import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Navigation = () => {
  const {user, logOut} =useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <a href='/appointment' style={{textDecoration:'none'}}><Button color="inherit" sx={{color:'white'}}>Appointment</Button></a>
            {/* <Link to='/appointment'><Button color="inherit">Appointment</Button></Link> */}

           
            {
              
              user?.email?
              <Box>
                 <a href='/dashBoard' style={{textDecoration:'none'}}><Button style={{ color:'white'}}>DashBoard</Button></a>
                 <Button onClick={logOut} style={{ color:'white'}}>LogOut</Button>
              
              </Box>
              
            :
              <a href='/login' style={{textDecoration:'none'}}><Button style={{ color:'white'}}>Login</Button></a>
            }
            {/* <NavLink to='login'> <Button  style={{ color:'white'}}>Login</Button></NavLink> */}
           
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;