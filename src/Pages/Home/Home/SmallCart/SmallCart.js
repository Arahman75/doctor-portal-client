import { Grid, Paper, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container } from '@mui/system';
import React from 'react';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';


const SmallCart = () => {
    return (
        <Container >
            <Grid container spacing={2} marginTop={-15} paddingBottom={5}>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} style={{ background: '#0FE7EC' }}>
                        <Box style={{ display: 'flex', margin: '5' }}>
                            <Typography style={{ color: '#FFFF' }} sx={{ m: 3, fontSize: 40, py: 3 }}>
                                <FontAwesomeIcon icon={faClock} />
                            </Typography>
                            <Box sx={{ py: 3, textAlign: 'left' }}>
                                <Typography variant='h5' sx={{ fontWeight: 400 }} style={{ color: '#FFFF' }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 14 }} style={{ color: '#FFFF' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, possimus. Tenetur obcaecati labore ut deserunt!
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} style={{ background: '#282D2D' }}>
                        <Box style={{ display: 'flex', margin: '5' }}>
                            <Typography style={{ color: '#FFFF' }} sx={{ m: 3, fontSize: 40, py: 3 }}>
                                <FontAwesomeIcon icon={faMapLocation} />
                            </Typography>
                            <Box sx={{ py: 3, pt:6, textAlign: 'left' }}>
                                <Typography variant='h5' sx={{ fontWeight: 400 }} style={{ color: '#FFFF' }}>
                                Visit Our Location
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 14 }} style={{ color: '#FFFF' }}>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} style={{ background: '#0FE7EC' }}>
                        <Box style={{ display: 'flex', margin: '5' }}>
                            <Typography style={{ color: '#FFFF' }} sx={{ m: 3, fontSize: 40, py: 3 }}>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </Typography>
                            <Box sx={{ py: 3, pt:6, textAlign: 'left' }}>
                                <Typography variant='h5' sx={{ fontWeight: 400 }} style={{ color: '#FFFF' }}>
                                Connect Us Now
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: 14 }} style={{ color: '#FFFF' }}>
                                   +98765432256700 
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <Typography>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </Typography>
                        <Typography variant='h4'>
                            Visit Our Location
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <Typography>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </Typography>
                        <Typography variant='h4'>
                            Connect Us Now
                        </Typography>
                    </Paper>

                </Grid> */}
                {/* <Grid item xs={12} md={4}>
                    <Typography variant='h4'>
                        This is banner
                    </Typography>
                </Grid>
                 <Grid item xs={12} md={4}>
                    <Typography variant='h4'>
                        This is banner
                    </Typography>
                </Grid> */}
            </Grid>
        </Container>


    );
};

export default SmallCart;