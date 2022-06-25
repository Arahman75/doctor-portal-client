import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import ContactUs from './ContactUs/ContactUs';
import Exceptional from './Exceptioanl/Exceptional';
import Footers from './Footers/Footers';
import SmallCart from './SmallCart/SmallCart';

import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           
            <Navigation></Navigation>
            <Banner></Banner>
            <SmallCart></SmallCart>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footers></Footers>
          
        </div>
    );
};

export default Home;