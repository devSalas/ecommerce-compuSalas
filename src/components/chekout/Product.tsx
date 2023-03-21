import { useStore } from "../../stores/productStore";
import { Product as TypeProduct, TypeUseStore } from "../../types/types";
import { PropsProductCheckout } from "./ProductCheckout.models";

const Product = ({ product }: PropsProductCheckout) => {
  const store = useStore();

  const handleClickAumentar = () => store.addOneProduct(product);
  const handleClickDisminuir = () => store.reduceProductQuantity(product);
  const handleClickDeleteOneProduct = () => store.deleteOneProduct(product._id);

  return (
    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
      <div className="w-full flex items-center">
        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
          <img src={product.image_url} alt="" />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-semibold uppercase text-gray-600">
            {product.title}
          </h6>
          <p className="text-gray-400">x 1</p>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-between items-center mx-3 border-2 border-black/40 rounded-md  ">
            <button
              onClick={handleClickDisminuir}
              className="font-semibold text-xl px-2"
            >
              -
            </button>
            <span className="px-2 text-sm ">{product.cantidad}</span>

            <button
              onClick={handleClickAumentar}
              className="font-semibold text-xl px-2"
            >
              +
            </button>
          </div>
          <div>
            <span className="font-semibold text-gray-600 text-xl">
              {product.totalPrice}
            </span>
          </div>
          <div onClick={handleClickDeleteOneProduct}>X</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
