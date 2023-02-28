import React from "react";
import { useProducts } from "../../hooks/useProduct";
import Anuncio from "../home/Anuncios/Anuncio";
import AnuncioMediano from "../home/Anuncios/AnuncioMediano";

export default function Inicio() {
  const { data, isLoading } = useProducts();

  if (isLoading)
    return <div className="h-96 bg-neutral-200 animate-pulse"></div>;

  const producto1 = data.products[1];
  const producto2 = data.products[2];
  const producto3 = data.products[3];

  return (
    <section className="grid lg:grid-cols-3 gap-4">
      <article className="lg:col-span-2">
        <AnuncioMediano
          title={producto1.title}
          image={producto1.image_url}
          category={producto1.category}
          description={producto1.description}
          descuento="SUMER SALE 70%"
          id={producto1._id}
          price={producto1.price}
        />
      </article>
      <article className="flex lg:flex-col gap-4">
        <Anuncio
          title={producto2.title}
          image={producto2.image_url}
          category={producto2.category}
          description={producto2.description}
          id={producto2._id}
          price={producto2.price}
        />
        <Anuncio
          title={producto3.title}
          image={producto3.image_url}
          category={producto3.category}
          description={producto3.description}
          id={producto3._id}
          price={producto3.price}
        />
      </article>
    </section>
  );
}
