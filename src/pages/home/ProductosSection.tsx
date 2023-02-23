import React from "react";
import Card from "../../components/home/Card";
import { useProducts } from "../../hooks/useProduct";
import { Product } from "../../types/types";
import LoadingProduct from "./LoadingProduct";

export default function ProductosSection() {
  const { data, isLoading, error } = useProducts();
  console.log(data);

  if (isLoading) return <LoadingProduct />;

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      <h2></h2>
      {data?.products?.map(
        ({ _id, title, price, category, image_url, description }: Product) => (
          <Card
            key={_id}
            id={_id}
            image={image_url}
            title={title}
            category={category}
            price={Number(price)}
            description={description}
          />
        )
      )}
    </section>
  );
}
