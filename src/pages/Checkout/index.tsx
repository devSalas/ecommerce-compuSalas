import Product from "../../components/chekout/Product";
import { Product as TypeProduct } from "../../types/types";
import { useStore } from "../../stores/productStore";
import { Link } from "react-router-dom";
import ResumenCompra from "./ResumenCompra";

const Checkout = () => {
  const store = useStore();

  return (
    <main className="max-w-7xl m-auto px-8">
      <div className="flex flex-col md:flex-row gap-8 py-16">
        <section className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Productos Seleccionados
          </h2>
          {store.Products.length === 0 && (
            <p className="text-xl text-slate-600">Carrito Vacio...</p>
          )}
          <ListaProductos store={store} />
        </section>
        <aside className="md:w-[400px]">
          <ResumenCompra store={store} />
          <BotonesPagar />
        </aside>
      </div>
    </main>
  );
};

export default Checkout;

const BotonesPagar = () => (
  <section className="py-6">
    <Link to="/payment">
      <button className="w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg py-3 font-semibold mb-4">
        PAGAR AHORA
      </button>
    </Link>
    <Link to="/">
      <button className="w-full bg-indigo-200 hover:bg-indigo-300 focus:bg-indigo-700 text-black/50 rounded-lg py-3 font-semibold">
        SEGUIR
      </button>
    </Link>
  </section>
);

const ListaProductos = ({ store }: any) => (
  <ul className="">
    {store.Products.map((product: TypeProduct) => {
      return <Product product={product} key={product._id} />;
    })}
  </ul>
);
