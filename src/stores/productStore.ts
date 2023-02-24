import { create } from "zustand";
import { Product } from "../types/types";
import { TypeUseStore } from "../types/types";

export const useStore = create<TypeUseStore>((set) => ({
	Products: [],

	deleteOneProduct: (id: string) =>
		set((state) => ({
			Products: state.Products.filter((product: Product) => {
				if(product.totalPrice){
					if (product._id === id) state.subTotal -= product.totalPrice;
				}
				return product._id !== id;
			}),
		})),

	addOneProduct: (newProduct: Product) =>
		set((state) => {
			let copyProducts = [...state.Products];
			let isAddedProduct: Product | undefined = copyProducts.find(
				(product) => product._id === newProduct._id,
			);

			if (isAddedProduct === undefined) {
				newProduct.cantidad = 1;
				newProduct.totalPrice = newProduct.price;
				newProduct.totalPrice = Number(newProduct.totalPrice);

				copyProducts.push(newProduct);
				state.subTotal += newProduct.price;
				state.redondearPriceSubTotal()
				state.calcularTotalPrice()
				return { Products: copyProducts };
			}

			let incrementProduct = copyProducts.map((product) => {
				if (product._id === newProduct._id) {

					if(product.cantidad=== undefined || product.totalPrice === undefined) return product;
				
					product.cantidad += 1;

					product.totalPrice +=newProduct.price;
					product.totalPrice = Number(newProduct.totalPrice?.toFixed(2));
					/* agregar precio del producto al estado subtotal, luego asigno al subtotal, el subtotal pero redondeado */
					state.subTotal += newProduct.price;
					state.redondearPriceSubTotal()
					state.calcularTotalPrice()
				}
				return product;
			});
			return { Products: incrementProduct };
		}),
	reduceProductQuantity: (newProduct: Product) =>
		set((state) => {
			let decrementProduct = state.Products.map((product) => {
				if (product._id === newProduct._id) {

					if(product.cantidad=== undefined || product.totalPrice === undefined) return product;

					if (product.cantidad > 1) {
						product.cantidad -= 1;
						product.totalPrice -= product.price;
						product.totalPrice = Number(newProduct.totalPrice?.toFixed(2));
						state.subTotal -= newProduct.price;
						state.redondearPriceSubTotal()
						state.calcularTotalPrice()
					}
				}
				return product;
			});
			return { Products: decrementProduct };
		}),
	deleteAllProducts: () => set(() => ({ Products: [],subTotal:0,totalPrice:0 })),

	redondearPriceSubTotal: () => set((state) =>({subTotal:Number(state.subTotal.toFixed(2))})),
	
	calcularTotalPrice:()=>set((state) =>({totalPrice:state.subTotal})),

	subTotal: 0,
	discount: 20,
	totalPrice: 0,
}));
