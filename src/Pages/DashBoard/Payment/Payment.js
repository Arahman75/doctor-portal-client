import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51LG5JfFRfYSRvbtBvtgOafVjCjVoqSZChwxbQ7SoP0bO5GbfPtNPqwxwtRZztgzJfw0rgt10Pir1OdEEcJ0nJe6w00BMaHRdDm');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h2>Pay: ${appointment.price}</h2>

           { appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm 
                appointment={appointment}
                ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;

/* 1.Install stripe and stripe-react
2.Set Publishable key
3.Elements
4.CheckoutForm
--------
5.Create payment method
6.server create payment Intent api
7.load client secret
8.confirm card payment
9.handle user error


*/