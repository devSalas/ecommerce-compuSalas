import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

export default function index() {
  const { product } = useParams();
  const { data, isLoading } = useProduct(product);
  console.log(data);

  if (isLoading) return <h2>cargando...</h2>;

  const handleClick = () => {
    console.log("añadir al carrito");
  };

  return (
    <div>
      <section className="grid md:grid-cols-2">
        <article>
          <img src={data.image_url} alt="" />
        </article>
        <article>
          <h2>{data.title}</h2>
          <p>{data.price}</p>
          <button onClick={handleClick} className="bg-sky-500 p-4">
            añadir al carrito
          </button>
        </article>
      </section>
    </div>
  );
}
