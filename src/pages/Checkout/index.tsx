import Product from "../../components/chekout/Product";
import { Product as TypeProduct } from "../../types/types";
import { useStore } from "../../stores/productStore";
const arrayPro: TypeProduct[] = [
  {
    _id: "1",
    title: "chompa",
    price: 20,
    description: "hodfdfdfd",
    category: "futbol",
    image_url: "http://placeimg.com/80/80/tech",
    stock: 3,
    cantidad: 1,
  },
  {
    _id: "2",
    title: "pantalon",
    price: 40,
    description: "pantalon crazy",
    category: "close",
    image_url: "http://placeimg.com/80/80/tech",
    stock: 3,
    cantidad: 1,
  },
];

const Checkout = () => {
  const store = useStore();

  const handleClickAgregarProducts = () => {
    arrayPro.forEach((product) => {
      store.addOneProduct(product);
    });
  };

  console.log(store.Products.length);

  return (
    <>
      <button onClick={handleClickAgregarProducts}>agregar datos</button>
      <div className="min-w-screen min-h-screen bg-gray-50 py-5">
        <div className="px-5">
          <div className="mb-2">
            <a
              href="#"
              className="focus:outline-none hover:underline text-gray-500 text-sm"
            >
              <i className="mdi mdi-arrow-left text-gray-400"></i>Back
            </a>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
              Bolsa de Compras.
            </h1>
          </div>
          <div className="mb-5 text-gray-400">
            <a
              href="#"
              className="focus:outline-none hover:underline text-gray-500"
            >
              Home
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="focus:outline-none hover:underline text-gray-500"
            >
              Cart
            </a>{" "}
            / <span className="text-gray-600">Bolsa de Compras</span>
          </div>
        </div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">
                {/* producto */}

                {store.Products.map((product) => {
                  return <Product product={product} key={product._id} />;
                })}
              </div>
              <div className="px-3 md:w-5/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6 flex justify-between p-4 ">
                  <div className="flex flex-col">
                    <span>Subtotal</span>
                    <span>Descuento</span>
                    <span>Envío</span>
                    <span>
                      <strong>Total</strong>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col text-end">
                    <span>{store.subTotal}</span>
                    <span>s/23434</span>
                    <span>Gratis</span>
                    <span>
                      <strong>s/1,650.92</strong>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                    <i className="mdi mdi-lock-outline mr-1"></i> PAGAR AHORA
                  </button>
                  <button className="block w-full max-w-xs mx-auto bg-indigo-200 hover:bg-indigo-300 focus:bg-indigo-700 text-black/50 rounded-lg px-3 py-2 font-semibold">
                    <i className="mdi mdi-lock-outline mr-1"></i> SEGUIR
                    COMPRANDO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
