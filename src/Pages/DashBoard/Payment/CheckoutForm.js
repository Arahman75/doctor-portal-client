
import React, { useEffect } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { async } from '@firebase/util';

const CheckoutForm = ({appointment}) => {
    const {price} = appointment;
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    // useEffect(()=>{
    //     fetch('http://localhost:5000/create-payment-intent',{
    //         method: 'POST',
    //         headers:{
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify({price})
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // },[price])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
       
const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card,
});
if(error){
    setError(error.message);
}
else{
    setError('');
    console.log(paymentMethod);
}
       
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
            </form>
            {
                error && <p style={{color:'red '}}>{error}</p>
            }
        </div>
    );
};

export default CheckoutForm;