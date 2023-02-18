export interface Product {
	_id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image_url: string;
	stock: number;
	cantidad?: number;
	totalPrice?: number;
}

export interface TypeUseStore {
	Products: Product[];

	deleteOneProduct: (id: string) => void;
	addOneProduct: (product: Product) => void;
	deleteAllProducts: (id: string) => void;
	reduceProductQuantity: (product: Product) => void;
	redondearPriceSubTotal:()=>void;
	calcularTotalPrice:()=>void;
	subTotal: number;
	discount: number;
	totalPrice: number;
}
