
import React, { useEffect } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { async } from '@firebase/util';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({appointment}) => {
    const {price, patientName, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();
    // const {user} = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

//problem code
    // useEffect(()=>{
    //     fetch('http://localhost:5000/create-payment-intent',{
    //         method: 'POST',
    //         headers:{
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify({price})
    //     })
    //     .then(res => res.json())
    //     .then(data => setClientSecret(data.clientSecret));
    // },[price]);


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
     setProcessing(true); 
const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card,
});
if(error){
    setError(error.message);
   setSuccess('');
}
else{
    setError('');
    console.log(paymentMethod);
}
//maybe problem do the code
//payment intent
// const {paymentIntent, intentError} = await stripe.confirmCardPayment(
//     clientSecret,
//     {
//       payment_method: {
//         card: card,
//         billing_details: {
//           name: patientName,
//           email: user.email
//         },
//       },
//     },
//   );
//   if(intentError){
//     setError(intentError.message);
//     setSuccess('');
//   }
//   else{
//     setError('');
//     setSuccess('Your payment intent successfully');
//     console.log(paymentIntent);
//  setProcessing(false);
// save to database
// const payment ={
// amount :paymentIntent.amount,
// created: paymentIntent.created,
// last4: paymentMethod.card.last4,
// transaction : paymentIntent.client_secret.slice(_secret)[0]
// }
//     const url=`http://localhost:5000/appointments/${_id}`;
// fetch(url,{
//     method:'PUT',
//     headers:{
//         'content-type' : 'application/json'
//     },
//     body: JSON.stringify(payment)
// })
// .then(res => res.json())
// .then(data => console.log(data))



   //}
       
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>
               {/* { processing? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe}>
                    Pay ${price || success}
                </button>} */}
            </form>
            {
                error && <p style={{color:'red '}}>{error}</p>
            }
            {
                success && <p style={{color:'green '}}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;