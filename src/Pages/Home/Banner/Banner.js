import { Box, Button, Grid, Typography,Container } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg ={
    background: `url(${bg})`,
    // border:'1px solid red',
    height:'650px'
    // backgroundColor: 'rgba( 8, 10, 10 ,01) ',
    //  backgroundBlendMode: ' dark-light'
    
}
const verticalCenter ={
    display: 'flex',
    alignItem: 'center',
    height: '400'
  

   
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{my:6 }}>
                <Grid xs={12} md={6} sx={{paddingTop:' 175px'}} style={{...verticalCenter,textAlign:'left' }}>
                   <Box>
                   <Typography variant='h3'>
                        Your New Smile<br />
                        Starts Here
                    </Typography>
                    <Typography variant='h6' sx={{ my:3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, placeat? Sint, odit. Ipsam fugiat dolores quaerat commodi ex provident velit.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#F24692'}}>Get Appointment</Button>
                   </Box>
                </Grid>
                <Grid xs={12} md={6} sx={{backgroundColor:'#282D2D',paddingTop:' 175px', paddingBottom:'175px'}}   style={verticalCenter}>
                    <img style={{width: '89%', height:'250px'}} src={chair} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Banner;