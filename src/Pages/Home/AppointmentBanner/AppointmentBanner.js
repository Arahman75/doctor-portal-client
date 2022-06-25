import { Box, Button, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment.png';


const appointmentBanner = {
    background: `url(${bg})`,
    // backgroundColor: 'rgba(255, 51, 212) ',
    // backgroundBlendMode: ' hard-light',
    marginTop: '175px'
    
}

const AppointmentBanner = () => {
    return (
        <Container>
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >

                    <img style={{ width: 400, marginTop: '-115px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent: 'flex-start',textAlign:'left',alignItems: 'center'}}>
                   <Box>
                   <Typography variant='h6' sx={{mb:4}} style={{color:'#46F2E5'}}>
                        Appointment
                    </Typography>
                    <Typography variant='h4' style={{color:'white'}}>
                        Make an Appointment today
                    </Typography>
                    <Typography variant='h6' sx={{my:4}} style={{color:'white', fontSize:14, fontWeight:300}}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ut error odio velit expedita exercitationem harum nulla ducimus saepe eum?
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#F24692'}}>Learn More</Button>
                   </Box>
                </Grid>

            </Grid>
        </Box>
        </Container>
    );
};

export default AppointmentBanner;