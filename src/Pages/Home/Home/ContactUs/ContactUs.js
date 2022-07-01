import { Button,  TextareaAutosize, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import bg from '../../../../images/appointment.png';
import TextField from '@mui/material/TextField';



// const contactBg ={
//     background: `url (${contact})`,
//     marginTop: '175px'
// }
const appointmentBanner = {
    background: `url(${bg})`,
    // backgroundColor: 'rgba(255, 51, 212) ',
    // backgroundBlendMode: ' hard-light',
    marginTop: '150px',
    height: '500px'
}
const ContactUs = () => {

    return (
        <Container>
            <Box style={appointmentBanner} >


                {/* <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent: 'flex-start',textAlign:'left',alignItems: 'center'}}> */}
                <Box >
                    <Typography variant='h6' sx={{ paddingTop: 6 }} style={{ color: '#46F2E5' }}>
                        Contact Us
                    </Typography>
                    <Typography variant='h4' sx={{ mb: 4 }} style={{ color: 'white' }}>
                        Always Connect With Us
                    </Typography>

                    <form >
                        <TextField
                            sx={{ width: '50%', m: 1, background: 'white' }}
                            id="outlined-size-small"
                            defaultValue="Email Address"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1, background: 'white' }}
                            id="outlined-size-small"
                            defaultValue="Subject"
                            size="small"
                        />
<br/>
                        <TextareaAutosize
                            sx={{m:1, background: 'white' }}
                            minRows={3}
                            defaultValue="Your Message"
                            placeholder="Minimum 3 rows"
                            style={{ width: 570, height: 100 }}
                        />



                    </form>


                   <Box sx={{paddingTop: 3}}>
                   <Button variant="contained"  style={{ backgroundColor: '#46F2E5' }}>Learn More</Button>
                   </Box>
                </Box>

                {/* </Grid> */}
            </Box>
        </Container>

        // <Container>
        // <Box style={contactBg} sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={2}>

        //         <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent: 'flex-start',textAlign:'left',alignItems: 'center'}}>
        //            <Box>
        //            <Typography variant='h6' sx={{mb:4}} style={{color:'#46F2E5'}}>
        //            Contact Us
        //             </Typography>
        //             <Typography variant='h4' >
        //             Always Connect With Us
        //             </Typography>

        //             <Button variant="contained" style={{backgroundColor: '#F24692'}}>Learn More</Button>
        //            </Box>
        //         </Grid>

        //     </Grid>
        // </Box>
        // </Container>

    );
};

export default ContactUs;