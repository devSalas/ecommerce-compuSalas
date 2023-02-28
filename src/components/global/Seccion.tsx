import React from "react";
import { useProducts } from "../../hooks/useProduct";
import Anuncio from "../home/Anuncios/Anuncio";
import AnuncioGrande from "../home/Anuncios/AnuncioGrande";

export default function Seccion() {
  const { data, isLoading } = useProducts();

  if (isLoading)
    return <div className="h-96 bg-neutral-200 animate-pulse"></div>;

  const producto1 = data.products[4];
  const producto2 = data.products[5];
  const producto3 = data.products[6];

  return (
    <section className="grid lg:grid-cols-3 gap-4 mt-4">
      <article className="lg:col-span-2">
        <AnuncioGrande
          id={producto1._id}
          title={producto1.title}
          image={producto1.image_url}
          category={producto1.category}
          description={producto1.description}
          descuento="10% Desc."
          price={producto1.price}
        />
      </article>
      <article className="flex lg:flex-col gap-4">
        <Anuncio
          id={producto2._id}
          title={producto2.title}
          image={producto2.image_url}
          category={producto2.category}
          description={producto2.description}
          price={producto2.price}
        />
        <Anuncio
          id={producto3._id}
          title={producto3.title}
          image={producto3.image_url}
          category={producto3.category}
          description={producto3.description}
          price={producto3.price}
        />
      </article>
    </section>
  );
}
