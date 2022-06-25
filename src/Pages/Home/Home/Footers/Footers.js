import { Button, Grid, Typography } from '@mui/material';
import { Box, Container, fontWeight } from '@mui/system';
import React from 'react';
import footer from '../../../../images/footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFemale} from '@fortawesome/free-solid-svg-icons';




const footerbg = {
    background: `url (${footer})`,
    marginTop: '50px',
    backgroundColor: 'rgba(248, 249, 250 ) ',
    backgroundBlendMode: ' hard-light',
    height: '450px'
}

const Footers = () => {
    return (
        <Container>
            <Box style={footerbg}>
            <Grid container spacing={2} sx={{padding: 3}}>
                <Grid item xs={12} md={3} textAlign='left'>
                <Typography variant='h6' sx={{paddingTop: 8, fontWeight: 14}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nam eius quo eligendi hic facere nostrum perferendis veritatis! Nam ad ratione quia culpa soluta asperiores .
                </Typography>
                    </Grid>
                <Grid item xs={12} md={3} textAlign='left'>
                <Typography variant='h5' sx={{fontWeight: 600 }} style={{ color: '#46F2E5' }}>
                    Services
                </Typography>
                <Typography variant='h6' sx={{paddingTop: 5, fontWeight: 14}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nam eius quo eligendi hic facere nostrum perferendis veritatis! Nam ad ratione quia culpa soluta asperiores .
                </Typography>
                    </Grid>
                <Grid item xs={12} md={3} textAlign='left'>
                <Typography variant='h5' sx={{fontWeight: 600 }} style={{ color: '#46F2E5' }}>
                  Oral Health
                </Typography>
                <Typography variant='h6' sx={{paddingTop: 5, fontWeight: 14}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nam eius quo eligendi hic facere nostrum perferendis veritatis! Nam ad ratione quia culpa soluta asperiores .
                </Typography>
                    </Grid>
                <Grid item xs={12} md={3} textAlign='left' >
                <Typography variant='h5' sx={{fontWeight: 600 }} style={{ color: '#46F2E5' }}>
                   Our Address
                </Typography>
                <Typography variant='h6' sx={{paddingTop: 6, fontWeight: 14}}>
                  New York-101011 Hudson Yards
                </Typography>
                <Grid style={{ display:'flex' , margin:'5'}}>
                    <Typography  sx={{m:3, fontSize:30, color:'#46F2E5'}}>
                        <FontAwesomeIcon icon={faClock} />
                   </Typography>
                    <Typography sx={{m:3, fontSize:30, color:'#46F2E5'}}>
                    <FontAwesomeIcon icon={faCoffee}  />
                    </Typography>
                    <Typography sx={{m:3, fontSize:30, color:'#46F2E5'}}>
                    <FontAwesomeIcon icon={faFemale} />
                    </Typography>
                </Grid>
                <Box sx={{paddingTop: 3}}>
                    <Typography variant='h6' style={{fontWeight:200}}>
                        Call Now
                    </Typography>
                    <Button variant="contained"  style={{ backgroundColor: '#46F2E5' }}>+098765434</Button>
                   </Box>
              
                
                    </Grid>
                    </Grid>
                   <Box>
                   <Typography variant='h6' sx={{fontWeight: 14}}>
                Copyright 2022 All Rights Reserved
                </Typography>
                   </Box>

            </Box>
        </Container>
        
    );
};

export default Footers;