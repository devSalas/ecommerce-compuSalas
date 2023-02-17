import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { Product } from "../../types/types";
import { useStore } from "../../stores/productStore";

export default function index() {
  const id = useParams().id || "";

  const { data, isLoading } = useProduct(id);
  const store = useStore();

  const handleClick = () => {
    if (data) {
      store.addOneProduct(data);
    }
  };

  if (isLoading) return <h2>cargando...</h2>;
  return (
    <div>
      <section className="grid md:grid-cols-2">
        <article>
          <img src={data?.image_url} alt="" />
        </article>
        <article>
          <h2>{data?.title}</h2>
          <p>{data?.price}</p>
          <button onClick={handleClick} className="bg-sky-500 p-4">
            añadir al carrito
          </button>
        </article>
      </section>
    </div>
  );
}
