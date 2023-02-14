export interface Product {
  _id:string;
  title:string;
  price:number;
  description: string;
  category: string;
  image_url:string;
  stock:number;
  cantidad?:number;
  totalPrice?:number;
};

export interface TypeUseStore {
  counterProducts:number;
  Products:Product[],
  incrementCounterProduct:(id:string)=>void;
  decrementCounterProduct:(id:string)=>void;
  removeAllProducts:(id:string)=>void;
  
  deleteOneProduct:(id:string)=>void;
  addOneProduct:(product:Product)=>void;
  deleteAllProducts:(id:string)=>void;
  reduceProductQuantity:(product:Product)=>void;
  subTotal : number;
  discount:number;
  totalPrice:number;
}