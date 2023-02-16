import React from "react";
import Card from "../../components/home/Card";
import { useProducts } from "../../hooks/useProduct";

export default function ProductosSection() {
  const { data, isLoading, error } = useProducts();

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.products?.map(
        ({ _id, title, price, category, image_url, description }) => (
          <Card
            id={_id}
            image={image_url}
            title={title}
            category={category}
            price={price}
            description={description}
          />
        )
      )}
    </section>
  );
}
