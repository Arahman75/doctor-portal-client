import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../../images/treatment.png';

const Exceptional = () => {
    const verticalCenter ={
        display: 'flex',
        alignItem: 'center',
        height: '400'
       
    }
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{my:10}}>
            <Grid xs={12} md={6} style={verticalCenter}>
                    <img style={{width: '70 %', height:'450px'}} src={treatment} alt="" />
                </Grid>
                <Grid xs={12} md={6} style={{...verticalCenter,textAlign:'left',paddingLeft:8}}>
                   <Box>
                   <Typography variant='h3' sx={{mt:3}}>
                        Exceptional Dental<br />
                        Care, on Your Terms
                    </Typography>
                    <Typography variant='h6' sx={{ my:3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem odit ipsum, accusamus earum sint placeat corrupti sit dolor quisquam reprehenderit magnam et. Quod assumenda quae obcaecati vero amet distinctio rerum saepe porro expedita! Ipsam molestiae explicabo id a hic minus nulla sit vero libero accusamus quos laudantium sunt nesciunt eveniet tempora delectus tenetur doloribus, error accusantium iste reiciendis sed cupiditate. Error, recusandae! Reiciendis, adipisci deserunt, officia natus quisquam tenetur illum inventore quod cupiditate consectetur, at minus saepe? Quisquam neque similique sunt repudiandae vero possimus?
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#46F2E0'}}>Get Appointment</Button>
                   </Box>
                </Grid>
               
            </Grid>

        </Container>
    );
};

export default Exceptional;