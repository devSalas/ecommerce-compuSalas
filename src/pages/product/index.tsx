import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useStore } from "../../stores/productStore";
import ListaSlider from "../home/ListaSlider";
import Image from "./Image";
import LoadingProduct from "./LoadingProduct";

export default function index() {
  const [message, setMessage] = useState(false);
  const id = useParams().id || "";

  const { data, isLoading } = useProduct(id);
  const store = useStore();

  const handleClick = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 1000);
    if (data) {
      store.addOneProduct(data);
    }
  };

  if (isLoading) return <LoadingProduct />;
  return (
    <>
      <div className="max-w-7xl m-auto py-8">
        <section className="grid md:grid-cols-2">
          <article className="flex justify-center h-96">
            <Image src={data?.image_url} />
          </article>
          <article className="p-8 flex flex-col gap-4">
            <h2 className="text-2xl">{data?.title}</h2>
            <h2 className="">{data?.description}</h2>
            <p className="text-xl text-red-500 font-bold">S/ {data?.price}</p>
            <button
              onClick={handleClick}
              className="bg-sky-500 text-white px-4 py-2 rounded shadow hover:bg-sky-600 w-60"
            >
              añadir al carrito
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              earum non repellendus nemo, rem culpa mollitia rerum molestiae
              laborum error? Accusantium minima officiis aliquid ex et eum fugit
              magni rem?
            </p>
          </article>
        </section>
        <article className="mt-16">
          <ListaSlider />
        </article>
      </div>
      {message ? (
        <div className="fixed bottom-10 w-full flex justify-center">
          <div className="bg-sky-500 rounded-2xl">
            <p className="py-2 px-4 text-white">
              Producto añadido al carrito de compras
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
