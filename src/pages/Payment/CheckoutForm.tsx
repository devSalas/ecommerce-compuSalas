import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Confetti from '../../components/confetti.js'
import { Navigate } from "react-router-dom";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
     /*  switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      } */
    });
  }, [stripe]);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    
    console.log("entro1")
    const { paymentIntent,error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${location.origin}`,
      },
      redirect:'if_required'
    });
    

    console.log({paymentIntent,error})

    const a =()=><Navigate to="/" replace={true}/>

    if(error!==undefined){
      if (error.type === "card_error" || error.type === "validation_error") {
        if(error.message) setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }

    }else{
      if(paymentIntent.status ==="succeeded"){
        /* Confetti() */
        console.log("succed")
       return  a()
      }
    }

    setIsLoading(false);
    
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
   /*  <div className="bg-white col-span-2 h-full"> */
      <form id="payment-form" onSubmit={handleSubmit} className="max-w-2xl h-full m-auto my-4 ">
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="w-full bg-blue-700 mt-4 py-3 text-white font-semibold text-xl rounded-md">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
   /*  </div> */
  );
}