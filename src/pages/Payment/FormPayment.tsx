import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import ArrowBack from "../../components/global/arrow-back";
import { Link } from "react-router-dom";
import { useStore } from "../../stores/productStore";

import ResumenCompra from "../Checkout/ResumenCompra";

const stripePromise = loadStripe(
  "pk_test_51MNjItANEHdq6jhMvuGZgom8AY43AkKlYRRbEgOv94vpes2BZtGkq4wyeh5nZ7shYqRERTcQ2KclbBwxHs2ba4sR00IdtXhx9b"
);

export default function FormPayment() {
  const [clientSecret, setClientSecret] = useState("");
  const [nota, setNota] = useState(true);

  const store = useStore();
  const { totalPrice, Products } = store;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${import.meta.env.VITE_URL_BACKEND}/create-payment-intent `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice, Products }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance: { theme: undefined },
  };

  return (
    <main className="max-w-7xl m-auto px-8">
      <div className="flex flex-col md:flex-row gap-8 py-16">
        <section className="flex-1">
          <div className="flex items-center gap-8 mb-8">
            <Link to="/checkout">
              <button className="flex">
                <ArrowBack />
                <strong>Back</strong>
              </button>
            </Link>
            <h2 className="text-3xl font-bold text-slate-800">Pagar</h2>
          </div>
          {nota && <Nota onClick={() => setNota(false)} />}
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </section>
        <aside className="md:w-[400px]">
          <ResumenCompra store={store} />
        </aside>
      </div>
    </main>
  );
}

const Nota = ({ onClick }: any) => (
  <div className="bg-neutral-100 p-6 relative rounded mb-8">
    <button onClick={onClick} className="absolute top-2 right-2">
      <Cerrar />
    </button>
    <p className="font-bold mb-2">Nota</p>
    <p className="text-slate-600">
      Esto es una aplicación de prueba Por ello, usar los siguientes datos:
    </p>
    <ul className="text-slate-600 list-disc ml-6">
      <li>correo: aleatorio</li>
      <li>cuenta : 4242 4242 4242 4242</li>
      <li>Expiración : fecha actual o mayor</li>
      <li>CVC : 3 numeros aleatorios</li>
      <li>Pais: aleatorio</li>
    </ul>
  </div>
);

const Cerrar = () => (
  <svg
    className="fill-neutral-500 hover:fill-red-500"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
  </svg>
);
