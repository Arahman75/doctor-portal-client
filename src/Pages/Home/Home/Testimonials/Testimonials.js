import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import people1 from '../../../../images/people1.png';
import people2 from '../../../../images/people2.png';
import people3 from '../../../../images/people3.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonials =[
    {id:1,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolore, totam nisi maiores natus quam quasi voluptatibus veritatis ex aspernatur mollitia laboriosam obcaecati dolores provident velit praesentium in quidem repellendus laudantium consequuntur adipisci soluta. Alias similique cum cupiditate, sed nesciunt quasi facilis nobis praesentium iure omnis deleniti dolore quam doloribus.',
        img:people1,
        name:'Winson Herry',
        center: 'Calipornia'
    },
    {id:2,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolore, totam nisi maiores natus quam quasi voluptatibus veritatis ex aspernatur mollitia laboriosam obcaecati dolores provident velit praesentium in quidem repellendus laudantium consequuntur adipisci soluta. Alias similique cum cupiditate, sed nesciunt quasi facilis nobis praesentium iure omnis deleniti dolore quam doloribus.',
        img:people2,
        name:'Winson Herry',
        center: 'Calipornia'
    },
    {id: 3,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolore, totam nisi maiores natus quam quasi voluptatibus veritatis ex aspernatur mollitia laboriosam obcaecati dolores provident velit praesentium in quidem repellendus laudantium consequuntur adipisci soluta. Alias similique cum cupiditate, sed nesciunt quasi facilis nobis praesentium iure omnis deleniti dolore quam doloribus.',
        img:people3,
        name:'Winson Herry',
        center: 'Calipornia'
    }
]

const Testimonials = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography textAlign='left' fontWeight={500} variant="h6" component="div" mt={8} color="success.main">
                    TESTIMONIAL
                </Typography>
                <Typography textAlign='left' fontWeight={600} variant="h4" my={2} component="div">
                    What's Our Patients<br />
                    Says
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {
                      testimonials.map(testimonial => <Testimonial
                      key={testimonial.id}
                      testimonial={testimonial}
                      ></Testimonial>)
                  }
                 </Grid> 
            </Container>
        </Box>

    );
};

export default Testimonials;