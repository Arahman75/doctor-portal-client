import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Box, padding } from '@mui/system';
import React from 'react';

const Testimonial = ({ testimonial }) => {
  const { description, img, name, center } = testimonial;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Paper elevation={3} sx={{ py: 6, px:5, mt:4}}>
<Typography variant="body2" color="text.secondary" style={{textAlign:'left', marginBottom:'30px'}}>
          {description}
        </Typography>

       <Box style={{display:'flex'}}>
      <Box >
      <CardMedia
          component="img"
          style={{ width: 'auto', height: '50px', margin: '0 auto' }}
          image={img}
          alt="green iguana"
        />
      </Box>
      <Box style={{textAlign: 'left', padding:'0 20px'}}>
      <Typography variant="h6" component="div" fontSize={14} color="primary.main">
          {name}
        </Typography>
        <Typography variant="h6" component="div" fontSize={14}>
          {center}
        </Typography>
      </Box>
       </Box>
      </Paper>

    </Grid>

  );
};

export default Testimonial;