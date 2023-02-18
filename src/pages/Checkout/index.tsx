import Product from "../../components/chekout/Product";
import { Product as TypeProduct } from "../../types/types";
import { useStore } from "../../stores/productStore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const store = useStore();

  console.log(store.Products.length);

  const test=()=>{
    console.log(store.totalPrice)
  }

  return (
    <>
     {/*  <button onClick={handleClickAgregarProducts}>agregar datos</button> */}
      <div className="min-w-screen min-h-screen md:h-screen bg-slate-100 py-5">
        <div className="w-full h-full  border-gray-200 px-5  text-gray-800">
          <div className="w-full h-full">
            <div>
              <h2 className="text-3xl mb-6">Productos Seleccionados</h2>

            </div>
            <div className=" md:flex items-start gap-3 h-full">
              <div className="px-3 md:w-7/12 lg:pr-10  bg-white p-4  h-4/5">
                {store.Products.map((product) => {
                  return <Product product={product} key={product._id} />;
                })}
              </div>
              <div className="px-3 md:w-5/12 my-20">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6 flex justify-between p-4 ">
                  <div className="flex flex-col">
                    <span>Subtotal</span>
                    {/* <span>Descuento</span> */}
                    <span>Envío</span>
                    <span>
                      <strong>Total</strong>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col text-end">
                    <span>{store.subTotal}</span>
                    {/* <span>s/23434</span> */}
                    <span>Gratis</span>
                    <span>
                      <strong>{store.totalPrice}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 ">
                  <Link to="/payment">
                    <button onClick={test} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                      <i className="mdi mdi-lock-outline mr-1"></i> PAGAR AHORA
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-200 hover:bg-indigo-300 focus:bg-indigo-700 text-black/50 rounded-lg px-3 py-2 font-semibold">
                      <i className="mdi mdi-lock-outline mr-1"></i> SEGUIR
                    </button>
                  </Link>

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
