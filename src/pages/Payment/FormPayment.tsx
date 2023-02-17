import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import ArrowBack from "../../components/global/arrow-back";
import { Link } from "react-router-dom";


const stripePromise = loadStripe("pk_test_51MNjItANEHdq6jhMvuGZgom8AY43AkKlYRRbEgOv94vpes2BZtGkq4wyeh5nZ7shYqRERTcQ2KclbBwxHs2ba4sR00IdtXhx9b");

const priceTotalrounded=4000
const products=[{name:"cuaderno"},{name:"letra"}]

export default function FormPayment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({products,priceTotalrounded}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className=" bg-slate-100 md:h-screen ">
      <div className="p-3 md:grid md:grid-cols-3 md:gap-3 max-w-6xl m-auto h-4/5">
        <div className="bg-white mb-3 col-span-2 h-full p-3">
          <div className="max-w-2xl m-auto">
            <Link to="/checkout">
             <span className="flex"> <ArrowBack/><strong>Back</strong></span>
            </Link>
          </div> 
          {clientSecret && (
            <Elements options={options} stripe={stripePromise} >
              <CheckoutForm />
            </Elements>
          )}
        </div>
        <div className=" max-h-80 col-span-1 ">
          <div className="bg-white p-3 mb-16 ">
            <h3>Resumen de compra</h3>
            <hr/>
            <div className="flex justify-between py-3">
              <div>
                <p>Subtotal</p>
                <p>Descuento</p>
                <p><strong>Total</strong></p>
              </div>
              <div>
              <p>s/400</p>
              <p>s/100</p>
              <p>s/300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}