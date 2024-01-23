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
	deleteAllProducts: () => void;
	reduceProductQuantity: (product: Product) => void;
	redondearPriceSubTotal:()=>void;
	calcularTotalPrice:()=>void;
	subTotal: number;
	discount: number;
	totalPrice: number;
}


export interface TypeQueryStore{
	query:string,
	setQuery:(query:string)=>void;
}