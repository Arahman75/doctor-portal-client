import React from 'react';
import Footer from '../../Home/AppointmentBanner/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
           <Navigation></Navigation>
           <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
           <AvailableAppointment date={date}></AvailableAppointment>
          <Footer></Footer>
           
        </div>
    );
};

export default Appointment;