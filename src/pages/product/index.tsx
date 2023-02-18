import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useStore } from "../../stores/productStore";
import Image from "./Image";

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
    <div className="max-w-7xl m-auto">
      <section className="grid md:grid-cols-2 mt-8">
        <article className="border flex justify-center p-8">
          <Image src={data?.image_url} />
        </article>
        <article className="p-8 flex flex-col gap-4">
          <h2 className="text-2xl">{data?.title}</h2>
          <p className="text-xl text-red-500 font-bold">S/ {data?.price}</p>
          <button
            onClick={handleClick}
            className="bg-sky-500 text-white px-4 py-2 rounded shadow hover:bg-sky-600 w-60"
          >
            añadir al carrito
          </button>
        </article>
      </section>
    </div>
  );
}
