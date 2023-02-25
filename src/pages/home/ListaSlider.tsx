import CardSlider from "../../components/productos/CardSlider";
import SliderProductos from "../../components/productos/SliderProductos";
import { useProducts } from "../../hooks/useProduct";
import { Product } from "../../types/types";
import LoadingProduct from "./LoadingProduct";

export default function ListaSlider() {
  const { data, isLoading } = useProducts();
  console.log(data);

  if (isLoading) return <LoadingProduct />;

  return (
    <div>
      <SliderProductos title="Productos Destacados">
        {data?.products?.map(({ _id, title, price, image_url }: Product) => (
          <CardSlider
            key={_id}
            id={_id}
            image={image_url}
            title={title}
            price={Number(price)}
          />
        ))}
      </SliderProductos>
    </div>
  );
}
